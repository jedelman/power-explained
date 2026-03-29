import { useEffect, useRef, useCallback } from 'react'
import * as d3 from 'd3'

const DEPTH_LEVELS = { 0: 0.08, 1: 0.22, 2: 0.42, 3: 0.65, 4: 0.85 }

const NODE_COLOR = {
  depth:     '#2a2520',
  entry:     '#d4604f',
  claim:     '#f2ece0',
  edge_node: '#8a7a60',
  diagram:   '#4a9e9e',
}

const NODE_RADIUS = {
  depth:     28,
  entry:     18,
  claim:     10,
  edge_node: 7,
  diagram:   13,
}

const DEPTH_LABEL_COLOR = {
  0: '#d4604f',
  1: '#c47a60',
  2: '#a09070',
  3: '#706050',
  4: '#504030',
}

export default function GraphCanvas({
  selectedId,
  onSelectNode,
  depthMax,
  visibleNodes,
  visibleEdges,
  entryPath,
}) {
  const svgRef = useRef(null)
  const simRef = useRef(null)
  const renderRef = useRef(null)

  const handleNodeClick = useCallback((node) => {
    if (node.type === 'depth' && node.depth <= 1) return
    onSelectNode(node.id)
  }, [onSelectNode])

  useEffect(() => {
    if (!svgRef.current || !visibleNodes.length) return

    const container = svgRef.current.parentElement
    const W = container.clientWidth
    const H = container.clientHeight

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()
    svg.attr('width', W).attr('height', H)

    // Defs: arrow markers
    const defs = svg.append('defs')
    const mkArrow = (id, color) => {
      defs.append('marker')
        .attr('id', id)
        .attr('viewBox', '0 -4 8 8')
        .attr('refX', 14).attr('refY', 0)
        .attr('markerWidth', 5).attr('markerHeight', 5)
        .attr('orient', 'auto')
        .append('path')
        .attr('d', 'M0,-4L8,0L0,4')
        .attr('fill', color)
    }
    mkArrow('arrow-default', '#4a3f30')
    mkArrow('arrow-selected', '#d4604f')
    mkArrow('arrow-entry', '#d4604f')
    mkArrow('arrow-diagram', '#4a9e9e')

    // Background depth bands (subtle horizontal strips)
    const bandG = svg.append('g').attr('class', 'depth-bands')
    const depthY = (d) => DEPTH_LEVELS[d] * H
    const depthLabels = ['Ontology', 'Theory', 'Structure', 'Pattern', 'Case']
    depthLabels.forEach((label, i) => {
      const y0 = i === 0 ? 0 : (depthY(i - 1) + depthY(i)) / 2
      const y1 = i === 4 ? H : (depthY(i) + depthY(i + 1)) / 2
      bandG.append('rect')
        .attr('x', 0).attr('y', y0)
        .attr('width', W).attr('height', y1 - y0)
        .attr('fill', i % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'rgba(0,0,0,0.0)')

      bandG.append('text')
        .attr('x', 18).attr('y', y0 + 18)
        .attr('fill', DEPTH_LABEL_COLOR[i])
        .attr('font-family', "'DM Mono', monospace")
        .attr('font-size', '9px')
        .attr('letter-spacing', '0.14em')
        .attr('text-transform', 'uppercase')
        .style('text-transform', 'uppercase')
        .attr('opacity', 0.6)
        .text(label.toUpperCase())
    })

    // Build sim nodes with initial y positions
    const simNodes = visibleNodes.map(n => ({
      ...n,
      x: W / 2 + (Math.random() - 0.5) * W * 0.6,
      y: DEPTH_LEVELS[n.depth] * H + (Math.random() - 0.5) * 40,
      fx: n.type === 'depth' ? ((['d-ontology','d-philosophy','d-structure','d-pattern','d-case'].indexOf(n.id) + 1) / 6) * W : undefined,
      fy: n.type === 'depth' ? DEPTH_LEVELS[n.depth] * H : undefined,
    }))

    const nodeById = new Map(simNodes.map(n => [n.id, n]))
    const simEdges = visibleEdges
      .filter(e => nodeById.has(e.from) && nodeById.has(e.to))
      .map(e => ({ source: e.from, target: e.to }))

    // Force simulation
    const sim = d3.forceSimulation(simNodes)
      .force('link', d3.forceLink(simEdges).id(d => d.id).distance(d => {
        const s = nodeById.get(typeof d.source === 'string' ? d.source : d.source.id)
        const t = nodeById.get(typeof d.target === 'string' ? d.target : d.target.id)
        if (!s || !t) return 80
        return (s.type === 'depth' || t.type === 'depth') ? 120 : 80
      }).strength(0.4))
      .force('charge', d3.forceManyBody().strength(d => d.type === 'depth' ? -400 : -120))
      .force('x', d3.forceX(W / 2).strength(0.03))
      .force('y', d3.forceY(d => DEPTH_LEVELS[d.depth] * H).strength(0.6))
      .force('collision', d3.forceCollide(d => NODE_RADIUS[d.type] + 12))
      .alphaDecay(0.03)

    simRef.current = sim

    // Render layers
    const g = svg.append('g')

    // Edges
    const linkG = g.append('g').attr('class', 'links')
    const link = linkG.selectAll('line')
      .data(simEdges)
      .join('line')
      .attr('stroke', d => {
        const s = typeof d.source === 'string' ? d.source : d.source.id
        const t = typeof d.target === 'string' ? d.target : d.target.id
        if (s === selectedId || t === selectedId) return '#d4604f'
        const sNode = nodeById.get(s)
        const tNode = nodeById.get(t)
        if (sNode?.type === 'diagram' || tNode?.type === 'diagram') return '#4a9e9e'
        if (entryPath?.has(s) && entryPath?.has(t)) return '#c47a60'
        return '#3a3020'
      })
      .attr('stroke-width', d => {
        const s = typeof d.source === 'string' ? d.source : d.source.id
        const t = typeof d.target === 'string' ? d.target : d.target.id
        if (s === selectedId || t === selectedId) return 1.5
        return 0.8
      })
      .attr('stroke-opacity', d => {
        const s = typeof d.source === 'string' ? d.source : d.source.id
        const t = typeof d.target === 'string' ? d.target : d.target.id
        if (s === selectedId || t === selectedId) return 0.9
        return 0.35
      })
      .attr('marker-end', d => {
        const s = typeof d.source === 'string' ? d.source : d.source.id
        const t = typeof d.target === 'string' ? d.target : d.target.id
        if (s === selectedId || t === selectedId) return 'url(#arrow-selected)'
        const sNode = nodeById.get(s)
        const tNode = nodeById.get(t)
        if (sNode?.type === 'diagram' || tNode?.type === 'diagram') return 'url(#arrow-diagram)'
        return 'url(#arrow-default)'
      })

    // Node groups
    const nodeG = g.append('g').attr('class', 'nodes')
    const node = nodeG.selectAll('g')
      .data(simNodes)
      .join('g')
      .attr('class', d => `node node-${d.type}`)
      .style('cursor', d => (d.type === 'depth' && d.depth <= 1) ? 'default' : 'pointer')
      .call(d3.drag()
        .on('start', (event, d) => {
          if (!event.active) sim.alphaTarget(0.3).restart()
          d.fx = d.x; d.fy = d.y
        })
        .on('drag', (event, d) => {
          d.fx = event.x; d.fy = event.y
        })
        .on('end', (event, d) => {
          if (!event.active) sim.alphaTarget(0)
          if (d.type !== 'depth') { d.fx = null; d.fy = null }
        })
      )
      .on('click', (event, d) => {
        event.stopPropagation()
        handleNodeClick(d)
      })

    // Node shapes
    node.each(function(d) {
      const el = d3.select(this)
      const r = NODE_RADIUS[d.type]
      const isSelected = d.id === selectedId
      const isInPath = entryPath?.has(d.id)

      if (d.type === 'depth') {
        el.append('circle')
          .attr('r', r)
          .attr('fill', '#1a1714')
          .attr('stroke', DEPTH_LABEL_COLOR[d.depth])
          .attr('stroke-width', 1)
          .attr('opacity', 0.8)
      } else if (d.type === 'entry') {
        el.append('circle')
          .attr('r', r)
          .attr('fill', isSelected ? '#d4604f' : '#3a1a14')
          .attr('stroke', '#d4604f')
          .attr('stroke-width', isSelected ? 2 : 1.5)
      } else if (d.type === 'diagram') {
        el.append('rect')
          .attr('x', -r).attr('y', -r)
          .attr('width', r * 2).attr('height', r * 2)
          .attr('rx', 3)
          .attr('fill', isSelected ? '#4a9e9e' : '#0a2a2a')
          .attr('stroke', '#4a9e9e')
          .attr('stroke-width', isSelected ? 2 : 1)
      } else if (d.type === 'edge_node') {
        el.append('circle')
          .attr('r', r)
          .attr('fill', isSelected ? '#8a7a60' : '#2a2218')
          .attr('stroke', '#8a7a60')
          .attr('stroke-width', isSelected ? 2 : 1)
          .attr('stroke-dasharray', '2,2')
      } else {
        // claim node
        el.append('circle')
          .attr('r', isSelected ? r + 3 : r)
          .attr('fill', isSelected ? '#f2ece0' : (isInPath ? '#3a2e20' : '#2a2218'))
          .attr('stroke', isSelected ? '#f2ece0' : (isInPath ? '#c47a60' : '#5a4e3a'))
          .attr('stroke-width', isSelected ? 2 : 1)
      }

      // Label
      if (d.type === 'depth' || d.type === 'entry' || isSelected || d.type === 'diagram') {
        el.append('text')
          .attr('dy', d.type === 'depth' ? 40 : (isSelected ? NODE_RADIUS[d.type] + 14 : NODE_RADIUS[d.type] + 12))
          .attr('text-anchor', 'middle')
          .attr('font-family', d.type === 'depth' ? "'DM Mono', monospace" : "'Cormorant Garamond', Georgia, serif")
          .attr('font-size', d.type === 'depth' ? '8px' : (isSelected ? '11px' : '9.5px'))
          .attr('font-weight', d.type === 'depth' ? '500' : (isSelected ? '600' : '400'))
          .attr('fill', d.type === 'depth' ? DEPTH_LABEL_COLOR[d.depth] :
                        d.type === 'entry' ? '#f2a090' :
                        d.type === 'diagram' ? '#4a9e9e' :
                        isSelected ? '#f2ece0' : '#a09080')
          .attr('letter-spacing', d.type === 'depth' ? '0.1em' : '0')
          .style('pointer-events', 'none')
          .text(d.label.length > 22 ? d.label.slice(0, 20) + '…' : d.label)
      }
    })

    // Hover tooltip
    const tooltip = d3.select('body').selectAll('.graph-tooltip').data([null])
    const tooltipEl = tooltip.join('div')
      .attr('class', 'graph-tooltip')
      .style('position', 'fixed')
      .style('pointer-events', 'none')
      .style('background', '#1a1714')
      .style('border', '1px solid #3a3020')
      .style('padding', '10px 14px')
      .style('max-width', '280px')
      .style('font-family', "'Lora', Georgia, serif")
      .style('font-size', '12px')
      .style('line-height', '1.6')
      .style('color', '#d0c8b8')
      .style('border-radius', '2px')
      .style('opacity', 0)
      .style('z-index', 9999)
      .style('transition', 'opacity 0.15s')

    node
      .on('mouseenter', (event, d) => {
        if (d.type === 'depth') return
        tooltipEl
          .style('opacity', 1)
          .style('left', (event.clientX + 16) + 'px')
          .style('top', (event.clientY - 10) + 'px')
          .html(`<div style="font-family:'DM Mono',monospace;font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:#8a7a60;margin-bottom:6px">${d.type} · depth ${d.depth}</div><div style="font-family:'Cormorant Garamond',serif;font-size:13px;font-weight:600;color:#f2ece0;margin-bottom:4px">${d.label}</div><div>${d.claim}</div>`)
      })
      .on('mousemove', (event) => {
        tooltipEl
          .style('left', (event.clientX + 16) + 'px')
          .style('top', (event.clientY - 10) + 'px')
      })
      .on('mouseleave', () => {
        tooltipEl.style('opacity', 0)
      })

    // Click on background to deselect
    svg.on('click', () => onSelectNode(null))

    // Zoom + pan
    const zoom = d3.zoom()
      .scaleExtent([0.3, 3])
      .on('zoom', (event) => g.attr('transform', event.transform))
    svg.call(zoom)

    // Tick
    sim.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y)
      node.attr('transform', d => `translate(${d.x},${d.y})`)
    })

    renderRef.current = { svg, sim, node, link }

    return () => {
      sim.stop()
      d3.select('body').selectAll('.graph-tooltip').remove()
    }
  }, [visibleNodes, visibleEdges, selectedId, entryPath, handleNodeClick, onSelectNode])

  return (
    <svg
      ref={svgRef}
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  )
}
