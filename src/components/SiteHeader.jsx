import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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

  useEffect(() => {
    document.documentElement.classList.toggle('no-motion', reduced)
    localStorage.setItem('pe-reduced-motion', reduced ? '1' : '0')
  }, [reduced])

  return (
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
          id="motion-toggle"
          aria-label={reduced ? 'Enable animations' : 'Reduce motion'}
          onClick={() => setReduced(r => !r)}
        >
          {reduced ? 'motion: off' : 'motion: on'}
        </button>
      </div>
    </header>
  )
}
