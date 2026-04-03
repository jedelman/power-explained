import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function LibLibertyAndHegemony() {
  return (
    <Layout
      title="Liberty Requires a Prior — Power Explained"
      description="Freedom to do what, on whose land, under whose rules? Every theory of liberty has a hidden premise: the current distribution of property is legitimate. It isn't. And the conspiracy explanation for why you can't see this is weaker — and less threatening — than the structural one."
      seriesTag="For Libertarians"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `Liberty<br />Requires<br />a <em>Prior</em>` }} />
          <p className="hero-dek">Freedom to do what, on whose land, under whose rules? Every theory of liberty has a hidden premise: the current distribution of property is legitimate. It isn't. And the conspiracy explanation for why you can't see this is weaker — and less dangerous to power — than the structural one.</p>
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<div class="nav-strip">
<a href="for-libertarians.html">Overview</a>
<a href="lib-skin-in-the-game.html">I. Skin in the game</a>
<a class="current" href="lib-liberty-and-hegemony.html">II. Liberty and hegemony</a>
<a href="lib-miners-and-cnt.html">III. The buried tradition</a>
</div>
<p>The libertarian theory of liberty goes like this: people should be free to do what they want with their persons and property, without coercion. The role of government, if any, is to prevent one person from coercing another. Simple, clean, defensible.</p>
<p>Here's the hidden premise: the current distribution of persons and property is legitimate. That the person who owns the land owns it rightfully. That the person who owns nothing is in that condition through voluntary choices rather than coerced ones. That the baseline from which "coercion" is measured is just.</p>
<p>It isn't. And the evidence for why it isn't has been sitting in plain sight for centuries.</p>
<h2>The prior question: how did the land get distributed?</h2>
<p>The English enclosure acts — running from the 15th through 19th centuries — expelled millions of people from common land their families had used and governed for generations. Not through voluntary exchange. Through Parliamentary legislation backed by force. The commons were converted to private property by the people who controlled the state, for their own benefit, over the explicit objection of the communities that depended on them.</p>
<p>Colonial land seizure did the same thing at continental scale. The land titles that underpin property rights across North America, Australia, Africa, and Asia trace back to conquest — to the legal fiction that Indigenous governance didn't count as governance, that common land without a European deed was empty land, that the state could grant title to what had been collectively managed for millennia. Every property right that flows from that original seizure carries the taint of it.</p>
<p>This is not ancient history that stops mattering. It's the foundation on which current property distributions rest. When Hayek argues that the spontaneous order of the market produces just outcomes, he's assuming a starting point. The starting point was set by violence. <a class="xlr" href="what-they-burned.html">The commons they burned</a> was real, and the people displaced from it didn't consent.</p>
<div class="pull">
        Defending current property rights<br/>as "voluntary exchange"<br/>means forgetting <strong>who set the table</strong>.
      </div>
<h2>Hegemony: why you don't need a conspiracy</h2>
<p>Here's where most people who've noticed the game is rigged go wrong. They reach for the conspiracy explanation: a group of powerful people who know exactly what they're doing, coordinating to maintain their position. The Bilderberg Group. The World Economic Forum. The deep state. Whoever.</p>
<p>The conspiracy explanation is flattering to power. It says power is maintained by the exceptional intelligence and coordination of a specific group of bad actors. Remove or expose them and the system changes. It also happens to be false — or at least, massively incomplete — as a description of how power actually maintains itself.</p>
<p><a class="xl" href="gramsci.html">Antonio Gramsci</a> spent years in a fascist prison working out the real explanation: hegemony. The dominant group maintains its position not primarily through force or conspiracy but through the production of common sense — the set of assumptions so thoroughly embedded in culture, education, media, and daily life that most people never recognize them as assumptions at all. They just seem like reality.</p>
<div class="hegemony-box">
<span class="hegemony-label">How hegemony actually works</span>
<h3>No coordination required</h3>
<p>Hegemony doesn't need a room full of conspirators. It works through the accumulation of thousands of independent actors — journalists, professors, politicians, parents — each transmitting what seems like common sense to them, each having absorbed that common sense from the culture they operate in, each reinforcing it without anyone coordinating the reinforcement.</p>
<p>The common sense of market society: that private property is natural, that wage labor is voluntary, that the current distribution of wealth reflects merit, that alternatives are either utopian or authoritarian, that the commons failed (it didn't — <a href="hardin-was-wrong.html">Hardin was wrong</a>). None of these are the product of a conspiracy. They're the sediment of centuries of enclosure, taught in schools funded by people who benefited from enclosure, repeated in media owned by people who benefit from the current arrangement, absorbed by people who've never encountered a serious alternative.</p>
<p>This is why hegemony is more frightening than conspiracy: you can expose a conspiracy. You can't expose common sense, because the people reproducing it aren't lying — they believe it. The system maintains itself through genuine consent, manufactured by an education and cultural apparatus that was built to produce that consent.</p>
</div>
<h2>Why the conspiracy explanation is safer for power</h2>
<p>The conspiracy explanation channels legitimate anger at the system into a search for bad actors. Find the right villains, expose them, replace them with better people, and the system becomes just. This keeps the structural critique from landing. It means you're fighting personalities instead of architectures.</p>
<div class="vs-row">
<div class="vs-col dim">
<span class="vs-label">Conspiracy explanation</span>
<h3>"They're doing this on purpose"</h3>
<p>A group of powerful people are deliberately rigging the system. Expose them. Replace them. Fix the system by removing the bad actors. Implies the underlying structure is fine if run by better people. Keeps the structural critique from landing.</p>
</div>
<div class="vs-col">
<span class="vs-label">Structural explanation</span>
<h3>"The structure produces this"</h3>
<p>The system produces these outcomes regardless of who's running it, because the incentives are built in. The same banking system with different bankers produces the same crises. The same corporate structure with better CEOs externalizes the same costs. Change requires changing the structure, not the personnel.</p>
</div>
</div>
<p>The structural explanation is also more consistent with what Taleb would predict. Systems with <a class="xl" href="lib-skin-in-the-game.html">no skin in the game</a> produce bad outcomes regardless of the intentions of the people in them. The pharmaceutical executive who knows the drug causes harm but approves it anyway isn't a uniquely evil person — they're a person responding rationally to the incentive structure of their institution. Change the institution and you change the outcomes. Expose the conspiracy and you change the cast of characters while leaving the institution intact.</p>
<h2>What liberty actually requires</h2>
<p>Real liberty — not the abstract philosophical kind but the lived kind, the ability of real people to make real choices about their real lives — requires a prior: access to the commons that makes independent life possible. Before enclosure, the peasant who was "free" of feudal obligation had access to common land, common water, common wood — the material substrate that made genuine independence viable. Enclosure didn't make them freer. It made them formally free and materially dependent — dependent on whoever now owned the land they'd been expelled from, forced to sell their labor on whatever terms the new owners offered.</p>
<p>This is what <a class="xl" href="kropotkin.html">Kropotkin</a> understood and Hayek didn't: freedom without commons access is formal, not substantive. The person who owns nothing and has no access to the commons is free in the same sense that you're free to sleep under any bridge in Paris — technically true and materially meaningless. Genuine liberty requires the material conditions for independence, and those conditions were commons before they were anything else.</p>
<p>The commons is therefore not the enemy of liberty. It's the historical precondition for it. Rebuilding the commons — community land trusts, cooperative ownership, community governance of shared resources — isn't a collectivist constraint on freedom. It's the construction of the substrate on which meaningful freedom for ordinary people actually rests.</p>
<p>The third piece in this series shows what this looks like in practice — not as theory, but as history. Working-class people building autonomous institutions, governing themselves without state or boss, at scale, in the teeth of violent opposition.</p>
<div class="nav-strip">
<a href="lib-skin-in-the-game.html">← Skin in the game</a>
<a href="lib-miners-and-cnt.html">Next: The buried tradition →</a>
</div>` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="" />
      </ArticleWrap>
    </Layout>
  )
}
