import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function ForLibertarians() {
  return (
    <Layout
      title="They've Been Lying to You About the Commons — Power Explained"
      description="You already know the state and corporations are in bed together. Here's the part they left out of your education: corporations were invented as state-granted monopolies, enclosure was enforced at gunpoint, and the freest self-governing experiments on earth right now aren't libertarian think-tank proposals. They're communes."
      seriesTag="Entry Points"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `They've Been Lying<br />to You About<br /><em>the Commons</em>` }} />
          <p className="hero-dek">You already know the state and corporations are in bed together. Here's the part they left out: corporations were invented as state-granted monopolies, enclosure was enforced at gunpoint, and the freest self-governing experiments on earth right now aren't libertarian think-tank proposals. They're communes.</p>
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>Start with what you already know: the government doesn't actually protect free markets — it rigs them. Regulatory agencies get captured by the industries they're supposed to regulate. Licensing requirements lock out competition and protect incumbents. Zoning laws are written by developers. The Federal Reserve is a cartel that backstops the largest banks while letting smaller competitors fail. <a class="xl" href="the-outside-capital-needs.html">The state and capital are not enemies.</a> They've been in a working relationship for centuries.</p>
<p>That's the correct diagnosis. Here's what the standard libertarian story gets wrong about it: it treats this corruption as a deviation from a purer free market that existed before government got involved. It didn't. The "free market" as we know it was built by government violence from the start — and the thing that got destroyed to build it wasn't government regulation. It was the commons.</p>
<h2>Corporations are not a market phenomenon</h2>
<p>The modern corporation — limited liability, perpetual existence, the legal fiction of personhood — was invented by the state and has no existence without it. The British East India Company was a government-chartered monopoly granted exclusive rights to trade with an entire hemisphere. It had its own army. It conquered and administered territories. It was the state operating through a corporate vehicle.</p>
<p>Limited liability itself — the legal rule that lets shareholders profit from a corporation while bearing zero personal responsibility for what it does — is a government gift with no analog in natural law or free exchange. Without it, investors would demand more accountability from the businesses they fund. With it, you get the full externalization of risk onto workers, communities, and ecosystems that characterizes modern corporate capitalism. This isn't the free market. It's a specific legal architecture the state built and maintains by force — and <a class="xl" href="gramsci.html">hegemony's job is to make that architecture feel like natural law</a>.</p>
<p>The patent system — another state monopoly grant — lets pharmaceutical companies charge $900 for a drug that costs $10 to manufacture. Intellectual property law lets Disney lobby Congress every time Mickey Mouse approaches the public domain, effectively converting a commons into a private asset indefinitely. <a class="xl" href="glossary.html#enclosure">Enclosure</a> — the conversion of shared resources into private property — has always required state enforcement. It doesn't happen in a stateless market. It happens when someone with a gun tells the people who've been using the commons for generations that they no longer can.</p>
<div class="pull">
        Before there was a market,<br/>before there was a state,<br/><strong>there was the commons.</strong><br/>It didn't fail. It was taken.
      </div>
<h2>The receipt: state-created monopolies you've been told are "the market"</h2>
<div class="receipt">
<div class="receipt-header">State interventions dressed as free markets</div>
<div class="receipt-row">
<span class="receipt-item">Limited liability</span>
<span class="receipt-detail">A legal privilege granted by the state that lets shareholders capture upside while externalizing downside onto everyone else. Zero basis in voluntary contract.</span>
</div>
<div class="receipt-row">
<span class="receipt-item">Patents &amp; copyright</span>
<span class="receipt-detail">Government-enforced monopolies on ideas and expressions. Converted the <a href="the-commons-they-never-stopped-building.html">knowledge commons</a> into tollbooths. Duration keeps expanding because incumbents keep buying legislation.</span>
</div>
<div class="receipt-row">
<span class="receipt-item">Land title</span>
<span class="receipt-detail"><a class="xl" href="what-they-burned.html">The enclosure of the commons</a> — from England's 15th century land grabs to colonial seizure worldwide — was carried out by state violence against communities that had governed the land collectively for centuries.</span>
</div>
<div class="receipt-row">
<span class="receipt-item">The Fed / central banking</span>
<span class="receipt-detail">A government-chartered cartel that creates money, sets the price of credit, and functions as a backstop for large financial institutions while imposing discipline on everyone else. Not a market. A guild.</span>
</div>
<div class="receipt-row">
<span class="receipt-item">Occupational licensing</span>
<span class="receipt-detail">25% of US jobs now require a government license. Hair braiders in some states need 1,500 hours of training. Interior designers need 6 years. Incumbent practitioners write the requirements to lock out competition.</span>
</div>
<div class="receipt-row">
<span class="receipt-item">Zoning</span>
<span class="receipt-detail">Single-family zoning is a government mandate that makes housing artificially scarce, drives up prices for renters and buyers, and was designed explicitly to enforce racial segregation. <a class="xl" href="why-your-city-doesnt-work.html">It's government picking winners.</a></span>
</div>
</div>
<h2>What they don't teach you about the commons</h2>
<p>Before enclosure, enormous portions of land and resources in England, Europe, and around the world were held and governed in common — not by the state, not by private owners, but by the communities that used them. The commons had rules, governance, and enforcement, all generated from below, through voluntary association and community consent. It wasn't a free-for-all. <a class="xl" href="hardin-was-wrong.html">The "tragedy of the commons" is a myth</a> — Elinor Ostrom won the Nobel Prize proving it. Real commons were sophisticated self-governing systems that worked.</p>
<p>They were destroyed — not by market failure, not by overuse, but by <a class="xl" href="what-they-burned.html">deliberate state violence</a>. The enclosure acts in England forcibly expelled millions of people from land their families had managed for generations. The same process played out through colonialism worldwide: <a class="xl" href="underdevelopment-is-a-verb.html">indigenous commons governance was criminalized</a>, the land was seized, and what had been communal self-governance was converted into private property enforced by the colonial state.</p>
<p>This is not ancient history. Water commons in Bolivia were privatized in 2000 — <a class="xl" href="the-commons-they-never-stopped-building.html">the community fought back and won</a>. The enclosure of the genetic commons through seed patents is happening right now. Every new intellectual property right is a new act of enclosure, enforced by the state, converting a shared resource into a private monopoly.</p>
<div class="callout">
<span class="callout-label">The anarchist tradition they buried</span>
<p>There's a libertarian tradition that came to the right conclusions about the state and then went further: if the state is a coercive monopoly on violence, and if corporations only exist because the state grants them privileges, then the solution isn't minimal government — it's no hierarchy. Voluntary association all the way down.</p>
<p>Mikhail Bakunin, Peter Kropotkin, Emma Goldman: these weren't socialists who wanted state ownership. They were anti-state radicals who wanted communities to own and govern their own resources directly. <a class="xl" href="the-tradition-they-buried.html">This tradition was deliberately buried</a> — partly by authoritarian socialists who needed a state to capture, partly by propertarians who needed you to forget that property rights are a state creation. <a class="xl" href="the-tradition-they-buried.html">It's worth finding.</a></p>
</div>
<h2>The freest experiments on earth right now look like communes</h2>
<p>If you want to see what genuinely stateless self-governance looks like in practice — not a think-tank proposal, not a hypothetical, but a working experiment — look at the <a class="xl" href="case-study-zapatistas.html">Zapatista autonomous communities</a> in Chiapas, Mexico.</p>
<p>Since 1994, dozens of Indigenous Maya communities have governed themselves without the Mexican state. No federal programs. No government services. Everything — schools, courts, healthcare, infrastructure, conflict resolution — built and run by the communities themselves, through rotating councils that anyone can be recalled from. They explicitly rejected government cash transfer programs because accepting them would mean accepting the government's authority over what their communities needed. They refused the dependency. They built the alternative instead.</p>
<p>In northern Syria, the <a class="xl" href="case-study-rojava.html">Rojava experiment</a> built a governance system from scratch based on radical subsidiarity: every decision made at the lowest possible level, federated upward only when necessary, with no permanent state authority. Murray Bookchin — the political theorist whose ideas underpin Rojava — was explicit that his goal was the abolition of the state through the construction of institutions that make it irrelevant.</p>
<p>These experiments have real problems and real costs. They're not utopias. But they are the closest thing to voluntary, non-hierarchical, community self-governance operating at scale anywhere on earth today. If that's what you actually want — not "less government" in the abstract but genuine community control of community affairs — these are the live cases to study.</p>
<div class="callout">
<span class="callout-label">On the authoritarian left</span>
<p>You're right to be skeptical of central planning, vanguard parties, and state socialism. <a class="xl" href="the-party-ate-the-revolution.html">The party did eat the revolution</a> — every time, predictably, by design. Centralized authority reproduces hierarchy regardless of the ideology it claims. That's not a bug in Leninism; it's the architecture.</p>
<p>But notice: the critique of authoritarianism leads you to the same place the anarchists got to a century ago. The problem with the Soviet Union wasn't that it had too little private property. It was that it replaced distributed community self-governance with concentrated state power. The solution isn't markets run by corporations (which are also concentrated power, also backed by the state). It's <a class="xl" href="build-the-commune-without-the-state.html">distributed governance that doesn't require either.</a></p>
</div>
<div class="action-box">
<span class="action-label">The play</span>
<h3>Build what makes the state irrelevant</h3>
<p>The most effective anti-state action isn't electoral — it's constructive. Every community institution that provides a real service without government dependency reduces the leverage the state has over the people using it. Credit unions over banks. Community land trusts over landlords. Energy cooperatives over utilities. Mutual aid networks over the welfare bureaucracy.</p>
<p>This isn't compromise. It's the strategy: <a href="build-the-commune-without-the-state.html" style="color:rgba(var(--paper-rgb),0.9);text-decoration:none;border-bottom:1px solid rgba(var(--paper-rgb),0.3);">build the institutions that make the state unnecessary</a>, starting with the ones you can build right now, in the community you already have. The Zapatistas didn't petition the Mexican government for autonomy. They built the autonomous institutions first, then defended them. <a href="case-study-zapatistas.html" style="color:rgba(var(--paper-rgb),0.9);text-decoration:none;border-bottom:1px solid rgba(var(--paper-rgb),0.3);">That's the model.</a></p>
<div class="action-links">
<a class="action-link" href="case-study-zapatistas.html">Zapatistas: stateless governance that works</a>
<a class="action-link" href="case-study-rojava.html">Rojava: radical subsidiarity in practice</a>
<a class="action-link" href="build-the-commune-without-the-state.html">Build the commune without the state</a>
<a class="action-link" href="hardin-was-wrong.html">Hardin Was Wrong</a>
<a class="action-link" href="the-tradition-they-buried.html">The buried anarchist tradition</a>
<a class="action-link" href="the-party-ate-the-revolution.html">Why centralization always fails</a>
</div>
</div>` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="" />
      </ArticleWrap>
    </Layout>
  )
}
