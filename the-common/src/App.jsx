import { useState, useCallback, useEffect } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
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
  const { nodes, edges, nodeMap, urlToId, getNeighbors, getEntryPath } = useGraph()
  const [selectedId, setSelectedId] = useState(() => getHashId())

  const handleSelectNode = useCallback((id) => {
    if (!id) { setHashId(null); setSelectedId(null); return }
    const node = nodeMap.get(id)
    if (!node) return
    if (node.type === 'depth' && node.depth <= 1) return
    setHashId(id)
    setSelectedId(id)
  }, [nodeMap])

  useEffect(() => {
    const onPop = () => setSelectedId(getHashId())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const drawerOpen = !!selectedId
  const selectedNode = selectedId ? nodeMap.get(selectedId) : null
  const neighbors = selectedId ? getNeighbors(selectedId) : []
  const entryPath = selectedNode?.type === 'entry' ? getEntryPath(selectedId) : null

  const claimCount = nodes.filter(n => n.type === 'claim').length

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', background: '#1a1714', overflow: 'hidden' }}>

        {/* Top bar */}
        <div style={{ height: 46, flexShrink: 0, display: 'flex', alignItems: 'center', padding: '0 20px', borderBottom: '1px solid #2a2218', background: '#14120f', gap: 20, zIndex: 100 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '17px', fontWeight: 700, color: '#f2ece0', letterSpacing: '-0.01em' }}>
              The Common
            </span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '8.5px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4a4030' }}>
              Argument Graph
            </span>
          </div>

          <div style={{ flex: 1 }} />

          {/* Series legend */}
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexShrink: 0 }}>
            {[
              ['#c4604a', 'Core'],
              ['#4a72c4', 'Urban'],
              ['#4a9e5a', 'Env'],
              ['#9e5ab8', 'Social justice'],
              ['#3ab8b8', 'Tech'],
              ['#c49a3a', 'Cases'],
              ['#7ab84a', 'Build'],
              ['#c47a3a', 'Libertarian'],
            ].map(([color, label]) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: color, flexShrink: 0 }} />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#4a4030' }}>{label}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 14, flexShrink: 0, marginLeft: 8 }}>
            {[[`${claimCount}`, 'claims'], [`${edges.length}`, 'edges']].map(([val, label]) => (
              <div key={label} style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: '#8a7a60', lineHeight: 1 }}>{val}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '7px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3a3020' }}>{label}</div>
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
              entryPath={entryPath}
            />
            {!selectedId && (
              <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', textAlign: 'center', pointerEvents: 'none' }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#3a3020', marginBottom: 5 }}>
                  Click a node to navigate the argument
                </div>
                <div style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '11px', color: '#2a2218', fontStyle: 'italic' }}>
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
