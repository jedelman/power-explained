import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []
const FOOTNOTES = [
  `Mondragon Corporation was founded in 1956 by Father José María Arizmendiarrieta in Arrasate-Mondragón, Basque Country. The figures frequently cited in the literature — roughly 80,000 employees across 100+ cooperatives — reflect the period before 2022, when ULMA Group and Orona departed from the cooperative federation. As of 2023, Mondragon comprises approximately 81 cooperatives with roughly 70,000 worker-owners across manufacturing, retail, finance, and education. Annual reports are published at mondragon.com. The standard critical analysis is Sharryn Kasmir, <em>The Myth of Mondragón: Cooperatives, Politics, and Working-Class Life in a Basque Town</em> (SUNY Press, 1996), which argues that worker ownership has not eliminated workplace hierarchy or conflict. George Cheney's <em>Values at Work</em> (ILR Press, 1999) provides a more balanced assessment. <a href="#ref1">↩</a>`,
  `The Ejército Zapatista de Liberación Nacional (EZLN) issued its declaration and occupied San Cristóbal de las Casas and several other Chiapas municipalities on January 1, 1994, the day NAFTA entered into force. The EZLN's <em>Primera Declaración de la Selva Lacandona</em> identified NAFTA's agricultural provisions as "a death sentence for the indigenous peoples of Mexico." The Mexican army retook the occupied towns within days; the Zapatistas have since controlled rural territories in highland and jungle Chiapas. They established the Juntas de Buen Gobierno (Good Government Councils) in 2003 as formal autonomous governance structures. Their slogan "Preguntando caminamos" (Asking, we walk; or: We make the path by walking) is generally attributed to Subcomandante Marcos, drawing on the earlier Antonio Machado line "Caminante, son tus huellas el camino, y nada más." <a href="#ref2">↩</a>`,
  `Kaba, Mariame. <em>We Do This 'Til We Free Us: Abolitionist Organizing and Transformative Justice</em>. Edited by Tamara K. Nopper. Chicago: Haymarket Books, 2021. Kaba is a co-founder of Project NIA (focused on ending youth incarceration) and Survived &amp; Punished (supporting criminalized survivors of violence). The book collects essays and interviews spanning her decades of organizing work. Her essay "So You're Thinking About Becoming an Abolitionist" provides the most accessible entry point to her framework; "Yes, We Mean Literally Abolish the Police" (New York Times, 2020) is the most widely read statement of the abolitionist position. <a href="#ref3">↩</a>`
]

export default function BuildItNow() {
  return (
    <Layout
      title="Build It Now — Power Explained"
      description="Not a blueprint. Not a vanguard. Not after the revolution. The alternative to authoritarian socialism is being built right now, in the present tense, by people who already gave up on waiting."
      seriesTag="Against Authoritarianism — Series III"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `Build It Now` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>So you've accepted that capitalism is bad and has to go. You've accepted that building a Leninist vanguard party reliably reproduces domination. You've accepted that the tradition with better answers mostly got crushed. Now what?</p>
<p>This is the point where a lot of political analysis either goes abstract ("we need a revolutionary rupture with the existing order") or defeatist ("nothing works, everything is captured, we're doomed"). Both responses are wrong, and both are ways of avoiding the actual question: what do you do on Monday?</p>
<h2>The prefigurative claim</h2>
<p><a class="xl" href="glossary.html#prefigurative">Prefigurative politics</a> is the idea that you build the world you want to live in by living in it — now, in the present, in the interstices of the current system. You don't wait for the revolution to start building institutions of collective self-governance. You build them in the present, with the people you have, in the conditions you're actually in.</p>
<p>This is not a consolation prize for people who gave up on real politics. It's a specific claim about how change at scale actually happens, based on the historical record of what actually works.</p>
<p>The argument runs like this. The existing system is not held in place only by force — if it were, it would be much more fragile. It's held in place by the absence of functioning alternatives. People stay in bad arrangements because there's nowhere else to go. The landlord can extract because there's no collective housing. The employer can dictate because there's no alternative income. The state can coerce because there's no alternative security. Every institution that builds a genuine alternative — that actually routes care, resources, or security through something other than the market or the state — makes the existing system slightly less necessary and therefore slightly less stable.</p>
<p>This doesn't mean prefigurative work is the whole answer. It's not. It needs to connect to other forms of power — labor organizing, electoral fights where they're winnable, legal challenges, direct action. But it is the load-bearing foundation that most political strategy either ignores or treats as an afterthought. And it's the piece that the authoritarian socialist tradition got most wrong, by treating every existing form of community self-organization as subordinate to the party's revolutionary project.</p>
<div class="pull">
        The revolution isn't the moment<br/>you seize the state.<br/>It's the <strong>capacity</strong> you build before that.
      </div>
<h2>What this actually looks like</h2>
<p><strong>Mutual aid networks</strong> that provide material support — food, housing, medical care, childcare — outside of market and state channels. Not charity: infrastructure. The distinction matters because charity makes recipients dependent on donors, while <a class="xl" href="mutual-aid-isnt-charity.html">mutual aid</a> builds the organizational capacity of the community itself. When you build a mutual aid network, you're building the logistical and relational capacity to coordinate people and resources. That capacity is durable and multipurpose.</p>
<p>The same logic applies to housing. <strong>Tenant unions and housing cooperatives</strong> both attack the same thing: the landlord's power derives entirely from the fact that you need housing and there's no alternative to paying him for it. Tenant organizing makes eviction costly and collective action feasible. Housing cooperatives route housing outside the rental market entirely. Both reduce dependence on an extraction mechanism. Both build organizational capacity. Both make the existing arrangement less necessary.</p>
<p>Extend it to the economy as a whole. <strong>Worker cooperatives and solidarity economy networks</strong> route economic activity through collectively owned institutions rather than capitalist firms. This is not a fantasy — there are large successful worker cooperatives operating in almost every sector of the economy. Mondragon in Spain's Basque Country is the famous example — a federation of over a hundred cooperatives employing roughly 80,000 people across manufacturing, retail, and finance<sup><a href="#fn1" id="ref1">1</a></sup> — but there are thousands of others. The goal is not to individually opt out of capitalism but to build sectors of the economy that operate on different principles and create real alternatives for people who need them.</p>
<p>And extend it to harm and accountability. <strong><a class="xl" href="glossary.html#transformative-justice">Transformative justice and community accountability</a></strong> processes address harm without calling the police — routing justice through horizontal relationships rather than state coercion. Over time, these build the organizational infrastructure — the capacity to address conflict collectively, to hold people accountable without caging them, to repair relationships rather than severing them — that makes the carceral system less necessary. <a class="xl" href="what-we-do-on-monday.html">Mariame Kaba's work</a><sup><a href="#fn3" id="ref3">3</a></sup> is the clearest account of how this already operates in practice.</p>
<h2>The honest accounting</h2>
<p>The prefigurative tradition has also failed, just differently. Worker cooperatives get bought out or go under. Mutual aid networks burn out their organizers and collapse. Housing cooperatives get gentrified out of existence. Community organizations get absorbed by nonprofits that route them back into the existing system. The Spanish anarchists got crushed. The Zapatistas are still holding on in Chiapas but haven't scaled. There's no version of this story where the good guys are winning decisively.</p>
<p>But "failing differently" is important. Authoritarian socialism failed by becoming what it was supposed to replace — by building institutions of domination in the name of liberation, by killing the people making the most honest critiques, by producing decades of misery and then collapsing while bequeathing a generation of demoralized ex-believers to the right. The prefigurative tradition fails by not scaling, by burning out, by getting crushed. That's a different kind of failure. The failures don't corrupt the institutions from within, because the institutions are built to be accountable to their members.</p>
<p>And the failures are instructive rather than terminal. You can learn from a mutual aid network that burned out in ways you can't learn from a Stalinist party that imprisoned its critics.</p>
<div class="callout">
<span class="callout-label">The Zapatistas</span>
<p>On January 1, 1994 — the day NAFTA took effect<sup><a href="#fn2" id="ref2">2</a></sup> — the Zapatista Army of National Liberation seized several towns in Chiapas, Mexico, and issued a declaration of war against the Mexican state. Then they did something unusual: they stopped trying to seize state power and started building autonomous governance in the territories they controlled.</p>
<p>For thirty years, the Zapatista communities have been running their own schools, health clinics, justice systems, and economic institutions — without state resources, against sustained military pressure, in extreme poverty. It's not a model that scales straightforwardly. But it's a demonstration that complex self-governance is possible under conditions far more difficult than most political organizing faces.</p>
<p>The Zapatistas are also explicit about the prefigurative claim: they are not trying to seize the Mexican state. They are building, in the territory they hold, the kind of society they want to live in. "Preguntando caminamos" — asking, we walk. The path is made by walking.</p>
</div>
<h2>The connection to everything before this</h2>
<p>We started with <a class="xl" href="the-outside-capital-needs.html">Luxemburg</a>: the system runs on an outside it cannot produce itself. The commons — shared knowledge, mutual care, collective self-governance — is what capital feeds on. When it runs out, the system cannibalizes itself.</p>
<p>We went through the <a class="xl" href="the-outside-capital-needs.html">feminist theorists who showed</a> that the commons has always been gendered and raced — that the outside capital requires is maintained by specific bodies, specific labor, specific people who have been systematically excluded from the count.</p>
<p>We showed that authoritarian socialism, for all its genuine breaks with capitalism, reproduced the fundamental structure: separation of workers from control over their own conditions, concentrated in a party hierarchy that substituted itself for the class it claimed to represent.</p>
<p>And we showed a tradition — suppressed, defeated, imperfect — that understood the alternative: build the commons. Build it now. Build it in the present tense, with the people you have, in the conditions you're actually in. Not as a path to seizing state power, but as the construction of an alternative substrate — communities that can take care of themselves, coordinate themselves, and hold themselves accountable through horizontal relationships rather than through markets or states.</p>
<p>This is not a blueprint. There is no blueprint. There is practice, accumulated over time, through experiments that fail instructively and occasionally succeed durably. There is the patient work of building relationships strong enough to act on and institutions accountable enough to be corrected. The enclosure will keep coming — that is what capital does. The commons can keep being rebuilt — that is what communities do.</p>
<p>The system depends on the commons. The commons can be rebuilt. That is where every genuine alternative begins — not after the revolution, but now, in the work that's already underway.</p>` }} />
        </div>
        
        
        
        <Footnotes notes={FOOTNOTES} />
        <ArticleFooter seriesNote="Power Explained — Advanced Track" />
      </ArticleWrap>
    </Layout>
  )
}
