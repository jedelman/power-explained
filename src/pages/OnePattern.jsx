import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function OnePattern() {
  return (
    <Layout
      title="One Pattern — Power Explained"
      description="Four series. Dozens of thinkers. Different centuries, different continents, different domains. Before we talk about where to go, it's worth stopping to see what we've been circling."
      seriesTag="Where We Go From Here — Series V"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `One Pattern` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>The first series started with land. The second with labor. The third with the question of what to do about it. The fourth with the communities the first three frameworks had left out.</p>
<p>Different entry points. Different thinkers. Different centuries and continents.</p>
<p>One pattern underneath all of it.</p>
<p>The pattern is enclosure — the conversion of something held in common into something controlled for private benefit. And the counterpart to enclosure, which appears in every series too, is the commons: resources governed collectively, for shared benefit, by the people who depend on them. That isn't a metaphor being stretched across domains. It is the same structural move, recurring in different materials.</p>
<h2>What each series was actually about</h2>
<p>The first series — the numbered pieces — began with the basic argument. <a class="xl" href="hardin-was-wrong.html">Hardin was wrong</a>: the tragedy of the commons is not a law of human nature, it's an assumption dressed as evidence. <a class="xl" href="ostrom.html">Ostrom's work</a> showed that communities have governed shared resources for centuries without privatizing them or letting them collapse. The commons is not a failure mode. It is a governance form — one that works, under conditions that can be described and replicated, and that keeps getting enclosed.</p>
<p>Series II — <em>The Hidden Engine</em> — moved to labor. <a class="xl" href="the-outside-capital-needs.html">Luxemburg</a> showed that capitalism has always depended on an outside it cannot produce itself: land, labor, and social relationships that exist before the market and that the market extracts from without replacing. <a class="xl" href="who-pays-for-the-next-shift.html">Kollontai</a> named what that outside is mostly made of: the reproductive labor — cooking, childcare, care of the sick and elderly — that keeps the workforce alive between shifts, performed primarily by women, without compensation, treated as nature rather than work. <a class="xl" href="what-they-burned.html">Federici</a> traced when and how that labor was enclosed: the witch trials and the enclosures of early modern Europe were not separate events. They were part of the same structural transformation — one that drove people from common land into wage labor and simultaneously reorganized care and healing from communal functions into private female labor and, later, licensed male professions. The engine was hidden by making it invisible. That was the point.</p>
<p>Series III — <em>Against Authoritarianism</em> — asked the question that follows: if the system is this thoroughly wrong, what do you do? The honest answer from the historical record is that seizing the state and concentrating power to fix things from above has reliably reproduced the domination it was supposed to end. The Russian Revolution generated two different organizational forms: the distributed, self-organizing soviets that arose from below, and the centralized party hierarchy that captured them. <a class="xl" href="the-party-ate-the-revolution.html">The party ate the revolution</a> — not because of individual betrayal, but because of a structural feature. Hierarchical control of the state is the architecture of domination, regardless of who holds it. The alternative — <a class="xl" href="build-it-now.html">building the world you want to live in, now, in the interstices of the current one</a> — is not a consolation prize. It is a specific claim about how change at scale actually happens, based on what actually works.</p>
<p>Series IV — <em>The World the Framework Missed</em> — pushed back on the frameworks themselves. <a class="xl" href="racial-capitalism.html">Racial capitalism</a> is not capitalism plus racism added on top. Race is how capitalism has organized the production of its outside — the geography of whose labor is extracted at what price, whose land is enclosed and under what legal cover, whose communities absorb the debt and the pollution while the surplus travels elsewhere. <a class="xl" href="underdevelopment-is-a-verb.html">Underdevelopment is not a condition</a>; it is something done to places, deliberately, through trade structures and debt arrangements designed to keep the outside producing for the inside. <a class="xl" href="the-commons-they-never-stopped-building.html">Arundhati Roy</a> reported from the enclosures as they happen — the Narmada dams, the forest rights struggle, the state using "the greater common good" as an alibi for displacement — and refused to let the analysis drift into abstraction. Specific people. Specific places. Specific consequences. And the commons being built anyway, under eviction orders.</p>
<div class="pull">
        The commons is not just<br/>
<strong>what was taken.</strong><br/>
        It is what people keep building,<br/>
        despite everything.
      </div>
<h2>The same move, different materials</h2>
<p>Look at what was enclosed across all four series:</p>
<div class="domain-grid">
<div class="domain-cell">
<span class="domain-label">Land</span>
<p class="domain-text">Common fields, forests, and fisheries governed collectively for generations — enclosed by legal instruments into private property, driving people into wage labor to survive.</p>
</div>
<div class="domain-cell">
<span class="domain-label">Care</span>
<p class="domain-text">Healing knowledge, midwifery, community childcare — reorganized out of communal networks and into private households and, later, licensed professions and markets. Made invisible so it could be extracted without compensation.</p>
</div>
<div class="domain-cell">
<span class="domain-label">Governance</span>
<p class="domain-text">The capacity of communities to manage their own affairs — enclosed first by colonial administration, then by the nation-state, then by the vanguard party claiming to act in the people's name.</p>
</div>
<div class="domain-cell">
<span class="domain-label">Wealth</span>
<p class="domain-text">The surplus produced by communities and regions — redirected through trade structures, debt arrangements, and legal frameworks that move value from periphery to center while leaving the costs behind.</p>
</div>
</div>
<p>The design is the same each time: identify something a community holds in common, apply a legal or institutional mechanism that severs the community's claim on it, and redirect the flow of value to a center that controls access. The materials change. The move is identical.</p>
<p>The counterpart is also the same each time. The commons doesn't disappear. Communities keep building it — in the gaps the market and the state can't or won't fill, in the everyday acts of mutual aid and collective governance that neither private capital nor the state can fully replace, because both depend on them to exist at all.</p>
<h2>Why this matters for what comes next</h2>
<p>If the problem is a pattern — enclosure of shared resources, applied domain by domain — then the response is also a pattern. Not a single solution handed down from theory, not a vanguard waiting for the right moment, but the same design principle applied domain by domain: govern it collectively, for shared benefit, by the people who depend on it.</p>
<p>That principle already has a working proof of concept. <a class="xl" href="how-linux-became-the-internet.html">Linux runs most of the world's computers.</a> Nobody had to build it. Thousands of people chose to — because the thing they were building was worth building, and the mode of building it was itself part of the point. The result is the most successful commons in recent history, running underneath almost every piece of infrastructure we depend on, in a domain where private capital had every advantage.</p>
<p>Open source software is not a tech story. It is a proof of concept for how the commons works at scale — and the same choice that produced it is available in housing, in finance, in healthcare, in the governance of artificial intelligence. Not as a metaphor. As a structural option that communities are already choosing, right now, in forms that are largely below the threshold of mainstream attention.</p>
<p>That is what this series is about.</p>
<div class="callout">
<span class="callout-label">How to read what follows</span>
<p>The pieces in this series are not proposals. They are descriptions of things already being built — in community land trusts, credit unions, care cooperatives, and the governance of shared digital infrastructure. The argument isn't that these things should exist. It's that they do exist, they work, and the question is whether they will be built at the scale and speed the moment requires.</p>
<p>The work that looks like nothing is often the work that matters most. The Linux contributors writing networking code in 1994 were not winning. They were building the conditions for winning. The people described in the pieces that follow are doing the same thing — and the moment they are preparing for is closer than it appears.</p>
</div>` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
