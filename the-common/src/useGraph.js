import { useMemo } from 'react'
import graphData from './graph.json'

export function useGraph() {
  return useMemo(() => {
    const nodes = graphData.nodes
    const edges = graphData.edges

    // Build adjacency: nodeId → Set of connected nodeIds
    const adjacency = new Map()
    nodes.forEach(n => adjacency.set(n.id, new Set()))
    edges.forEach(e => {
      adjacency.get(e.from)?.add(e.to)
      adjacency.get(e.to)?.add(e.from)
    })

    // nodeId → node object
    const nodeMap = new Map(nodes.map(n => [n.id, n]))

    // bodyUrl → nodeId (for link interception)
    const urlToId = new Map()
    nodes.forEach(n => {
      if (n.body_url) urlToId.set(n.body_url, n.id)
    })

    function getNeighbors(nodeId) {
      const ids = adjacency.get(nodeId) || new Set()
      return [...ids].map(id => nodeMap.get(id)).filter(Boolean)
    }

    function getVisibleNodes(selectedId, depthMax) {
      if (!selectedId) {
        // No selection: show depth nodes + entries
        return nodes.filter(n => n.type === 'depth' || n.type === 'entry')
      }
      const visible = new Set([selectedId])
      const neighbors = adjacency.get(selectedId) || new Set()
      neighbors.forEach(id => visible.add(id))
      // Also include depth terrain nodes always
      nodes.forEach(n => {
        if (n.type === 'depth') visible.add(n.id)
      })
      return [...visible]
        .map(id => nodeMap.get(id))
        .filter(Boolean)
        .filter(n => n.depth <= depthMax)
    }

    function getVisibleEdges(visibleNodeIds) {
      const vis = new Set(visibleNodeIds)
      return edges.filter(e => vis.has(e.from) && vis.has(e.to))
    }

    // For entry nodes: get the full highlighted path subgraph
    function getEntryPath(entryNodeId) {
      const node = nodeMap.get(entryNodeId)
      if (!node || node.type !== 'entry') return new Set()
      return new Set(node.path_ids || [])
    }

    return { nodes, edges, nodeMap, urlToId, getNeighbors, getVisibleNodes, getVisibleEdges, getEntryPath }
  }, [])
}
