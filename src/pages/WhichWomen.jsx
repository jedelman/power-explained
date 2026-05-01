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
          
          <div dangerouslySetInnerHTML={{ __html: `<p>The first women's rights activists in America fought for the right to vote, the right to own property, the right to keep their own wages. These were real fights. They mattered.</p>
<p>But they were fights for some women.</p>
<p>The white women leading the movement wrote the story of "woman" — and the story they wrote didn't include Black women, enslaved women, women working as servants. When those women asked for the same rights, the white women organizing the movement had to make a choice. Stand with all women, or stand with white supremacy.</p>
<p>They chose white supremacy.</p>
<p>Angela Davis shows how this happened. The first feminists didn't just accidentally exclude Black women. They actively worked to exclude them — forming alliances with segregationists, distancing themselves from Black women's struggles, telling a story of "woman" that only made sense if you were white.</p>
<h2>Which women get to be "woman"</h2>
<p>This isn't ancient history. The same pattern keeps repeating. A movement for "women's" rights that turns out to mean a particular group of women. A conversation about reproductive freedom that doesn't include the women whose reproduction has been controlled by the state. A story about women in the workplace that doesn't include the women doing the most invisible, worst-paid work.</p>
<p>Who gets to be "woman" in the story? Who's left out? And what happens to the women who are left out?</p>
<p>Davis argues that the women most often left out are the ones whose labor is most essential — and most exploited. And that the story gets told the way it does because of that. It's not an accident. It's structural.</p>
<div class="callout">
<span class="callout-label">The version of women's liberation everyone offers</span>
<p>Liberation for some women has often meant more security in the system for them — more access to property, more wages, more political power — often at the expense of other women. That's not liberation. That's a redistribution of power among people already relatively privileged.</p>
<p>Real liberation would have to include the women for whom the system means violence, surveillance, imprisonment — the women the system is designed to control. The next piece shows what that control actually looks like.</p>
</div>
` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
