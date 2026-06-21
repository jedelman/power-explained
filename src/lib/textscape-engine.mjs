// Vendored from claude-memory/tools/textscape/engine.mjs — SOURCE OF TRUTH is there.
// Keep in sync; do not edit here without updating the canonical copy.
// textscape/engine.mjs — corpus-agnostic theme-landscape renderer.
//
// Input: a theme graph. `threads` is an array of
//   { id, label, units: [unitId, ...] }
// where a *thread* is a theme and `units` are the text segments it runs through.
// Two threads cross when they share units (the commons). From that the engine:
//   1. lays the threads out by force (commons = the binding force) into clusters
//   2. grows a watershed from the layout's density (KDE -> erosion -> drainage)
//   3. routes each crossing as a least-energy trail over that terrain
//   4. renders a self-contained interactive HTML map
//
// Pure Node, zero dependencies. Deterministic (seeded). This is the back half of
// the pipeline extracted from power-explained's atlas; the front half (segment a
// text -> extract themes -> review) is the human-in-the-loop SKILL.md.

// ---------- rng + noise ----------
function lcg(seed) {
  let a = seed >>> 0
  return () => {
    a = (Math.imul(a, 1664525) + 1013904223) >>> 0
    return a / 4294967296
  }
}
function mulberry32(seed) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
function makeNoise(seed) {
  const rand = mulberry32(seed)
  const perm = [...Array(256).keys()]
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[perm[i], perm[j]] = [perm[j], perm[i]]
  }
  const p = new Uint8Array(512)
  for (let i = 0; i < 512; i++) p[i] = perm[i & 255]
  const fade = t => t * t * t * (t * (t * 6 - 15) + 10)
  const lerp = (a, b, t) => a + (b - a) * t
  const vnoise = (x, y) => {
    const xi = Math.floor(x) & 255
    const yi = Math.floor(y) & 255
    const xf = x - Math.floor(x)
    const yf = y - Math.floor(y)
    const u = fade(xf)
    const v = fade(yf)
    return (
      lerp(lerp(p[p[xi] + yi], p[p[xi + 1] + yi], u), lerp(p[p[xi] + yi + 1], p[p[xi + 1] + yi + 1], u), v) /
      255
    )
  }
  return (x, y, oct = 4) => {
    let amp = 1
    let freq = 1
    let sum = 0
    let norm = 0
    for (let o = 0; o < oct; o++) {
      sum += amp * vnoise(x * freq, y * freq)
      norm += amp
      amp *= 0.5
      freq *= 2
    }
    return sum / norm
  }
}

// ---------- force layout (commons = the force) ----------
export function layout(threads, opts = {}) {
  const W = opts.width || 1180
  const H = opts.height || 660
  const margin = 48
  const nodes = threads.map(t => ({
    id: t.id,
    label: t.label || t.id,
    count: (t.units || []).length,
    r: 2.6 + Math.sqrt((t.units || []).length) * 0.9,
    units: [...(t.units || [])],
    _units: new Set(t.units || []),
  }))
  const idxOf = Object.fromEntries(nodes.map((n, i) => [n.id, i]))
  const bySlug = Object.fromEntries(nodes.map(n => [n.id, n]))

  // edges = shared-unit crossings, weight = how many shared
  const edges = []
  const neighbors = Object.fromEntries(nodes.map(n => [n.id, []]))
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      let shared = 0
      for (const u of nodes[j]._units) if (nodes[i]._units.has(u)) shared++
      if (!shared) continue
      edges.push({ a: nodes[i].id, b: nodes[j].id, weight: shared })
      neighbors[nodes[i].id].push(nodes[j].id)
      neighbors[nodes[j].id].push(nodes[i].id)
    }
  }
  for (const n of nodes) n.degree = neighbors[n.id].length

  const n = nodes.length
  const rand = lcg(opts.seed || 0x50574552)
  const px = new Float64Array(n)
  const py = new Float64Array(n)
  for (let i = 0; i < n; i++) {
    px[i] = (rand() - 0.5) * 800
    py[i] = (rand() - 0.5) * 800
  }
  const deg = nodes.map(nd => nd.degree + 1)
  const weightPow = opts.weightPow ?? 2.6
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
        const f = kRep / d
        dvx[i] += (dx / d) * f
        dvy[i] += (dy / d) * f
        dvx[j] -= (dx / d) * f
        dvy[j] -= (dy / d) * f
      }
    }
    for (const e of edges) {
      const ia = idxOf[e.a]
      const ib = idxOf[e.b]
      const dx = px[ia] - px[ib]
      const dy = py[ia] - py[ib]
      const f = kAtt * Math.pow(e.weight, weightPow)
      dvx[ia] -= dx * f
      dvy[ia] -= dy * f
      dvx[ib] += dx * f
      dvy[ib] += dy * f
    }
    for (let i = 0; i < n; i++) {
      const d = Math.hypot(px[i], py[i]) || 1
      dvx[i] -= (px[i] / d) * grav * deg[i]
      dvy[i] -= (py[i] / d) * grav * deg[i]
    }
    for (let i = 0; i < n; i++) {
      const d = Math.hypot(dvx[i], dvy[i]) || 1
      const step = Math.min(d, temp)
      px[i] += (dvx[i] / d) * step
      py[i] += (dvy[i] / d) * step
    }
    temp *= cool
  }
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
  const uni = Math.min(sx, sy)
  const maxA = 1.6
  const scaleX = Math.min(sx, uni * maxA)
  const scaleY = Math.min(sy, uni * maxA)
  const ox = (W - spanx * scaleX) / 2 - minx * scaleX
  const oy = (H - spany * scaleY) / 2 - miny * scaleY
  for (let i = 0; i < n; i++) {
    nodes[i].x = px[i] * scaleX + ox
    nodes[i].y = py[i] * scaleY + oy
    delete nodes[i]._units
  }
  return { width: W, height: H, nodes, edges, neighbors, bySlug }
}

// ---------- watershed terrain ----------
function isoPaths(val, gw, gh, sx, sy, levels, max) {
  const at = (i, j) => val[j * gw + i]
  const paths = []
  for (let L = 1; L <= levels; L++) {
    const t = (max * L) / (levels + 1)
    let d = ''
    const seg = (p, q) =>
      (d += `M${p[0].toFixed(1)} ${p[1].toFixed(1)}L${q[0].toFixed(1)} ${q[1].toFixed(1)}`)
    for (let j = 0; j < gh - 1; j++) {
      for (let i = 0; i < gw - 1; i++) {
        const tl = at(i, j)
        const tr = at(i + 1, j)
        const br = at(i + 1, j + 1)
        const bl = at(i, j + 1)
        let c = 0
        if (tl > t) c |= 8
        if (tr > t) c |= 4
        if (br > t) c |= 2
        if (bl > t) c |= 1
        if (c === 0 || c === 15) continue
        const x0 = i * sx
        const y0 = j * sy
        const x1 = x0 + sx
        const y1 = y0 + sy
        const lp = (a, b, va, vb) => a + ((b - a) * (t - va)) / (vb - va)
        const top = () => [lp(x0, x1, tl, tr), y0]
        const bot = () => [lp(x0, x1, bl, br), y1]
        const left = () => [x0, lp(y0, y1, tl, bl)]
        const right = () => [x1, lp(y0, y1, tr, br)]
        switch (c) {
          case 1: case 14: seg(left(), bot()); break
          case 2: case 13: seg(bot(), right()); break
          case 3: case 12: seg(left(), right()); break
          case 4: case 11: seg(top(), right()); break
          case 6: case 9: seg(top(), bot()); break
          case 7: case 8: seg(left(), top()); break
          case 5: seg(left(), top()); seg(bot(), right()); break
          case 10: seg(top(), right()); seg(left(), bot()); break
        }
      }
    }
    if (d) paths.push({ level: L, index: L % 3 === 0, d })
  }
  return paths
}
function erode(h, gw, gh, rand, opts) {
  const { droplets, maxSteps = 32, inertia = 0.05, capacity = 4, minSlope = 0.01, deposition = 0.3, erosion = 0.3, evaporation = 0.012, gravity = 4 } = opts
  const idx = (x, y) => y * gw + x
  for (let d = 0; d < droplets; d++) {
    let px = rand() * (gw - 2) + 0.5
    let py = rand() * (gh - 2) + 0.5
    let dx = 0
    let dy = 0
    let speed = 1
    let water = 1
    let sediment = 0
    for (let s = 0; s < maxSteps; s++) {
      const cx = Math.floor(px)
      const cy = Math.floor(py)
      if (cx < 0 || cy < 0 || cx >= gw - 1 || cy >= gh - 1) break
      const fx = px - cx
      const fy = py - cy
      const h00 = h[idx(cx, cy)]
      const h10 = h[idx(cx + 1, cy)]
      const h01 = h[idx(cx, cy + 1)]
      const h11 = h[idx(cx + 1, cy + 1)]
      const gradX = (h10 - h00) * (1 - fy) + (h11 - h01) * fy
      const gradY = (h01 - h00) * (1 - fx) + (h11 - h10) * fx
      dx = dx * inertia - gradX * (1 - inertia)
      dy = dy * inertia - gradY * (1 - inertia)
      const len = Math.hypot(dx, dy)
      if (len < 1e-6) break
      dx /= len
      dy /= len
      const npx = px + dx
      const npy = py + dy
      if (npx < 0.5 || npy < 0.5 || npx >= gw - 1.5 || npy >= gh - 1.5) break
      const hOld = h00 * (1 - fx) * (1 - fy) + h10 * fx * (1 - fy) + h01 * (1 - fx) * fy + h11 * fx * fy
      const ncx = Math.floor(npx)
      const ncy = Math.floor(npy)
      const nfx = npx - ncx
      const nfy = npy - ncy
      const hNew =
        h[idx(ncx, ncy)] * (1 - nfx) * (1 - nfy) +
        h[idx(ncx + 1, ncy)] * nfx * (1 - nfy) +
        h[idx(ncx, ncy + 1)] * (1 - nfx) * nfy +
        h[idx(ncx + 1, ncy + 1)] * nfx * nfy
      const dh = hNew - hOld
      const cap = Math.max(-dh, minSlope) * speed * water * capacity
      if (sediment > cap || dh > 0) {
        const dep = dh > 0 ? Math.min(dh, sediment) : (sediment - cap) * deposition
        sediment -= dep
        h[idx(cx, cy)] += dep * (1 - fx) * (1 - fy)
        h[idx(cx + 1, cy)] += dep * fx * (1 - fy)
        h[idx(cx, cy + 1)] += dep * (1 - fx) * fy
        h[idx(cx + 1, cy + 1)] += dep * fx * fy
      } else {
        const ero = Math.min((cap - sediment) * erosion, -dh)
        h[idx(cx, cy)] -= ero * (1 - fx) * (1 - fy)
        h[idx(cx + 1, cy)] -= ero * fx * (1 - fy)
        h[idx(cx, cy + 1)] -= ero * (1 - fx) * fy
        h[idx(cx + 1, cy + 1)] -= ero * fx * fy
        sediment += ero
      }
      speed = Math.sqrt(Math.max(0, speed * speed - dh * gravity))
      water *= 1 - evaporation
      px = npx
      py = npy
    }
  }
}
export function terrain(nodes, width, height, opts = {}) {
  const cols = opts.cols || 150
  const rows = Math.max(2, Math.round((cols * height) / width))
  const gw = cols + 1
  const gh = rows + 1
  const sx = width / cols
  const sy = height / rows
  const bw = opts.bandwidth || 58
  const seed = opts.seed || 1337
  const dens = new Float64Array(gw * gh)
  let dmax = 0
  for (let j = 0; j < gh; j++) {
    for (let i = 0; i < gw; i++) {
      const x = i * sx
      const y = j * sy
      let e = 0
      for (const nd of nodes) {
        const dx = x - nd.x
        const dy = y - nd.y
        e += Math.max(1, nd.count || 1) * Math.exp(-(dx * dx + dy * dy) / (2 * bw * bw))
      }
      dens[j * gw + i] = e
      if (e > dmax) dmax = e
    }
  }
  const noise = makeNoise(seed)
  const fscale = opts.featureSize || 150
  const h = new Float64Array(gw * gh)
  for (let j = 0; j < gh; j++) {
    for (let i = 0; i < gw; i++) {
      const k = j * gw + i
      h[k] = (dens[k] / (dmax || 1)) * 1.0 + noise((i * sx) / fscale, (j * sy) / fscale, 5) * 0.55
    }
  }
  erode(h, gw, gh, mulberry32(seed ^ 0x9e3779b9), { droplets: Math.round(gw * gh * (opts.dropletRate || 5)) })
  const N = gw * gh
  const orderIdx = [...Array(N).keys()].sort((a, b) => h[b] - h[a])
  const down = new Int32Array(N).fill(-1)
  for (let j = 0; j < gh; j++) {
    for (let i = 0; i < gw; i++) {
      const k = j * gw + i
      let lowest = h[k]
      let lk = -1
      for (let dj = -1; dj <= 1; dj++) {
        for (let di = -1; di <= 1; di++) {
          if (!di && !dj) continue
          const ni = i + di
          const nj = j + dj
          if (ni < 0 || nj < 0 || ni >= gw || nj >= gh) continue
          const nk = nj * gw + ni
          if (h[nk] < lowest) {
            lowest = h[nk]
            lk = nk
          }
        }
      }
      down[k] = lk
    }
  }
  const acc = new Float64Array(N).fill(1)
  for (const k of orderIdx) if (down[k] >= 0) acc[down[k]] += acc[k]
  const sorted = Float64Array.from(acc).sort()
  const thresh = sorted[Math.floor(N * (1 - (opts.streamFraction || 0.05)))]
  const buckets = [[], [], []]
  for (let j = 0; j < gh; j++) {
    for (let i = 0; i < gw; i++) {
      const k = j * gw + i
      if (acc[k] < thresh || down[k] < 0) continue
      const di = down[k] % gw
      const dj = (down[k] - di) / gw
      const seg = `M${(i * sx).toFixed(1)} ${(j * sy).toFixed(1)}L${(di * sx).toFixed(1)} ${(dj * sy).toFixed(1)}`
      const r = acc[k] / sorted[N - 1]
      buckets[r > 0.25 ? 2 : r > 0.08 ? 1 : 0].push(seg)
    }
  }
  const streams = buckets
    .map((segs, i) => ({ w: [0.6, 1.1, 1.9][i], d: segs.join('') }))
    .filter(s => s.d)
  let hmax = 0
  for (let k = 0; k < N; k++) if (h[k] > hmax) hmax = h[k]
  const contours = isoPaths(h, gw, gh, sx, sy, opts.levels || 13, hmax)
  return { contours, streams, field: { h, gw, gh, sx, sy } }
}

// ---------- ergonomic routing ----------
class MinHeap {
  constructor() {
    this.k = []
    this.p = []
  }
  get size() {
    return this.k.length
  }
  push(k, p) {
    const ks = this.k
    const ps = this.p
    let i = ks.length
    ks.push(k)
    ps.push(p)
    while (i > 0) {
      const par = (i - 1) >> 1
      if (ps[par] <= ps[i]) break
      ;[ps[par], ps[i]] = [ps[i], ps[par]]
      ;[ks[par], ks[i]] = [ks[i], ks[par]]
      i = par
    }
  }
  pop() {
    const ks = this.k
    const ps = this.p
    const top = ks[0]
    const lk = ks.pop()
    const lp = ps.pop()
    if (ks.length) {
      ks[0] = lk
      ps[0] = lp
      let i = 0
      const m = ks.length
      for (;;) {
        const l = i * 2 + 1
        const r = l + 1
        let s = i
        if (l < m && ps[l] < ps[s]) s = l
        if (r < m && ps[r] < ps[s]) s = r
        if (s === i) break
        ;[ps[s], ps[i]] = [ps[i], ps[s]]
        ;[ks[s], ks[i]] = [ks[i], ks[s]]
        i = s
      }
    }
    return top
  }
}
function simplify(pts, tol) {
  if (pts.length < 3) return pts
  const keep = new Uint8Array(pts.length)
  keep[0] = 1
  keep[pts.length - 1] = 1
  const stack = [[0, pts.length - 1]]
  while (stack.length) {
    const [a, b] = stack.pop()
    const [ax, ay] = pts[a]
    const [bx, by] = pts[b]
    const dx = bx - ax
    const dy = by - ay
    const len = Math.hypot(dx, dy) || 1
    let far = -1
    let fd = tol
    for (let i = a + 1; i < b; i++) {
      const d = Math.abs((pts[i][0] - ax) * dy - (pts[i][1] - ay) * dx) / len
      if (d > fd) {
        fd = d
        far = i
      }
    }
    if (far !== -1) {
      keep[far] = 1
      stack.push([a, far], [far, b])
    }
  }
  return pts.filter((_, i) => keep[i])
}
function smoothPath(pts) {
  if (pts.length < 3)
    return `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}L${pts[pts.length - 1][0].toFixed(1)} ${pts[pts.length - 1][1].toFixed(1)}`
  let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`
  for (let i = 1; i < pts.length - 1; i++) {
    const mx = (pts[i][0] + pts[i + 1][0]) / 2
    const my = (pts[i][1] + pts[i + 1][1]) / 2
    d += `Q${pts[i][0].toFixed(1)} ${pts[i][1].toFixed(1)} ${mx.toFixed(1)} ${my.toFixed(1)}`
  }
  const last = pts[pts.length - 1]
  return d + `L${last[0].toFixed(1)} ${last[1].toFixed(1)}`
}
export function makeRouter(field, opts = {}) {
  const { h, gw, gh, sx, sy } = field
  const N = gw * gh
  const climb = opts.climb ?? 700
  const g = new Float64Array(N)
  const gen = new Int32Array(N)
  const prev = new Int32Array(N)
  let stamp = 0
  const ci = x => Math.max(0, Math.min(gw - 1, Math.round(x / sx)))
  const cj = y => Math.max(0, Math.min(gh - 1, Math.round(y / sy)))
  return (ax, ay, bx, by) => {
    const s = cj(ay) * gw + ci(ax)
    const t = cj(by) * gw + ci(bx)
    if (s === t) return `M${ax.toFixed(1)} ${ay.toFixed(1)}L${bx.toFixed(1)} ${by.toFixed(1)}`
    stamp++
    const ti = t % gw
    const tj = (t - ti) / gw
    const heur = k => {
      const i = k % gw
      const j = (k - i) / gw
      return Math.hypot((ti - i) * sx, (tj - j) * sy)
    }
    const heap = new MinHeap()
    g[s] = 0
    gen[s] = stamp
    prev[s] = -1
    heap.push(s, heur(s))
    let found = false
    while (heap.size) {
      const k = heap.pop()
      if (k === t) {
        found = true
        break
      }
      const i = k % gw
      const j = (k - i) / gw
      const gk = g[k]
      const hk = h[k]
      for (let dj = -1; dj <= 1; dj++) {
        for (let di = -1; di <= 1; di++) {
          if (!di && !dj) continue
          const ni = i + di
          const nj = j + dj
          if (ni < 0 || nj < 0 || ni >= gw || nj >= gh) continue
          const nk = nj * gw + ni
          const dh = h[nk] - hk
          const cost = gk + Math.hypot(di * sx, dj * sy) + (dh > 0 ? dh * climb : 0)
          if (gen[nk] !== stamp || cost < g[nk]) {
            g[nk] = cost
            gen[nk] = stamp
            prev[nk] = k
            heap.push(nk, cost + heur(nk))
          }
        }
      }
    }
    if (!found) return `M${ax.toFixed(1)} ${ay.toFixed(1)}L${bx.toFixed(1)} ${by.toFixed(1)}`
    const path = []
    let k = t
    while (k >= 0) {
      const i = k % gw
      const j = (k - i) / gw
      path.push([i * sx, j * sy])
      if (k === s) break
      k = prev[k]
    }
    path.reverse()
    path[0] = [ax, ay]
    path[path.length - 1] = [bx, by]
    return smoothPath(simplify(path, 1.4))
  }
}

// ---------- render to standalone HTML ----------
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]))

// The map client: pan/zoom, decluttering HTML labels (constant screen size,
// importance-ordered, collision-avoided — classic slippy-map behaviour), hover
// to trace crossings, click a theme for its passages (provenance). Vanilla,
// shared verbatim by the standalone HTML and the power-explained atlas.
export const CLIENT_JS = `
function textscapeMount(root){
  var data=JSON.parse(root.querySelector('.ts-data').textContent);
  var svg=root.querySelector('.ts-svg'), vp=root.querySelector('.ts-vp');
  var overlay=root.querySelector('.ts-labels'), panel=root.querySelector('.ts-panel');
  var N=data.nodes;
  var adj=N.map(function(){return {}});
  data.edges.forEach(function(e){adj[e[0]][e[1]]=1;adj[e[1]][e[0]]=1;});
  var circles=[].slice.call(vp.querySelectorAll('.nd'));
  var edges=[].slice.call(vp.querySelectorAll('.ed'));
  // label divs
  var labels=N.map(function(n,i){var d=document.createElement('div');d.className='ts-lb';d.textContent=n.l;d.dataset.i=i;
    d.addEventListener('mouseenter',function(){if(sel<0)focus(i);});d.addEventListener('mouseleave',function(){if(sel<0)clear();});
    d.addEventListener('click',function(ev){ev.stopPropagation();select(i);});overlay.appendChild(d);return d;});
  // measure widths once
  var lw=N.map(function(n,i){labels[i].style.display='block';labels[i].style.left='-9999px';return labels[i].offsetWidth||(n.l.length*7+8);});
  var order=N.map(function(_,i){return i;}).sort(function(a,b){return N[b].c-N[a].c;});
  var k=1,tx=0,ty=0,sel=-1;
  var minK=0.6,maxK=14;
  function s(){return svg.clientWidth/data.w;}
  function px(x,y){var sc=s();return [(x*k+tx)*sc,(y*k+ty)*sc];}
  function apply(){vp.setAttribute('transform','translate('+tx+' '+ty+') scale('+k+')');relabel();}
  function relabel(){
    var sc=s(),cw=svg.clientWidth,ch=svg.clientHeight,placed=[],shown=0;
    for(var oi=0;oi<order.length;oi++){var i=order[oi],n=N[i],p=px(n.x,n.y),lb=labels[i];
      if(p[0]<-60||p[1]<-30||p[0]>cw+60||p[1]>ch+30){lb.style.display='none';continue;}
      var rpx=Math.max(2,n.r*k*sc),w=lw[i],h=15,bx=p[0]+rpx+3,by=p[1]-h/2;
      var hit=false;for(var j=0;j<placed.length;j++){var q=placed[j];if(!(bx>q.x+q.w||bx+w<q.x||by>q.y+q.h||by+h<q.y)){hit=true;break;}}
      var always=shown<7; // a few biggest always labelled
      if(hit&&!always){lb.style.display='none';continue;}
      lb.style.display='block';lb.style.left=bx+'px';lb.style.top=by+'px';
      placed.push({x:bx,y:by,w:w,h:h});shown++;}
  }
  function focus(i){svg.classList.add('foc');var nb=adj[i]||{};
    circles.forEach(function(c){var ci=+c.dataset.i;c.classList.toggle('hot',ci===i);c.classList.toggle('near',!!nb[ci]);});
    edges.forEach(function(e){e.classList.toggle('hot',+e.dataset.a===i||+e.dataset.b===i);});
    labels.forEach(function(l){var li=+l.dataset.i;l.classList.toggle('lhot',li===i);l.classList.toggle('lnear',!!nb[li]);});}
  function clear(){svg.classList.remove('foc');circles.forEach(function(c){c.classList.remove('hot','near');});edges.forEach(function(e){e.classList.remove('hot');});labels.forEach(function(l){l.classList.remove('lhot','lnear');});}
  function select(i){sel=i;focus(i);var n=N[i];
    var html='<button class="ts-x" aria-label="close">×</button><h2>'+n.l+'</h2><p class="ts-meta">'+n.c+' passages · crosses '+Object.keys(adj[i]).length+' themes</p>';
    if(n.u&&n.u.length){html+='<ul class="ts-units">';for(var u=0;u<n.u.length;u++){var id=n.u[u],t=(data.ut&&data.ut[id])||'';html+='<li><span class="ts-uid">'+id+'</span> '+t+'</li>';}html+='</ul>';}
    panel.innerHTML=html;panel.classList.add('open');
    panel.querySelector('.ts-x').addEventListener('click',function(){deselect();});}
  function deselect(){sel=-1;panel.classList.remove('open');panel.innerHTML='';clear();}
  circles.forEach(function(c){var i=+c.dataset.i;
    c.addEventListener('mouseenter',function(){if(sel<0)focus(i);});
    c.addEventListener('mouseleave',function(){if(sel<0)clear();});
    c.addEventListener('click',function(ev){ev.stopPropagation();select(i);});});
  svg.addEventListener('click',function(){if(sel>=0)deselect();});
  // pan/zoom via pointer events
  var pts={},last=null,pinch=null;
  function zoomAt(cx,cy,factor){var sc=s();var u=cx/sc,v=cy/sc;var wx=(u-tx)/k,wy=(v-ty)/k;
    k=Math.max(minK,Math.min(maxK,k*factor));tx=u-wx*k;ty=v-wy*k;apply();}
  svg.addEventListener('wheel',function(e){e.preventDefault();var r=svg.getBoundingClientRect();
    zoomAt(e.clientX-r.left,e.clientY-r.top,e.deltaY<0?1.15:1/1.15);},{passive:false});
  svg.addEventListener('pointerdown',function(e){svg.setPointerCapture(e.pointerId);pts[e.pointerId]={x:e.clientX,y:e.clientY};
    var ids=Object.keys(pts);if(ids.length===1)last={x:e.clientX,y:e.clientY};
    else if(ids.length===2){var a=pts[ids[0]],b=pts[ids[1]];pinch={d:Math.hypot(a.x-b.x,a.y-b.y),mx:(a.x+b.x)/2,my:(a.y+b.y)/2};}});
  svg.addEventListener('pointermove',function(e){if(!pts[e.pointerId])return;pts[e.pointerId]={x:e.clientX,y:e.clientY};
    var ids=Object.keys(pts),sc=s(),r=svg.getBoundingClientRect();
    if(ids.length===1&&last){tx+=(e.clientX-last.x)/sc;ty+=(e.clientY-last.y)/sc;last={x:e.clientX,y:e.clientY};apply();}
    else if(ids.length===2&&pinch){var a=pts[ids[0]],b=pts[ids[1]];var d=Math.hypot(a.x-b.x,a.y-b.y);var mx=(a.x+b.x)/2-r.left,my=(a.y+b.y)/2-r.top;
      zoomAt(mx,my,d/pinch.d);pinch.d=d;}});
  function up(e){delete pts[e.pointerId];last=null;pinch=null;}
  svg.addEventListener('pointerup',up);svg.addEventListener('pointercancel',up);
  // zoom buttons
  var zc=root.querySelector('.ts-zoom');
  if(zc){zc.querySelector('.zin').addEventListener('click',function(){zoomAt(svg.clientWidth/2,svg.clientHeight/2,1.4);});
    zc.querySelector('.zout').addEventListener('click',function(){zoomAt(svg.clientWidth/2,svg.clientHeight/2,1/1.4);});
    zc.querySelector('.zreset').addEventListener('click',function(){k=1;tx=0;ty=0;apply();});}
  window.addEventListener('resize',relabel);
  apply();
}
`

// Renders the inner map (controls + svg + label overlay + panel). Used by both
// the standalone page (below) and the atlas. `vp` group holds everything that
// pans/zooms; labels live in an HTML overlay so they stay crisp and declutter.
export function renderMapBody(map, meta = {}) {
  const { width, height, nodes, edges, contours, streams } = map
  const idx = Object.fromEntries(nodes.map((n, i) => [n.id, i]))
  const contourEls = contours.map(c => `<path class="ct${c.index ? ' ix' : ''}" d="${c.d}"/>`).join('')
  const streamEls = streams.map(s => `<path class="st" d="${s.d}" stroke-width="${s.w}"/>`).join('')
  const edgeEls = edges
    .map(e => `<path class="ed${e.weight >= 2 ? ' bb' : ''}" data-a="${idx[e.a]}" data-b="${idx[e.b]}" d="${e.d}" stroke-width="${Math.min(0.5 + e.weight * 0.3, 2.4).toFixed(2)}"/>`)
    .join('')
  const nodeEls = nodes
    .map((n, i) => `<circle class="nd" data-i="${i}" cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="${n.r.toFixed(1)}"/>`)
    .join('')
  const data = {
    w: width,
    h: height,
    nodes: nodes.map(n => ({ l: n.label, x: +n.x.toFixed(1), y: +n.y.toFixed(1), r: +n.r.toFixed(1), c: n.count, u: n.units || [] })),
    edges: edges.map(e => [idx[e.a], idx[e.b]]),
    ut: meta.unitText || {},
  }
  return `<div class="ts-map">
  <div class="ts-zoom"><button class="zin" aria-label="zoom in">+</button><button class="zout" aria-label="zoom out">−</button><button class="zreset" aria-label="reset">⤢</button></div>
  <svg class="ts-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(meta.title || 'Theme landscape')}">
    <g class="ts-vp"><g aria-hidden="true">${contourEls}</g><g aria-hidden="true">${streamEls}</g><g>${edgeEls}</g><g>${nodeEls}</g></g>
  </svg>
  <div class="ts-labels" aria-hidden="true"></div>
  <aside class="ts-panel" aria-live="polite"></aside>
  <script type="application/json" class="ts-data">${JSON.stringify(data)}</script>
</div>`
}

// Shared CSS for the map (works standalone and inside the atlas).
export const MAP_CSS = `
  .ts-map{position:relative;border:1px solid #d8ccae;border-radius:4px;background:var(--paper,#f7f1e3);overflow:hidden;touch-action:none}
  .ts-svg{display:block;width:100%;height:auto;cursor:grab}
  .ts-svg:active{cursor:grabbing}
  .ct{fill:none;stroke:var(--contour,#8a6534);stroke-width:.7;opacity:.45;vector-effect:non-scaling-stroke}.ct.ix{stroke-width:1.1;opacity:.68}
  .st{fill:none;stroke:var(--water,#2f6fa6);stroke-linecap:round;stroke-linejoin:round;opacity:.8;vector-effect:non-scaling-stroke}
  .ed{fill:none;stroke:var(--trail,#3f6e2c);stroke-linecap:round;opacity:0;vector-effect:non-scaling-stroke;transition:opacity .1s}
  .ed.bb{opacity:.5}.ed:not(.bb){stroke-dasharray:2 3}
  .ts-svg.foc .ed{opacity:.06}.ts-svg.foc .ed.hot{opacity:.95;stroke:var(--red,#b23b2e);stroke-dasharray:none}
  .nd{fill:var(--ink,#241f1a);stroke:var(--paper,#f7f1e3);stroke-width:1.4;cursor:pointer;vector-effect:non-scaling-stroke}
  .ts-svg.foc .nd{opacity:.25}.ts-svg.foc .nd.hot,.ts-svg.foc .nd.near{opacity:1}
  .nd.hot{fill:var(--red,#b23b2e)}
  .ts-labels{position:absolute;inset:0;pointer-events:none;overflow:hidden}
  .ts-lb{position:absolute;font:11px/1.1 ui-monospace,SFMono-Regular,Menlo,monospace;color:var(--trail-deep,#294d1c);
    white-space:nowrap;pointer-events:auto;cursor:pointer;padding:1px 2px;transform:translateY(-1px);
    text-shadow:0 0 2px var(--paper,#f7f1e3),0 0 2px var(--paper,#f7f1e3),0 0 2px var(--paper,#f7f1e3),0 0 2px var(--paper,#f7f1e3)}
  .ts-lb:hover,.ts-lb.lhot{color:var(--red,#b23b2e);font-weight:600;z-index:3}
  .ts-lb.lnear{color:var(--ink,#241f1a);font-weight:600}
  .ts-zoom{position:absolute;top:10px;right:10px;z-index:4;display:flex;flex-direction:column;gap:4px}
  .ts-zoom button{width:30px;height:30px;border:1px solid #cdbf9e;background:var(--paper,#f7f1e3);color:var(--ink,#241f1a);
    font-size:16px;line-height:1;border-radius:5px;cursor:pointer;box-shadow:0 1px 2px rgba(0,0,0,.12)}
  .ts-zoom button:hover{background:#fff}
  .ts-panel{position:absolute;top:0;right:0;width:min(340px,80%);height:100%;background:rgba(247,241,227,.97);
    border-left:1px solid #d8ccae;box-shadow:-4px 0 16px rgba(0,0,0,.08);padding:18px 20px;overflow-y:auto;
    transform:translateX(100%);transition:transform .18s;z-index:5}
  .ts-panel.open{transform:none}
  .ts-panel h2{margin:.2rem 0 .1rem;font-size:1.15rem}
  .ts-panel .ts-meta{font:11px ui-monospace,monospace;opacity:.6;margin:0 0 .8rem;text-transform:uppercase;letter-spacing:.04em}
  .ts-panel .ts-x{position:absolute;top:10px;right:12px;border:0;background:none;font-size:22px;line-height:1;cursor:pointer;opacity:.5}
  .ts-panel .ts-x:hover{opacity:1}
  .ts-units{list-style:none;margin:0;padding:0;font-size:.82rem;line-height:1.5}
  .ts-units li{padding:.5rem 0;border-top:1px solid #e3d9bf}
  .ts-uid{font:10px ui-monospace,monospace;color:var(--red,#b23b2e);margin-right:.4rem}
`

export function renderHTML(map, meta = {}) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(meta.title || 'Textscape')}</title>
<style>
  :root{--ink:#241f1a;--paper:#f7f1e3;--red:#b23b2e;--trail:#3f6e2c;--trail-deep:#294d1c;--contour:#8a6534;--water:#2f6fa6}
  *{box-sizing:border-box}
  body{margin:0;background:#efe7d3;color:var(--ink);font:15px/1.6 -apple-system,Segoe UI,Roboto,sans-serif;padding:20px}
  .wrap{max-width:1100px;margin:0 auto}
  h1{font-size:1.5rem;margin:.2rem 0}
  .dek{opacity:.72;font-size:.92rem;max-width:44rem;margin:.4rem 0 1rem}
  .key{display:flex;flex-wrap:wrap;gap:.3rem 1.1rem;font:11px/1 ui-monospace,monospace;text-transform:uppercase;letter-spacing:.04em;opacity:.65;margin-bottom:1rem}
  .key span{display:flex;align-items:center;gap:.4rem}
  .sw{width:16px;display:inline-block}.sw.tr{border-top:2px solid var(--trail)}.sw.st{border-top:2px solid var(--water)}.sw.ct{border-top:1px solid var(--contour)}
  .sw.cr{width:7px;height:7px;border-radius:50%;background:var(--ink)}
  .ts-map{height:74vh}
${MAP_CSS}
  .foot{font:12px ui-monospace,monospace;opacity:.6;margin-top:1rem}
</style></head><body><div class="wrap">
<h1>${esc(meta.title || 'Textscape')}</h1>
<p class="dek">${esc(meta.dek || 'Each station is a theme, placed by what it shares with others. Drag to pan, scroll to zoom, hover to trace crossings, click a theme for its passages.')}</p>
<div class="key"><span><i class="sw tr"></i>theme trail</span><span><i class="sw cr"></i>theme</span><span><i class="sw st"></i>drainage</span><span><i class="sw ct"></i>contour</span></div>
${renderMapBody(map, meta)}
<p class="foot">${map.nodes.length} themes · ${map.edges.length} crossings${meta.source ? ' · ' + esc(meta.source) : ''} · made with textscape</p>
</div>
<script>${CLIENT_JS}
document.querySelectorAll('.ts-map').forEach(textscapeMount);</script>
</body></html>`
}

// ---------- orchestration ----------
export function buildMap(threads, opts = {}) {
  const map = layout(threads, opts)
  const { contours, streams, field } = terrain(map.nodes, map.width, map.height, opts)
  const route = makeRouter(field, opts)
  for (const e of map.edges) {
    const a = map.bySlug[e.a]
    const b = map.bySlug[e.b]
    e.d = route(a.x, a.y, b.x, b.y)
  }
  map.contours = contours
  map.streams = streams
  // provenance: truncated unit text for the click panel
  const meta = { ...(opts.meta || {}) }
  if (opts.units) {
    const ut = {}
    for (const n of map.nodes) for (const u of n.units || []) {
      if (ut[u] == null) {
        const t = String(opts.units[u] || '')
        ut[u] = t.length > 220 ? t.slice(0, 217).trimEnd() + '…' : t
      }
    }
    meta.unitText = ut
  }
  return { map, html: renderHTML(map, meta), css: MAP_CSS, clientJs: CLIENT_JS, body: renderMapBody(map, meta) }
}
