import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function ForUrbanists() {
  return (
    <Layout
      title="The City Is a Commons — Power Explained"
      description="The housing crisis, the transit crisis, the gentrification crisis — they're not separate failures. They're the same enclosure. And cities are also where the most interesting alternatives are already being built."
      seriesTag="Entry Points"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `The City<br />Is a Commons` }} />
          <p className="hero-dek">The housing crisis, the transit crisis, the gentrification crisis — they're not separate failures. They're the same enclosure. And cities are also where the most durable alternatives are already being built.</p>
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>Cities concentrate everything: wealth, poverty, infrastructure, possibility, and the clearest view of how power actually works. Every urban crisis — housing unaffordable, transit gutted, neighborhoods flipped, parks privatized, public squares controlled by developers — follows the same logic: a shared resource gets transferred out of public hands and into private ones. That's not bad governance. That's <a class="xl" href="glossary.html#enclosure">enclosure</a>, and it's been the dominant strategy of urban capital for a century.</p>
<p>But cities are also where the commons is most actively being rebuilt. Because density creates the conditions for collective governance: people close enough together to organize, shared infrastructure too expensive to abandon, and long enough histories of mutual dependence to produce real institutions. The <a class="xlr" href="what-they-burned.html">commons they tried to destroy</a> is visible in every city if you know what to look for.</p>
<h2>The same crisis, four times</h2>
<p>The urban crises that consume policy attention look different on the surface. They share one mechanism.</p>
<div class="crisis-grid">
<div class="crisis-card">
<span class="crisis-label">Housing</span>
<p>Land is a commons — its value is created by the whole city: transit built nearby, schools improved, neighborhoods made safe through collective effort. When that value gets captured by private title holders who did nothing to produce it, the result is unaffordable housing. The <a class="xl" href="glossary.html#community-land-trust">community land trust</a> is the structural correction: remove the land from the market permanently and the value stays with the community that made it.</p>
</div>
<div class="crisis-card">
<span class="crisis-label">Transit</span>
<p>Public transit is a commons. It only works when everyone uses it — the wealthy taking the subway is not charity, it's what makes the system function. When transit gets defunded to justify privatization, or car-dominated planning makes it unviable, the commons collapses. The cities with working transit — Vienna, Tokyo, Singapore — treat it as infrastructure that belongs to everyone.</p>
</div>
<div class="crisis-card">
<span class="crisis-label">Gentrification</span>
<p>Neighborhoods are commons: the culture, the social networks, the institutions, the feel of a place are collectively produced over decades. Gentrification is the privatization of that collective product — the neighborhood value created by residents gets captured by developers and landlords who arrive after. <a class="xlr" href="racial-capitalism.html">Racial displacement</a> is not a side effect. It is, historically, the mechanism.</p>
</div>
<div class="crisis-card">
<span class="crisis-label">Public Space</span>
<p>Parks, plazas, libraries, markets — public space is where democratic life happens. The privatization of public space (Business Improvement Districts controlling sidewalks, "public" plazas with private security, parks defunded then "adopted" by corporations) is the enclosure of the commons of civic life. <a class="xlr" href="two-ways-to-fix-a-pothole.html">Who governs public space</a> determines whose city this actually is.</p>
</div>
</div>
<h2>What Ostrom means for cities</h2>
<p>Elinor Ostrom's Nobel-winning research documented something city planners have repeatedly rediscovered and repeatedly forgotten: communities can govern shared resources sustainably without privatization or top-down state management, when they have real power over the rules. Her <a class="xl" href="ostrom.html">eight design principles</a> — clear boundaries, rules matched to local conditions, collective choice arrangements, monitoring, graduated sanctions, conflict resolution, recognition by external authorities, nested governance — describe not just fisheries and forests but everything from housing cooperatives to participatory budgeting to community land trusts.</p>
<p>The reason urban commons keep failing isn't that they can't work. It's that <a class="xlr" href="gramsci.html">civic capture</a> — the infiltration of public institutions by private interests — prevents the conditions Ostrom identified from taking hold. Zoning boards captured by developers. Planning commissions captured by real estate. Parks departments captured by corporate "partners." The commons doesn't fail on its own; it gets enclosed.</p>
<div class="pull">
        The city's value is <strong>collectively produced.</strong><br/>The question is whether it gets<br/>collectively held.
      </div>
<h2>What's already working</h2>
<p>The alternatives aren't theoretical. They're running.</p>
<div class="examples-grid">
<div class="example">
<div class="example-icon">🏘️</div>
<div class="example-title">Community Land Trusts</div>
<p>Permanently affordable housing through community land ownership. Burlington, Vermont's CLT — started in 1984 — has kept hundreds of units affordable through multiple real estate cycles. London, Brussels, Brussels, and Nairobi have active CLT movements.</p>
</div>
<div class="example">
<div class="example-icon">🗳️</div>
<div class="example-title">Participatory Budgeting</div>
<p>Porto Alegre, Brazil invented modern participatory budgeting in 1989. Residents vote directly on capital spending. The process has been adopted in hundreds of cities globally and consistently shifts resources toward lower-income neighborhoods.</p>
</div>
<div class="example">
<div class="example-icon">⚡</div>
<div class="example-title">Community Energy</div>
<p><a class="xl" href="https://www.ews-schoenau.de" rel="noopener" target="_blank">Schönau, Germany's community-owned grid</a> started when residents bought out the utility after Chernobyl. Now hundreds of German cities have energy cooperatives. Barcelona's <a class="xl" href="https://www.somenergia.coop" rel="noopener" target="_blank">Som Energia</a> has 80,000+ members. Energy governance as democratic commons.</p>
</div>
<div class="example">
<div class="example-icon">🌱</div>
<div class="example-title">Urban Land Commons</div>
<p>Community gardens, cooperative food markets, neighborhood land trusts for commercial space. When communities own the land, they control what gets built — and what stays. The longest-running urban gardens in New York City have survived four real estate cycles.</p>
</div>
</div>
<h2>The governance question</h2>
<p>Urban planning has spent decades oscillating between two failed poles: privatize everything, or centralize everything. The commons offers a third path that most planning curricula barely acknowledge. Cooperative ownership. Participatory governance. Institutions with clear democratic accountability and long-term stakes. Not charity or subsidy — structural alternatives to enclosure.</p>
<p>The <a class="xl" href="falling-through-the-gap.html">people who fall through the gaps</a> in urban systems are precisely the people whose collective needs don't register in markets and whose organized advocacy doesn't reach centralized bureaucracies. Commons-based governance is the mechanism by which their needs become constitutive rather than marginal. That's not a nice-to-have. That's the difference between a city that works for everyone and one that works only for the people who can afford it.</p>
<p><a class="xl" href="open-data-isnt-enough.html">Open data</a> and transparency, meanwhile, are necessary but not sufficient: the question isn't just whether the data is available, but who governs the decisions the data informs. Civic tech that routes around accountability is still enclosure.</p>
<div class="action-box">
<span class="action-label">Where to go from here</span>
<h3>The building is already happening.</h3>
<p>Community land trusts need supporters, board members, and donors. Participatory budgeting processes need organized neighborhood participation to keep them honest. Community energy cooperatives need members to stay democratic. Urban commons institutions don't run themselves — they require the ongoing participation of people who understand what's at stake.</p>
<p>Find the CLT in your city and join it. Attend your city's participatory budgeting process. Push for community benefit agreements on every major development. The <a href="build-it-now.html" style="color:rgba(var(--paper-rgb),0.9);border-bottom:1px solid rgba(var(--paper-rgb),0.35);text-decoration:none;">infrastructure of the commons</a> is built incrementally, institution by institution, neighborhood by neighborhood.</p>
<div class="action-links">
<a class="action-link" href="two-ways-to-fix-a-pothole.html">City governance →</a>
<a class="action-link" href="build-it-now.html">Build it now →</a>
<a class="action-link" href="ostrom.html">Ostrom's framework →</a>
<a class="action-link" href="gramsci.html">How capture works →</a>
</div>
</div>` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="" />
      </ArticleWrap>
    </Layout>
  )
}
