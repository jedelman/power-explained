import { useEffect, useRef, useState, useCallback } from 'react'
import Drawer from '@mui/material/Drawer'
import Chip from '@mui/material/Chip'
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
  const contentRef = useRef(null)
  const [articleLoading, setArticleLoading] = useState(false)
  const [articleError, setArticleError] = useState(false)
  const [articleHtml, setArticleHtml] = useState(null)

  useEffect(() => {
    if (!node?.body_url) { setArticleHtml(null); setArticleError(false); return }
    setArticleLoading(true); setArticleError(false); setArticleHtml(null)

    fetch(POWER_EXPLAINED_BASE + node.body_url)
      .then(r => { if (!r.ok) throw new Error(); return r.text() })
      .then(html => {
        const doc = new DOMParser().parseFromString(html, 'text/html')
        const body = doc.querySelector('article') || doc.querySelector('main') || doc.body
        body.querySelectorAll('nav, header, footer, script, style, .nav, .header, .footer, .back-link').forEach(el => el.remove())
        const h1 = body.querySelector('h1')
        if (h1) h1.remove()
        setArticleHtml(body.innerHTML)
        setArticleLoading(false)
      })
      .catch(() => { setArticleError(true); setArticleLoading(false) })
  }, [node?.id, node?.body_url])

  useEffect(() => {
    if (!contentRef.current || !articleHtml) return
    const el = contentRef.current
    const handleClick = (e) => {
      const anchor = e.target.closest('a[href]')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href) return
      const filename = href.replace(/^\.\//, '').replace(/^\//, '')
      const targetId = urlToId.get(filename)
      if (targetId) { e.preventDefault(); onSelectNode(targetId); return }
      if (href.startsWith('http')) { e.preventDefault(); window.open(href, '_blank', 'noopener') }
    }
    el.addEventListener('click', handleClick)
    return () => el.removeEventListener('click', handleClick)
  }, [articleHtml, urlToId, onSelectNode])

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
          background: 'rgba(16, 13, 10, 0.88)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderLeft: '1px solid rgba(255,255,255,0.06)',
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
        padding: '16px 20px 14px',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        flexShrink: 0,
        background: 'rgba(10,8,6,0.5)',
      }}>
        {/* Type badge + depth + CLOSE */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase',
              color: TYPE_COLOR[node.type] || '#8a7a60',
              background: 'rgba(255,255,255,0.05)',
              padding: '3px 8px', borderRadius: 2,
              border: `1px solid ${TYPE_COLOR[node.type]}33`,
            }}>
              {TYPE_LABEL[node.type] || node.type}
            </span>
            <span style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              letterSpacing: '0.1em', color: '#3a3020', textTransform: 'uppercase',
            }}>
              depth {node.depth} · {DEPTH_LABEL[node.depth]}
            </span>
          </div>

          {/* Close button — large, obvious */}
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: 'rgba(212,96,79,0.12)',
              border: '1px solid rgba(212,96,79,0.35)',
              borderRadius: 3, padding: '5px 10px',
              color: '#d4604f', cursor: 'pointer',
              fontFamily: "'DM Mono', monospace",
              fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase',
              transition: 'all 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(212,96,79,0.25)'
              e.currentTarget.style.borderColor = 'rgba(212,96,79,0.7)'
              e.currentTarget.style.color = '#f2a090'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(212,96,79,0.12)'
              e.currentTarget.style.borderColor = 'rgba(212,96,79,0.35)'
              e.currentTarget.style.color = '#d4604f'
            }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1.5 1.5l7 7M8.5 1.5l-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Close
          </button>
        </div>

        {/* Claim */}
        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '21px', fontWeight: 600, lineHeight: 1.25,
          color: '#f2ece0', marginBottom: 9, letterSpacing: '-0.01em',
        }}>
          {node.label}
        </h2>
        <p style={{
          fontFamily: "'Lora', Georgia, serif",
          fontSize: '13px', lineHeight: 1.65,
          color: '#7a7060', fontStyle: 'italic',
        }}>
          {node.claim}
        </p>
      </div>

      {/* Connected nodes */}
      {neighbors?.length > 0 && (
        <div style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255,255,255,0.04)', flexShrink: 0 }}>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: '8px',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: '#3a3020', marginBottom: 8,
          }}>
            Connected · {neighbors.length}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
            {neighbors.map(n => (
              <Chip
                key={n.id}
                label={n.label}
                size="small"
                onClick={() => onSelectNode(n.id)}
                sx={{
                  fontFamily: "'DM Mono', monospace", fontSize: '10px',
                  background: 'rgba(255,255,255,0.04)',
                  color: TYPE_COLOR[n.type] || '#a09080',
                  border: `1px solid ${TYPE_COLOR[n.type]}33`,
                  borderRadius: '3px', height: 24, cursor: 'pointer',
                  '& .MuiChip-label': { px: 1.2 },
                  '&:hover': { background: 'rgba(255,255,255,0.09)', color: '#f2ece0' },
                  transition: 'all 0.15s',
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Article body */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '18px 22px 48px' }}>
        {node.type === 'diagram' && node.body_url && (
          <div style={{ marginBottom: 16 }}>
            <a
              href={POWER_EXPLAINED_BASE + node.body_url}
              target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Mono', monospace", fontSize: '10px',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: '#4a9e9e', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '8px 14px',
                border: '1px solid rgba(74,158,158,0.3)', borderRadius: 2,
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
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#3a3020', letterSpacing: '0.1em', padding: '20px 0' }}>
            Loading…
          </div>
        )}

        {articleError && !articleLoading && (
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#5a3a30', letterSpacing: '0.1em', padding: '20px 0' }}>
            Article not available in this environment.
            {node.body_url && (
              <div style={{ marginTop: 8 }}>
                <a href={POWER_EXPLAINED_BASE + node.body_url} target="_blank" rel="noopener noreferrer"
                  style={{ color: '#d4604f', textDecoration: 'none' }}>
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
            className="article-content"
          />
        )}

        {!node.body_url && !articleLoading && (
          <div style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '14px', color: '#3a3020', fontStyle: 'italic', padding: '10px 0' }}>
            This node is structural — no article attached.
          </div>
        )}
      </div>

      <style>{`
        .article-content {
          font-family: 'Lora', Georgia, serif;
          font-size: 15px;
          line-height: 1.8;
          color: #b8b0a0;
        }
        .article-content h1, .article-content h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 600; color: #e8e0d0;
          margin: 1.8em 0 0.6em; line-height: 1.2; letter-spacing: -0.01em;
        }
        .article-content h1 { font-size: 19px; }
        .article-content h2 { font-size: 16px; }
        .article-content h3 {
          font-family: 'DM Mono', monospace; font-size: 9.5px;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #4a4030; margin: 1.6em 0 0.5em;
        }
        .article-content p { margin-bottom: 1.1em; }
        .article-content a {
          color: #c47a60; text-decoration: none;
          border-bottom: 1px solid rgba(196,122,96,0.25);
          transition: color 0.15s, border-color 0.15s;
        }
        .article-content a:hover { color: #f2a090; border-bottom-color: rgba(242,160,144,0.5); }
        .article-content blockquote {
          border-left: 2px solid #2a2218; margin: 1.2em 0;
          padding: 0.5em 0 0.5em 1.2em; color: #7a7060; font-style: italic;
        }
        .article-content ul, .article-content ol { padding-left: 1.4em; margin-bottom: 1em; }
        .article-content li { margin-bottom: 0.4em; }
        .article-content strong { color: #d0c8b8; font-weight: 700; }
        .article-content hr { border: none; border-top: 1px solid #1e1c18; margin: 1.8em 0; }
      `}</style>
    </Drawer>
  )
}
