// threads.mjs — the composable-river layer.
//
// A *thread* (path) is a manifest under src/content/manifests/paths/ that
// orders existing gestures into one walk. This module loads the threads and
// computes the EDGES between them: where two threads cross, and why.
//
// An edge is real, not decorative. Two threads cross when they share a gesture
// (a true rhizome node), or when their gestures share a significant tag
// (image/place/person/motif/concept) or a chapter. The "via" label names the
// crossing point so the reader can see what the two threads have in common.

import fs from 'node:fs'
import path from 'node:path'
import yaml from 'js-yaml'

const PATHS_DIR = path.resolve('src/content/manifests/paths')
const GESTURES_DIR = path.resolve('src/content/gestures')

// Tag families that count as a meaningful crossing. voice/, emotion/,
// status/, practice/, kind/ etc. are excluded as too generic. A few concept
// tags are ubiquitous and would over-connect every thread — deny them.
const SIGNIFICANT = ['image/', 'place/', 'person/', 'motif/', 'concept/']
const DENY = new Set(['concept/commons', 'concept/community', 'concept/practice'])

// --- gesture frontmatter (tags + plateau), cached -------------------------

let _index = null
function gestureIndex() {
  if (_index) return _index
  _index = new Map()
  for (const f of fs.readdirSync(GESTURES_DIR)) {
    if (!f.startsWith('G-') || !f.endsWith('.md')) continue
    const id = f.split('-').slice(0, 3).join('-')
    _index.set(id, path.join(GESTURES_DIR, f))
  }
  return _index
}

const _meta = new Map()
function gestureMeta(id) {
  if (_meta.has(id)) return _meta.get(id)
  const fp = gestureIndex().get(id)
  let meta = { plateau: null, tags: [] }
  if (fp) {
    const text = fs.readFileSync(fp, 'utf8')
    const end = text.indexOf('\n---\n', 4)
    const fm = yaml.load(text.slice(4, end)) || {}
    meta = {
      plateau: typeof fm.plateau === 'object' ? fm.plateau?.id : fm.plateau,
      tags: Array.isArray(fm.tags) ? fm.tags : [],
    }
  }
  _meta.set(id, meta)
  return meta
}

// --- threads ---------------------------------------------------------------

export function loadThreads() {
  if (!fs.existsSync(PATHS_DIR)) return []
  return fs
    .readdirSync(PATHS_DIR)
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const text = fs.readFileSync(path.join(PATHS_DIR, f), 'utf8')
      const end = text.indexOf('\n---\n', 4)
      const fm = yaml.load(text.slice(4, end)) || {}
      return {
        ...fm,
        slug: f.replace(/\.md$/, ''),
        gestures: Array.isArray(fm.gestures) ? fm.gestures : [],
      }
    })
}

function significantTags(ids) {
  const s = new Set()
  for (const id of ids) {
    for (const t of gestureMeta(id).tags) {
      if (DENY.has(t)) continue
      if (SIGNIFICANT.some(p => t.startsWith(p))) s.add(t)
    }
  }
  return s
}

function plateaus(ids) {
  const s = new Set()
  for (const id of ids) {
    const p = gestureMeta(id).plateau
    if (p) s.add(p)
  }
  return s
}

function humanizeTag(t) {
  const [prefix, ...rest] = t.split('/')
  let words = rest.join('/').split('-')
  // Drop a trailing 2-letter state code from place tags (norfolk-va → Norfolk).
  if (prefix === 'place' && words.length > 1 && words[words.length - 1].length === 2) {
    words = words.slice(0, -1)
  }
  let v = words.join(' ')
  if (prefix === 'place' || prefix === 'person') {
    v = v.replace(/\b\w/g, c => c.toUpperCase())
  }
  return v
}

function chapterLabel(plateau) {
  const m = /^P-(\d+)([a-z]?)$/i.exec(plateau || '')
  if (m) return `Chapter ${m[1]}${m[2] || ''}`
  if (plateau === 'P-PR') return 'the Prologue'
  if (plateau === 'P-EP') return 'the Epilogue'
  return plateau
}

// Choose the most evocative crossing label, in priority order.
function pickVia(sharedTags, sharedPlateaus) {
  for (const p of SIGNIFICANT) {
    const hit = [...sharedTags].find(t => t.startsWith(p))
    if (hit) return humanizeTag(hit)
  }
  if (sharedPlateaus.size) return chapterLabel([...sharedPlateaus][0])
  return null
}

// slug -> [{ slug, h1, title, via, strong }]
export function threadCrossings() {
  const threads = loadThreads()
  const map = {}
  for (const a of threads) {
    map[a.slug] = []
    const aTags = significantTags(a.gestures)
    const aPlat = plateaus(a.gestures)
    const aIds = new Set(a.gestures)
    for (const b of threads) {
      if (b.slug === a.slug) continue
      const bTags = significantTags(b.gestures)
      const bPlat = plateaus(b.gestures)
      const sharedGest = b.gestures.filter(id => aIds.has(id))
      const sharedTags = new Set([...aTags].filter(t => bTags.has(t)))
      const sharedPlat = new Set([...aPlat].filter(p => bPlat.has(p)))
      if (!sharedGest.length && !sharedTags.size && !sharedPlat.size) continue
      let via
      if (sharedGest.length) {
        // Name the shared gesture (the rhizome node) via its member note.
        const note =
          (b.members || []).find(m => m.id === sharedGest[0])?.note ||
          (a.members || []).find(m => m.id === sharedGest[0])?.note
        via = note || 'a shared gesture'
      } else {
        via = pickVia(sharedTags, sharedPlat)
      }
      if (via) {
        map[a.slug].push({
          slug: b.slug,
          h1: b.h1 || b.title,
          title: b.title,
          via,
          strong: sharedGest.length > 0,
        })
      }
    }
    map[a.slug].sort((x, y) => Number(y.strong) - Number(x.strong))
  }
  return map
}

// gestureId -> [{ slug, h1 }] for gestures that sit on more than one thread
// (the true rhizome nodes — used for inline "also on" markers).
export function sharedGestureThreads() {
  const threads = loadThreads()
  const m = {}
  for (const t of threads) {
    for (const id of t.gestures) {
      ;(m[id] ||= []).push({ slug: t.slug, h1: t.h1 || t.title })
    }
  }
  for (const id of Object.keys(m)) {
    if (m[id].length < 2) delete m[id]
  }
  return m
}

// --- the trail map ---------------------------------------------------------
//
// threadNetwork() bakes a force-directed layout at build time (no client
// framework, no runtime layout). The binding force is the *commons*: two
// threads attract in proportion to the gestures they hold in common (their
// shared-gesture crossings), while all threads repel. Left to settle, they
// gather into clusters — the basecamps and temples of the landscape. Position
// means relationship, not reading order. The watershed terrain (topo.mjs) is
// then grown from this layout's density, and trails route ergonomically over
// it. See src/pages/book/atlas.astro.

// A small deterministic RNG so the layout is identical every build.
function lcg(seed) {
  let a = seed >>> 0
  return () => {
    a = (Math.imul(a, 1664525) + 1013904223) >>> 0
    return a / 4294967296
  }
}

export function threadNetwork(opts = {}) {
  const vertical = opts.orientation === 'portrait'
  const W = opts.width || (vertical ? 660 : 1180)
  const H = opts.height || (vertical ? 880 : 660)
  const margin = 48

  const threads = loadThreads()

  // --- base node data ---
  const nodes = threads.map(t => {
    const axis = t.kind === 'spine' ? t.axis || 'theme' : 'curated'
    return {
      slug: t.slug,
      label: t.h1 || t.title,
      count: t.gestures.length,
      axis,
      r: 2.6 + Math.sqrt(t.gestures.length) * 0.9,
      _ids: new Set(t.gestures),
      _sig: significantTags(t.gestures),
    }
  })
  const idxOf = Object.fromEntries(nodes.map((n, i) => [n.slug, i]))
  const bySlug = Object.fromEntries(nodes.map(n => [n.slug, n]))

  // --- edges (crossings) ---
  const edges = []
  const neighbors = Object.fromEntries(nodes.map(n => [n.slug, []]))
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i]
      const b = nodes[j]
      let shared = 0
      for (const id of b._ids) if (a._ids.has(id)) shared++
      let type
      let weight
      let via
      if (shared > 0) {
        type = 'gesture'
        weight = shared
        via = `${shared} shared gesture${shared > 1 ? 's' : ''}`
      } else {
        const st = [...a._sig].filter(t => b._sig.has(t))
        if (!st.length) continue
        type = 'tag'
        weight = st.length
        via = humanizeTag(st[0])
      }
      edges.push({ a: a.slug, b: b.slug, type, weight, via })
      // degree counts only true crossings (a shared gesture), which is what
      // the trail map draws — tag adjacency would connect nearly everything.
      if (type === 'gesture') {
        neighbors[a.slug].push(b.slug)
        neighbors[b.slug].push(a.slug)
      }
    }
  }
  for (const n of nodes) n.degree = neighbors[n.slug].length

  // --- force-directed layout (ForceAtlas2 / LinLog flavour) -----------------
  // The commons is the force: linear attraction along shared-gesture springs
  // (so tightly-shared threads contract into a clump), degree-weighted 1/d
  // repulsion (so hubs push apart and clusters separate), light gravity to
  // hold it together. This reveals communities — the basecamps and temples —
  // rather than the even scatter a classic spring layout gives. Run in a free
  // coordinate space; the result is fitted to the frame afterwards.
  const springs = edges.filter(e => e.type === 'gesture')
  const n = nodes.length
  const rand = lcg(opts.seed || 0x50574552) // "PWER"
  const px = new Float64Array(n)
  const py = new Float64Array(n)
  for (let i = 0; i < n; i++) {
    px[i] = (rand() - 0.5) * 800
    py[i] = (rand() - 0.5) * 800
  }
  const deg = nodes.map(nd => nd.degree + 1)
  const repDeg = opts.repDeg ?? false
  const weightPow = opts.weightPow ?? 2.6 // strong bonds (many shared gestures) dominate
  const kRep = opts.kRep ?? 120
  const kAtt = opts.kAtt ?? 0.05
  const grav = opts.gravity ?? 0.3
  const dvx = new Float64Array(n)
  const dvy = new Float64Array(n)
  const iters = opts.iters || 700
  let temp = 30
  const cool = Math.pow(0.04, 1 / iters)
  for (let it = 0; it < iters; it++) {
    dvx.fill(0)
    dvy.fill(0)
    // degree-weighted repulsion
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        let dx = px[i] - px[j]
        let dy = py[i] - py[j]
        let d2 = dx * dx + dy * dy
        if (d2 < 0.01) {
          dx = rand() - 0.5
          dy = rand() - 0.5
          d2 = dx * dx + dy * dy + 0.01
        }
        const d = Math.sqrt(d2)
        const f = (kRep * (repDeg ? deg[i] * deg[j] : 1)) / d
        const ux = (dx / d) * f
        const uy = (dy / d) * f
        dvx[i] += ux
        dvy[i] += uy
        dvx[j] -= ux
        dvy[j] -= uy
      }
    }
    // linear attraction along the commons, weighted by how much is shared
    for (const e of springs) {
      const ia = idxOf[e.a]
      const ib = idxOf[e.b]
      const dx = px[ia] - px[ib]
      const dy = py[ia] - py[ib]
      const w = Math.pow(e.weight, weightPow)
      const f = kAtt * w
      dvx[ia] -= dx * f
      dvy[ia] -= dy * f
      dvx[ib] += dx * f
      dvy[ib] += dy * f
    }
    // gravity toward the centroid so the whole range holds together
    for (let i = 0; i < n; i++) {
      const d = Math.hypot(px[i], py[i]) || 1
      dvx[i] -= (px[i] / d) * grav * deg[i]
      dvy[i] -= (py[i] / d) * grav * deg[i]
    }
    // displace, capped by temperature
    for (let i = 0; i < n; i++) {
      const d = Math.hypot(dvx[i], dvy[i]) || 1
      const step = Math.min(d, temp)
      px[i] += (dvx[i] / d) * step
      py[i] += (dvy[i] / d) * step
    }
    temp *= cool
  }

  // fit the settled cloud to the frame (uniform scale, centred)
  let minx = Infinity
  let miny = Infinity
  let maxx = -Infinity
  let maxy = -Infinity
  for (let i = 0; i < n; i++) {
    if (px[i] < minx) minx = px[i]
    if (px[i] > maxx) maxx = px[i]
    if (py[i] < miny) miny = py[i]
    if (py[i] > maxy) maxy = py[i]
  }
  const spanx = Math.max(1, maxx - minx)
  const spany = Math.max(1, maxy - miny)
  const sx = (W - 2 * margin) / spanx
  const sy = (H - 2 * margin) / spany
  // capped anisotropic fit: fill the frame but don't distort clusters past 1.6x
  const uni = Math.min(sx, sy)
  const maxA = 1.6
  const scaleX = Math.min(sx, uni * maxA)
  const scaleY = Math.min(sy, uni * maxA)
  const ox = (W - spanx * scaleX) / 2 - minx * scaleX
  const oy = (H - spany * scaleY) / 2 - miny * scaleY
  for (let i = 0; i < n; i++) {
    nodes[i].x = px[i] * scaleX + ox
    nodes[i].y = py[i] * scaleY + oy
    delete nodes[i]._ids
    delete nodes[i]._sig
  }

  return {
    width: W,
    height: H,
    vertical,
    nodes,
    edges,
    neighbors,
    counts: {
      gesture: springs.length,
      tag: edges.length - springs.length,
    },
    bySlug,
  }
}
