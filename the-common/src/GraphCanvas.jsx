import { useEffect, useRef, useCallback } from 'react'
import * as d3 from 'd3'

const DEPTH_Y = { 0: 0.08, 1: 0.22, 2: 0.42, 3: 0.65, 4: 0.85 }

function getSeries(node) {
  const id = node.id || ''
  if (node.type === 'depth')   return 'terrain'
  if (node.type === 'diagram') return 'diagram'
  if (node.type === 'entry')   return 'entry'
  if (id.startsWith('en-'))    return 'relation'
  if (id.startsWith('case-'))  return 'case'
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

// Zoom thresholds for label visibility
const ZOOM_LABELS_ENTRY  = 0.55  // show entry + depth labels
const ZOOM_LABELS_ALL    = 1.1   // show all labels (short)
const ZOOM_LABELS_FULL   = 2.0   // show full label text

function getLabelText(d, k) {
  if (k >= ZOOM_LABELS_FULL) return d.label
  if (k >= ZOOM_LABELS_ALL)  return d.label.length > 18 ? d.label.slice(0, 16) + '…' : d.label
  // entry/depth only at low zoom
  return d.label.length > 14 ? d.label.slice(0, 12) + '…' : d.label
}

export default function GraphCanvas({ selectedId, onSelectNode, entryPath }) {
  const svgRef = useRef(null)
  const handleClick = useCallback((node) => {
    if (node.type === 'depth' && node.depth <= 1) return
    onSelectNode(node.id)
  }, [onSelectNode])

  useEffect(() => {
    if (!svgRef.current) return

    import('./graph.json').then(mod => {
      const graphData = mod.default
      const allNodes  = graphData.nodes
      const allEdges  = graphData.edges

      const container = svgRef.current.parentElement
      const W = container.clientWidth
      const H = container.clientHeight

      const svg = d3.select(svgRef.current)
      svg.selectAll('*').remove()
      svg.attr('width', W).attr('height', H)

      // Arrow markers
      const defs = svg.append('defs')
      Object.entries(SERIES_COLOR).forEach(([series, color]) => {
        ;['', '-bright'].forEach(suffix => {
          defs.append('marker')
            .attr('id', `arrow-${series}${suffix}`)
            .attr('viewBox', '0 -4 8 8')
            .attr('refX', 14).attr('refY', 0)
            .attr('markerWidth', suffix ? 5 : 4)
            .attr('markerHeight', suffix ? 5 : 4)
            .attr('orient', 'auto')
            .append('path').attr('d', 'M0,-4L8,0L0,4').attr('fill', color)
        })
      })

      const g = svg.append('g')

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

      const simEdges = allEdges
        .filter(e => idMap.has(e.from) && idMap.has(e.to))
        .map(e => ({ ...e, source: e.from, target: e.to }))

      const sim = d3.forceSimulation(simNodes)
        .force('link', d3.forceLink(simEdges).id(d => d.id)
          .distance(d => {
            const s = typeof d.source === 'object' ? d.source : idMap.get(d.source)
            const t = typeof d.target === 'object' ? d.target : idMap.get(d.target)
            return (s?.type === 'depth' || t?.type === 'depth') ? 140 : 70
          }).strength(0.35))
        .force('charge', d3.forceManyBody().strength(d =>
          d.type === 'depth' ? -600 : d.type === 'entry' ? -200 : -80))
        .force('x', d3.forceX(W / 2).strength(0.02))
        .force('y', d3.forceY(d => DEPTH_Y[d.depth] * H).strength(0.55))
        .force('collision', d3.forceCollide(d => NODE_RADIUS[d.type] + 8))
        .alphaDecay(0.025)

      // Edges
      const linkG = g.append('g').attr('class', 'links')
      const link = linkG.selectAll('line').data(simEdges).join('line')
        .attr('stroke', d => {
          const sNode = idMap.get(typeof d.source === 'object' ? d.source.id : d.source)
          return SERIES_COLOR[getSeries(sNode || {})] || '#3a3020'
        })
        .attr('stroke-width', 0.8)
        .attr('stroke-opacity', 0.22)
        .attr('marker-end', d => {
          const sNode = idMap.get(typeof d.source === 'object' ? d.source.id : d.source)
          return `url(#arrow-${getSeries(sNode || {})})`
        })

      // Node groups
      const nodeG = g.append('g').attr('class', 'nodes')
      const nodeEl = nodeG.selectAll('g').data(simNodes).join('g')
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

      // Draw node shapes + labels
      nodeEl.each(function(d) {
        const el    = d3.select(this)
        const r     = NODE_RADIUS[d.type]
        const color = SERIES_COLOR[getSeries(d)] || '#3a3020'

        // Shape
        if (d.type === 'depth') {
          el.append('circle').attr('r', r)
            .attr('fill', '#1a1714').attr('stroke', color)
            .attr('stroke-width', 1).attr('opacity', 0.7)
        } else if (d.type === 'entry') {
          el.append('circle').attr('r', r)
            .attr('fill', '#2a1410').attr('stroke', color).attr('stroke-width', 1.5)
        } else if (d.type === 'diagram') {
          el.append('rect')
            .attr('x', -r).attr('y', -r).attr('width', r*2).attr('height', r*2).attr('rx', 2)
            .attr('fill', '#0a2020').attr('stroke', color).attr('stroke-width', 1)
        } else if (d.type === 'edge_node') {
          el.append('circle').attr('r', r)
            .attr('fill', '#1e1a14').attr('stroke', color)
            .attr('stroke-width', 0.8).attr('stroke-dasharray', '2,2')
        } else {
          el.append('circle').attr('r', r)
            .attr('fill', '#1e1a14').attr('stroke', color).attr('stroke-width', 1)
        }

        // Label — initially hidden, zoom handler controls visibility
        el.append('text')
          .attr('class', 'node-label')
          .attr('dy', r + 12)
          .attr('text-anchor', 'middle')
          .attr('font-family', d.type === 'depth'
            ? "'DM Mono', monospace"
            : "'Cormorant Garamond', Georgia, serif")
          .attr('font-size', d.type === 'depth' ? '8px' : '10px')
          .attr('font-weight', d.type === 'entry' ? '600' : '400')
          .attr('fill', color)
          .attr('opacity', 0)
          .style('pointer-events', 'none')
          .style('text-transform', d.type === 'depth' ? 'uppercase' : 'none')
          .attr('letter-spacing', d.type === 'depth' ? '0.1em' : '0')
          .text(d.label)
      })

      // Tooltip
      const tip = d3.select('body').selectAll('.graph-tip').data([null])
      const tipEl = tip.join('div').attr('class', 'graph-tip')
        .style('position', 'fixed').style('pointer-events', 'none')
        .style('background', 'rgba(14,12,10,0.96)')
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

      // Zoom — updates transform AND label visibility
      let currentK = 1
      const zoom = d3.zoom().scaleExtent([0.15, 5])
        .on('zoom', (event) => {
          g.attr('transform', event.transform)
          const k = event.transform.k
          if (Math.abs(k - currentK) < 0.04) return  // skip tiny changes
          currentK = k
          updateLabels(k)
        })
      svg.call(zoom)

      function updateLabels(k) {
        nodeEl.each(function(d) {
          const el = d3.select(this)
          const label = el.select('.node-label')

          // Determine if this node should show label at this zoom
          let show = false
          if (k >= ZOOM_LABELS_ALL) {
            show = true  // all nodes
          } else if (k >= ZOOM_LABELS_ENTRY) {
            show = d.type === 'entry' || d.type === 'depth'
          }
          // edge_nodes only at high zoom — they clutter at medium
          if (d.type === 'edge_node' && k < ZOOM_LABELS_FULL) show = false

          if (!show) {
            label.attr('opacity', 0)
            return
          }

          const text = getLabelText(d, k)
          // Scale label size inversely with zoom so text stays legible, not giant
          const baseFontSize = d.type === 'depth' ? 8 : 10
          const scaledSize = Math.max(7, Math.min(13, baseFontSize / k))

          label
            .attr('opacity', d.type === 'depth' ? 0.55 : 0.85)
            .attr('font-size', scaledSize + 'px')
            .attr('dy', (NODE_RADIUS[d.type] + 12) / k)  // keep label below node
            .text(text)
        })
      }

      // Tick
      sim.on('tick', () => {
        link
          .attr('x1', d => d.source.x).attr('y1', d => d.source.y)
          .attr('x2', d => d.target.x).attr('y2', d => d.target.y)
        nodeEl.attr('transform', d => `translate(${d.x},${d.y})`)
      })

      // Store refs for highlight updates
      svgRef.current._link    = link
      svgRef.current._nodeEl  = nodeEl
      svgRef.current._idMap   = idMap
      svgRef.current._edges   = simEdges
    })

    return () => {
      d3.select('body').selectAll('.graph-tip').remove()
    }
  }, []) // build once

  // Highlight update on selectedId change
  useEffect(() => {
    const link   = svgRef.current?._link
    const nodeEl = svgRef.current?._nodeEl
    const idMap  = svgRef.current?._idMap
    const edges  = svgRef.current?._edges
    if (!link || !nodeEl || !idMap) return

    if (!selectedId) {
      link.attr('stroke-opacity', 0.22).attr('stroke-width', 0.8)
        .attr('marker-end', d => {
          const sNode = idMap.get(typeof d.source === 'object' ? d.source.id : d.source)
          return `url(#arrow-${getSeries(sNode || {})})`
        })
      nodeEl.attr('opacity', 1)
        .each(function(d) {
          d3.select(this).select('circle, rect')
            .attr('stroke-width', d.type === 'entry' ? 1.5 : d.type === 'depth' ? 1 : 1)
        })
      return
    }

    const connected = new Set([selectedId])
    edges.forEach(e => {
      const sid = typeof e.source === 'object' ? e.source.id : e.source
      const tid = typeof e.target === 'object' ? e.target.id : e.target
      if (sid === selectedId) connected.add(tid)
      if (tid === selectedId) connected.add(sid)
    })

    link
      .attr('stroke-opacity', d => {
        const sid = typeof d.source === 'object' ? d.source.id : d.source
        const tid = typeof d.target === 'object' ? d.target.id : d.target
        return (sid === selectedId || tid === selectedId) ? 0.9 : 0.05
      })
      .attr('stroke-width', d => {
        const sid = typeof d.source === 'object' ? d.source.id : d.source
        const tid = typeof d.target === 'object' ? d.target.id : d.target
        return (sid === selectedId || tid === selectedId) ? 1.8 : 0.8
      })
      .attr('marker-end', d => {
        const sid = typeof d.source === 'object' ? d.source.id : d.source
        const tid = typeof d.target === 'object' ? d.target.id : d.target
        const sNode = idMap.get(sid)
        const bright = sid === selectedId || tid === selectedId
        return `url(#arrow-${getSeries(sNode || {})}${bright ? '-bright' : ''})`
      })

    nodeEl.attr('opacity', d =>
      d.id === selectedId || connected.has(d.id) || d.type === 'depth' ? 1 : 0.15
    )
    .each(function(d) {
      const isSelected  = d.id === selectedId
      const isConnected = connected.has(d.id)
      d3.select(this).select('circle, rect')
        .attr('stroke-width', isSelected ? 2.5 : isConnected ? 1.5 : 1)
    })
  }, [selectedId])

  return (
    <svg ref={svgRef} style={{ width: '100%', height: '100%', display: 'block' }} />
  )
}
