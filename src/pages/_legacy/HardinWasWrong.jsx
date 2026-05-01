import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function HardinWasWrong() {
  return (
    <Layout
      title="Hardin Gave Capitalism Its Alibi. Ostrom Took It Apart. — Power Explained"
      description="In 1968, an ecologist wrote a paper that became the intellectual foundation for privatizing everything. In 1990, a political scientist went and looked at actual commons. She found the opposite of what Hardin predicted."
      seriesTag="Against Authoritarianism — Series III"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `Hardin Gave Capitalism Its Alibi. Ostrom Took It Apart.` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>In 1968, a biologist named Garrett Hardin published a paper in <em>Science</em> called "The Tragedy of the Commons." The argument was simple: if a resource is shared — a pasture, a fishery, a stretch of ocean — every individual has an incentive to take as much as they can before someone else does. Nobody has an incentive to hold back. So the resource gets destroyed. Every time. Inevitable as math.</p>
<p>The solution, Hardin said, was either private ownership or state control. Give someone exclusive rights to the resource and they'll manage it sustainably, because now they bear the full cost of destroying it. Or let the state regulate who can use it and how much. Those are the two options. Shared management — the commons itself — can't work. People are too selfish and the incentives are too bad.</p>
<p>This paper became one of the most cited academic articles of the twentieth century. It showed up in economics courses, environmental policy debates, arguments about intellectual property, and discussions of everything from water rights to the internet. It gave a clean, scientific-sounding justification for privatization: not ideology, just math. The commons fails. That's not a political position — it's a fact of human nature. <a class="xl" href="gramsci.html">This is what hegemony looks like when it's working</a>: a political choice that has been successfully naturalized as common sense.</p>
<p>There was one problem. Hardin had never looked at an actual commons.</p>
<h2>What Elinor Ostrom actually found</h2>
<p><a class=\"xl\" href=\"ostrom.html\">Elinor Ostrom</a> was a political scientist at Indiana University who spent decades studying how real communities manage shared resources. Not theoretical communities. Real ones. She looked at Swiss alpine villages that had been sharing mountain grazing pastures since the thirteenth century. Japanese forest communities that had maintained sustainable timber harvests for hundreds of years. Irrigation systems in Spain and the Philippines that were still running — equitably and efficiently — after a thousand years of operation.</p>
<p>None of them had collapsed. None of them had been privatized. None of them were managed by a central state authority that imposed rules from above. They were governed by the people who used them, through rules those people had made themselves, enforced by those same communities.</p>
<p>Ostrom's 1990 book, <em>Governing the Commons</em>, laid out what she found. Her central point was not complicated, but it was devastating: Hardin wasn't describing commons. He was describing open access. Those are not the same thing.</p>
<div class="pull">
        Open access means no rules, no membership, no governance.<br/>
        A commons is the <strong>opposite</strong>: bounded, governed, accountable.<br/>
        Hardin described the absence of a commons<br/>and called it a commons.
      </div>
<p>An open-access resource — anybody can take as much as they want, whenever they want, no questions asked — will indeed be destroyed, roughly as Hardin described. But that's not what communities actually build when they manage shared resources. They build governance. They figure out who's in, what the rules are, how violations get handled, and who decides when the rules need to change. When they do that, the resource survives. Often for centuries.</p>
<p>In 2009, Ostrom won the Nobel Prize in Economics — the first woman ever to do so. The committee cited her work showing that communities can and do manage common resources effectively without privatization or top-down state control. The discipline had largely ignored her work for two decades because it didn't fit the standard model. The data was inconvenient.</p>
<h2>The eight things successful commons share</h2>
<p>Ostrom didn't just document that some commons work. She identified what made them work. Across very different cultures, resources, and time periods, successful self-governing commons tended to share the same design features. She called them design principles — not rules that could be imposed from outside, but patterns that kept appearing in institutions that communities had built themselves.</p>
<div class="principles">
<div class="principles-header">Ostrom's Design Principles — Governing the Commons (1990)</div>
<div class="principle">
<span class="principle-num">01</span>
<span class="principle-text"><strong>Clear boundaries.</strong> Everyone knows who's in and who's out. The resource itself has defined limits. Vagueness about membership or scope is where governance breaks down.</span>
</div>
<div class="principle">
<span class="principle-num">02</span>
<span class="principle-text"><strong>Rules fit the place.</strong> The rules for managing a Swiss mountain pasture are different from the rules for managing a Philippine irrigation canal. Imported rules — from governments, experts, or international bodies — often fail because they don't match local conditions that only local people know.</span>
</div>
<div class="principle">
<span class="principle-num">03</span>
<span class="principle-text"><strong>Those affected can change the rules.</strong> The people using the resource have a legitimate way to modify the rules governing it. Communities that can adapt survive. Communities locked into fixed rules imposed from outside tend to fail when conditions change.</span>
</div>
<div class="principle">
<span class="principle-num">04</span>
<span class="principle-text"><strong>The resource and the users are monitored.</strong> Usually by members of the community themselves, not outside inspectors. People know who's taking what. Accountability is distributed, not centralized.</span>
</div>
<div class="principle">
<span class="principle-num">05</span>
<span class="principle-text"><strong>Sanctions are graduated.</strong> First offense gets a small penalty. Repeated or large violations get larger ones. This is not punitive — it's calibrated to maintain trust without destroying relationships in communities where people still have to live and work together.</span>
</div>
<div class="principle">
<span class="principle-num">06</span>
<span class="principle-text"><strong>Conflict resolution is accessible.</strong> Cheap, fast, and local. Not court systems that take years and cost money most people don't have. Disputes get resolved before they escalate into defection.</span>
</div>
<div class="principle">
<span class="principle-num">07</span>
<span class="principle-text"><strong>The right to self-govern is recognized.</strong> External authorities — states, property owners, higher-level governments — don't constantly override or undermine local governance. A commons can't function if outsiders can dissolve it at will.</span>
</div>
<div class="principle">
<span class="principle-num">08</span>
<span class="principle-text"><strong>Larger systems use nested layers.</strong> For resources that span multiple communities, governance happens at multiple scales — local rules nested inside regional ones, regional inside national. No single central authority controls everything. This is what Ostrom and her husband Vincent called polycentric governance.</span>
</div>
</div>
<p>These principles don't describe a utopia. They describe institutions that are hard to build, require sustained effort to maintain, and can fail — especially when external forces (states, corporations, colonizers) override the conditions that made them work. But they show that commons governance is not a fantasy. It's a documented historical practice with a clear structure.</p>
<h2>Why this matters beyond fisheries</h2>
<p>Ostrom's original work was about natural resources — things that can be depleted. If you catch too many fish, there are fewer fish. If you graze too many cattle, the pasture degrades. Scarcity is real and the stakes of bad governance are high.</p>
<p>Knowledge doesn't work that way. If you use an idea, there's still just as much idea left over. If you copy software, the original copy still exists. Knowledge is non-rival — my use doesn't reduce your ability to use it. This is why the standard economic argument for intellectual property (you have to give creators monopoly rights or nobody will create anything) is so weak: the scarcity it's designed to solve is artificial, created by the property right itself.</p>
<p>But here's what transfers from Ostrom to knowledge commons: the governance questions are exactly the same. Who's in? Who can change the rules? How are violations handled? Who has standing to raise disputes? What happens when an external authority tries to override local governance?</p>
<div class="callout">
<span class="callout-label">Open source is an Ostrom commons</span>
<p>The Linux kernel has been developed collaboratively for over thirty years without anyone owning it and without a central authority controlling who can contribute. It does not look like an open-access free-for-all — it has clear contribution rules, maintainer hierarchies, licensing terms that define membership, and a dispute resolution process. It maps almost exactly onto Ostrom's design principles.</p>
<p>It also maps onto her finding about what external threats look like. The greatest risks to the Linux commons have not come from internal defection — contributors taking more than their share. They've come from external actors: corporations attempting to capture control of the governance process, or to relicense contributions in ways that undermine the commons' terms. Hardin's "tragedy" is not the threat. Enclosure is the threat.</p>
</div>
<p>Wikipedia. Open protocols. Community land trusts. Seed libraries. The federated social web. These are all commons governance problems, even though the resources involved don't deplete when used. The question in each case is whether the people who depend on and contribute to the resource have meaningful governance over its rules — or whether governance has been captured by actors whose interests diverge from the community's.</p>
<h2>The alibi, and what it covered</h2>
<p>Hardin's paper did something specific in the political landscape: it made privatization look like science. Not ideology, not a choice, not a bet on one particular theory of human nature. <em>Mathematics.</em> The commons fails, therefore you must privatize or regulate from the top. There is no third option.</p>
<p>That framing provided cover for enclosure movements across the following decades. Water systems privatized because "public management fails." Genetic material patented because "open access to the genome would mean nobody invests in research." Spectrum auctioned because "without private ownership, it would be chaotic." Each time, Hardin's logic appeared in the background: shared governance cannot work, therefore private rights or state control.</p>
<p>Ostrom took apart the premise. The commons doesn't fail — open access fails. Communities that build genuine governance institutions manage shared resources sustainably over long time horizons, without requiring private property or external state authority. The data is extensive. The examples span centuries and continents and resource types.</p>
<p>What Ostrom documented is not a model to be implemented. It's evidence that something people said was impossible is, in fact, what humans have actually been doing — quietly, without academic recognition, for a very long time. The institutions exist. The practices exist. The track record exists.</p>
<p>The question is why that evidence was so easy to ignore for so long. The answer is not complicated. The tragedy narrative was useful. It justified outcomes that had already been decided on other grounds. The data that contradicted it was inconvenient, so it waited twenty years for a Nobel Prize.</p>
<p>The alibi is still in circulation. The commons are still being enclosed. But the intellectual foundation for the enclosure is gone. Ostrom removed it.</p>` }} />
        </div>
        
        <NextReads items={[
          { href: 'ostrom', cat: 'Thinker', title: 'Elinor Ostrom: How Communities Actually Govern Themselves' },
          { href: 'the-alibi-was-a-mirror', cat: 'Framework', title: 'The Alibi Was a Mirror' },
          { href: 'mutual-aid-isnt-charity', cat: 'Series I', title: 'Mutual Aid Isn\'t Charity' },
          { href: 'how-linux-became-the-internet', cat: 'Series I', title: 'How Linux Became the Internet' },
          { href: 'gramsci', cat: 'Thinker', title: 'Gramsci: The Feeling That This Is Just How Things Are' },
          { href: 'build-it-now', cat: 'Practice', title: 'Build It Now — What The Alternative Looks Like' },
        ]} />

        <ArticleFooter seriesNote="Power Explained — Advanced Track" />
      </ArticleWrap>
    </Layout>
  )
}
