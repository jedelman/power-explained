import Layout from '../components/Layout'
import { SERIES } from '../lib/articles'

const series = SERIES[3]

export default function SeriesIV() {
  return (
    <Layout
      title={`${series.label} — Power Explained`}
      description="The first three frameworks missed something essential. Here's what they got wrong, and what the colonized already knew."
      seriesTag={series.label}
    >
      <div style={{ padding: 'clamp(3rem,8vw,6rem) var(--gutter)', background: 'var(--ink)', color: 'var(--paper)' }}>
        <div style={{ maxWidth: 'var(--max)', margin: '0 auto' }}>
          <h1 style={{ margin: 0, marginBottom: '0.5rem' }}>{series.label}</h1>
          <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: 1.5, opacity: 0.85 }}>
            The first three frameworks missed something essential. Here's what they got wrong, and what the colonized already knew.
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
