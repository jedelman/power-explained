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
// threadNetwork() bakes a full node-link layout at build time (no client
// framework, no runtime layout): each thread is a *station* placed by its
// position in the river (x = median river index of its gestures) and banded by
// axis (curated walks / practices / themes), lane-packed so stations in a band
// don't collide. Edges are the crossings: a shared gesture (the true rhizome
// node, weight = how many) or, failing that, a shared significant tag. The
// view renders the shared-gesture backbone by default and lights a station's
// full set of crossings on hover. See src/pages/book/atlas.astro.

// gestureId -> canonical river index (0-based), built once.
let _order = null
function riverOrder() {
  if (_order) return _order
  _order = new Map()
  const RIVER = path.resolve('src/content/manifests/the-river.manifest.yml')
  if (!fs.existsSync(RIVER)) return _order
  const river = yaml.load(fs.readFileSync(RIVER, 'utf8')) || {}
  let i = 0
  for (const slug of river.sources || []) {
    const cp = path.resolve('src/content/book', `${slug}.md`)
    if (!fs.existsSync(cp)) continue
    const text = fs.readFileSync(cp, 'utf8')
    const end = text.indexOf('\n---\n', 4)
    const fm = yaml.load(text.slice(4, end)) || {}
    for (const g of fm.gestures || []) if (!_order.has(g)) _order.set(g, i++)
  }
  return _order
}

const BAND = { curated: 0, practice: 1, theme: 2 }

export function threadNetwork(opts = {}) {
  const W = opts.width || 1200
  const marginX = 48
  const innerW = W - marginX * 2
  const laneH = 26 // vertical gap between lanes
  const bandGap = 40 // gap between axis bands
  const topPad = 16

  const threads = loadThreads()
  const order = riverOrder()
  const N = Math.max(order.size, 2)

  // --- base node data ---
  const nodes = threads.map(t => {
    const idxs = t.gestures
      .map(g => order.get(g))
      .filter(v => v != null)
      .sort((a, b) => a - b)
    const median = idxs.length ? idxs[Math.floor(idxs.length / 2)] : (N - 1) / 2
    const axis = t.kind === 'spine' ? t.axis || 'theme' : 'curated'
    return {
      slug: t.slug,
      label: t.h1 || t.title,
      count: t.gestures.length,
      axis,
      xn: median / (N - 1),
      r: 2.6 + Math.sqrt(t.gestures.length) * 0.9,
      _ids: new Set(t.gestures),
      _sig: significantTags(t.gestures),
    }
  })
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

  // --- layout: x = river position, y = axis band + lane packing ---
  const xpx = xn => marginX + xn * innerW
  const bands = { curated: [], practice: [], theme: [] }
  for (const n of nodes) (bands[n.axis] || bands.theme).push(n)

  let y = topPad
  const bandMeta = []
  for (const key of ['curated', 'practice', 'theme']) {
    const group = bands[key].sort((a, b) => a.xn - b.xn)
    const lanes = [] // lane -> last x px used
    for (const n of group) {
      const px = xpx(n.xn)
      const gap = n.r + 14
      let lane = lanes.findIndex(last => px - last > gap)
      if (lane === -1) {
        lane = lanes.length
        lanes.push(0)
      }
      lanes[lane] = px + n.r
      n.x = px
      n._lane = lane
    }
    const laneCount = Math.max(lanes.length, 1)
    const bandTop = y
    for (const n of group) n.y = bandTop + n._lane * laneH + laneH / 2
    const bandH = laneCount * laneH
    bandMeta.push({ key, top: bandTop, height: bandH, count: group.length })
    y = bandTop + bandH + bandGap
  }
  const height = y - bandGap + topPad

  // strip working sets before returning
  for (const n of nodes) {
    delete n._ids
    delete n._sig
    delete n._lane
  }

  return {
    width: W,
    height,
    nodes,
    edges,
    neighbors,
    bands: bandMeta,
    counts: {
      gesture: edges.filter(e => e.type === 'gesture').length,
      tag: edges.filter(e => e.type === 'tag').length,
    },
    bySlug,
  }
}
