// topo.mjs — the terrain under the trail map.
//
// The book is The River, so the map's base is a real (small) watershed. The
// "bedrock" elevation is the density of the thread network — the choice that
// already drives the contours: high ground where threads cluster. We add a
// little fractal relief, run droplet-based hydraulic erosion to carve valleys,
// then compute D8 flow accumulation to find where water collects. The output:
//   - contours: iso-lines of the eroded surface (brown topo lines)
//   - streams:  the drainage network (where flow accumulates), bucketed by size
//
// Everything is deterministic (seeded) and computed at build time. See
// src/pages/book/atlas.astro.

function mulberry32(seed) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// fractal value noise in [0,1]
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
    const tl = p[p[xi] + yi]
    const tr = p[p[xi + 1] + yi]
    const bl = p[p[xi] + yi + 1]
    const br = p[p[xi + 1] + yi + 1]
    const u = fade(xf)
    const v = fade(yf)
    return lerp(lerp(tl, tr, u), lerp(bl, br, u), v) / 255
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

// droplet hydraulic erosion; mutates the height grid in place
function erode(h, gw, gh, rand, opts) {
  const {
    droplets,
    maxSteps = 32,
    inertia = 0.05,
    capacity = 4,
    minSlope = 0.01,
    deposition = 0.3,
    erosion = 0.3,
    evaporation = 0.012,
    gravity = 4,
  } = opts
  const idx = (x, y) => y * gw + x
  const bilerp = (x, y) => {
    const cx = Math.floor(x)
    const cy = Math.floor(y)
    const fx = x - cx
    const fy = y - cy
    const i00 = idx(cx, cy)
    return {
      cx, cy, fx, fy,
      h:
        h[i00] * (1 - fx) * (1 - fy) +
        h[idx(cx + 1, cy)] * fx * (1 - fy) +
        h[idx(cx, cy + 1)] * (1 - fx) * fy +
        h[idx(cx + 1, cy + 1)] * fx * fy,
    }
  }
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
      const hNew = bilerp(npx, npy).h
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

// marching squares over a corner-value grid → one path per iso-level
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
    if (d) paths.push({ level: L, index: L % 2 === 0, d })
  }
  return paths
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

  // --- bedrock = network density (KDE), normalized ---
  const dens = new Float64Array(gw * gh)
  let dmax = 0
  for (let j = 0; j < gh; j++) {
    for (let i = 0; i < gw; i++) {
      const x = i * sx
      const y = j * sy
      let e = 0
      for (const n of nodes) {
        const dx = x - n.x
        const dy = y - n.y
        e += Math.max(1, n.count || 1) * Math.exp(-(dx * dx + dy * dy) / (2 * bw * bw))
      }
      dens[j * gw + i] = e
      if (e > dmax) dmax = e
    }
  }

  // --- elevation = density + fractal relief ---
  const noise = makeNoise(seed)
  const fscale = opts.featureSize || 150
  const h = new Float64Array(gw * gh)
  for (let j = 0; j < gh; j++) {
    for (let i = 0; i < gw; i++) {
      const k = j * gw + i
      const relief = noise((i * sx) / fscale, (j * sy) / fscale, 5)
      h[k] = (dens[k] / dmax) * 1.0 + relief * 0.55
    }
  }

  // --- carve it ---
  const area = gw * gh
  erode(h, gw, gh, mulberry32(seed ^ 0x9e3779b9), {
    droplets: Math.round(area * (opts.dropletRate || 5)),
  })

  // --- D8 flow accumulation on the eroded surface ---
  const N = gw * gh
  const orderIdx = [...Array(N).keys()].sort((a, b) => h[b] - h[a]) // high → low
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

  // --- streams: cells whose accumulation clears a threshold ---
  const sorted = Float64Array.from(acc).sort()
  const thresh = sorted[Math.floor(N * (1 - (opts.streamFraction || 0.05)))]
  const buckets = [[], [], []] // small / mid / main
  for (let j = 0; j < gh; j++) {
    for (let i = 0; i < gw; i++) {
      const k = j * gw + i
      if (acc[k] < thresh || down[k] < 0) continue
      const di = down[k] % gw
      const dj = (down[k] - di) / gw
      const seg = `M${(i * sx).toFixed(1)} ${(j * sy).toFixed(1)}L${(di * sx).toFixed(1)} ${(dj * sy).toFixed(1)}`
      const r = acc[k] / sorted[N - 1]
      const b = r > 0.25 ? 2 : r > 0.08 ? 1 : 0
      buckets[b].push(seg)
    }
  }
  const streams = buckets
    .map((segs, i) => ({ rank: i, w: [0.6, 1.1, 1.9][i], d: segs.join('') }))
    .filter(s => s.d)

  let hmax = 0
  for (let k = 0; k < N; k++) if (h[k] > hmax) hmax = h[k]
  const contours = isoPaths(h, gw, gh, sx, sy, opts.levels || 7, hmax)

  return { contours, streams, field: { h, gw, gh, sx, sy } }
}

// --- ergonomic trail routing ----------------------------------------------
//
// makeRouter(field) returns route(ax,ay,bx,by) -> an SVG path that walks the
// least-energy way over the eroded terrain: A* whose cost is distance plus a
// penalty on *climbing*, so trails descend into valleys, follow the drainage,
// and cross at the low passes between massifs instead of charging over peaks.

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
    const lastK = ks.pop()
    const lastP = ps.pop()
    if (ks.length) {
      ks[0] = lastK
      ps[0] = lastP
      let i = 0
      const n = ks.length
      for (;;) {
        const l = i * 2 + 1
        const r = l + 1
        let m = i
        if (l < n && ps[l] < ps[m]) m = l
        if (r < n && ps[r] < ps[m]) m = r
        if (m === i) break
        ;[ps[m], ps[i]] = [ps[i], ps[m]]
        ;[ks[m], ks[i]] = [ks[i], ks[m]]
        i = m
      }
    }
    return top
  }
}

function simplify(pts, tol) {
  // Douglas–Peucker
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
  const climb = opts.climb ?? 700 // penalty per unit of uphill elevation
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
