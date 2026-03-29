import { useState, useCallback, useMemo, useEffect } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Slider from '@mui/material/Slider'
import { useGraph } from './useGraph'
import GraphCanvas from './GraphCanvas'
import NodeDrawer from './NodeDrawer'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#1a1714', paper: '#14120f' },
    text: { primary: '#f2ece0' },
  },
  typography: { fontFamily: "'Lora', Georgia, serif" },
})

const DEPTH_MARKS = [
  { value: 0, label: 'Onto' },
  { value: 1, label: 'Theory' },
  { value: 2, label: 'Structure' },
  { value: 3, label: 'Pattern' },
  { value: 4, label: 'Case' },
]

function getHashId() {
  const h = window.location.hash
  return h.startsWith('#node/') ? h.slice(6) : null
}

function setHashId(id) {
  if (id) {
    window.history.pushState(null, '', '#node/' + id)
  } else {
    window.history.pushState(null, '', window.location.pathname)
  }
}

export default function App() {
  const { nodes, edges, nodeMap, urlToId, getNeighbors, getVisibleNodes, getVisibleEdges, getEntryPath } = useGraph()
  const [selectedId, setSelectedId] = useState(() => getHashId())
  const [depthMax, setDepthMax] = useState(4)

  const handleSelectNode = useCallback((id) => {
    if (!id) {
      setHashId(null)
      setSelectedId(null)
      return
    }
    const node = nodeMap.get(id)
    if (!node) return
    if (node.type === 'depth' && node.depth <= 1) return
    setHashId(id)
    setSelectedId(id)
    if (node.depth > depthMax) setDepthMax(node.depth)
  }, [nodeMap, depthMax])

  useEffect(() => {
    const onPop = () => {
      const id = getHashId()
      setSelectedId(id)
      if (id) {
        const node = nodeMap.get(id)
        if (node && node.depth > depthMax) setDepthMax(node.depth)
      }
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [nodeMap, depthMax])

  const drawerOpen = !!selectedId
  const selectedNode = selectedId ? nodeMap.get(selectedId) : null
  const neighbors = selectedId ? getNeighbors(selectedId) : []

  const visibleNodeIds = useMemo(
    () => getVisibleNodes(selectedId, depthMax).map(n => n.id),
    [selectedId, depthMax, getVisibleNodes]
  )
  const visibleNodes = useMemo(
    () => visibleNodeIds.map(id => nodeMap.get(id)).filter(Boolean),
    [visibleNodeIds, nodeMap]
  )
  const visibleEdges = useMemo(
    () => getVisibleEdges(visibleNodeIds),
    [visibleNodeIds, getVisibleEdges]
  )
  const entryPath = useMemo(() => {
    if (selectedNode?.type === 'entry') return getEntryPath(selectedId)
    return null
  }, [selectedNode, selectedId, getEntryPath])

  const claimCount = nodes.filter(n => n.type === 'claim').length
  const edgeCount = edges.length

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', background: '#1a1714', overflow: 'hidden' }}>

        {/* Top bar */}
        <div style={{ height: 48, flexShrink: 0, display: 'flex', alignItems: 'center', padding: '0 20px', borderBottom: '1px solid #2a2218', background: '#14120f', gap: 20, zIndex: 100 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '17px', fontWeight: 700, color: '#f2ece0', letterSpacing: '-0.01em' }}>
              The Common
            </span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '8.5px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4a4030' }}>
              Argument Graph
            </span>
          </div>

          <div style={{ flex: 1 }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: 320 }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4a4030', whiteSpace: 'nowrap', flexShrink: 0 }}>
              Depth
            </span>
            <Slider
              value={depthMax}
              onChange={(_, v) => setDepthMax(v)}
              min={0} max={4} step={1}
              marks={DEPTH_MARKS}
              size="small"
              sx={{
                color: '#d4604f',
                '& .MuiSlider-track': { border: 'none', height: 1.5 },
                '& .MuiSlider-rail': { color: '#2a2218', height: 1.5 },
                '& .MuiSlider-thumb': { width: 10, height: 10, background: '#d4604f', '&:hover, &.Mui-focusVisible': { boxShadow: '0 0 0 4px rgba(212,96,79,0.15)' } },
                '& .MuiSlider-mark': { background: '#3a3020', width: 2, height: 2 },
                '& .MuiSlider-markLabel': { fontFamily: "'DM Mono', monospace", fontSize: '7.5px', letterSpacing: '0.08em', color: '#4a4030', textTransform: 'uppercase', top: 22 },
                '& .MuiSlider-markLabelActive': { color: '#8a7a60' },
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: 16, flexShrink: 0 }}>
            {[[`${visibleNodes.length}`, 'visible'], [`${claimCount}`, 'claims'], [`${edgeCount}`, 'edges']].map(([val, label]) => (
              <div key={label} style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: '#8a7a60', lineHeight: 1 }}>{val}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '7.5px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3a3020' }}>{label}</div>
              </div>
            ))}
          </div>

          <a href="https://power-explained.jason-edelman.org" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: '8.5px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4a4030', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0 }}>
            power-explained
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
              <path d="M1.5 7.5l6-6M2 1.5h5.5V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Canvas + Drawer */}
        <div style={{ flex: 1, display: 'flex', position: 'relative', overflow: 'hidden' }}>
          <div style={{ flex: 1, transition: 'margin-right 0.3s ease', marginRight: drawerOpen ? 520 : 0, position: 'relative' }}>
            <GraphCanvas
              selectedId={selectedId}
              onSelectNode={handleSelectNode}
              depthMax={depthMax}
              visibleNodes={visibleNodes}
              visibleEdges={visibleEdges}
              entryPath={entryPath}
            />
            {!selectedId && (
              <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', textAlign: 'center', pointerEvents: 'none' }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#3a3020', marginBottom: 6 }}>
                  Click a node to navigate the argument
                </div>
                <div style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '12px', color: '#2a2218', fontStyle: 'italic' }}>
                  Scroll or pinch to zoom · drag to pan
                </div>
              </div>
            )}
          </div>

          <NodeDrawer
            node={selectedNode}
            neighbors={neighbors}
            onSelectNode={handleSelectNode}
            urlToId={urlToId}
            open={drawerOpen}
            onClose={() => handleSelectNode(null)}
          />
        </div>
      </div>
    </ThemeProvider>
  )
}
