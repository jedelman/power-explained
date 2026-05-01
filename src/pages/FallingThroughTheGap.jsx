import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function FallingThroughTheGap() {
  return (
    <Layout
      title="Falling Through the Gap — Power Explained"
      description="Kimberlé Crenshaw named a structural problem: institutions built to process categories one at a time are blind to people whose oppression is produced by the combination. They fall through the gap."
      seriesTag="The Hidden Engine — Series II"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `Falling Through the Gap` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>A group of Black women sued their employer for discrimination. They said they were being treated unfairly because of their race and their gender.</p>
<p>They lost.</p>
<p>The court's reasoning was simple: the company wasn't discriminating against Black people (some Black men worked there) and wasn't discriminating against women (some white women worked there). The Black women fell through the gap between "race discrimination" and "sex discrimination" — legally protected categories that didn't have room for what was actually happening to them.</p>
<p>Kimberlé Crenshaw named the gap. She called it "intersectionality."</p>
<h2>Why the gap exists</h2>
<p>The system is built to handle one axis of oppression at a time. Anti-racism without gender. Feminism without race. Labor organizing that forgets the women doing the most vulnerable work.</p>
<p>When you experience multiple forms of oppression at once, the system can't see you. Not because nobody's trying hard enough. Because the categories themselves don't hold you.</p>
<p>You can't add oppression like math. Race discrimination + sex discrimination ≠ what a Black woman experiences. They compound. They create something new. Something the system wasn't designed to address.</p>
<div class="pull">
The system can't see you<br/>when you're experiencing<br/><strong>multiple oppressions at once.</strong><br/>That's the design.
</div>
<h2>What falls through</h2>
<p>Who falls through the gap? The women working multiple jobs. The immigrant women whose immigration status gives employers leverage over their labor. The women whose poverty means the state controls their bodies through welfare, through CPS, through policing. The women whose race and gender together make them a target for specific violence the system is designed not to see.</p>
<p>The people most oppressed fall through the gap. The system doesn't see them because it wasn't built to. And the movements supposed to fight for them sometimes don't either — because those movements are built on the same single-axis framework.</p>
<p>The next piece shows exactly how that system was built. Not by accident. On purpose. And who it was built to control.</p>
` }} />
        </div>
        
        
        
        <div className="nav-strip" style={{marginTop: "3rem"}}>
          <a href="which-women.html">← Previous</a>
          <a href="what-they-burned.html">Next →</a>
        </div>
        <div className="nav-strip" style={{marginTop: "3rem", marginBottom: "2rem"}}>
          <a href="which-women.html">← Previous</a>
          <a href="what-they-burned.html">Next →</a>
        </div>
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
