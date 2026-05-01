import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []
const FOOTNOTES = [
  `The current scholarly consensus on executions during the early modern European witch trials is approximately 40,000–60,000. The leading authority is Brian P. Levack, <em>The Witch-Hunt in Early Modern Europe</em>, 3rd ed. (Pearson Longman, 2006), whose revised estimate converges with estimates from William Monter (~35,000), Malcolm Gaskill and Richard Golden (~40,000–50,000), and Ronald Hutton (~40,000). Historian James Sharpe summarizes: "The current consensus is that 40,000 people were executed as witches in the period of the witch persecutions, between about 1450 and 1750." The figure of 200,000 originates with Anne Lewellyn Barstow's upward adjustment in <em>Witchcraze</em> (1994) to account for lost records; Levack explicitly disputes this adjustment. Claims of "nine million" victims derive from an 18th-century pamphlet and have no credible historical basis. Roughly 75–80% of those executed were women, with some regional variation (in Iceland and Finland, men comprised a majority of the accused). <a href="#ref1">↩</a>`,
  `Federici, Silvia. <em>Caliban and the Witch: Women, the Body and Primitive Accumulation</em>. Brooklyn: Autonomedia, 2004. ISBN 978-1-57027-059-8. Federici began developing this argument in the 1970s through the Wages for Housework campaign and published an earlier version as "The Great Witch Hunt" in <em>Maine Scholar</em> 1(1):31–52, 1988. The book draws extensively on historical scholarship including Carolyn Merchant's <em>The Death of Nature</em> (1980) and the work of Richard Kieckhefer, Joseph Klaits, and Christine Larner. <a href="#ref2">↩</a>`,
  `Federici's argument about the professionalization of medicine at women's expense is developed in <em>Caliban and the Witch</em>, Chapter 3. She draws on the work of Barbara Ehrenreich and Deirdre English, <em>Witches, Midwives, and Nurses: A History of Women Healers</em> (Feminist Press, 1973), which documents the displacement of female healers by licensed male physicians in the 16th–17th centuries. This specific claim — that the witch hunts systematically targeted midwives and healers as a mechanism of medical enclosure — is contested. Historian David Harley argues in "Historians as Demonologists: The Myth of the Midwife-witch" (<em>Social History of Medicine</em> 3(1):1–26, 1990) that midwives were not disproportionately targeted in surviving trial records. Federici's response is that the absence from records reflects the destruction of those women's status and memory rather than their absence from targets. The debate remains active. <a href="#ref3">↩</a>`,
  `Federici, Silvia. <em>Re-enchanting the World: Feminism and the Politics of the Commons</em>. Oakland: PM Press / Kairos, 2018. ISBN 978-1-62963-569-9. A collection of essays spanning Federici's career, focused on women's organizing, land struggles, and the reconstruction of commons-based life in Africa, Latin America, and the United States. The foreword is by Peter Linebaugh. <a href="#ref4">↩</a>`
]

export default function WhatTheyBurned() {
  return (
    <Layout
      title="What They Burned — Power Explained"
      description="Silvia Federici reread the witch hunts as an economic project: the systematic destruction of women's reproductive knowledge and the communal commons that sustained village life. It wasn't hysteria. It was enclosure."
      seriesTag="The Hidden Engine — Series II"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `What They Burned` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>Between 1400 and 1700, somewhere between 40,000 and 60,000 people were executed as witches. Most were women. Most were poor. Many were healers, herbalists, midwives — women who knew things that made communities less dependent on the new market economy.</p>
<p>This wasn't hysteria. It was policy.</p>
<p>Silvia Federici argues that the witch hunts were a deliberate campaign of terror, carried out by the emerging capitalist class, aimed at destroying the knowledge systems and social structures that let communities meet their own needs outside the market.</p>
<h2>What the hunts actually destroyed</h2>
<p>Before capitalism, most production — food, medicine, care — happened within communities. Women knew plants. They helped each other birth children. They knew what to do when people got sick. They knew how to make things, preserve things, keep things going. This knowledge was commons — shared, taught, accessible.</p>
<p>Capitalism needed to destroy that. It needed people to be dependent on the market for the things they used to produce for themselves. It needed to break the knowledge networks that made communities self-sufficient.</p>
<p>The witch hunts did that work. They targeted the women who held the knowledge. They executed them, burned their knowledge with them, spread terror through women communities so the surviving women would be too afraid to practice healing, herbalism, midwifery.</p>
<p>The hunts also did something else: they used violence against women to consolidate control over women's bodies and labor. A woman who was afraid of being accused of witchcraft was a woman who was contained. She couldn't move freely. She couldn't practice her knowledge. She couldn't refuse the roles assigned to her.</p>
<div class="pull">
The witch hunts weren't hysteria.<br/>They were <strong>enclosure</strong> —<br/>of knowledge, of women's bodies, of commons.
</div>
<h2>The aftermath still works</h2>
<p>The hunts ended (mostly), but the mechanism they installed is still operating. The terror. The surveillance of women. The delegitimization of women's knowledge. The association between female autonomy and danger.</p>
<p>Every woman knows the list: don't go out alone at night, don't anger your partner, don't be "too ambitious," don't know too much about your own body, don't refuse. The terror is diffuse now. It doesn't need executions to work — just the ongoing threat. Just the knowledge that women who step too far out of line pay a price.</p>
<p>This is the historical foundation for the structures de Beauvoir identified, that Crenshaw analyzed. The terror was built, deliberately, centuries ago. And it's still holding the structure in place.</p>
` }} />
        </div>
        
        
        
        <Footnotes notes={FOOTNOTES} />
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
