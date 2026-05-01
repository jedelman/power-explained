import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchModal from './SearchModal'

export default function SiteHeader({ seriesTag }) {
  const [reduced, setReduced] = useState(
    () => typeof localStorage !== 'undefined' && localStorage.getItem('pe-reduced-motion') === '1'
  )
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('no-motion', reduced)
    localStorage.setItem('pe-reduced-motion', reduced ? '1' : '0')
  }, [reduced])

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
          <nav className="header-nav" aria-label="Site navigation">
            <Link to="/glossary" className="header-link">Glossary</Link>
            <a
              href="https://jedelman.github.io/commons-wire"
              target="_blank"
              rel="noopener"
              className="header-link"
            >Wire</a>
          </nav>
          <button
            className="search-btn"
            onClick={() => setSearchOpen(true)}
            aria-label="Search site"
            title="Search (⌘K)"
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <kbd aria-hidden="true">⌘K</kbd>
          </button>
          <button
            id="motion-toggle"
            aria-label={reduced ? 'Enable animations' : 'Reduce motion'}
            aria-pressed={reduced}
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
