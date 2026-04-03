import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function ForNormies() {
  return (
    <Layout
      title="Why Everything Costs So Much — Power Explained"
      description="Housing is unaffordable. Healthcare is bankrupting people. Wages haven't kept up with productivity in fifty years. This isn't a string of bad luck. It's a pattern — and patterns have explanations."
      seriesTag="Entry Points"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `Why Everything<br />Costs So Much` }} />
          <p className="hero-dek">Housing is unaffordable. Healthcare is bankrupting people. Wages haven't kept up with productivity in fifty years. This isn't a string of bad luck. Patterns have explanations.</p>
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>You're not imagining it. A full-time job used to be enough to rent an apartment, save a little, and not think about it constantly. Now a significant chunk of the country spends more than a third of their income on rent alone — and that's considered normal. Healthcare costs have tripled as a share of household spending since 1960. The average American worker is roughly twice as productive as in 1979, but median wages — adjusted for inflation — have barely budged.</p>
<p>These aren't separate problems with separate causes. They're the same thing happening in different sectors. Understanding what connects them is the first step toward doing something about it.</p>
<h2>What changed — and when</h2>
<p>There was a period, roughly from the 1940s through the 1970s, when wages and productivity actually tracked each other, when housing costs were manageable relative to income, and when a significant portion of public services were funded and run collectively. It wasn't paradise — <a class="xl" href="racial-capitalism.html">who got access to those goods was deeply unequal</a>. But the basic material floor was higher, and it was being built on purpose.</p>
<p>Then, starting around 1980, a series of deliberate policy choices began shifting how the economy worked. <a class="xl" href="why-your-city-doesnt-work.html">Things that had been shared got privatized.</a> Things that had been regulated got deregulated. Things that had been public goods got turned into markets. The results show up in the numbers:</p>
<div class="stat-compare">
<div class="stat-side then">
<span class="stat-era">1970s</span>
<div class="stat-num">~22%</div>
<div class="stat-label">Share of income a median household spent on housing</div>
</div>
<div class="stat-side">
<span class="stat-era">Now</span>
<div class="stat-num">~37%</div>
<div class="stat-label">Share of income a median renter spends on housing — over 50% in major cities</div>
</div>
<div class="stat-side then">
<span class="stat-era">1979</span>
<div class="stat-num">~$23/hr</div>
<div class="stat-label">Median US wage in 2023 dollars</div>
</div>
<div class="stat-side">
<span class="stat-era">2023</span>
<div class="stat-num">~$29/hr</div>
<div class="stat-label">Median US wage — while productivity roughly doubled. The gap is the extraction.</div>
</div>
</div>
<h2>It's not a bug</h2>
<p>The tempting explanation is that this happened because of mistakes — bad politicians, greedy executives, unfortunate circumstances. And yes, all of those contributed. But the pattern is too consistent and too global to be mainly about individual decisions. <a class="xl" href="the-outside-capital-needs.html">The economy extracts because it's structured to extract.</a></p>
<p>Here's the short version: when something people need — housing, healthcare, water, education — gets turned into a <em>market</em>, a few things reliably follow. Whoever owns the supply has enormous power over whoever needs it. Prices rise to whatever people can be pushed to pay, not whatever it costs to provide. The gap between cost and price — <a class="xl" href="glossary.html#rent-seeking">economists call this "rent"</a>, though it shows up in a lot more than apartments — flows upward to owners, not to the workers who produce the actual thing. And the people at the bottom, who have the least negotiating power, pay the highest prices relative to their income.</p>
<p>This is not a conspiracy. It doesn't require anyone to be unusually evil. It's just what markets in necessities produce when there's no countervailing structure — no public provision, no community ownership, no commons — to check the extraction.</p>
<div class="pull">
        The question isn't who to blame.<br/>It's <strong>what structures</strong><br/>produce what outcomes —<br/>and what we can build instead.
      </div>
<h2>What "the commons" actually means</h2>
<p>Before housing was a market, many communities governed land collectively. Before healthcare was an industry, care was organized through mutual aid networks, community hospitals, and public provision. Before water was a utility bill, most places had some form of shared governance over water. These weren't perfect systems. But they had a different internal logic: resources managed for the people who depend on them, rather than for the people who own them.</p>
<p>The <a class="xl" href="glossary.html#commons">commons</a> just means: things held and governed in common, rather than by private owners or by distant states. It's an old idea with a very modern set of applications — and it's being rebuilt right now, everywhere, in response to exactly the problem we're describing.</p>
<ul class="change-list">
<li>
<span class="change-num">Housing</span>
<span><a class="xl" href="glossary.html#community-land-trust">Community land trusts</a> remove land permanently from the speculative market, making housing permanently affordable without ongoing subsidy. There are over 250 in the US right now. <a class="xl" href="build-it-now.html">They work.</a></span>
</li>
<li>
<span class="change-num">Healthcare</span>
<span>Federally Qualified Health Centers — community-governed clinics that operate as nonprofits — serve 30 million Americans regardless of ability to pay. <a class="xl" href="mutual-aid-isnt-charity.html">Mutual aid health networks</a> fill the gaps where even those don't reach.</span>
</li>
<li>
<span class="change-num">Energy</span>
<span>Community energy cooperatives produce power at cost for their members rather than at profit for shareholders. Rural electric cooperatives — a New Deal-era commons — still power 56% of US land area today.</span>
</li>
<li>
<span class="change-num">Banking</span>
<span>Credit unions are member-owned financial cooperatives. They charge lower fees, pay higher savings rates, and make lending decisions based on community needs rather than shareholder returns. 130 million Americans belong to one.</span>
</li>
<li>
<span class="change-num">Food</span>
<span>Food co-ops, community gardens, seed libraries, and <a class="xl" href="the-commons-they-never-stopped-building.html">community-supported agriculture</a> all route food through relationships rather than supply chains — keeping more value local and more control with the people eating.</span>
</li>
<li>
<span class="change-num">Care</span>
<span><a class="xl" href="who-pays-for-the-next-shift.html">The care work that makes everything else possible</a> — childcare, eldercare, emotional labor — is increasingly being organized through worker cooperatives and community care networks that value it rather than extract it.</span>
</li>
</ul>
<h2>This isn't about left or right</h2>
<p>Credit unions aren't a radical idea — 130 million people use them. Rural electric cooperatives were championed by Franklin Roosevelt and beloved by conservative farming communities for decades. Community land trusts have been started by everyone from affordable housing advocates to libertarian-leaning intentional communities. <a class="xl" href="two-ways-to-fix-a-pothole.html">The question of who fixes the pothole</a> doesn't have an obvious partisan answer — it has a practical one: who actually knows where the potholes are and has a stake in getting them fixed?</p>
<p>If you're coming from a libertarian or anti-government direction: <a class="xl" href="for-libertarians.html">there's a piece written specifically for you.</a> The argument there is that the state and the market are the same problem — and the alternative to both is something with a long history. If you care more about the ecological dimension: <a class="xl" href="for-environmentalists.html">the environmental and social crises are the same crisis,</a> and the evidence for that is detailed and specific.</p>
<p>What all of these have in common isn't an ideology. It's a structure: the people who depend on a resource have meaningful say in how it's governed. That's less abstract than it sounds. It's the difference between your landlord raising rent because the market allows it, and a land trust where your housing costs are governed by a board that includes you.</p>
<div class="callout">
<span class="callout-label">The Kerala test</span>
<p>India's state of Kerala has been governed by a communist-led coalition for most of the past four decades. It has near-universal healthcare and education, the highest life expectancy in India (75 years, vs. a national average of 70), and its Kottayam district became the <a class="xl" href="case-study-india.html">first in India to eradicate extreme poverty</a> in 2025 — on a GDP that ranks eleventh among Indian states.</p>
<p>That last part matters. Kerala isn't rich. It achieved those outcomes through deliberate collective governance of public goods, not through economic growth trickling down. The experiment is imperfect and contested — but the numbers are real.</p>
<p><a class="xl" href="case-study-india.html">Read the full India case study →</a></p>
</div>
<div class="callout">
<span class="callout-label">Your city already knows this</span>
<p>Libraries are a commons. Public parks are a commons. Public transit is a commons. <a class="xl" href="your-city-knows-less.html">The governance of your city</a> already includes things maintained for collective use rather than private profit — and everywhere those things are strong, the quality of life is measurably better. The question is why some of those commons have been defended and expanded while others have been sold off or starved of funding.</p>
<p>The answer, almost always, is organized political pressure from people with an interest in keeping them public — and organized political pressure from people with an interest in privatizing them. <a class="xl" href="why-your-city-doesnt-work.html">Power determines which interest wins.</a></p>
</div>
<div class="action-box">
<span class="action-label">Practical entry points</span>
<h3>Things you can actually do</h3>
<p>Move your money to a <strong>credit union</strong>. It's a direct, personal act of preferring cooperative ownership to shareholder extraction — and you get better rates. Search "credit union near me" and take twenty minutes to switch.</p>
<p>Find out if there's a <strong>community land trust</strong> in your area. If you're a renter, they may have permanently affordable units. If you're a homeowner, you can donate or sell your home into the trust when you're ready to move. If there isn't one, your city's housing advocates probably know how to start one.</p>
<p>Show up for the <strong>public goods fights</strong> in your community — library funding, transit referendums, public hospital governance, school board elections. These are the places where the commons gets defended or surrendered, and they're decided by whoever shows up. <a href="two-ways-to-fix-a-pothole.html" style="color:rgba(var(--paper-rgb),0.85);text-decoration:none;border-bottom:1px solid rgba(var(--paper-rgb),0.3);">Local governance is where the lever is.</a></p>
<div class="action-links">
<a class="action-link" href="why-your-city-doesnt-work.html">Why your city doesn't work</a>
<a class="action-link" href="two-ways-to-fix-a-pothole.html">Two ways to fix a pothole</a>
<a class="action-link" href="mutual-aid-isnt-charity.html">Mutual aid isn't charity</a>
<a class="action-link" href="build-it-now.html">Build it now</a>
<a class="action-link" href="hardin-was-wrong.html">The evidence for the commons</a>
<a class="action-link" href="case-study-india.html">The Kerala test</a>
</div>
</div>` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="" />
      </ArticleWrap>
    </Layout>
  )
}
