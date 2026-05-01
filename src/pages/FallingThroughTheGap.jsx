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
          
          <div dangerouslySetInnerHTML={{ __html: `<p>A group of Black women sued their employer for discrimination. They said they were being treated unfairly because of their race and their gender. They lost.</p>
<p>The court's reasoning was simple: the company wasn't discriminating against Black people (some men worked there) and wasn't discriminating against women (some women worked there). The Black women fell through the gap between "race discrimination" and "sex discrimination" — legally protected categories that didn't have room for what was actually happening to them.</p>
<p>Kimberlé Crenshaw named the gap. She called it "intersectionality." It's become a widely used term, often watered down. But the original insight is specific and sharp: the systems that discriminate against people work differently when you're experiencing multiple forms of oppression at once.</p>
<h2>The gap is structural</h2>
<p>It's not just legal categories that work this way. Most systems are designed to handle one axis of oppression at a time. Anti-racism that doesn't account for gender. Feminism that doesn't account for race. Labor organizing that forgets the women doing the most vulnerable work.</p>
<p>The people who experience multiple forms of oppression at once fall into the gap. The system can't see them. The remedies designed for one form of oppression don't address what's happening to them. The movements supposed to fight for them sometimes don't.</p>
<p>This isn't a flaw that can be fixed by adding more categories. It's structural. Systems designed with one hierarchy in mind will always fail to see people experiencing multiple hierarchies at once.</p>
<div class="pull">
You can't add up oppression<br/>like math. <strong>They compound.</strong><br/>They create something new.
</div>
<h2>What falls through</h2>
<p>What falls through the gap? The women who are working multiple jobs. The immigrant women whose immigration status gives employers leverage over their labor. The women whose poverty means they experience state control of their bodies through welfare, through CPS surveillance, through policing. The women whose race and gender together make them a target for specific forms of violence the system is designed not to see.</p>
<p>Crenshaw's work shows that understanding power means understanding how multiple systems of control work together — not separately. The racism, the sexism, the economic exploitation — they're not three separate things that happen to coincide. They're designed to work together, to compound, to create vulnerabilities that benefit the people running the systems.</p>
<p>The next pieces show exactly how that system was built, and what was destroyed to make it work.</p>
` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
