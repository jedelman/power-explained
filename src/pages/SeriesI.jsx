import Layout from '../components/Layout'
import { SERIES } from '../lib/articles'

const series = SERIES[0]

export default function SeriesI() {
  return (
    <Layout
      title={`${series.label} — Power Explained`}
      description="The basic argument. Hardin was wrong. The commons works. And enclosure requires constant enforcement."
      seriesTag={series.label}
    >
      <div style={{ padding: 'clamp(3rem,8vw,6rem) var(--gutter)', background: 'var(--ink)', color: 'var(--paper)' }}>
        <div style={{ maxWidth: 'var(--max)', margin: '0 auto' }}>
          <h1 style={{ margin: 0, marginBottom: '0.5rem' }}>{series.label}</h1>
          <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: 1.5, opacity: 0.85 }}>
            The basic argument. Hardin was wrong. The commons works. And enclosure requires constant enforcement.
          </p>
        </div>
      </div>

      <div style={{ padding: 'clamp(2rem,6vw,4rem) var(--gutter)', maxWidth: 'var(--max)', margin: '0 auto' }}>
        <div className="series-grid">
          {series.pieces.map(piece => (
            <a key={piece.url} href={piece.url} className="series-card">
              <span className="card-num">{piece.num}</span>
              <h2>{piece.title}</h2>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  )
}
