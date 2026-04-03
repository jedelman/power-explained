import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function CaseStudies() {
  return (
    <Layout
      title="Case Studies — Power Explained"
      description="Six places where people built something different — and what survived. Case studies in commons governance, collective resistance, and the long work of building power from below."
      seriesTag="Case Studies — Power in Practice"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `It Has Been Done` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
        </div>
        
        
        
        <ArticleFooter seriesNote="" />
      </ArticleWrap>
    </Layout>
  )
}
