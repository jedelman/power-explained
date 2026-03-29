import { useEffect, useRef, useCallback } from 'react'
import * as d3 from 'd3'

const DEPTH_Y = { 0: 0.08, 1: 0.22, 2: 0.42, 3: 0.65, 4: 0.85 }

// Series → edge/node color
function getSeries(node) {
  const id = node.id
  if (node.type === 'depth')     return 'terrain'
  if (node.type === 'diagram')   return 'diagram'
  if (node.type === 'entry')     return 'entry'
  if (id.startsWith('en-'))      return 'relation'
  if (id.startsWith('case-'))    return 'case'
  if (id.startsWith('env-') || id === 'indigenous-governance') return 'env'
  if (
    id.startsWith('urban-') || id.startsWith('your-city') ||
    id === 'land-is-foundation' || id === 'why-city-doesnt-work' ||
    id === 'falling-through-gap'
  ) return 'urban'
  if (
    id.startsWith('tech-') || id === 'how-linux-internet' ||
    id === 'nobody-had-to' || id === 'open-data-insufficient' ||
    id === 'agent-and-commons' || id === 'simondon'
  ) return 'tech'
  if (
    id.startsWith('sj-') || id.startsWith('who-') ||
    id === 'racial-capitalism' || id === 'care-is-the-economy' ||
    id === 'which-women' || id === 'reproductive-commons' ||
    id === 'abolition-is-commons'
  ) return 'sj'
  if (id.startsWith('lib-') || id === 'they-were-right') return 'lib'
  if (
    id === 'kropotkin' || id === 'gramsci' || id === 'ostrom' ||
    id === 'hardt-negri' || id === 'deleuze-guattari' || id === 'freire' ||
    id === 'graeber' || id === 'godel' || id === 'human-was-story' ||
    id === 'other-and-outside' || id === 'tech-turing' || id === 'tech-shannon'
  ) return 'philosophy'
  if (
    id.startsWith('build-') || id === 'what-we-do-monday' ||
    id === 'preparation-underway' || id === 'commune-without-state' ||
    id === 'mutual-aid-isnt-charity' || id === 'two-ways-pothole' ||
    id === 'commons-never-stopped' || id === 'tradition-buried'
  ) return 'build'
  return 'core'
}

const SERIES_COLOR = {
  terrain:    '#2a2520',
  diagram:    '#4a9e9e',
  entry:      '#d4604f',
  relation:   '#7a6a50',
  case:       '#c49a3a',
  env:        '#4a9e5a',
  urban:      '#4a72c4',
  tech:       '#3ab8b8',
  sj:         '#9e5ab8',
  lib:        '#c47a3a',
  philosophy: '#8a8070',
  build:      '#7ab84a',
  core:       '#c4604a',
}

const NODE_RADIUS = {
  depth:     22,
  entry:     16,
  claim:     8,
  edge_node: 6,
  diagram:   11,
}

export default function GraphCanvas({
  selectedId,
  onSelectNode,
  depthMax,
  visibleNodes,   // ignored — we always show all nodes now
  visibleEdges,   // ignored — same
  entryPath,
}) {
  const svgRef = useRef(null)
  const gRef = useRef(null)
  const simRef = useRef(null)
  const nodeById = useRef(new Map())

  // Stable select handler
  const handleClick = useCallback((node) => {
    if (node.type === 'depth' && node.depth <= 1) return
    onSelectNode(node.id)
  }, [onSelectNode])

  // Build the full graph once on mount
  useEffect(() => {
    if (!svgRef.current) return

    // Import graph data directly
    import('./graph.json').then(mod => {
      const graphData = mod.default
      const allNodes = graphData.nodes
      const allEdges = graphData.edges

      const container = svgRef.current.parentElement
      const W = container.clientWidth
      const H = container.clientHeight

      const svg = d3.select(svgRef.current)
      svg.selectAll('*').remove()
      svg.attr('width', W).attr('height', H)

      // Arrow markers per series
      const defs = svg.append('defs')
      Object.entries(SERIES_COLOR).forEach(([series, color]) => {
        defs.append('marker')
          .attr('id', `arrow-${series}`)
          .attr('viewBox', '0 -4 8 8')
          .attr('refX', 14).attr('refY', 0)
          .attr('markerWidth', 4).attr('markerHeight', 4)
          .attr('orient', 'auto')
          .append('path')
          .attr('d', 'M0,-4L8,0L0,4')
          .attr('fill', color)

        defs.append('marker')
          .attr('id', `arrow-${series}-bright`)
          .attr('viewBox', '0 -4 8 8')
          .attr('refX', 14).attr('refY', 0)
          .attr('markerWidth', 5).attr('markerHeight', 5)
          .attr('orient', 'auto')
          .append('path')
          .attr('d', 'M0,-4L8,0L0,4')
          .attr('fill', color)
      })

      const g = svg.append('g')
      gRef.current = g

      // Sim nodes
      const simNodes = allNodes.map(n => ({
        ...n,
        x: W / 2 + (Math.random() - 0.5) * W * 0.7,
        y: DEPTH_Y[n.depth] * H + (Math.random() - 0.5) * 50,
        fx: n.type === 'depth'
          ? ((['d-ontology','d-philosophy','d-structure','d-pattern','d-case'].indexOf(n.id) + 1) / 6) * W
          : undefined,
        fy: n.type === 'depth' ? DEPTH_Y[n.depth] * H : undefined,
      }))

      const idMap = new Map(simNodes.map(n => [n.id, n]))
      nodeById.current = idMap

      const simEdges = allEdges
        .filter(e => idMap.has(e.from) && idMap.has(e.to))
        .map(e => ({ ...e, source: e.from, target: e.to }))

      const sim = d3.forceSimulation(simNodes)
        .force('link', d3.forceLink(simEdges).id(d => d.id)
          .distance(d => {
            const s = typeof d.source === 'object' ? d.source : idMap.get(d.source)
            const t = typeof d.target === 'object' ? d.target : idMap.get(d.target)
            if (!s || !t) return 80
            return (s.type === 'depth' || t.type === 'depth') ? 140 : 70
          })
          .strength(0.35))
        .force('charge', d3.forceManyBody().strength(d =>
          d.type === 'depth' ? -600 : d.type === 'entry' ? -200 : -80))
        .force('x', d3.forceX(W / 2).strength(0.02))
        .force('y', d3.forceY(d => DEPTH_Y[d.depth] * H).strength(0.55))
        .force('collision', d3.forceCollide(d => NODE_RADIUS[d.type] + 8))
        .alphaDecay(0.025)

      simRef.current = sim

      // Edges
      const linkG = g.append('g').attr('class', 'links')
      const link = linkG.selectAll('line')
        .data(simEdges)
        .join('line')
        .attr('class', d => {
          const sNode = idMap.get(typeof d.source === 'object' ? d.source.id : d.source)
          return `edge edge-series-${getSeries(sNode || {})}`
        })
        .attr('stroke', d => {
          const sNode = idMap.get(typeof d.source === 'object' ? d.source.id : d.source)
          return SERIES_COLOR[getSeries(sNode || {})] || '#3a3020'
        })
        .attr('stroke-width', 0.8)
        .attr('stroke-opacity', 0.25)
        .attr('marker-end', d => {
          const sNode = idMap.get(typeof d.source === 'object' ? d.source.id : d.source)
          return `url(#arrow-${getSeries(sNode || {})})`
        })

      // Nodes
      const nodeG = g.append('g').attr('class', 'nodes')
      const nodeEl = nodeG.selectAll('g')
        .data(simNodes)
        .join('g')
        .attr('class', d => `node node-${d.type}`)
        .style('cursor', d => (d.type === 'depth' && d.depth <= 1) ? 'default' : 'pointer')
        .call(d3.drag()
          .on('start', (event, d) => {
            if (!event.active) sim.alphaTarget(0.3).restart()
            d.fx = d.x; d.fy = d.y
          })
          .on('drag', (event, d) => { d.fx = event.x; d.fy = event.y })
          .on('end', (event, d) => {
            if (!event.active) sim.alphaTarget(0)
            if (d.type !== 'depth') { d.fx = null; d.fy = null }
          })
        )
        .on('click', (event, d) => { event.stopPropagation(); handleClick(d) })

      nodeEl.each(function(d) {
        const el = d3.select(this)
        const r = NODE_RADIUS[d.type]
        const color = SERIES_COLOR[getSeries(d)] || '#3a3020'

        if (d.type === 'depth') {
          el.append('circle').attr('r', r)
            .attr('fill', '#1a1714')
            .attr('stroke', color)
            .attr('stroke-width', 1)
            .attr('opacity', 0.7)
          el.append('text')
            .attr('dy', r + 14).attr('text-anchor', 'middle')
            .attr('font-family', "'DM Mono', monospace")
            .attr('font-size', '8px').attr('letter-spacing', '0.1em')
            .attr('fill', color).attr('opacity', 0.6)
            .style('text-transform', 'uppercase').style('pointer-events', 'none')
            .text(d.label.toUpperCase())
        } else if (d.type === 'entry') {
          el.append('circle').attr('r', r)
            .attr('fill', '#2a1410').attr('stroke', color).attr('stroke-width', 1.5)
          el.append('text')
            .attr('dy', r + 12).attr('text-anchor', 'middle')
            .attr('font-family', "'DM Mono', monospace")
            .attr('font-size', '9px').attr('fill', color)
            .style('pointer-events', 'none')
            .text(d.label)
        } else if (d.type === 'diagram') {
          el.append('rect')
            .attr('x', -r).attr('y', -r).attr('width', r * 2).attr('height', r * 2).attr('rx', 2)
            .attr('fill', '#0a2020').attr('stroke', color).attr('stroke-width', 1)
        } else if (d.type === 'edge_node') {
          el.append('circle').attr('r', r)
            .attr('fill', '#1e1a14').attr('stroke', color)
            .attr('stroke-width', 0.8).attr('stroke-dasharray', '2,2')
        } else {
          // claim
          el.append('circle').attr('r', r)
            .attr('fill', '#1e1a14').attr('stroke', color).attr('stroke-width', 1)
        }
      })

      // Tooltip
      const tip = d3.select('body').selectAll('.graph-tip').data([null])
      const tipEl = tip.join('div').attr('class', 'graph-tip')
        .style('position', 'fixed').style('pointer-events', 'none')
        .style('background', 'rgba(14,12,10,0.95)')
        .style('border', '1px solid #3a3020').style('padding', '10px 14px')
        .style('max-width', '260px').style('font-family', "'Lora', Georgia, serif")
        .style('font-size', '12px').style('line-height', '1.6')
        .style('color', '#d0c8b8').style('border-radius', '2px')
        .style('opacity', 0).style('z-index', 9999)
        .style('transition', 'opacity 0.12s')

      nodeEl
        .on('mouseenter', (event, d) => {
          if (d.type === 'depth') return
          const color = SERIES_COLOR[getSeries(d)]
          tipEl.style('opacity', 1)
            .style('left', (event.clientX + 16) + 'px')
            .style('top', (event.clientY - 10) + 'px')
            .html(`
              <div style="font-family:'DM Mono',monospace;font-size:8.5px;letter-spacing:0.1em;text-transform:uppercase;color:${color};margin-bottom:5px">${getSeries(d)} · depth ${d.depth}</div>
              <div style="font-family:'Cormorant Garamond',serif;font-size:13px;font-weight:600;color:#f2ece0;margin-bottom:4px">${d.label}</div>
              <div style="font-size:11.5px;color:#9a8e7a">${d.claim}</div>
            `)
        })
        .on('mousemove', (event) => {
          tipEl.style('left', (event.clientX + 16) + 'px').style('top', (event.clientY - 10) + 'px')
        })
        .on('mouseleave', () => tipEl.style('opacity', 0))

      svg.on('click', () => onSelectNode(null))

      // Zoom
      const zoom = d3.zoom().scaleExtent([0.2, 4])
        .on('zoom', (event) => g.attr('transform', event.transform))
      svg.call(zoom)

      // Tick
      sim.on('tick', () => {
        link
          .attr('x1', d => d.source.x).attr('y1', d => d.source.y)
          .attr('x2', d => d.target.x).attr('y2', d => d.target.y)
        nodeEl.attr('transform', d => `translate(${d.x},${d.y})`)
      })

      // Store refs for highlight updates
      svgRef.current._link = link
      svgRef.current._nodeEl = nodeEl
      svgRef.current._idMap = idMap
      svgRef.current._allEdges = simEdges
    })

    return () => {
      simRef.current?.stop()
      d3.select('body').selectAll('.graph-tip').remove()
    }
  }, []) // build once

  // Highlight update — runs whenever selectedId changes, no re-sim
  useEffect(() => {
    const link = svgRef.current?._link
    const nodeEl = svgRef.current?._nodeEl
    const idMap = svgRef.current?._idMap
    const allEdges = svgRef.current?._allEdges
    if (!link || !nodeEl || !idMap) return

    if (!selectedId) {
      // Reset: all dim
      link
        .attr('stroke-opacity', 0.2)
        .attr('stroke-width', 0.8)
        .attr('marker-end', d => {
          const sNode = idMap.get(typeof d.source === 'object' ? d.source.id : d.source)
          return `url(#arrow-${getSeries(sNode || {})})`
        })
      nodeEl.each(function(d) {
        const el = d3.select(this)
        const r = NODE_RADIUS[d.type]
        el.select('circle').attr('r', d.type === 'claim' ? r : undefined).attr('opacity', 1)
        el.attr('opacity', 1)
      })
      return
    }

    // Build connected set
    const connected = new Set([selectedId])
    allEdges.forEach(e => {
      const sid = typeof e.source === 'object' ? e.source.id : e.source
      const tid = typeof e.target === 'object' ? e.target.id : e.target
      if (sid === selectedId) connected.add(tid)
      if (tid === selectedId) connected.add(sid)
    })

    // Highlight edges
    link
      .attr('stroke-opacity', d => {
        const sid = typeof d.source === 'object' ? d.source.id : d.source
        const tid = typeof d.target === 'object' ? d.target.id : d.target
        if (sid === selectedId || tid === selectedId) return 0.9
        return 0.06
      })
      .attr('stroke-width', d => {
        const sid = typeof d.source === 'object' ? d.source.id : d.source
        const tid = typeof d.target === 'object' ? d.target.id : d.target
        return (sid === selectedId || tid === selectedId) ? 1.6 : 0.8
      })
      .attr('marker-end', d => {
        const sid = typeof d.source === 'object' ? d.source.id : d.source
        const tid = typeof d.target === 'object' ? d.target.id : d.target
        const sNode = idMap.get(sid)
        const bright = (sid === selectedId || tid === selectedId)
        return `url(#arrow-${getSeries(sNode || '')}${bright ? '-bright' : ''})`
      })

    // Highlight nodes
    nodeEl.each(function(d) {
      const el = d3.select(this)
      const isSelected = d.id === selectedId
      const isConnected = connected.has(d.id)
      const isDim = !isSelected && !isConnected && d.type !== 'depth'
      const r = NODE_RADIUS[d.type]

      el.attr('opacity', isDim ? 0.18 : 1)

      if (d.type === 'claim' || d.type === 'entry' || d.type === 'diagram' || d.type === 'edge_node') {
        el.select('circle, rect')
          .attr('stroke-width', isSelected ? 2.5 : isConnected ? 1.5 : 1)
      }
      if (d.type === 'claim') {
        el.select('circle').attr('r', isSelected ? r + 3 : r)
      }
    })
  }, [selectedId])

  return (
    <svg ref={svgRef} style={{ width: '100%', height: '100%', display: 'block' }} />
  )
}
