import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

const ENTRY_POINTS = [
  { href: 'for-normies', label: 'Everyone', title: 'Why Everything Costs So Much', desc: 'Housing, healthcare, wages. It\'s not bad luck. Start here if you\'re new.' },
  { href: 'for-libertarians', label: 'Libertarians', title: 'The Government Is the Problem (Half Right)', desc: 'The state and the market are the same problem. The alternative isn\'t either.' },
  { href: 'for-environmentalists', label: 'Environmentalists', title: 'For People Who Love Living Things', desc: 'The ecological crisis and the social crisis are the same crisis.' },
  { href: 'for-tech-workers', label: 'Tech Workers', title: 'For People Who Build the Internet', desc: 'You already understand open source. This applies it to housing, healthcare, cities.' },
  { href: 'for-urbanists', label: 'Urbanists', title: 'The City Is a Commons', desc: 'Housing, transit, gentrification — not separate failures. The same enclosure.' },
  { href: 'for-social-justice', label: 'Social Justice', title: 'The Same Enclosure, Different Faces', desc: 'Race, gender, immigration — one mechanism. Identity categories invented to justify who gets enclosed.' },
]

const SERIES = [
  { href: 'contents#series-i', eyebrow: 'Series I', title: 'The Basic Architecture', desc: 'How the system produces bad outcomes by design. Why participation gets captured. What the commons is and how it gets built anyway.', count: '7 pieces · Start: Why Your City Doesn\'t Work', dark: false },
  { href: 'contents#series-ii', eyebrow: 'Series II', title: 'The Hidden Engine: Women, Race, and the Commons', desc: 'The "outside" capitalism requires has always been specifically women\'s unpaid labor, colonized land, targeted communities.', count: '7 pieces · Start: The Outside Capital Needs', dark: true },
  { href: 'contents#series-iii', eyebrow: 'Series III — Advanced Track', title: 'Against Authoritarianism', desc: 'For readers tempted by the authoritarian alternative. The vanguard party produces the authoritarian state every time.', count: '4 pieces + evidence · Start: They Were Right About the Problem', dark: true },
  { href: 'contents#series-iv', eyebrow: 'Series IV', title: 'The World the Framework Missed', desc: 'The analysis relocated to where enclosure is most naked: colony, plantation, occupied territory.', count: '7 pieces · Start: The Outside Was Always People', dark: false },
  { href: 'contents#series-v', eyebrow: 'Series V — New', title: 'Where We Go From Here', desc: 'Credit is the original commons. Land can be held permanently in trust. Care rebuilt collectively. AI governed by the people it was trained on.', count: '7 pieces · Start: One Pattern', dark: true },
  { href: 'contents#thinkers', eyebrow: 'Thinkers', title: 'Eight Lenses on Power', desc: 'Kropotkin → Gramsci → Foucault → Ostrom → Graeber → Hardt & Negri → Deleuze & Guattari → Gödel → Simondon. Foundational work, frequently misrepresented.', count: '8 profiles', dark: false },
  { href: 'contents#case-studies', eyebrow: 'Case Studies', title: 'It Has Been Done', desc: 'Zapatistas. Rojava. Occupy. Kerala. Chile. Myanmar. Six places where people built something different — and what survived. Not inspiration. Evidence.', count: '6 case studies', dark: true },
  { href: 'contents#for-tech-workers', eyebrow: 'For Tech Workers', title: 'For People Who Build the Internet', desc: 'Shannon, Turing, Berners-Lee, Raymond — the commons theory embedded in tech culture.', count: '4 pieces · Start: Shannon: The Channel and the Common', dark: false },
  { href: 'contents', eyebrow: 'Tools for Practitioners', title: 'Put the Framework to Work', desc: 'Analyze your city\'s power structure. Find or start commons infrastructure in seven domains. Fork this entire project for your own city.', count: '3 tools: Your City · Build the Commons · How This Was Done', dark: false },
]

function NavLink({ href, children }) {
  const isExternal = href.startsWith('http')
  if (isExternal) return <a href={href} target="_blank" rel="noopener">{children}</a>
  return <Link to={`/${href}`}>{children}</Link>
}

// EntryCard unused — cards rendered inline below with Link directly

export default function Home() {
  return (
    <Layout
      title="Power Explained"
      description="How power works. In plain language. And what people can actually do about it."
    >
      <section className="hero">
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', padding: 'clamp(3rem,8vw,5.5rem) var(--gutter) clamp(2rem,5vw,3.5rem)' }}>
          <div className="hero-label">An honest look at how things work</div>
          <h1 className="hero-headline">
            Something<br /><em>is</em> wrong.<br />Here's how<br />it works.
          </h1>
          <p className="hero-deck">
            Not a lecture. Not a sales pitch. No jargon, no party line. Just an honest look at how power works — and what people can actually do about it.
          </p>
        </div>
      </section>

      <div className="start-strip">
        <div className="sinner">
          <Link to="/start-here" className="start-link">Start here — five minutes →</Link>
          <Link to="/contents" className="start-link browse-link">Browse all content →</Link>
        </div>
      </div>

      <section className="entry-section">
        <div className="section-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', padding: 'clamp(3rem,8vw,5.5rem) var(--gutter) clamp(2rem,5vw,3.5rem)' }}>
          <span className="section-eyebrow">Start where you are</span>
          <div className="entry-grid">
            {ENTRY_POINTS.map(ep => (
              <Link key={ep.href} to={`/${ep.href}`} className="entry-card">
                <span className="entry-card-label">{ep.label}</span>
                <span className="entry-card-title">{ep.title}</span>
                <span className="entry-card-desc">{ep.desc}</span>
                <span className="entry-card-cta">Read →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="banner">
        <div className="banner-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', padding: '0.9rem var(--gutter)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.6 }}>New</span>
          <Link to="/for-agents" style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--red)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            The Commons for Agents — A knowledge module for AI reasoning systems →
          </Link>
        </div>
      </div>

      <section className="overview-section">
        <div style={{ maxWidth: 'var(--max)', margin: '0 auto', padding: 'clamp(2.5rem,6vw,4rem) var(--gutter)' }}>
          <h2 className="overview-heading">Everything on this site</h2>
          <div className="overview-grid">
            {SERIES.map((s, i) => (
              <Link key={i} to={`/${s.href}`} className={`overview-card${s.dark ? ' dark' : ''}`}>
                <span className="overview-card-eyebrow">{s.eyebrow}</span>
                <span className="overview-card-title">{s.title}</span>
                <span className="overview-card-desc">{s.desc}</span>
                <span className="overview-card-count">{s.count}</span>
                <span className="overview-card-cta">Read series →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ borderTop: '2px solid var(--ink)', padding: '2rem var(--gutter)' }}>
        <div className="footer-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span className="footer-text">Power Explained — Public domain. Share freely.</span>
          <span className="footer-text">No ads. No tracking. No algorithm.</span>
        </div>
      </footer>
    </Layout>
  )
}
