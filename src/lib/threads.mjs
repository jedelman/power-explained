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
      const via = sharedGest.length ? 'a shared gesture' : pickVia(sharedTags, sharedPlat)
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
