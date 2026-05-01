import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function UrbanCapture() {
  return (
    <Layout
      title="How Cities Get Captured — Power Explained"
      description="Zoning boards, planning commissions, city councils — the institutions that govern land and development don't fail randomly. They get taken, systematically, by the interests with the most to gain from favorable decisions. Here's how it happens and what the record shows."
      seriesTag="For Urbanists"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `How Cities<br />Get Captured` }} />
          <p className="hero-dek">Zoning boards, planning commissions, city councils — the institutions that govern land and development don't fail randomly. They get taken, systematically, by the interests with the most to gain from favorable decisions.</p>
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<div class="nav-strip">
<a href="for-urbanists.html">Overview</a>
<a href="urban-land-value.html">I. Land value</a>
<a class="current" href="urban-capture.html">II. How cities get captured</a>
<a href="urban-cooperative-infrastructure.html">III. What's being built</a>
</div>
<p><a class="xl" href="gramsci.html">Gramsci's concept of hegemony</a> — the way dominant groups maintain power not just through force but through controlling how institutions think and what they treat as common sense — is nowhere more visible than in urban planning. The "common sense" of American urban governance is a set of assumptions so thoroughly captured by real estate and development interests that most practitioners don't recognize them as positions: that rising property values are good, that growth means development, that affordability is a charity problem rather than a structural one, that the purpose of zoning is to manage market outcomes rather than shape them.</p>
<p>These aren't neutral technical frameworks. They're the residue of a century of systematic <a class="xl" href="glossary.html#civic-capture">civic capture</a> — the slow infiltration of public institutions by the private interests they're supposed to regulate. Urban capture operates across multiple venues simultaneously, which is what makes it so durable.</p>
<h2>The venues of capture</h2>
<div class="capture-list">
<div class="capture-item">
<div class="capture-venue">Zoning boards</div>
<div class="capture-text">Variance and exception processes are theoretically limited safety valves. In practice, they become the primary governance mechanism for development in most cities: developers propose projects that don't conform to zoning, apply for variances, and win them because the process is designed for experts — meaning lawyers, consultants, and commissioners who are typically drawn from the real estate industry or aspire to work in it. Community members who object face the same process without resources to navigate it.</div>
</div>
<div class="capture-item">
<div class="capture-venue">Planning commissions</div>
<div class="capture-text">General plan updates, area plans, and upzoning decisions flow through planning commissions that, in most jurisdictions, are appointed rather than elected. Appointment processes are heavily lobbied. The result is commissions populated by people with professional or financial connections to development — not by tenants, transit riders, or the low-income residents most affected by planning decisions. The professional norm of "balanced" commissions often means one tenant advocate among six development-aligned members.</div>
</div>
<div class="capture-item">
<div class="capture-venue">Campaign finance</div>
<div class="capture-text">Real estate is consistently among the largest sources of local campaign contributions in every major US city. City council members who make key votes on zoning, development fees, and affordable housing requirements are financially dependent on the industry they regulate. The relationship is legal, normalized, and structural. Politicians who depend on real estate money to run for office make different decisions about land use than politicians who don't — not because they're corrupt, but because they've absorbed the worldview of their funders.</div>
</div>
<div class="capture-item">
<div class="capture-venue">Civic institutions</div>
<div class="capture-text">Urban planning schools, architecture firms, nonprofit developers, business improvement districts, and civic foundations are all funded in part by real estate and development interests. The effect on what gets treated as a legitimate idea — what counts as good urbanism, what's "practical," what's worth proposing — is diffuse but real. Ideas that challenge the commodity status of land don't get foundation grants, don't get invited to conferences, don't get taught in programs funded by development interests.</div>
</div>
<div class="capture-item">
<div class="capture-venue">State preemption</div>
<div class="capture-text">When cities do develop strong tenant protections, inclusionary zoning, or anti-speculation measures, state legislatures preempt them. This is the escalation move: when capture at the city level fails, developer interests shift to state politics where campaign finance is even more lopsided and the distance from affected communities is greater. More than twenty states have preempted local rent control in recent decades, removing the tool from cities that had used it effectively.</div>
</div>
</div>
<div class="pull">
        The institutions that are supposed<br/>to govern land for the public<br/>are governed <strong>by the land industry</strong>.
      </div>
<div class="case">
<span class="case-label">Case: Houston's Non-Zoning Myth</span>
<h3>Deregulation in the interest of developers</h3>
<p>Houston is regularly cited as proof that deregulation solves housing affordability — a city without zoning, where market forces allocate land use freely. The reality is more instructive: Houston has extensive deed restrictions (private contracts governing land use in most residential neighborhoods), <a class="xlr" href="racial-capitalism.html">racially exclusionary housing history</a> baked into those private agreements, and a development regime that has consistently served large-scale commercial and single-family interests over multifamily affordable housing.</p>
<p>Houston's affordability — real but selective — comes from cheap peripheral land in a flat, auto-dependent metro, not from market freedom. The city has produced abundant market-rate housing while making sustained investment in affordable housing difficult and allowing significant gentrification displacement in historically Black and Latino neighborhoods near the urban core. "No zoning" means land use is governed by private agreement and political access rather than by public process — which is not the same as governing it democratically. It's governance by wealth instead of governance by vote.</p>
</div>
<h2>What anti-capture looks like</h2>
<p>The antidote to civic capture is not better-intentioned commissioners or stricter ethics rules — though neither hurts. It's structural: governance institutions that are accountable to the people most affected by their decisions, funded by sources independent of the interests they regulate, and empowered with real authority to hold the commons of land against enclosure.</p>
<p><a class="xl" href="two-ways-to-fix-a-pothole.html">Participatory governance</a> — processes that give organized residents real decision-making power, not just consultative roles — consistently shifts planning outcomes toward lower-income communities. Publicly funded elections remove the campaign finance dependency. Community benefit agreements that run with land rather than with specific projects create durable protections that survive developer turnover. Tenant representation on planning bodies changes whose expertise is treated as legitimate.</p>
<p>None of these eliminate the structural pressure of real estate interests on urban politics. They change the terrain enough to make the commons defensible. The third piece in this series looks at what's actually being built on that terrain — the cooperative infrastructure that changes who controls urban resources structurally, not just politically.</p>
<div class="nav-strip">
<a href="urban-land-value.html">← Land value</a>
<a href="urban-cooperative-infrastructure.html">Next: What's being built →</a>
</div>` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="" />
      </ArticleWrap>
    </Layout>
  )
}
