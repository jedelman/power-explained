import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function WhichWomen() {
  return (
    <Layout
      title="Which Women — Power Explained"
      description="Angela Davis showed what happens when feminist analysis uses 'women' as if it describes everyone equally. It doesn't. And the movement that didn't ask that question made choices it can't take back."
      seriesTag="The Hidden Engine — Series II"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `Which Women` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>The first women's rights activists in America fought for the right to vote, the right to own property, the right to keep their own wages. They won some of these fights. They mattered.</p>
<p>But they made a choice.</p>
<p>When Black women asked for the same rights, the white women leading the movement had to choose: stand with all women, or stand with white supremacy.</p>
<p>They chose white supremacy.</p>
<p>Angela Davis shows how this happened. The first feminists didn't accidentally exclude Black women. They actively worked to exclude them. They formed alliances with segregationists. They distanced themselves from Black women's struggles. They told a story of "woman" that only made sense if you were white, only made sense if your oppression was *only* gendered.</p>
<h2>What that choice meant</h2>
<p>A Black woman fighting for voting rights wasn't just fighting gender oppression. She was fighting white supremacy, capitalism, and the state violence that targeted her specifically. Her liberation couldn't be separated from racial liberation. The white women organizing the movement knew this. They chose not to organize for it.</p>
<p>Instead, they built a movement that benefited white women at the expense of Black women. Access to property. Access to wages. Access to the political system. These gains for white women were often built on the backs of Black women doing domestic labor, sex work, survival work — the invisible, degrading labor that made white women's "liberation" possible.</p>
<p>This wasn't a failure of understanding. It was a failure of choice.</p>
<div class="pull">
They chose.<br/>Deliberately.<br/>That's not a mistake. <strong>That's strategy.</strong>
</div>
<h2>The pattern keeps repeating</h2>
<p>This isn't ancient history. The same choice happens over and over. A movement for "women's" rights that turns out to mean white women. A conversation about reproductive freedom that doesn't include women whose reproduction has been controlled by the state. A story about women in the workplace that doesn't include the women doing the worst-paid, most invisible work.</p>
<p>Who gets to be "woman" in the story? Who's left out? And what happens to the women who are left out?</p>
<p>Davis argues that the women most often left out are the ones whose labor is most essential — and most exploited. And that the story gets told the way it does *because* of that. It's structural. It's deliberate. It's how the system maintains power — by dividing the people it oppresses.</p>
<p>The next piece shows what happens when those divisions are built into the law itself, into the categories we use to understand power.</p>
` }} />
        </div>
        
        
        
        <div className="nav-strip" style={{marginTop: "3rem"}}>
          <a href="the-other-and-the-outside.html">← Previous</a>
          <a href="falling-through-the-gap.html">Next →</a>
        </div>
        <div className="nav-strip" style={{marginTop: "3rem", marginBottom: "2rem"}}>
          <a href="the-other-and-the-outside.html">← Previous</a>
          <a href="falling-through-the-gap.html">Next →</a>
        </div>
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
