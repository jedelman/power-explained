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
          
          <div dangerouslySetInnerHTML={{ __html: `<p>Between roughly 1450 and 1750, somewhere between 40,000 and 60,000 people were executed in Europe on charges of witchcraft. Roughly three-quarters to four-fifths of those executed were women.<sup><a href="#fn1" id="ref1">1</a></sup></p>
<p>The standard explanation is superstition — a pre-scientific world in which fear and religious hysteria produced mass violence against innocent people. Tragic, but essentially irrational. Not really connected to anything we'd recognize as politics or economics.</p>
<p>Silvia Federici's argument in <em>Caliban and the Witch</em><sup><a href="#fn2" id="ref2">2</a></sup> is that this explanation is wrong. The witch hunts were not irrational. They were not simply religious hysteria. They were part of a coordinated project — carried out by state authorities, church institutions, and the emerging capitalist class — to destroy a specific set of social arrangements and replace them with arrangements that served accumulation.</p>
<p>Understanding what was destroyed is the key to understanding what capitalism is built on.</p>
<h2>What the commons actually looked like</h2>
<p>In the feudal villages of late medieval Europe, subsistence communities <a class="xl" href="glossary.html#the-commons">held resources in common</a>. Common fields where animals grazed. Common forests where people gathered wood and food. Common water. These weren't romantic idylls — they were functional arrangements for managing shared resources in ways that ensured everyone had enough to survive.</p>
<p>But the commons extended beyond land. It extended to knowledge. Women were the primary keepers of <a class="xl" href="glossary.html#reproductive-labor">reproductive knowledge</a> in these communities. Midwives managed birth. Healers managed illness, using accumulated knowledge of plants, remedies, and body processes developed over generations. Women managed contraception and abortion. They were the primary coordinators of communal life — the people who knew who was sick, who needed food, where the resources were, how to move things through the community when they were needed.</p>
<p>This was the <a class="xl" href="glossary.html#the-commons">reproductive commons</a>: a distributed system of knowledge and mutual aid, held collectively, managed primarily by women, that sustained the community's ability to reproduce itself across generations.</p>
<div class="pull">
        The commons wasn't just land.<br/>It was <strong>knowledge, care, and the body</strong>.
      </div>
<h2>Why it had to be destroyed</h2>
<p>Capital, in its early stages, needed several things. It needed labor — people who had no other option than to sell their time for wages. It needed to control the reproduction of that labor — to ensure that the next generation of workers was produced reliably, in the right numbers, under conditions that served accumulation rather than community self-sufficiency. And it needed to destroy the alternatives — the arrangements that allowed people to subsist without entering the wage market.</p>
<p>The <a class="xl" href="glossary.html#enclosure">enclosure of common land</a> addressed part of this. When common fields were fenced off and made private, the peasants who had depended on them had nowhere else to go. They became available as wage labor. Their subsistence was now mediated by the market rather than by the commons.</p>
<p>But <a class="xl" href="glossary.html#enclosure">enclosing land</a> wasn't enough. The <a class="xl" href="glossary.html#reproductive-labor">reproductive commons</a> also had to be <a class="xl" href="glossary.html#enclosure">enclosed</a>. As long as communities controlled their own reproductive knowledge — as long as women could manage birth, health, and survival using collectively held practices — communities retained a degree of autonomy that threatened the control of both the state and emerging capital.</p>
<p>The witch hunts were the mechanism of this second enclosure.</p>
<p>The women most targeted were those who held and transmitted reproductive knowledge — midwives, healers, practitioners of herbal medicine, women who provided contraception and abortion. They were also frequently women who led community resistance to enclosure, who organized defense of common land, who refused the new arrangements being imposed on their communities.</p>
<p>The campaign against them was not just execution. It was the systematic delegitimization of their knowledge. After the witch hunts, reproductive medicine was reorganized — taken from women's informal networks and placed under the authority of male physicians, licensed by the state. The knowledge wasn't destroyed; it was captured, formalized, and placed under new management. The commons became a profession.<sup><a href="#fn3" id="ref3">3</a></sup></p>
<div class="callout">
<span class="callout-label">A note on the historical evidence</span>
<p>Federici's argument about the scale and coordination of the witch hunts is contested. The evidence for a single systematically organized campaign — as opposed to regionally dispersed events with varied causes — is disputed among historians. Her core structural argument — that the period involved a deliberate attack on women's reproductive autonomy and communal knowledge as part of <a class="xl" href="glossary.html#primitive-accumulation">primitive accumulation</a> — has broader scholarly support. The distinction matters: the structural claim can stand even if some details of the coordination argument are overstated. Read Federici knowing both.</p>
</div>
<h2>Primitive accumulation is gendered</h2>
<p>Marx described primitive accumulation as the historical process by which the conditions for capitalism were created — primarily the enclosure of common land and the creation of a class of people with nothing to sell but their labor. Federici's intervention is to show that this account is incomplete in a specific way: it doesn't describe the simultaneous enclosure of women's bodies and reproductive autonomy that occurred in the same period, through the same processes, for the same structural reasons.</p>
<p>This is not a supplement to Marx's analysis. It's a correction. The transition to capitalism required not just the enclosure of land but the enclosure of reproduction — the reorganization of birth, death, illness, and care under new forms of control that served accumulation. That reorganization required destroying the commons of women's knowledge, because that commons was the basis for community autonomy.</p>
<p>What <a class="xl" href="the-outside-capital-needs.html">Luxemburg described as the</a> "outside" that capital requires was never just geographic. It was intimate. It lived in the bodies and knowledge of women in every European village. And the creation of capitalism required its destruction.</p>
<h2>What it looks like to rebuild</h2>
<p>Federici's later work, <em>Re-enchanting the World</em><sup><a href="#fn4" id="ref4">4</a></sup>, asks what it looks like to rebuild the reproductive commons today. She looks at feminist organizing projects — collective childcare, community gardens, <a class="xl" href="mutual-aid-isnt-charity.html">mutual aid networks</a>, experiments in cooperative living — and argues that these are not peripheral to political struggle. They are political struggle, at its most fundamental level: rebuilding the substrate of collective life that capital depends on and cannot replace.</p>
<p>This is not nostalgia for an idealized past. It is a claim about where genuine alternatives to capture begin. Not in policy reform. Not in electoral victory. In the patient work of rebuilding the capacity of communities to take care of themselves — through relationships, through shared knowledge, through the collective management of the things that sustain life.</p>
<p>The commons was destroyed. It can be rebuilt. <a class="xl" href="what-we-do-on-monday.html">That's what the last article in this series is about.</a></p>` }} />
        </div>
        
        
        
        <Footnotes notes={FOOTNOTES} />
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
