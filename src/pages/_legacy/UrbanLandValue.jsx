import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function UrbanLandValue() {
  return (
    <Layout
      title="Land Value Is a Commons Problem — Power Explained"
      description="The value of urban land isn't produced by its owner. It's produced by the city around it — by transit, by schools, by neighbors, by decades of collective investment. The question is who gets to keep it."
      seriesTag="For Urbanists"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `Land Value<br />Is a Commons<br />Problem` }} />
          <p className="hero-dek">The value of urban land isn't produced by its owner. It's produced by the city around it — by transit built nearby, schools improved, streets made safe, neighborhoods made livable through decades of collective investment. The question is who gets to keep it.</p>
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<div class="nav-strip">
<a href="for-urbanists.html">Overview</a>
<a class="current" href="urban-land-value.html">I. Land value</a>
<a href="urban-capture.html">II. How cities get captured</a>
<a href="urban-cooperative-infrastructure.html">III. What's being built</a>
</div>
<p>In 2012, New York City spent $4.45 billion extending the 7 subway line to Hudson Yards on the far west side of Manhattan. The publicly funded infrastructure made land nearby dramatically more valuable — estimates put the land value uplift in the billions. The city captured almost none of it. The gains went to private landowners and Related Companies, the developer that had lobbied for the extension for years.</p>
<p>This is not a corruption story. It's a commons story. The subway line was built with public money — which is to say, with the collective resources of the city's residents and workers. The value it created was collective value, produced by a collective investment. The question of who captures that value is the land question, and it's been the central question of urban economics for over a century.</p>
<h2>Where land value actually comes from</h2>
<p>A parcel of land in Manhattan is worth millions. The same square footage in a rural county is worth thousands. The owner of the Manhattan parcel did nothing to produce that difference. What produced it is everything around the parcel: the transit network, the density of economic activity, the accumulated infrastructure, the schools, the cultural institutions, the labor of millions of people over decades who made the city what it is. Land value is socially produced. It's a commons output — generated collectively, not individually.</p>
<p>Henry George identified this in 1879 and proposed the land value tax as the structural correction: capture the socially produced value increase through taxation rather than letting it accrue to whoever happened to hold title. His proposal was suppressed with extraordinary thoroughness — real estate interests have consistently been among the most organized political forces in any city, for obvious reasons. But the economic logic has never been seriously refuted, because it's correct.</p>
<div class="pull">
        The landlord didn't make<br/>the neighborhood desirable.<br/>The neighborhood made the<br/><strong>landlord wealthy.</strong>
</div>
<h2>The mechanism: how value flows away from the commons</h2>
<div class="flow">
<div class="flow-row">
<div class="flow-num">01</div>
<div class="flow-text"><strong>Public investment creates value uplift.</strong> Transit lines, school improvements, park development, public safety investment — all increase the desirability of nearby land. This is collective investment producing collective value.</div>
</div>
<div class="flow-row">
<div class="flow-num">02</div>
<div class="flow-text"><strong>Private title captures the uplift.</strong> Without mechanisms to return that value to the public, it flows to whoever holds the deed. Landowners who did nothing to produce the value gain it anyway, purely through positional advantage.</div>
</div>
<div class="flow-row">
<div class="flow-num">03</div>
<div class="flow-text"><strong>Rising land values displace the communities that produced them.</strong> The neighborhood that made itself desirable — through the labor, culture, social networks, and institutional life of its residents — gets priced out of the desirability it created. <a class="xlr" href="racial-capitalism.html">Racial displacement</a> is not a side effect. It is, historically, the mechanism by which this works.</div>
</div>
<div class="flow-row">
<div class="flow-num">04</div>
<div class="flow-text"><strong>The cycle repeats.</strong> Displaced communities rebuild elsewhere; that new neighborhood becomes desirable; they get displaced again. The commons of neighborhood — the culture, institutions, social networks that residents collectively produce — gets strip-mined repeatedly, with the value extracted flowing to owners who arrived after the work was done.</div>
</div>
</div>
<h2>The structural correction: remove land from the market</h2>
<p>If the problem is that land title lets private owners capture collectively produced value, the solutions involve changing who holds the land. Not temporarily — permanently. The <a class="xl" href="glossary.html#community-land-trust">community land trust</a> is the most well-developed institutional form: a nonprofit holds land in perpetuity, leasing it to residents or businesses at affordable rates, with resale restrictions that keep homes affordable across generations regardless of what the surrounding market does.</p>
<p>The CLT decouples housing from speculation by design: when you buy a home in a CLT, you buy the building, not the land under it. You can build equity, sell, and profit — but the resale price is capped by formula, keeping the unit affordable for the next buyer. The land value that would otherwise be captured by speculation stays with the community that holds the trust.</p>
<div class="case">
<span class="case-label">Case: Burlington Community Land Trust</span>
<h3>Forty years of proof</h3>
<p>Started in 1984 under Mayor Bernie Sanders, the <a class="xl" href="https://champlainhousingtrust.org" rel="noopener" target="_blank">Champlain Housing Trust</a> in Burlington, Vermont has maintained affordable homeownership through multiple real estate cycles that priced out comparable households in surrounding markets. During the 2008 crash, CLT homes had dramatically lower foreclosure rates than market-rate homes — because buyers hadn't been stretched by speculative pricing. During the post-2020 housing surge, CLT homes remained affordable while Burlington's market prices doubled.</p>
<p>The trust now holds over 650 homes plus commercial and rental properties. It has produced intergenerational affordable homeownership in a city that, by market logic, would be entirely unaffordable for working-class residents. It works not because of subsidy — though it has received public investment — but because of the ownership structure. Remove the land from the market and the market dynamic stops applying to it.</p>
</div>
<h2>Scale and limits</h2>
<p>Community land trusts are proven at the neighborhood and city scale. The constraint is political, not technical: acquiring land at scale requires either purchasing at market rates (expensive) or policy interventions that require confronting real estate interests (politically costly). Cities that have done it seriously — Vienna, Singapore, Amsterdam — have done it through long-term public land policy, not just nonprofit acquisition.</p>
<p>Vienna's approach is instructive: roughly 60 percent of the city's housing is public or subsidized, with the municipal government functioning as a permanent large-scale landlord holding land off the market. Singapore's land is majority state-owned, with long-term leases rather than freehold titles. Amsterdam has a long tradition of municipal land leasing. In each case, the political decision to treat land as a commons rather than a commodity was made early and held over generations. The alternatives — treating land as a pure commodity and subsidizing the resulting affordability failures — have proven consistently more expensive and less effective.</p>
<p>The second piece in this series looks at why that political decision is so hard to make and hold: how real estate interests capture the planning and governance processes that determine land policy before most people even realize it's happening.</p>
<div class="nav-strip">
<a href="for-urbanists.html">← Overview</a>
<a href="urban-capture.html">Next: How cities get captured →</a>
</div>` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="" />
      </ArticleWrap>
    </Layout>
  )
}
