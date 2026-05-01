import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function WhoGetsToDie() {
  return (
    <Layout
      title="Who Gets to Die — Power Explained"
      description="Achille Mbembe extended Foucault's theory of biopower into territory Foucault didn't go: the colony, the plantation, the occupied territory — where sovereign power operates not by managing life but by deciding who is exposed to death."
      seriesTag="The World the Framework Missed — Series IV"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `Who Gets to Die` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p><a class=\"xl\" href=\"foucault.html\">Michel Foucault</a> argued that modern power is not primarily about the sovereign's right to kill. It's about the administration of life — who gets healthcare, who gets housed, who gets educated, who gets to reproduce under what conditions. He called this biopower: power exercised through the management of living populations rather than through the spectacle of execution.</p>
<p>This was a genuinely important shift in how we understand modern governance. The prison, the clinic, the school, the census — these are all instruments of biopower, classifying and managing populations according to norms of health, productivity, and order. Foucault showed that modern states do not primarily rule through fear of death. They rule through the organization of life itself.</p>
<p>The problem with Foucault's account is where it was built from. He was describing the French and European state. And the French state, like all European colonial powers, was simultaneously exercising a completely different kind of power in its colonies — a power Foucault's framework had no real way to describe.</p>
<p>Achille Mbembe, a Cameroonian philosopher writing in the early 2000s, identified the gap. His concept of <strong>necropolitics</strong> — the politics of death — names what Foucault left out: the sovereign power not to manage life but to determine who is exposed to death, and to do so as a normal administrative function rather than as an exception.</p>
<h2>The state of exception as the rule</h2>
<p>The Italian philosopher Giorgio Agamben had already introduced the concept of the "state of exception" — the idea that sovereign power is defined not by its normal operations but by its capacity to suspend normal law. The state of exception is when the rules don't apply: martial law, emergency powers, the camp. Agamben argued that what was supposed to be exceptional had become permanent — that Western liberal states were increasingly governed through emergency rather than through law.</p>
<p>Mbembe accepts this framework and extends it geographically. The state of exception wasn't primarily a development of late modernity in Western Europe. It was the permanent condition of the colony. The colony was always already the space where law was suspended, where the normal protections of citizenship did not apply, where violence could be exercised without legal constraint. The "exception" that Agamben saw emerging in Europe at the end of the twentieth century was what colonial subjects had lived for centuries.</p>
<div class="pull">
        The colony is not<br/>a temporary exception<br/>to the liberal order.<br/>
        It is the space where the liberal order<br/>
<strong>shows what it actually is.</strong>
</div>
<h2>Three necropolitical spaces</h2>
<p>Mbembe develops his argument through three historical formations — the plantation, the colony, and the late modern occupation — each of which exemplifies a different configuration of the power over death.</p>
<p><strong>The plantation.</strong> Mbembe reads the plantation through Orlando Patterson's concept of "social death" — the condition of the enslaved person who has suffered triple loss: loss of political status (no legal standing), loss of bodily integrity (the body is property), and loss of natal ties (descendants are also property, kinship cannot be inherited). The enslaved person is alive but occupies the position of the socially dead — a being with no claim on the legal or political order, no protection from sovereign violence, whose life and death are fully at the disposal of the owner. The plantation is a space where the power over death is exercised continuously, routinely, as an ordinary feature of economic production.</p>
<p><strong>The colony.</strong> Colonial administration creates what Mbembe calls a "death-world" — not a space where everyone is killed, but a space where death circulates as a constant ambient condition. The violence is not always direct. It is the violence of starvation wages, of forced labor, of disease that goes untreated, of housing that kills slowly, of police that can kill without consequence. The colonized person lives in a permanent relationship of proximity to death, managed by a sovereign power that can escalate that proximity at will.</p>
<p><strong>Late modern colonial occupation.</strong> Mbembe's paradigm case for contemporary necropolitics is the Israeli occupation of the Palestinian territories, which he analyzes in extensive detail. He describes a form of power that he calls "territorial fragmentation" — the systematic dismemberment of a population's living space through checkpoints, walls, settlement expansion, and the control of water, electricity, and movement. The goal is not the extermination of the population (though massacres occur) but the reduction of Palestinian life to what Mbembe calls "bare life" — life stripped of political meaning, legal protection, and territorial continuity. A population managed through its exposure to death.</p>
<div class="callout">
<span class="callout-label">Necropolitics and the "war on terror"</span>
<p>Mbembe's 2003 essay was published during the early years of the United States' "war on terror," and he draws explicit connections. Drone warfare, extraordinary rendition, Guantanamo Bay — these are all technologies of necropolitics: the exercise of death-dealing power outside the normal legal order, against populations that have been placed outside the category of those to whom normal legal protections apply.</p>
<p>The pattern is consistent across his three historical formations: first, a population is classified as something less than fully human, or as a threat that must be managed outside ordinary law. Then, violence against that population becomes administratively routine. Then, the legal and political architecture is adjusted to normalize what was previously an exception. Mbembe argues that this is not a departure from liberal democracy. It is what liberal democracy looks like when it encounters a population it has decided does not fully count.</p>
</div>
<h2>The liberal alibi and its limits</h2>
<p>The liberal state maintains its self-understanding as a protector of rights, a guarantor of due process, a system of limited and accountable power. This self-understanding is not entirely false — within the territory defined as the domain of full citizenship, many of these protections are real. They are also real for some people and not others even within that territory, along racial lines that reproduce colonial classifications.</p>
<p>But the colonial project has always required a space where these protections are suspended. The liberal state exports its violence. It maintains the alibi of civilization at home by concentrating the unalibi-ed violence in spaces classified as outside the domain of full humanity — colonies, occupied territories, carceral facilities, refugee camps. The exception is not a failure of the liberal order. It is where the liberal order deposits the violence that would make its self-understanding impossible if it were visible at home.</p>
<p>This is what Fanon meant when he said decolonization requires the destruction of an entire world, not just a change of administration. The world that colonialism built is not just the economic extraction Rodney documented or the psychological production Fanon analyzed. It is a set of spatial arrangements, legal categories, and administrative routines that distribute exposure to death along racial and colonial lines — and call that distribution natural, necessary, or simply invisible.</p>
<h2>What this adds to the framework</h2>
<p>Earlier in this series, we described capture as the enclosure of commons — taking what was shared and making it private, taking what was autonomous and routing it through a controlling intermediary. Mbembe shows the extreme end of that spectrum: necropolitics is capture that operates not through economic extraction but through the administration of death itself. It is not that the colonized person's labor is extracted — it is that the colonized person's very exposure to death can be managed, calibrated, and deployed as an instrument of governance.</p>
<p>The <a class="xl" href="glossary.html#routing">routing question</a>, in necropolitical space, is about who gets to live safely. Safety — freedom from lethal violence, access to the basic conditions of survival — is a resource distributed through political structures. Those structures were built on colonial classifications that are still operative. The "war on terror," mass incarceration, climate change's differential impact on the Global South, the slow violence of austerity — these are all necropolitical in Mbembe's sense: they administer death at a population level, along lines laid down by the history this series has been mapping.</p>
<p>The next piece turns from diagnosis to what people actually do within these conditions — how communities build commons not despite necropolitical pressure but through and against it.</p>` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="Power Explained — Advanced Track" />
      </ArticleWrap>
    </Layout>
  )
}
