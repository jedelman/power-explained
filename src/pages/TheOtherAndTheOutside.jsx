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
          
          <div dangerouslySetInnerHTML={{ __html: `<p>Women cook. Women care for children. Women mend, wash, clean. This seems natural. Obvious. How it's always been.</p>
<p>It isn't natural. It's a story — one told so often it starts to seem like a fact.</p>
<p>Simone de Beauvoir showed how the story works. In <em>The Second Sex</em>, she starts with a question: why is woman "the Other"?</p>
<p>In every culture, every major system, man is the default. The subject. The one who acts, creates, decides. Woman is the other — defined not by what she is, but by what she isn't. Not male. Not the subject. Not the one.</p>
<p>This isn't natural. It's constructed. Built into stories, into language, into the categories we use to make sense of the world. And once it's built in, it becomes invisible — so obvious that nobody sees it.</p>
<h2>How the story contains you</h2>
<p>The story says: woman's nature is to nurture, to support, to make others comfortable. This nature is inherent, biological, unchangeable. Because it's inherent, the labor it produces — cooking, childcare, emotion work — is also naturalized. It's not labor. It's just what women do.</p>
<p>But if nurturing is a learned social role — if it's constructed — then it can be deconstructed. The labor can be made visible. The role can be refused. The story can be told differently.</p>
<p>De Beauvoir wasn't just analyzing the story. She was showing that once you see how it works, you can't unsee it. Every cultural representation, every family arrangement, every job that pays less because women do it — you start to see the story underneath, being enforced.</p>
<div class="pull">
Woman is the Other.<br/>But the Other is <strong>constructed</strong>,<br/>not natural.
</div>
<h2>The version of "woman" everyone means</h2>
<p>There's a problem with talking about "woman" as if it's one thing. De Beauvoir was writing from a particular position — white, French, educated, able. And when people said "woman," they often meant women like her.</p>
<p>But the story of woman-as-nurturer was applied selectively. A white woman's nurturing was considered natural, refined, spiritual. A Black woman's nurturing was considered servile, instinctual. An Indigenous woman's knowledge wasn't nurturing — it was primitive.</p>
<p>The same role was constructed differently depending on race. And the political implications were completely different.</p>
<p>The next piece in this series shows exactly how this worked — and why that distinction matters.</p>
` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
