import { useEffect, useRef, useState, useCallback } from 'react'
import Drawer from '@mui/material/Drawer'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { POWER_EXPLAINED_BASE } from './config'

const TYPE_LABEL = {
  claim:     'Claim',
  entry:     'Entry Point',
  edge_node: 'Relation',
  diagram:   'Diagram',
  depth:     'Terrain',
}

const TYPE_COLOR = {
  claim:     '#a09080',
  entry:     '#d4604f',
  edge_node: '#8a7a60',
  diagram:   '#4a9e9e',
  depth:     '#606050',
}

const DEPTH_LABEL = ['Ontology', 'Theory', 'Structure', 'Pattern', 'Case']

export default function NodeDrawer({ node, neighbors, onSelectNode, urlToId, open, onClose }) {
  const iframeRef = useRef(null)
  const [articleLoading, setArticleLoading] = useState(false)
  const [articleError, setArticleError] = useState(false)
  const [articleHtml, setArticleHtml] = useState(null)
  const contentRef = useRef(null)

  // Fetch and extract article body when node changes
  useEffect(() => {
    if (!node?.body_url) {
      setArticleHtml(null)
      setArticleError(false)
      return
    }
    setArticleLoading(true)
    setArticleError(false)
    setArticleHtml(null)

    const url = node.type === 'diagram'
      ? POWER_EXPLAINED_BASE + node.body_url
      : POWER_EXPLAINED_BASE + node.body_url

    fetch(url)
      .then(r => {
        if (!r.ok) throw new Error('not found')
        return r.text()
      })
      .then(html => {
        // Parse and extract article body
        const parser = new DOMParser()
        const doc = parser.parseFromString(html, 'text/html')
        // Try article > main > body in order
        const body =
          doc.querySelector('article') ||
          doc.querySelector('main') ||
          doc.querySelector('.article-body') ||
          doc.querySelector('.content') ||
          doc.body

        // Remove nav, header, footer, script, style
        body.querySelectorAll('nav, header, footer, script, style, .nav, .header, .footer, .back-link').forEach(el => el.remove())

        // Extract the first h1 as title (we already have it as node.label)
        const h1 = body.querySelector('h1')
        if (h1) h1.remove()

        setArticleHtml(body.innerHTML)
        setArticleLoading(false)
      })
      .catch(() => {
        setArticleError(true)
        setArticleLoading(false)
      })
  }, [node?.id, node?.body_url])

  // Intercept internal link clicks in article body
  useEffect(() => {
    if (!contentRef.current || !articleHtml) return
    const el = contentRef.current

    const handleClick = (e) => {
      const anchor = e.target.closest('a[href]')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href) return

      // Internal link: matches an article filename
      const filename = href.replace(/^\.\//, '').replace(/^\//, '')
      const targetId = urlToId.get(filename)
      if (targetId) {
        e.preventDefault()
        onSelectNode(targetId)
        return
      }
      // External: open in new tab
      if (href.startsWith('http')) {
        e.preventDefault()
        window.open(href, '_blank', 'noopener')
      }
    }

    el.addEventListener('click', handleClick)
    return () => el.removeEventListener('click', handleClick)
  }, [articleHtml, urlToId, onSelectNode])

  // Group neighbors by type
  const grouped = useCallback(() => {
    if (!neighbors?.length) return {}
    return neighbors.reduce((acc, n) => {
      const k = n.type || 'claim'
      if (!acc[k]) acc[k] = []
      acc[k].push(n)
      return acc
    }, {})
  }, [neighbors])()

  if (!node) return null

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      variant="persistent"
      PaperProps={{
        sx: {
          width: { xs: '100vw', sm: 480, md: 520 },
          background: '#14120f',
          borderLeft: '1px solid #2a2218',
          color: '#f2ece0',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }
      }}
      ModalProps={{ keepMounted: true }}
    >
      {/* Header */}
      <div style={{
        padding: '20px 24px 16px',
        borderBottom: '1px solid #2a2218',
        flexShrink: 0,
        background: '#14120f',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}>
        {/* Close + type badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '9px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: TYPE_COLOR[node.type] || '#8a7a60',
              background: 'rgba(255,255,255,0.04)',
              padding: '3px 8px',
              borderRadius: 2,
              border: `1px solid ${TYPE_COLOR[node.type]}33`,
            }}>
              {TYPE_LABEL[node.type] || node.type}
            </span>
            <span style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '9px',
              letterSpacing: '0.1em',
              color: '#4a4030',
              textTransform: 'uppercase',
            }}>
              depth {node.depth} · {DEPTH_LABEL[node.depth]}
            </span>
          </div>
          <Tooltip title="Close" placement="left">
            <IconButton
              onClick={onClose}
              size="small"
              sx={{
                color: '#5a4e3a',
                '&:hover': { color: '#f2ece0', background: 'rgba(255,255,255,0.05)' }
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </IconButton>
          </Tooltip>
        </div>

        {/* Claim */}
        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '22px',
          fontWeight: 600,
          lineHeight: 1.25,
          color: '#f2ece0',
          marginBottom: 10,
          letterSpacing: '-0.01em',
        }}>
          {node.label}
        </h2>
        <p style={{
          fontFamily: "'Lora', Georgia, serif",
          fontSize: '13.5px',
          lineHeight: 1.65,
          color: '#9a8e7a',
          fontStyle: 'italic',
        }}>
          {node.claim}
        </p>
      </div>

      {/* Connected nodes */}
      {neighbors?.length > 0 && (
        <div style={{
          padding: '14px 24px',
          borderBottom: '1px solid #1e1c18',
          flexShrink: 0,
        }}>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '8.5px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#4a4030',
            marginBottom: 10,
          }}>
            Connected · {neighbors.length} nodes
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {neighbors.map(n => (
              <Chip
                key={n.id}
                label={n.label}
                size="small"
                onClick={() => onSelectNode(n.id)}
                sx={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '10px',
                  background: 'rgba(255,255,255,0.04)',
                  color: TYPE_COLOR[n.type] || '#a09080',
                  border: `1px solid ${TYPE_COLOR[n.type]}33`,
                  borderRadius: '3px',
                  height: 24,
                  cursor: 'pointer',
                  '& .MuiChip-label': { px: 1.2 },
                  '&:hover': {
                    background: 'rgba(255,255,255,0.08)',
                    color: '#f2ece0',
                  },
                  transition: 'all 0.15s',
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Article body */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px 40px' }}>
        {node.type === 'diagram' && node.body_url && (
          <div style={{ marginBottom: 16 }}>
            <a
              href={POWER_EXPLAINED_BASE + node.body_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '10px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#4a9e9e',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '8px 14px',
                border: '1px solid #4a9e9e44',
                borderRadius: 2,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Open interactive diagram
            </a>
          </div>
        )}

        {articleLoading && (
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '10px',
            color: '#4a4030',
            letterSpacing: '0.1em',
            padding: '20px 0',
          }}>
            Loading…
          </div>
        )}

        {articleError && !articleLoading && (
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '10px',
            color: '#5a3a30',
            letterSpacing: '0.1em',
            padding: '20px 0',
          }}>
            Article not yet available in this environment.
            {node.body_url && (
              <div style={{ marginTop: 8 }}>
                <a
                  href={POWER_EXPLAINED_BASE + node.body_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#d4604f', textDecoration: 'none' }}
                >
                  Open on power-explained →
                </a>
              </div>
            )}
          </div>
        )}

        {articleHtml && !articleLoading && (
          <div
            ref={contentRef}
            dangerouslySetInnerHTML={{ __html: articleHtml }}
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: '15px',
              lineHeight: 1.8,
              color: '#c8bfaa',
            }}
            className="article-content"
          />
        )}

        {!node.body_url && !articleLoading && (
          <div style={{
            fontFamily: "'Lora', Georgia, serif",
            fontSize: '14px',
            color: '#5a4e3a',
            fontStyle: 'italic',
            padding: '10px 0',
          }}>
            This node is structural — no article attached.
          </div>
        )}
      </div>

      {/* Article content styles injected */}
      <style>{`
        .article-content h1,
        .article-content h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 600;
          color: #f2ece0;
          margin: 1.8em 0 0.6em;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }
        .article-content h1 { font-size: 20px; }
        .article-content h2 { font-size: 17px; }
        .article-content h3 {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6a5e4a;
          margin: 1.6em 0 0.5em;
        }
        .article-content p { margin-bottom: 1.1em; }
        .article-content a {
          color: #c47a60;
          text-decoration: none;
          border-bottom: 1px solid #c47a6033;
          transition: border-color 0.15s, color 0.15s;
        }
        .article-content a:hover {
          color: #f2a090;
          border-bottom-color: #f2a09066;
        }
        .article-content blockquote {
          border-left: 2px solid #3a2e20;
          margin: 1.2em 0;
          padding: 0.5em 0 0.5em 1.2em;
          color: #8a7a60;
          font-style: italic;
        }
        .article-content ul, .article-content ol {
          padding-left: 1.4em;
          margin-bottom: 1em;
        }
        .article-content li { margin-bottom: 0.4em; }
        .article-content strong { color: #d8ceb8; font-weight: 700; }
        .article-content hr {
          border: none;
          border-top: 1px solid #2a2218;
          margin: 1.8em 0;
        }
        .article-content .label,
        .article-content .tag,
        .article-content .mono {
          font-family: 'DM Mono', monospace;
          font-size: 0.82em;
        }
      `}</style>
    </Drawer>
  )
}
