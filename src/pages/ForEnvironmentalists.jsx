import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function ForEnvironmentalists() {
  return (
    <Layout
      title="The Commons Is the Ecology — Power Explained"
      description="Ecosystems don't collapse randomly. They collapse when the commons that maintained them gets enclosed. The inverse is also true: where the commons holds, the ecology holds. Here's what's already growing."
      seriesTag="Entry Points"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `The Commons<br />Is the Ecology` }} />
          <p className="hero-dek">Where the commons holds, the ecology holds. That's not a slogan — it's what the evidence shows. And right now, all over the world, people are rebuilding both.</p>
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>For most of human history, forests were managed by the communities that lived in them. Fisheries were governed by the people who fished them. Water flowed under rules negotiated by the villages that drank from it. Not perfectly — but sustainably, often for centuries, because the people doing the managing had long-term stakes in the living systems they depended on.</p>
<p>Then came <a class="xl" href="glossary.html#enclosure">enclosure</a>: the long transfer of shared resources out of community hands and into private ownership. What had been a relationship became a commodity. What had been governed by the people who lived in it got managed for whoever held the title. The <a class="xlr" href="what-they-burned.html">destruction of the commons</a> and the destruction of the ecology are, in most cases, the same event.</p>
<p>But here's the part that gets left out: <strong>the inverse is also true.</strong> Rebuild the commons, and the ecology follows. And people are doing exactly that — right now, everywhere.</p>
<h2>Ostrom proved it</h2>
<p>In 2009, <a class=\"xl\" href=\"ostrom.html\">Elinor Ostrom</a> won the Nobel Prize in Economics for documenting what communities had known for centuries: shared resources governed by the people who depend on them are maintained sustainably, routinely outperforming both private ownership and state management. Swiss alpine meadows managed continuously for 500 years. Japanese community forests. Irrigation systems in Valencia running since the Moorish period. Maine lobstermen's territorial governance. Kenyan pastoralist grazing commons.</p>
<p>The <a class="xl" href="hardin-was-wrong.html">"tragedy of the commons"</a> — the claim that shared resources inevitably get destroyed — was never describing commons governance. It was describing the <em>absence</em> of it. Hardin's model assumed no communication, no rules, no community. Real commons have all three. The tragedy, when it happens, is what <a class="xl" href="hardin-was-wrong.html">enclosure produces — not what the commons produces</a>.</p>
<div class="pull">
        The commons doesn't cause ecological collapse.<br/><strong>Enclosure does.</strong><br/>Which means rebuilding the commons<br/>is the ecological project.
      </div>
<h2>What's already growing</h2>
<p>The regenerative future isn't waiting for a revolution. It's being seeded right now in <a class="xl" href="two-ways-to-fix-a-pothole.html">neighborhood governance experiments</a>, <a class="xl" href="build-it-now.html">cooperative infrastructure</a>, and <a class="xl" href="the-commons-they-never-stopped-building.html">commons that never stopped being built</a>. These aren't peripheral. They're proof of concept at scale.</p>
<div class="examples-grid">
<div class="example">
<div class="example-icon">🌱</div>
<div class="example-title">Community Land Trusts</div>
<div class="example-body">Remove land permanently from speculative markets — for housing, agriculture, ecological preservation. <strong>250+ active CLTs</strong> in the US alone, hundreds more globally.</div>
</div>
<div class="example">
<div class="example-icon">☀️</div>
<div class="example-title">Energy Cooperatives</div>
<div class="example-body">Community-owned solar and wind that builds collective energy wealth rather than extracting it. <strong>900+ in Germany.</strong> The US is building fast.</div>
</div>
<div class="example">
<div class="example-icon">🌾</div>
<div class="example-title">Seed Libraries</div>
<div class="example-body">Reclaim seeds from corporate enclosure. Preserve genetic diversity. Distribute food sovereignty one packet at a time. <strong>Thousands</strong> in public libraries worldwide.</div>
</div>
<div class="example">
<div class="example-icon">🔧</div>
<div class="example-title">Repair Cafes</div>
<div class="example-body">Extend object life through shared skill. Refuse the planned obsolescence that extraction capitalism requires. <strong>2,500+ worldwide</strong> and growing.</div>
</div>
<div class="example">
<div class="example-icon">🪴</div>
<div class="example-title">Urban Commons</div>
<div class="example-body">Community gardens, urban orchards, shared composting. Reclaiming land from asphalt and vacancy, building ecological knowledge back into neighborhoods.</div>
</div>
<div class="example">
<div class="example-icon">🐟</div>
<div class="example-title">Fishing Commons</div>
<div class="example-body">From Maine lobstermen's territorial governance to Pacific Islander traditional marine management — community-governed fisheries <strong>consistently outperform</strong> private extraction on sustainability.</div>
</div>
</div>
<h2>Defense and construction — both, always</h2>
<p>Environmental movements have spent decades in defensive mode — stop this pipeline, protect this forest, block this development. That work is necessary. The legal and advocacy infrastructure built through those fights is <a class="xl" href="the-commons-they-never-stopped-building.html">part of the commons</a> in its own right.</p>
<p>But defense alone can't produce a regenerative future. <a class="xl" href="mutual-aid-isnt-charity.html">Construction runs alongside it</a>: not just stopping extraction but building the ownership structures that change the incentive landscape at the root. A <a class="xl" href="glossary.html#community-land-trust">community land trust</a> doesn't stop a developer by winning in court — it removes the land from the market permanently. A community energy cooperative doesn't just generate clean power — it changes who controls energy decisions going forward. A seed library reclaims the means of food production from <a class="xlr" href="the-outside-capital-needs.html">corporate enclosure of the genetic commons</a>.</p>
<p>Same fight. Two modes. Each makes the other more effective.</p>
<div class="callout">
<span class="callout-label">Rojava grew trees during a war</span>
<p>In the <a class="xl" href="case-study-rojava.html">Autonomous Administration of North and East Syria</a>, ecology is written into the founding charter alongside democracy and women's liberation — not as a policy preference but as load-bearing structure. In practice: communal land governance, cooperative farming, reforestation projects — maintained through active military conflict, economic blockade, and international isolation.</p>
<p>While being bombed and blockaded, the communes were planting trees. Because when land is governed as a <a class="xl" href="glossary.html#commons">commons</a>, the incentive is maintenance — not extraction. That's not idealism. That's what different ownership structures produce. <a class="xl" href="case-study-rojava.html">Read the Rojava case study →</a></p>
</div>
<div class="callout">
<span class="callout-label">Thirty years of forest commons in Chiapas</span>
<p>The <a class="xl" href="case-study-zapatistas.html">Zapatista communities</a> have governed their territories autonomously since 1994. The forests they manage have been maintained — as water sources, climate protection, and places their children will inherit — because the communities living in them have long-term stakes in their survival. <a class="xl" href="case-study-zapatistas.html">Read the Zapatistas case study →</a></p>
</div>
<div class="action-box">
<span class="action-label">Where to plug in</span>
<h3>Grow the commons you can reach</h3>
<p>Find the <a href="glossary.html#community-land-trust" style="color:rgba(var(--paper-rgb),0.9);border-bottom:1px solid rgba(var(--paper-rgb),0.35);text-decoration:none;">community land trust</a> in your area — support it, join it, or help start one. Join a community energy cooperative board. Donate seeds to and borrow from your local seed library. Start a repair cafe at a library that doesn't have one. Find out who governs the water in your city and make that governance more democratic.</p>
<p>And when you're in the fight — the pipeline campaign, the forest protection case, the regulatory hearing — ask what permanent commons structure comes after the defense. What removes this piece of the living world from the market for good? <a href="build-it-now.html" style="color:rgba(var(--paper-rgb),0.9);border-bottom:1px solid rgba(var(--paper-rgb),0.35);text-decoration:none;">Defense plus construction</a> is the long game. Either one alone isn't enough.</p>
<div class="action-links">
<a class="action-link" href="hardin-was-wrong.html">Hardin Was Wrong</a>
<a class="action-link" href="build-it-now.html">Build It Now</a>
<a class="action-link" href="mutual-aid-isnt-charity.html">Mutual aid isn't charity</a>
<a class="action-link" href="case-study-rojava.html">Rojava: ecology as structure</a>
<a class="action-link" href="case-study-zapatistas.html">Zapatistas: 30 years of forest commons</a>
<a class="action-link" href="build-the-commune-without-the-state.html">Build the commune</a>
</div>
</div>` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="" />
      </ArticleWrap>
    </Layout>
  )
}
