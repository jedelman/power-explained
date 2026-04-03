import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function EnvEnclosureAndExtinction() {
  return (
    <Layout
      title="Enclosure Is the Extinction Driver — Power Explained"
      description="Biodiversity doesn't collapse randomly. It collapses when the communities that maintained it lose control of the land. The six mass extinction events humans have driven share one upstream cause — and it isn't human nature."
      seriesTag="For Environmentalists"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `Enclosure Is<br />the Extinction<br />Driver` }} />
          <p className="hero-dek">Biodiversity doesn't collapse randomly. It collapses when the communities that maintained it lose control of the land. The ecological crisis has an upstream cause — and it isn't human nature.</p>
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<div class="nav-strip">
<a href="for-environmentalists.html">Overview</a>
<a class="current" href="env-enclosure-and-extinction.html">I. Enclosure &amp; extinction</a>
<a href="env-indigenous-land-governance.html">II. Indigenous governance</a>
<a href="env-carbon-markets-are-enclosures.html">III. Carbon markets</a>
</div>
<p>The standard story of the ecological crisis goes like this: humans are destructive by nature. Population grows, consumption grows, and the natural world gets eaten. The only solutions are either technological (invent our way out) or behavioral (consume less). Both versions have the same implicit premise: the problem is human nature, and the only question is how to constrain it.</p>
<p>This story is false. Not partially false — systematically, consequentially false. It misidentifies the cause, which means every solution built on top of it fails to address what's actually driving ecological collapse. The upstream cause isn't human nature. It's <a class="xl" href="glossary.html#enclosure">enclosure</a>: the removal of land, water, and living systems from the communities that governed them and depended on them.</p>
<h2>Who was actually managing the land</h2>
<p>Before enclosure, most of the world's productive land and water was managed as commons — governed by the communities that depended on them, under rules developed over generations to maintain them sustainably. Swiss alpine meadows under continuous management for five centuries. Japanese community forests where cutting was governed by village councils. Irrigation systems in Valencia running since the Moorish period, still operating today. <a class="xl" href="ostrom.html">Elinor Ostrom</a> documented hundreds of these systems and proved that they reliably outperformed both private ownership and state management on ecological sustainability.</p>
<p>The commons worked not because communities were uniquely virtuous, but because they had <em>long-term stakes</em>. When the people making decisions about a forest are the same people who depend on that forest for the next century, they manage it accordingly. Enclosure severed that relationship: the decision-making authority went to people with no long-term stake in the ecosystem's health, only in its short-term extraction value.</p>
<div class="pull">
        The <a class="xl" href="hardin-was-wrong.html">tragedy of the commons</a><br/>isn't what commons produce.<br/>It's what <strong>enclosure produces</strong>.
      </div>
<h2>The enclosure-extinction link</h2>
<p>The biodiversity data makes this concrete. Indigenous and community-managed lands cover roughly 22 percent of the Earth's surface, but they contain approximately 80 percent of the world's remaining biodiversity. This is not a coincidence. It is the predictable result of land governance structures that create long-term incentives for ecological maintenance rather than short-term extraction.</p>
<p>The areas with the worst biodiversity loss are, consistently, areas where community land governance was disrupted by colonial enclosure, privatization, or state expropriation. The Amazon basin — the most biodiverse land ecosystem on Earth — is being destroyed fastest where land was transferred to large private holders and where Indigenous territorial governance has been most aggressively undermined. The <a class="xlr" href="racial-capitalism.html">racial-economic logic of enclosure</a> and the ecological logic of destruction are not separate processes running in parallel. They are the same process.</p>
<div class="case">
<span class="case-label">Case: The Amazon</span>
<h3>Who's actually protecting the forest</h3>
<p>Satellite deforestation data is unambiguous: the best-performing areas for forest cover in the Brazilian Amazon are Indigenous territories with recognized legal status and active territorial governance. The worst-performing areas are where land titles are contested or concentrated in private hands with political connections to agricultural interests.</p>
<p>In 2019-2022, deforestation rates inside legally recognized Indigenous territories ran roughly 80 percent lower than in comparable unprotected areas, despite those territories being actively targeted by illegal loggers and miners operating with political cover. This isn't the outcome of nature-protection programs. It's the outcome of Indigenous territorial governance. The forest isn't being protected from above — it's being maintained by the communities with the deepest stake in its survival.</p>
</div>
<h2>The conservation movement's blind spot</h2>
<p>Mainstream conservation has, for most of its history, shared the enclosure logic it was supposedly fighting. The dominant model — "fortress conservation," protected areas excluding human habitation — was built on the colonial assumption that nature needs to be protected <em>from</em> people, rather than governed <em>by</em> them. This model expelled Indigenous communities from their territories in the name of preservation, then watched biodiversity decline anyway, because the communities doing the actual maintenance work were no longer there.</p>
<p>The evidence has been accumulating for decades: co-management with local communities outperforms exclusion, consistently, across biomes and continents. The Nature Conservancy and WWF have slowly updated their models. But the structural pressure toward the easier, cleaner, community-free "just fence it off" approach remains strong — because it requires no redistribution of governance power, which is the harder work.</p>
<h2>What changes when you name the cause correctly</h2>
<p>If human nature is the problem, the solutions are technological fixes and behavioral nudges at the margins. If enclosure is the problem, the solutions involve restoring and protecting community land governance: strengthening Indigenous territorial rights, supporting <a class="xl" href="the-commons-they-never-stopped-building.html">commons-based management</a> regimes, reversing the privatization of water, resisting land grabs in the Global South dressed up as "green investment."</p>
<p>The climate crisis and the biodiversity crisis are usually treated as separate problems requiring separate solutions. They share a cause. Carbon is released at scale when forests are cleared, and forests are cleared at scale when the communities governing them lose territorial control. Address the governance, and you address both crises at once. <a class="xlg" href="env-indigenous-land-governance.html">Indigenous land governance</a> isn't a heritage project. It's the most effective climate and biodiversity intervention available.</p>
<p>The next piece in this series looks at what that governance actually looks like — not as a romanticized abstraction, but as functioning institutions with documented outcomes.</p>
<div class="nav-strip">
<a href="for-environmentalists.html">← Overview</a>
<a href="env-indigenous-land-governance.html">Next: Indigenous governance →</a>
</div>` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="" />
      </ArticleWrap>
    </Layout>
  )
}
