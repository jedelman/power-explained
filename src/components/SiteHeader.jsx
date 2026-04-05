import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import SearchModal from './SearchModal'

const navLinkStyle = {
  fontFamily: 'var(--mono)',
  fontSize: '0.6rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'rgba(var(--ink-rgb),0.45)',
  textDecoration: 'none',
}

export default function SiteHeader({ seriesTag }) {
  const [reduced, setReduced] = useState(
    () => typeof localStorage !== 'undefined' && localStorage.getItem('pe-reduced-motion') === '1'
  )
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('no-motion', reduced)
    localStorage.setItem('pe-reduced-motion', reduced ? '1' : '0')
  }, [reduced])

  // ⌘K / Ctrl+K global shortcut
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(o => !o)
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  return (
    <>
      <header>
        <div className="inner">
          <Link to="/" className="site-name">Power Explained</Link>
          {seriesTag && <span className="series-tag">{seriesTag}</span>}
          <Link
            to="/glossary"
            style={navLinkStyle}
            onMouseOver={e => e.currentTarget.style.color = 'var(--red)'}
            onMouseOut={e => e.currentTarget.style.color = 'rgba(var(--ink-rgb),0.45)'}
          >Glossary</Link>
          <a
            href="https://jedelman.github.io/commons-wire"
            target="_blank"
            rel="noopener"
            style={navLinkStyle}
            onMouseOver={e => e.currentTarget.style.color = 'var(--red)'}
            onMouseOut={e => e.currentTarget.style.color = 'rgba(var(--ink-rgb),0.45)'}
          >Wire</a>
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            title="Search (⌘K)"
            style={{
              background: 'none', border: '1px solid var(--rule)',
              borderRadius: '2px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.25rem 0.55rem',
              color: 'rgba(var(--ink-rgb),0.45)',
              fontFamily: 'var(--mono)', fontSize: '0.6rem',
              letterSpacing: '0.08em', textTransform: 'uppercase',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(var(--ink-rgb),0.4)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--rule)'}
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span style={{ display: 'none' }}>Search</span>
            <kbd style={{ opacity: 0.6, fontSize: '0.55rem' }}>⌘K</kbd>
          </button>
          <button
            id="motion-toggle"
            aria-label={reduced ? 'Enable animations' : 'Reduce motion'}
            onClick={() => setReduced(r => !r)}
          >
            {reduced ? 'motion: off' : 'motion: on'}
          </button>
        </div>
      </header>
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
