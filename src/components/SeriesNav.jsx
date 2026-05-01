import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const series = [
  {
    id: 'series-i',
    tag: 'Series I',
    title: 'The Basic Architecture',
    pieces: [
      { num: '01', title: 'Why Your City Doesn\'t Work', url: '/why-your-city-doesnt-work' },
      { num: '02', title: 'Your City Knows Less', url: '/your-city-knows-less' },
      { num: '03', title: 'Who Gets Paid', url: '/who-gets-paid' },
      { num: '04', title: 'Two Ways to Fix a Pothole', url: '/two-ways-to-fix-a-pothole' },
      { num: '05', title: 'Open Data Isn\'t Enough', url: '/open-data-isnt-enough' },
      { num: '06', title: 'How Linux Became the Internet', url: '/how-linux-became-the-internet' },
      { num: '07', title: 'Mutual Aid Isn\'t Charity', url: '/mutual-aid-isnt-charity' },
    ]
  },
  {
    id: 'series-ii',
    tag: 'Series II',
    title: 'The Hidden Engine',
    pieces: [
      { num: '08', title: 'The Outside Capital Needs', url: '/the-outside-capital-needs' },
      { num: '09', title: 'Who Pays for the Next Shift', url: '/who-pays-for-the-next-shift' },
      { num: '10', title: 'The Other and the Outside', url: '/the-other-and-the-outside' },
      { num: '11', title: 'Which Women', url: '/which-women' },
      { num: '12', title: 'Falling Through the Gap', url: '/falling-through-the-gap' },
      { num: '13', title: 'What They Burned', url: '/what-they-burned' },
      { num: '14', title: 'What We Do on Monday', url: '/what-we-do-on-monday' },
    ]
  }
]

export default function SeriesNav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close on navigation
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const currentPath = location.pathname

  return (
    <>
      {/* Toggle button — fixed left edge */}
      <button
        className={`series-nav-toggle ${open ? 'open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close series navigation' : 'Open series navigation'}
      >
        <span className="toggle-icon">{open ? '✕' : '☰'}</span>
        <span className="toggle-label">Contents</span>
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="series-nav-backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar drawer */}
      <nav className={`series-nav-drawer ${open ? 'open' : ''}`} aria-label="Series navigation">
        <div className="series-nav-inner">
          <p className="series-nav-heading">All Pieces</p>
          {series.map(s => (
            <div key={s.id} className="series-nav-section">
              <p className="series-nav-tag">{s.tag} — {s.title}</p>
              <ul className="series-nav-list">
                {s.pieces.map(piece => {
                  const isCurrent = currentPath === piece.url
                  return (
                    <li key={piece.url}>
                      <a
                        href={piece.url}
                        className={`series-nav-link ${isCurrent ? 'current' : ''}`}
                        aria-current={isCurrent ? 'page' : undefined}
                      >
                        <span className="series-nav-num">{piece.num}</span>
                        <span className="series-nav-title">{piece.title}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </>
  )
}
