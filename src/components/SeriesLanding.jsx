import Layout from './Layout'
import { SERIES } from '../lib/articles'

/**
 * Generic series landing page component.
 * Each series page passes its own metadata and piece descriptions.
 */
export default function SeriesLanding({ seriesIndex, intro, pullQuote, pieces }) {
  const series = SERIES[seriesIndex]

  return (
    <Layout
      title={`${series.label} — Power Explained`}
      description={intro[0]}
      seriesTag="Series"
    >
      {/* Hero */}
      <div style={{
        background: 'var(--ink)', color: 'var(--paper)',
        padding: 'clamp(3.5rem,9vw,7rem) var(--gutter) clamp(3rem,7vw,5.5rem)',
      }}>
        <div style={{ maxWidth: 'var(--max)', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.12em',
            textTransform: 'uppercase', opacity: 0.45, marginBottom: '1.25rem',
          }}>
            {series.label}
          </p>
          {intro.map((graf, i) => (
            <p key={i} style={{
              fontFamily: 'var(--body)', fontSize: 'clamp(1.05rem,2vw,1.2rem)',
              lineHeight: 1.65, opacity: i === 0 ? 1 : 0.82,
              maxWidth: '68ch', margin: 0, marginTop: i > 0 ? '1rem' : 0,
            }}>{graf}</p>
          ))}
          {pullQuote && (
            <blockquote style={{
              borderLeft: '2px solid var(--red)', marginLeft: 0, marginTop: '2.5rem',
              paddingLeft: '1.5rem', maxWidth: '52ch',
            }}>
              <p style={{
                fontFamily: 'var(--display)', fontSize: 'clamp(1.1rem,2.2vw,1.35rem)',
                fontStyle: 'italic', fontWeight: 600, lineHeight: 1.5,
                color: 'var(--paper)', margin: 0,
              }}
                dangerouslySetInnerHTML={{ __html: pullQuote }}
              />
            </blockquote>
          )}
        </div>
      </div>

      {/* Piece list */}
      <div style={{
        padding: 'clamp(3rem,7vw,5rem) var(--gutter)',
        maxWidth: 'var(--max)', margin: '0 auto',
      }}>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0 }} start={parseInt(series.pieces[0].num)}>
          {series.pieces.map((piece, i) => (
            <li key={piece.url} style={{
              display: 'grid',
              gridTemplateColumns: '2.5rem 1fr',
              gap: '0 1.5rem',
              padding: '1.75rem 0',
              borderBottom: '1px solid var(--rule)',
              alignItems: 'start',
            }}>
              <span style={{
                fontFamily: 'var(--mono)', fontSize: '0.65rem',
                fontWeight: 700, color: 'rgba(var(--ink-rgb),0.3)',
                paddingTop: '0.2rem',
              }}>
                {piece.num}
              </span>
              <div>
                <a href={piece.url} style={{
                  display: 'block', textDecoration: 'none', color: 'inherit',
                }}>
                  <h2 style={{
                    fontFamily: 'var(--display)', fontSize: 'clamp(1rem,2vw,1.2rem)',
                    fontWeight: 600, lineHeight: 1.3, margin: 0, marginBottom: '0.5rem',
                    borderBottom: '1px solid transparent',
                    transition: 'border-color 0.15s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.borderBottomColor = 'var(--red)'}
                    onMouseLeave={e => e.currentTarget.style.borderBottomColor = 'transparent'}
                  >
                    {piece.title}
                  </h2>
                </a>
                {pieces[i] && (
                  <p style={{
                    fontFamily: 'var(--body)', fontSize: '0.95rem',
                    lineHeight: 1.6, color: 'rgba(var(--ink-rgb),0.7)',
                    margin: 0,
                  }}>
                    {pieces[i]}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  )
}
