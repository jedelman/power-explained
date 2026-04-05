import { useEffect, useRef, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

// SearchModal uses the Pagefind JS API loaded at runtime from /pagefind/pagefind.js
// Pagefind is only available after `npm run build` (not in dev).
// We load it via script tag injection to fully bypass the bundler.

let pagefindLoadPromise = null

function loadPagefind() {
  if (pagefindLoadPromise) return pagefindLoadPromise
  pagefindLoadPromise = new Promise((resolve) => {
    if (window.__pagefind__) { resolve(window.__pagefind__); return }
    const script = document.createElement('script')
    script.type = 'module'
    script.textContent = `
      import('/pagefind/pagefind.js')
        .then(pf => { window.__pagefind__ = pf.default ?? pf; window.dispatchEvent(new Event('pagefind-ready')) })
        .catch(() => { window.__pagefind__ = null; window.dispatchEvent(new Event('pagefind-ready')) })
    `
    window.addEventListener('pagefind-ready', () => resolve(window.__pagefind__), { once: true })
    document.head.appendChild(script)
  })
  return pagefindLoadPromise
}

export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [pagefind, setPagefind] = useState(null)
  const [devMode, setDevMode] = useState(false)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  // Load pagefind once on first open
  useEffect(() => {
    if (!open) return
    loadPagefind().then(pf => {
      if (pf) {
        setPagefind(pf)
      } else {
        setDevMode(true)
      }
    })
  }, [open])

  // Focus input when modal opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
      setQuery('')
      setResults([])
    }
  }, [open])

  // Escape to close
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  // Search
  const runSearch = useCallback(async (q) => {
    if (!pagefind || !q.trim()) {
      setResults([])
      return
    }
    setLoading(true)
    try {
      const raw = await pagefind.search(q)
      const loaded = await Promise.all(raw.results.slice(0, 8).map(r => r.data()))
      setResults(loaded)
    } catch {
      setResults([])
    } finally {
      setLoading(false)
    }
  }, [pagefind])

  useEffect(() => {
    const t = setTimeout(() => runSearch(query), 200)
    return () => clearTimeout(t)
  }, [query, runSearch])

  const handleSelect = (url) => {
    onClose()
    // url from pagefind is absolute path like /slug or /slug/
    const path = url.replace(/\/$/, '') || '/'
    navigate(path)
  }

  if (!open) return null

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(var(--ink-rgb),0.55)',
        backdropFilter: 'blur(3px)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        paddingTop: 'clamp(4rem, 12vh, 8rem)',
        paddingLeft: '1rem', paddingRight: '1rem',
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div style={{
        background: 'var(--paper)',
        border: '1px solid var(--rule-strong)',
        borderRadius: '2px',
        width: '100%', maxWidth: '640px',
        boxShadow: '0 16px 48px rgba(var(--ink-rgb),0.22)',
        overflow: 'hidden',
      }}>
        {/* Input row */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.75rem',
          padding: '0.9rem 1.1rem',
          borderBottom: results.length || devMode ? '1px solid var(--rule)' : 'none',
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, opacity: 0.45 }}>
            <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={devMode ? 'Search (build first to enable)' : 'Search Power Explained…'}
            disabled={devMode}
            style={{
              flex: 1, border: 'none', outline: 'none',
              background: 'transparent',
              fontFamily: 'var(--mono)', fontSize: '0.85rem',
              color: 'var(--ink)', letterSpacing: '0.02em',
            }}
          />
          <kbd style={{
            fontFamily: 'var(--mono)', fontSize: '0.6rem',
            color: 'rgba(var(--ink-rgb),0.4)',
            border: '1px solid var(--rule)', borderRadius: '2px',
            padding: '0.1em 0.4em', flexShrink: 0,
          }}>esc</kbd>
        </div>

        {/* Dev mode notice */}
        {devMode && (
          <div style={{
            padding: '1.25rem 1.1rem',
            fontFamily: 'var(--mono)', fontSize: '0.72rem',
            color: 'rgba(var(--ink-rgb),0.5)', letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}>
            Search index not found — run <code style={{ background: 'var(--paper-mid)', padding: '0.1em 0.3em' }}>npm run build</code> to generate it.
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div style={{
            padding: '1.25rem 1.1rem',
            fontFamily: 'var(--mono)', fontSize: '0.65rem',
            color: 'rgba(var(--ink-rgb),0.4)', letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>Searching…</div>
        )}

        {/* No results */}
        {!loading && !devMode && query.trim() && results.length === 0 && (
          <div style={{
            padding: '1.25rem 1.1rem',
            fontFamily: 'var(--mono)', fontSize: '0.72rem',
            color: 'rgba(var(--ink-rgb),0.45)', letterSpacing: '0.06em',
          }}>No results for <em>{query}</em></div>
        )}

        {/* Results */}
        {!loading && results.length > 0 && (
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {results.map((r, i) => {
              const slug = r.url.replace(/\/$/, '').replace(/^\//, '') || ''
              return (
                <li key={i}>
                  <button
                    onClick={() => handleSelect(r.url)}
                    style={{
                      display: 'block', width: '100%', textAlign: 'left',
                      padding: '0.85rem 1.1rem',
                      background: 'transparent', border: 'none', cursor: 'pointer',
                      borderBottom: i < results.length - 1 ? '1px solid var(--rule)' : 'none',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--paper-mid)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{
                      fontFamily: 'var(--display)', fontSize: '1rem',
                      fontWeight: 600, color: 'var(--ink)',
                      marginBottom: '0.25rem', lineHeight: 1.3,
                    }}>
                      {r.meta?.title || slug}
                    </div>
                    {r.excerpt && (
                      <div
                        style={{
                          fontFamily: 'var(--mono)', fontSize: '0.7rem',
                          color: 'rgba(var(--ink-rgb),0.55)',
                          lineHeight: 1.5, letterSpacing: '0.01em',
                          display: '-webkit-box',
                          WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                        dangerouslySetInnerHTML={{ __html: r.excerpt }}
                      />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        )}

        {/* Empty state hint */}
        {!devMode && !query && !loading && (
          <div style={{
            padding: '1.1rem',
            display: 'flex', gap: '1.5rem', flexWrap: 'wrap',
          }}>
            {['commons', 'enclosure', 'Gramsci', 'mutual aid', 'Rojava'].map(hint => (
              <button
                key={hint}
                onClick={() => setQuery(hint)}
                style={{
                  fontFamily: 'var(--mono)', fontSize: '0.68rem',
                  color: 'rgba(var(--ink-rgb),0.5)',
                  background: 'var(--paper-mid)', border: 'none',
                  borderRadius: '2px', padding: '0.25em 0.6em',
                  cursor: 'pointer', letterSpacing: '0.04em',
                }}
              >
                {hint}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
