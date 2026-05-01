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
<p>The standard story: humans are destructive by nature. Population grows, consumption grows, the natural world gets eaten. Solutions are technological (invent our way out) or behavioral (consume less).</p>
<p>This story is false. Not partially — systematically false. It misidentifies the cause, which means every solution built on it fails. The upstream cause isn't human nature. It's <a class="xl" href="glossary.html#enclosure">enclosure</a>: the removal of land, water, and living systems from the communities that governed and depended on them.</p>
<h2>Who was actually managing the land</h2>
<p>Before enclosure, most of the world's productive land and water was managed as commons. Swiss alpine meadows under continuous management for five centuries. Japanese community forests where village councils governed cutting. Irrigation systems in Valencia running since the Moorish period, still operating today.</p>
<p><a class="xl" href="ostrom.html">Elinor Ostrom</a> documented hundreds of these systems. They reliably outperformed both private ownership and state management on ecological sustainability.</p>
<p>Why? Long-term stakes. When the people deciding about a forest depend on that forest for the next century, they manage it accordingly. Enclosure severed that: decision-making went to people with no long-term stake in ecosystem health, only short-term extraction value.</p>
<div class="pull">
The <a class="xl" href="hardin-was-wrong.html">tragedy of the commons</a><br/>isn't what commons produce.<br/>It's what <strong>enclosure produces</strong>.
</div>
<h2>The data</h2>
<p>Indigenous and community-managed lands cover roughly 22 percent of the Earth's surface. They contain approximately 80 percent of the world's remaining biodiversity.</p>
<p>Not a coincidence. It's the predictable result of land governance structures that create long-term incentives for maintenance rather than extraction.</p>
<p>Worst biodiversity loss? Areas where community land governance was disrupted by colonial enclosure, privatization, or state expropriation. The Amazon — the most biodiverse land ecosystem on Earth — is being destroyed fastest where land was transferred to large private holders and where Indigenous territorial governance was most aggressively undermined.</p>
<p>The racial-economic logic of enclosure and the ecological logic of destruction aren't separate processes. <a class="xl" href="racial-capitalism.html">They're the same process.</a></p>
<div class="case">
<span class="case-label">Case: The Amazon</span>
<h3>Who's actually protecting the forest</h3>
<p>Satellite data is unambiguous: best forest cover in the Brazilian Amazon is in Indigenous territories with recognized legal status and active territorial governance. Worst is where land titles are contested or concentrated in private hands with political connections to agriculture.</p>
<p>In 2019-2022, deforestation rates inside legally recognized Indigenous territories ran roughly 80 percent lower than in comparable unprotected areas. This despite those territories being actively targeted by illegal loggers and miners with political cover.</p>
<p>This isn't nature-protection from above. It's the communities with the deepest stake maintaining what they've always maintained.</p>
</div>
<h2>The conservation movement's error</h2>
<p>Mainstream conservation shared the enclosure logic it was supposedly fighting. The dominant model — "fortress conservation," protected areas excluding people — was built on the colonial assumption that nature needs protection <em>from</em> people, not governance <em>by</em> them.</p>
<p>This model expelled Indigenous communities from their territories, then watched biodiversity decline because the communities doing maintenance work were gone.</p>
<p>Evidence has been accumulating for decades: co-management with local communities outperforms exclusion, consistently, across biomes and continents. Nature Conservancy and WWF have updated their models. But structural pressure toward "just fence it off" remains strong — it requires no redistribution of governance power, which is the harder work.</p>
<h2>What changes</h2>
<p>If human nature is the problem: technological fixes and behavioral nudges.</p>
<p>If enclosure is the problem: restore and protect community land governance. Strengthen Indigenous territorial rights. Support commons-based management. Reverse water privatization. Resist land grabs in the Global South dressed as "green investment."</p>
<p>Climate crisis and biodiversity crisis are usually treated as separate problems. They share a cause. Carbon is released at scale when forests are cleared. Forests are cleared at scale when communities governing them lose territorial control. Address governance, you address both crises at once.</p>
<p><a class="xl" href="env-indigenous-land-governance.html">Indigenous land governance</a> isn't a heritage project. It's the most effective climate and biodiversity intervention available.</p>
<p>The next piece in this series looks at what that governance actually looks like — not as abstraction, but as functioning institutions with documented outcomes.</p>
<div class="nav-strip">
<a href="for-environmentalists.html">← Overview</a>
<a href="env-indigenous-land-governance.html">Next: Indigenous governance →</a>
</div>
` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="" />
      </ArticleWrap>
    </Layout>
  )
}
