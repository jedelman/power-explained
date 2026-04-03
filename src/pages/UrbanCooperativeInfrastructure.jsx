import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function UrbanCooperativeInfrastructure() {
  return (
    <Layout
      title="The Cooperative City — Power Explained"
      description="Community land trusts. Participatory budgets. Energy cooperatives. Tenant unions with permanent institutional power. The urban commons isn't a vision — it's a set of running institutions that have already changed who controls cities. Here's what they look like and how they work."
      seriesTag="For Urbanists"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `The Cooperative<br />City` }} />
          <p className="hero-dek">Community land trusts. Participatory budgets. Energy cooperatives. Tenant unions with durable institutional power. The urban commons isn't a vision — it's a set of running institutions. Here's what they look like and why the structure matters.</p>
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<div class="nav-strip">
<a href="for-urbanists.html">Overview</a>
<a href="urban-land-value.html">I. Land value</a>
<a href="urban-capture.html">II. How cities get captured</a>
<a class="current" href="urban-cooperative-infrastructure.html">III. What's being built</a>
</div>
<p>The standard version of urban reform is policy change: elect better council members, pass better ordinances, fund better programs. Policy change is real and worth fighting for. It also has a ceiling: policies can be reversed, programs can be defunded, ordinances can be amended by the next council under different pressure. The institutional alternatives that survive across political cycles are the ones that change ownership, not just policy — that remove resources from the market or from state control and put them under community governance with structural protections against reversal.</p>
<p>This is the <a class="xl" href="build-it-now.html">build-it-now logic</a> applied to cities: don't just advocate for different policy outcomes, build the institutions that produce different outcomes structurally. The cooperative city isn't coming — it's already being built, in fragments, in every major metro. The question is whether those fragments get connected and scaled.</p>
<h2>Six models, all running</h2>
<div class="models">
<div class="model">
<div class="model-icon">🏘️</div>
<div class="model-label">Housing</div>
<h3>Community Land Trusts</h3>
<p>Land held permanently by a nonprofit; homes sold at affordable prices with resale restrictions that maintain affordability across generations. The <a href="urban-land-value.html">land value stays with the community</a> rather than flowing to speculation. Over 300 CLTs operating in the US; hundreds more globally. Proven across multiple real estate cycles.</p>
<p>Key leverage: works best when cities contribute land — surplus public parcels, tax-foreclosed properties — to the trust rather than selling to developers. The political fight is over what happens to public land when it becomes available.</p>
</div>
<div class="model">
<div class="model-icon">🗳️</div>
<div class="model-label">Governance</div>
<h3>Participatory Budgeting</h3>
<p>Residents vote directly on how a portion of capital spending gets allocated. Invented in Porto Alegre in 1989; now operating in hundreds of cities globally — tracked by the <a class="xl" href="https://www.participatorybudgeting.org" rel="noopener" target="_blank">Participatory Budgeting Project</a>. Consistently shifts investment toward lower-income neighborhoods and infrastructure that serves residents over developers.</p>
<p>Key leverage: the meaningful version gives residents binding authority over real money, not just advisory input on a pre-determined list. The difference between a real participatory budget and a PR exercise is whether community votes can override staff recommendations.</p>
</div>
<div class="model">
<div class="model-icon">⚡</div>
<div class="model-label">Energy</div>
<h3>Community Energy Cooperatives</h3>
<p>Member-owned energy generation and distribution, governed democratically. Germany has over 1,700 energy cooperatives. Spain's <a class="xl" href="https://www.somenergia.coop" rel="noopener" target="_blank">Som Energia</a> has 80,000+ members. Boulder, Colorado has a long-running municipal utility fight. Barcelona's energy cooperative model is expanding across Catalonia.</p>
<p>Key leverage: cooperative ownership changes who makes energy decisions — siting of solar, rate structures, grid investment — from shareholder interest to member interest. Also builds a political constituency for the energy transition that isn't just environmentalist advocacy but organized economic interest.</p>
</div>
<div class="model">
<div class="model-icon">🏗️</div>
<div class="model-label">Commercial Space</div>
<h3>Commercial CLTs &amp; Shared Ownership</h3>
<p>The same logic applied to commercial space: community ownership prevents displacement of small businesses, cultural institutions, and nonprofits that can't compete with rising commercial rents. The <a class="xl" href="https://ebprec.org" rel="noopener" target="_blank">East Bay Permanent Real Estate Cooperative</a> in Oakland and the <a class="xl" href="https://denverclr.org" rel="noopener" target="_blank">Denver Community Land Trust</a> have pioneered commercial CLT models.</p>
<p>Key leverage: small businesses and cultural institutions create neighborhood value that then gets captured by rising rents — the same enclosure dynamic as residential. Commercial land trusts interrupt that cycle permanently, not just with rent subsidies.</p>
</div>
<div class="model">
<div class="model-icon">🤝</div>
<div class="model-label">Tenants</div>
<h3>Organized Tenant Unions</h3>
<p>Tenant unions with real power — rent strikes, collective bargaining with landlords, political organization — change the balance of power in rental markets more durably than individual tenant protections. The <a class="xl" href="https://tenantsunion.org" rel="noopener" target="_blank">Tenants Union of Washington State</a>, the <a class="xl" href="https://acce4change.org" rel="noopener" target="_blank">Alliance of Californians for Community Empowerment</a>, and city-level unions in New York and Chicago have demonstrated what organized collective power produces.</p>
<p>Key leverage: individual tenant rights are important but easily circumvented. Organized tenant power with institutional continuity changes what landlords can extract as a baseline, not just what individual tenants can fight for.</p>
</div>
<div class="model">
<div class="model-icon">🌳</div>
<div class="model-label">Public Space</div>
<h3>Democratic Park &amp; Commons Governance</h3>
<p>Parks and public spaces governed by neighborhood boards rather than central park departments — with real budgets and real authority — produce different outcomes than centrally managed systems. The New York City parks equity fights have shown that community advocacy alone isn't enough; structural governance power changes investment patterns permanently.</p>
<p>Key leverage: the fight isn't just for parks funding but for who controls it. Neighborhood-controlled park endowments, conservancies with democratic boards, and participatory capital budgets for public space all change the structural incentive rather than just the current administration's priorities.</p>
</div>
</div>
<h2>What connects them</h2>
<p>All six models share the same structural feature: they change <em>who owns or controls</em> the resource, not just who currently governs it through policy. That's what makes them durable across political cycles. A CLT home can't be gentrified out of affordability by a hostile council — the ownership structure is legally protected. A cooperative energy utility can't be defunded by a hostile administration — the members own it. A tenant union with institutional continuity survives an election; a tenant protection ordinance might not.</p>
<p>The <a class="xl" href="the-commons-they-never-stopped-building.html">commons they never stopped building</a> is these institutions — accumulated over decades, often invisible to the policy debates that dominate urban politics discourse, but changing who controls the material conditions of urban life in ways that compound over time.</p>
<p>The connection to <a class="xlr" href="for-social-justice.html">social justice organizing</a> is structural, not rhetorical: the communities most systematically excluded from urban land value — through redlining, urban renewal, gentrification, and the <a class="xlr" href="racial-capitalism.html">racial mechanics of enclosure</a> — are the same communities that cooperative urban institutions most need to serve and be governed by. A CLT that doesn't center the communities facing displacement isn't solving the problem; it's building an affordable housing program with nicer politics.</p>
<div class="close-box">
<span class="close-label">Series conclusion</span>
<h3>The cooperative city is built institution by institution.</h3>
<p>There is no single policy that produces the urban commons. It's built incrementally, through the accumulation of institutions with legal permanence, democratic governance, and structural protection against enclosure. Every CLT parcel, every cooperative energy member, every participatory budget cycle, every organized tenant union adds to the commons rather than subtracting from it.</p>
<p>The work is joining and building those institutions — not as charity or advocacy, but as the structural alternative to a city that works only for those who can afford it.</p>
<div class="close-links">
<a class="close-link" href="for-urbanists.html">Back to overview →</a>
<a class="close-link" href="build-it-now.html">Build it now →</a>
<a class="close-link" href="the-commons-they-never-stopped-building.html">What's being built →</a>
</div>
</div>
<div class="nav-strip">
<a href="urban-capture.html">← How cities get captured</a>
<a href="for-urbanists.html">Back to overview →</a>
</div>` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="" />
      </ArticleWrap>
    </Layout>
  )
}
