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
          
          <div dangerouslySetInnerHTML={{ __html: `<p>Your rent went up $400 a month. Your job didn't. That used to feel like bad luck.</p>
<p>Now you notice it's happening to everyone you know. Your sister's moving out of the city. Your friend's parents are covering her healthcare deductible. Someone at work mentioned they picked up a second job — and that used to be unthinkable for someone working full-time.</p>
<p>This isn't random. It all started the same year.</p>
<h2>What changed in 1980</h2>
<p>Until then, something held things in place. Wages rose with productivity. Housing stayed expensive but not impossible. Public things — transit, water, hospitals — were funded as public things.</p>
<p>Then it stopped.</p>
<p>Starting that year, policy shifted. Deliberately. Land that had been held publicly got sold. Industries that had been regulated got deregulated. Services that had been public goods turned into markets where someone could extract profit.</p>
<p>Your rent went up because someone could now own the building and charge whatever the market allowed. Your hospital bill went up because healthcare became a market. Your wages stalled because productivity gains went somewhere else.</p>
<p>The math is visible in the numbers:</p>
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
<h2>It's not a mistake</h2>
<p>You could blame bad politicians and greedy executives. They contributed. But the pattern is too consistent and too global to be mainly about individuals. <a class="xl" href="the-outside-capital-needs.html">Markets extract because they're structured to extract.</a></p>
<p>Here's what happens when something you need — housing, healthcare, water, education — becomes a market: whoever owns the supply has power over whoever needs it. Prices rise to whatever people can be pushed to pay, not what it costs to provide. The gap flows upward to owners, not the workers making the thing. And the people with the least power pay the most, relative to income.</p>
<p>This isn't a conspiracy. It's structural. It's what markets in necessities produce when there's nothing to check them — no public provision, no community ownership, no commons.</p>
<div class="pull">
        The question isn't who to blame.<br/>It's <strong>what structures</strong><br/>produce what outcomes.
      </div>
<h2>What actually changes it</h2>
<p>Kerala — a state in India — has been governed by a communist coalition for most of the last forty years. It has near-universal healthcare and education, the highest life expectancy in India (75 vs. 70 nationally), and its Kottayam district became the <a class="xl" href="case-study-india.html">first in India to eradicate extreme poverty</a> in 2025.</p>
<p>That last part matters. Kerala isn't rich. It ranks eleventh among Indian states by GDP. It achieved those outcomes through deliberate collective governance of public goods, not because the economy grew. The experiment is imperfect. But the numbers are real.</p>
<p>This isn't about left or right. Credit unions aren't radical — 130 million people use them. Rural electric cooperatives were championed by Franklin Roosevelt and beloved by conservative farming communities. <a class="xl" href="two-ways-to-fix-a-pothole.html">The question of who fixes the pothole</a> doesn't have an obvious partisan answer. It has a practical one: who knows where the potholes are and has a stake in getting them fixed?</p>
<p>Libraries are a commons. Public parks are commons. Public transit is a commons. <a class="xl" href="your-city-knows-less.html">Your city already has things maintained for collective use rather than private profit.</a> Everywhere those are strong, quality of life is measurably better.</p>
<p>The commons just means: the people who depend on a resource have a say in how it's governed. That's less abstract than it sounds. It's the difference between your landlord raising rent because the market allows it, and a land trust where your housing costs are governed by a board that includes you.</p>
<h2>Things you can do</h2>
<p><strong>Move your money to a credit union.</strong> It takes twenty minutes. Search "credit union near me" and switch. It's a direct act: you're choosing cooperative ownership over shareholder extraction, and you'll get better rates.</p>
<p><strong>Find a community land trust in your area.</strong> If you rent, they may have permanently affordable units. If you own, you can donate or sell your home into the trust when you move. If there isn't one, your city's housing advocates know how to start one.</p>
<p><strong>Show up for the public goods fights.</strong> Library funding. Transit referendums. Public hospital governance. School board elections. These are where the commons gets defended or surrendered. They're decided by whoever shows up. <a href="two-ways-to-fix-a-pothole.html" style="color:rgba(var(--paper-rgb),0.85);text-decoration:none;border-bottom:1px solid rgba(var(--paper-rgb),0.3);">Local governance is where the lever is.</a></p>
<div class="callout">
<span class="callout-label">If you're skeptical of government</span>
<p><a class="xl" href="for-libertarians.html">There's a piece written for you.</a> The argument is that the state and the market are the same problem — and the alternative to both has a long history.</p>
</div>
<div class="action-links">
<a class="action-link" href="why-your-city-doesnt-work.html">Why your city doesn't work</a>
<a class="action-link" href="two-ways-to-fix-a-pothole.html">Two ways to fix a pothole</a>
<a class="action-link" href="mutual-aid-isnt-charity.html">Mutual aid isn't charity</a>
<a class="action-link" href="build-it-now.html">Build it now</a>
<a class="action-link" href="hardin-was-wrong.html">The evidence for the commons</a>
<a class="action-link" href="case-study-india.html">The Kerala test</a>
</div>
` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="" />
      </ArticleWrap>
    </Layout>
  )
}
