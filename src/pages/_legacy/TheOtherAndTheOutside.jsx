import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function TheOtherAndTheOutside() {
  return (
    <Layout
      title="The Other and the Outside — Power Explained"
      description="Simone de Beauvoir showed how the division of labor gets made to seem natural. The assignment of women to care work isn't biology. It's a story — and stories can be changed."
      seriesTag="The Hidden Engine — Series II"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `The Other and the Outside` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>Women cook. Women care for children. Women mend, wash, clean. Women hold families together through emotion work nobody names. This seems natural. Obvious. How it's always been.</p>
<p>It isn't. It's a story.</p>
<p>Once you see the story, you can't unsee it. Every advertisement, every movie, every family you know — the story is being told and enforced. And because it's been told so long, so consistently, it starts to feel like biology. Like nature. Like truth.</p>
<p>Simone de Beauvoir showed how the story works. In <em>The Second Sex</em>, she starts with a question: why is woman "the Other"?</p>
<p>In every culture, every major system, man is the default. The subject. The one who acts, creates, decides. Woman is the other — defined not by what she is, but by what she isn't. Not male. Not the subject. Dependent. Supplementary. Secondary.</p>
<h2>How the trap closes</h2>
<p>The story says: woman's nature is to nurture, to support, to make others comfortable. This nature is inherent, biological, unchangeable. Because it's inherent, the labor it produces — cooking, childcare, emotion work — is also naturalized. It's not labor. It's just what women do. It's love.</p>
<p>But if nurturing is a learned social role — if it's constructed — then it can be deconstructed. The labor can be made visible. The role can be refused. The story can be told differently.</p>
<p>The trap is that the story is so complete, so reinforced, that most women don't even know it's a story. They think they ARE the story. They think wanting to nurture, to sacrifice, to support others' dreams instead of their own — they think this is who they are.</p>
<p>That's what makes the story so effective. It doesn't feel like constraint. It feels like identity.</p>
<div class="pull">
Woman is the Other.<br/>But the Other is <strong>constructed</strong>,<br/>not natural. And you can refuse it.
</div>
<h2>But which woman?</h2>
<p>There's a problem with talking about "woman" as if it's one thing. De Beauvoir was writing from a particular position — white, French, educated, able. And when people said "woman," they often meant women like her.</p>
<p>But the story of woman-as-nurturer was applied selectively. A white woman's nurturing was considered natural, refined, spiritual. A Black woman's nurturing was considered servile, instinctual. An Indigenous woman's knowledge wasn't nurturing — it was primitive, subject to erasure and control.</p>
<p>The same story was told differently depending on race. And the political implications were completely different. Which is what the next piece shows.</p>
` }} />
        </div>
        
        
        
        <div className="nav-strip" style={{marginTop: "3rem"}}>
          <a href="who-pays-for-the-next-shift.html">← Previous</a>
          <a href="which-women.html">Next →</a>
        </div>
        <div className="nav-strip" style={{marginTop: "3rem", marginBottom: "2rem"}}>
          <a href="who-pays-for-the-next-shift.html">← Previous</a>
          <a href="which-women.html">Next →</a>
        </div>
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
