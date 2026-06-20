// topo.mjs — topographic contours for the trail map.
//
// The "elevation" of the map is the density of the thread network: a Gaussian
// kernel sum over the station positions, weighted by thread size. Peaks form
// where many (and large) threads cluster. We extract iso-contours from that
// field with marching squares, so the brown contour lines are a true reading of
// the rhizome's terrain — not decoration. See src/pages/book/atlas.astro.

// Returns [{ level, index, d }] — one SVG path per iso-level. `index` marks the
// heavier "index contours" (every other level), as on a real topo sheet.
export function topoContours(nodes, width, height, opts = {}) {
  const cols = opts.cols || 130
  const rows = opts.rows || Math.max(2, Math.round((cols * height) / width))
  const levels = opts.levels || 7
  const bw = opts.bandwidth || 64 // kernel bandwidth in px
  const gw = width / cols
  const gh = height / rows

  // density field on the grid corners
  const val = new Float64Array((cols + 1) * (rows + 1))
  let max = 0
  for (let j = 0; j <= rows; j++) {
    for (let i = 0; i <= cols; i++) {
      const x = i * gw
      const y = j * gh
      let e = 0
      for (const n of nodes) {
        const dx = x - n.x
        const dy = y - n.y
        const w = Math.max(1, n.count || 1)
        e += w * Math.exp(-(dx * dx + dy * dy) / (2 * bw * bw))
      }
      val[j * (cols + 1) + i] = e
      if (e > max) max = e
    }
  }
  const at = (i, j) => val[j * (cols + 1) + i]

  const paths = []
  for (let L = 1; L <= levels; L++) {
    const t = (max * L) / (levels + 1)
    let d = ''
    const seg = (p, q) =>
      (d += `M${p[0].toFixed(1)} ${p[1].toFixed(1)}L${q[0].toFixed(1)} ${q[1].toFixed(1)}`)
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
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
        const x0 = i * gw
        const y0 = j * gh
        const x1 = x0 + gw
        const y1 = y0 + gh
        const lerp = (a, b, va, vb) => a + ((b - a) * (t - va)) / (vb - va)
        const top = () => [lerp(x0, x1, tl, tr), y0]
        const bot = () => [lerp(x0, x1, bl, br), y1]
        const left = () => [x0, lerp(y0, y1, tl, bl)]
        const right = () => [x1, lerp(y0, y1, tr, br)]
        switch (c) {
          case 1:
          case 14:
            seg(left(), bot())
            break
          case 2:
          case 13:
            seg(bot(), right())
            break
          case 3:
          case 12:
            seg(left(), right())
            break
          case 4:
          case 11:
            seg(top(), right())
            break
          case 6:
          case 9:
            seg(top(), bot())
            break
          case 7:
          case 8:
            seg(left(), top())
            break
          case 5:
            seg(left(), top())
            seg(bot(), right())
            break
          case 10:
            seg(top(), right())
            seg(left(), bot())
            break
        }
      }
    }
    if (d) paths.push({ level: L, index: L % 2 === 0, d })
  }
  return paths
}
