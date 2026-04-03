import { Link } from 'react-router-dom'

// ── Hero ──────────────────────────────────────────────────────────────────────
export function Hero({ eyebrow, headline, dek, bio, bgWord, dark = true }) {
  return (
    <div className="hero" style={dark ? {} : { background: 'var(--paper)', color: 'var(--ink)', borderBottom: '2px solid var(--ink)' }}>
      {bgWord && (
        <div className="hero-inner" style={{ position: 'relative' }}>
          <span style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            fontFamily: 'var(--display)', fontWeight: 700,
            fontSize: 'clamp(4rem,18vw,12rem)',
            letterSpacing: '-0.04em', opacity: 0.05,
            whiteSpace: 'nowrap', pointerEvents: 'none',
            lineHeight: 1, zIndex: 0,
          }}>{bgWord}</span>
        </div>
      )}
      <div className="hero-inner" style={{ position: 'relative', zIndex: 1, maxWidth: 'var(--max)', margin: '0 auto' }}>
        {eyebrow && <span className="hero-eyebrow">{eyebrow}</span>}
        <h1 dangerouslySetInnerHTML={{ __html: headline }} />
        {dek && <p className="hero-dek">{dek}</p>}
        {bio && (
          <div className="hero-bio">
            {bio.dates && <span className="bio-dates">{bio.dates}</span>}
            <p className="bio-line">{bio.text}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// ── Pull quote ────────────────────────────────────────────────────────────────
export function Pull({ children }) {
  return <div className="pull">{children}</div>
}

// ── Callout box ───────────────────────────────────────────────────────────────
export function Callout({ label, children }) {
  return (
    <div className="callout">
      {label && <span className="callout-label">{label}</span>}
      {children}
    </div>
  )
}

// ── Versus block ──────────────────────────────────────────────────────────────
export function Versus({ left, right }) {
  return (
    <div className="versus">
      <div className="versus-side false">
        <span className="versus-label">{left.label}</span>
        <div className="versus-claim">{left.claim}</div>
        <div className="versus-note">{left.note}</div>
      </div>
      <div className="versus-side">
        <span className="versus-label red">{right.label}</span>
        <div className="versus-claim">{right.claim}</div>
        <div className="versus-note">{right.note}</div>
      </div>
    </div>
  )
}

// ── Contents nav ──────────────────────────────────────────────────────────────
export function ContentsNav({ sections }) {
  return (
    <nav className="contents-nav" aria-label="Sections">
      <span className="contents-label">What's in this piece</span>
      <ol>
        {sections.map((s, i) => (
          <li key={s.id}>
            <a href={`#${s.id}`}>
              <span className="contents-num">{String(i + 1).padStart(2, '0')}</span>
              {s.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

// ── Section anchor ────────────────────────────────────────────────────────────
export function Section({ id, num, title, children }) {
  return (
    <>
      <span id={id} className="section-anchor" />
      <div className="section-kicker">
        <span className="section-num">{num}</span>
        <div className="section-rule" />
      </div>
      <h2>{title}</h2>
      {children}
    </>
  )
}

// ── Invitation block ──────────────────────────────────────────────────────────
export function Invitation({ label, headline, children, coda }) {
  return (
    <div className="invitation">
      <span className="inv-label">{label}</span>
      <h2 dangerouslySetInnerHTML={{ __html: headline }} />
      {children}
      {coda && <div className="inv-coda" dangerouslySetInnerHTML={{ __html: coda }} />}
    </div>
  )
}

// ── Next reads ────────────────────────────────────────────────────────────────
export function NextReads({ items }) {
  return (
    <nav className="next-reads" aria-label="Continue reading">
      <span className="next-reads-label">Where to go next</span>
      <div className="next-reads-grid">
        {items.map((item, i) => {
          const isExternal = item.href.startsWith('http')
          const El = isExternal ? 'a' : Link
          const props = isExternal
            ? { href: item.href, target: '_blank', rel: 'noopener' }
            : { to: `/${item.href}` }
          return (
            <El key={i} {...props} className="next-read">
              <span className="next-read-cat">{item.cat}</span>
              <span className="next-read-title">{item.title}</span>
            </El>
          )
        })}
      </div>
    </nav>
  )
}

// ── Footnotes ─────────────────────────────────────────────────────────────────
export function Footnotes({ notes }) {
  return (
    <section className="footnotes">
      <span className="footnotes-label">Notes & Sources</span>
      <ol className="fn-list">
        {notes.map((note, i) => (
          <li id={`fn${i + 1}`} key={i}>
            <span className="fn-num">{i + 1}</span>
            <span dangerouslySetInnerHTML={{ __html: note }} />
          </li>
        ))}
      </ol>
    </section>
  )
}

// ── Article footer ────────────────────────────────────────────────────────────
export function ArticleFooter({ seriesNote }) {
  return (
    <footer className="article-footer">
      <Link to="/" className="back-link">Back to Power Explained</Link>
      {seriesNote && <span className="series-note">{seriesNote}</span>}
    </footer>
  )
}

// ── Article wrap ──────────────────────────────────────────────────────────────
export function ArticleWrap({ children }) {
  return <main className="article-wrap">{children}</main>
}

// ── Inline link ───────────────────────────────────────────────────────────────
export function XL({ to, children }) {
  if (to.startsWith('http')) return <a href={to} className="xl" target="_blank" rel="noopener">{children}</a>
  return <Link to={`/${to}`} className="xl">{children}</Link>
}
