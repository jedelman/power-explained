import Layout from './Layout'
import { ArticleWrap, ArticleFooter } from './Article'

/**
 * ArticlePage — generic page component driven by src/content/*.md frontmatter.
 *
 * Frontmatter fields (all optional except slug/title):
 *   slug, title, description, seriesTag, h1
 *   dek, eyebrow, bgWord
 *   bio_dates, bio_text
 *   series_note
 *   hero_dark (bool, default true)
 */
export default function ArticlePage({ meta, html }) {
  const {
    title       = '',
    description = '',
    seriesTag   = '',
    h1          = title,
    dek         = '',
    eyebrow     = '',
    bgWord      = '',
    bio_dates   = '',
    bio_text    = '',
    series_note = '',
    hero_dark   = true,
  } = meta

  const heroBg = hero_dark
    ? { background: 'var(--ink)', color: 'var(--paper)' }
    : { background: 'var(--paper)', color: 'var(--ink)', borderBottom: '2px solid var(--ink)' }

  return (
    <Layout title={title} description={description} seriesTag={seriesTag}>
      <div
        className="hero"
        style={{
          ...heroBg,
          padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background word watermark */}
        {bgWord && (
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            fontFamily: 'var(--display)', fontWeight: 700,
            fontSize: 'clamp(4rem,18vw,12rem)',
            letterSpacing: '-0.04em', opacity: 0.05,
            whiteSpace: 'nowrap', pointerEvents: 'none', lineHeight: 1,
          }}>
            {bgWord}
          </div>
        )}

        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          {eyebrow && <span className="hero-eyebrow">{eyebrow}</span>}
          <h1 dangerouslySetInnerHTML={{ __html: h1 }} />
          {dek && <p className="hero-dek">{dek}</p>}
          {(bio_dates || bio_text) && (
            <div className="hero-bio">
              {bio_dates && <span className="bio-dates">{bio_dates}</span>}
              {bio_text  && <p className="bio-line" dangerouslySetInnerHTML={{ __html: bio_text }} />}
            </div>
          )}
        </div>
      </div>

      <ArticleWrap>
        <div className="body-text">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        {series_note && <ArticleFooter seriesNote={series_note} />}
      </ArticleWrap>
    </Layout>
  )
}
