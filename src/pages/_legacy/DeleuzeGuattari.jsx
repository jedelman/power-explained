import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = [{id: 'rhizome', label: "The rhizome: why weeds beat trees"}, {id: 'desiring-production', label: "Desiring-production: you want your own subjection"}, {id: 'deterritorialization', label: "Deterritorialization and reterritorialization: how capture actually works"}, {id: 'war-machine', label: "The war machine vs. the state apparatus"}, {id: 'lines-of-flight', label: "Lines of flight: exodus before exodus had a name"}]
const FOOTNOTES = [
  `The rhizome concept is introduced in "Introduction: Rhizome," the opening section of Deleuze, G. &amp; Guattari, F. (1987). <em>A Thousand Plateaus: Capitalism and Schizophrenia</em>. University of Minnesota Press. (Orig. French: <em>Mille Plateaux</em>, Minuit, 1980.) The introduction was also published as a standalone pamphlet. Their botanical reference is precise: a rhizome is a horizontal underground stem that produces roots and shoots from its nodes — grass, ferns, ginger — as distinct from the root-trunk-branch structure of an arboreal plant. The political analogy is explicit throughout. <a href="#ref1">↩</a>`,
  `The war machine analysis appears in Plateau 12: "1227: Treatise on Nomadology — The War Machine," in <em>A Thousand Plateaus</em>. The anthropological grounding draws on the work of Pierre Clastres, especially <em>Society Against the State</em> (Zone Books, 1987; orig. French 1974), which argued that many stateless societies actively organized to prevent state formation rather than simply lacking it — a point directly relevant to the political argument that the commons is not a pre-political primitive but a deliberate social achievement. <a href="#ref2">↩</a>`,
  `<em>Ligne de fuite</em> carries both meanings in French — "line of flight" and the vanishing point in a perspective drawing where parallel lines converge toward the horizon. The double meaning is intentional throughout Deleuze and Guattari's work: a line of flight is not an escape to nowhere but a movement that reorganizes the space through which one moves. The concept runs through both volumes of <em>Capitalism and Schizophrenia</em> and is developed most extensively in <em>A Thousand Plateaus</em>, particularly in Plateau 9 ("1933: Micropolitics and Segmentarity"). <a href="#ref3">↩</a>`
]

export default function DeleuzeGuattari() {
  return (
    <Layout
      title="Deleuze & Guattari: How Power Moves — Power Explained"
      description="The rhizome. Desiring-production. Deterritorialization. Gilles Deleuze and Félix Guattari spent two decades mapping how power operates through capture rather than prohibition — and where the exits are."
      seriesTag="Thinkers"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: 'var(--display)', fontSize: 'clamp(4rem,18vw,12rem)', fontWeight: 700, letterSpacing: '-0.04em', opacity: 0.05, whiteSpace: 'nowrap', pointerEvents: 'none', lineHeight: 1 }}>DELEUZE GUATTARI</div>
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          <span className="hero-eyebrow"></span>
          <h1 dangerouslySetInnerHTML={{ __html: `Deleuze &<br />Guattari` }} />
          <p className="hero-dek">Gilles Deleuze was a philosopher at Paris VIII. Félix Guattari was a psychoanalyst and political activist who ran an experimental psychiatric clinic at La Borde. They collaborated for twenty years across two major projects: a theory of desire and capitalism in Anti-Oedipus and A Thousand Plateaus, and a theory of philosophy in What Is Philosophy? Their work is famously difficult. But the core — how power operates through capture rather than prohibition, and where the exits are — is essential to understanding anything that comes after.</p>
          <div className="hero-bio">
            <span className="bio-dates"></span>
            <p className="bio-line" dangerouslySetInnerHTML={{ __html: `` }} />
          </div>
        </div>
      </div>

      <ArticleWrap>
        <ContentsNav sections={SECTIONS} />
        <div className="body-text">
          
          <Section id="rhizome" num="01" title="The rhizome: why weeds beat trees">
            <div dangerouslySetInnerHTML={{ __html: `<p>Most thinking about organization — political, intellectual, biological — uses the tree as its implicit model. A trunk, branches, roots: a single origin point from which everything else derives. The Marxist-Leninist party is a tree. The org chart is a tree. The textbook history of ideas is a tree — one thinker leads to the next, one tradition branches into sub-traditions, all of it traceable to origins and classifiable into a hierarchy.</p>
<p>The tree model has one enormous practical advantage: it is easy to command. If you control the trunk, you control the branches. If you know the origin, you can police what counts as legitimate development from it. Power loves the tree because the tree is a capture structure — every node is locatable, every deviation is traceable, every connection passes through a center that can be monitored and controlled.</p>
<p>Deleuze and Guattari proposed a different model: the <strong>rhizome</strong>.<sup><a href="#fn1" id="ref1">1</a></sup> A rhizome — think grass, not oak — has no center, no origin, no fixed root. It spreads horizontally, underground, connecting any point to any other point without passing through a trunk. It can be cut at any point and continue from somewhere else. You cannot kill it by attacking its center because it has no center. You cannot trace it to an origin because it has many beginnings and no first one.</p>
<div class="pull">
        A rhizome has no beginning<br/>
        and no end —<br/>
        only a <strong>middle</strong>,<br/>
        from which it grows<br/>
        and overspills.
      </div>
<p>The political implication is exact. A movement organized as a tree is vulnerable to decapitation: find the leadership, arrest or co-opt them, and the movement collapses or gets redirected. This is not a strategic failure — it is a structural consequence of the organizational form. The rhizome resists decapitation because there is no head. Every node is leadership. Every connection is a potential organizing center. The most resilient movements in history — <a class="xl" href="case-study-zapatistas.html">the Zapatistas</a>, <a class="xl" href="case-study-rojava.html">the Kurdish communes</a>, the labor organizing traditions that survived the most sustained state repression — have all organized rhizomatically, whether or not they used that word.</p>
<p>The rhizome is also the model of the internet before platform capture — or of a well-maintained commons: anyone can enter from anywhere, connections proliferate without permission, there is no authorized version that all other versions must defer to. <a class="xl" href="open-data-isnt-enough.html">The difference between open data and a genuine commons is exactly this: open data is a tree with public branches. A commons is a rhizome.</a></p>` }} />
          </Section>
          <Section id="desiring-production" num="02" title="Desiring-production: you want your own subjection">
            <div dangerouslySetInnerHTML={{ __html: `<p>The hardest question in radical politics has always been: why do people consent to arrangements that are obviously against their interests? Why do workers vote for parties that cut their wages? Why does the revolutionary energy of one generation become the conservative orthodoxy of the next?</p>
<p><a class="xl" href="gramsci.html">Gramsci's answer was hegemony</a>: the ruling class manufactures consent by making its worldview seem like common sense, naturalizing arrangements that are actually historical and changeable. This is a powerful and largely correct answer. But it has a limit: it treats desire as something that gets redirected or manipulated — a natural impulse pointed the wrong way by ideological machinery. The implication is that if you could clear away the false consciousness, the real desire for liberation would reassert itself.</p>
<p>Deleuze and Guattari pushed further: people do not merely accept their subjection. They <em>want</em> it. Not because they have been tricked into wanting the wrong thing, but because desire itself is productive — it produces reality, including the reality of its own constraints. The factory worker who identifies with the company is not suffering false consciousness. They are producing a real social arrangement through the investment of real desire. The family that reproduces gender norms generation after generation is not merely imitating — it is desiring those norms as the structure of its own pleasures and attachments.</p>
<div class="callout">
<span class="callout-label">What desiring-production means practically</span>
<p><em>Anti-Oedipus</em> opens with a provocation: fascism is not imposed on people against their desires. People desire fascism. Not abstractly, not metaphorically — they invest libidinal energy in the structures that oppress them because those structures provide something desire requires: intensity, meaning, the satisfaction of belonging to something larger than oneself.</p>
<p>Guattari, who had worked with patients whose suffering was produced by the psychiatric institution itself, understood this from the inside. The institution was not merely oppressive — it was desirable, because it organized the patient's world into a coherent structure, provided roles and relationships, gave the symptoms a home. Liberation from it required not just removing the oppressive structure but producing something else for desire to inhabit. You cannot liberate desire by negation alone.</p>
<p>For organizers: this means the movement has to be not just correct but <em>desirable</em>. If the experience of organizing is grim, hierarchical, and self-denying — if it asks people to suppress what they want in service of what they should want — it will lose to the arrangements that actually organize people's pleasures, however toxic those arrangements are. <a class="xl" href="graeber.html">Graeber understood the same thing through play.</a> The commons has to feel like somewhere desire wants to live.</p>
</div>` }} />
          </Section>
          <Section id="deterritorialization" num="03" title="Deterritorialization and reterritorialization: how capture actually works">
            <div dangerouslySetInnerHTML={{ __html: `<p>The most useful conceptual pair in Deleuze and Guattari for understanding political economy is deterritorialization and reterritorialization. These describe the fundamental dynamic by which power operates on flows of energy, money, bodies, desire, and meaning.</p>
<p><strong>Deterritorialization</strong> is the release of something from its existing structure — the breaking of a code, the freeing of a flow from its current channel. Capitalism is a deterritorializing force: it dissolves the fixed structures of feudalism — the village, the guild, the commons — liberating people and resources from their inherited forms. This is why capitalism appears as a force of liberation: it genuinely frees things from existing structures.</p>
<p><strong>Reterritorialization</strong> is the recapture of those freed flows into a new structure. The peasant liberated from the commons becomes the wage laborer captured by the factory. The land freed from feudal tenure becomes private property enrolled in the real estate market. The cultural form that escapes official channels gets absorbed by a major label. The open-source project that disrupts proprietary software becomes the infrastructure a platform company builds its enclosure on.</p>
<div class="concept-table">
<div class="concept-table-header">
<span class="ct-title">Deterritorialization → Reterritorialization in practice</span>
<span class="ct-subtitle">The same move, at every scale</span>
</div>
<div class="ct-row">
<div class="ct-cell">
<span class="ct-cell-label">The deterritorialization</span>
<div class="ct-cell-text"><strong>The internet frees communication</strong>Anyone can publish, broadcast, organize — without gatekeepers or broadcast licenses. The old media structures dissolve.</div>
</div>
<div class="ct-cell dim">
<span class="ct-cell-label">The reterritorialization</span>
<div class="ct-cell-text">Platform corporations capture the flow. Communication is now Facebook, YouTube, X — each a new territory with its own rules and mechanisms for extracting rent from the connections that pass through it.</div>
</div>
</div>
<div class="ct-row">
<div class="ct-cell">
<span class="ct-cell-label">The deterritorialization</span>
<div class="ct-cell-text"><strong>The union breaks the factory's control</strong>Collective organizing dissolves the isolated relationship between individual worker and employer. The wage relation's terms become contestable.</div>
</div>
<div class="ct-cell dim">
<span class="ct-cell-label">The reterritorialization</span>
<div class="ct-cell-text">The union becomes an institution — with offices, dues structures, relationships with management, and interests of its own that diverge from the workers it represents. The liberation gets incorporated into a new hierarchy.</div>
</div>
</div>
<div class="ct-row">
<div class="ct-cell">
<span class="ct-cell-label">The deterritorialization</span>
<div class="ct-cell-text"><strong>The movement disrupts the political order</strong>Occupy, the Arab Spring, the Indignados — genuine ruptures that put questions on the table the existing order could not answer.</div>
</div>
<div class="ct-cell dim">
<span class="ct-cell-label">The reterritorialization</span>
<div class="ct-cell-text">The energy gets absorbed into electoral politics, into NGOs, into cultural representation. The rupture becomes a brand. The slogan becomes a hashtag. The demand becomes a policy proposal negotiated away in committee.</div>
</div>
</div>
<div class="ct-row">
<div class="ct-cell">
<span class="ct-cell-label">The deterritorialization</span>
<div class="ct-cell-text"><strong>The commons produces new knowledge</strong>Open-source software, Wikipedia, scientific publication — collective production that escapes the enclosures of proprietary IP and corporate R&amp;D.</div>
</div>
<div class="ct-cell dim">
<span class="ct-cell-label">The reterritorialization</span>
<div class="ct-cell-text">The knowledge becomes infrastructure that capital builds on. The open-source library becomes the dependency of the venture-backed platform. The academic paper becomes AI training data that gets patented. The commons produces; the enclosure harvests.</div>
</div>
</div>
</div>
<p>The critical insight is that capitalism does not simply prohibit deterritorialization — it <em>requires</em> it. The system needs things to be freed from existing structures so they can be captured in new ones. It needs constant dissolution and constant re-enclosure. This is why reforming individual enclosures is insufficient: the dynamic produces new ones. <a class="xl" href="hardt-negri.html">Hardt and Negri's analysis of Empire as a system that operates through flows rather than fixed territories is built directly on this insight.</a> The question is not how to stop deterritorialization but how to intervene in the reterritorialization — how to ensure that what gets freed from one capture doesn't immediately get absorbed into another.</p>` }} />
          </Section>
          <Section id="war-machine" num="04" title="The war machine vs. the state apparatus">
            <div dangerouslySetInnerHTML={{ __html: `<p>One of the most productive and most misunderstood concepts in <em>A Thousand Plateaus</em> is the war machine. The name is misleading. Deleuze and Guattari are not primarily talking about military force — they are arguing that actual military institutions are a secondary, captured form of what they mean.</p>
<p>The war machine, in their analysis, is any social formation that exists <em>outside</em> the state and resists its logic of capture. Its defining characteristic is not violence but exteriority: it operates according to its own rules, produces its own social relations, and cannot be fully incorporated into the state's mechanisms of command without ceasing to be what it is. Nomadic peoples before state formation were the original model — not because they were warlike but because their mode of life organized territory, movement, and social relation in a way that could not simply be annexed by the state without being destroyed.<sup><a href="#fn2" id="ref2">2</a></sup></p>
<p>The state apparatus, by contrast, is defined by capture: it strives to bring everything within its territory under its codes — taxable, legible, governable. The state does not create society; it overcodes it. It arrives at existing social formations and insists on translating them into its own language: property rights, citizenship, taxation, census, contract law. What cannot be translated — the nomad, the commons, the informal economy, the mutual aid network — is either eliminated or absorbed.</p>
<div class="pull">
        The state does not create.<br/>
        It <strong>overcodes</strong>.<br/>
        It arrives at what already exists<br/>
        and insists on translation.
      </div>
<p>What makes this politically generative is that the war machine does not have to be military or explicitly oppositional. Any social formation that maintains its exteriority — that operates by its own logic, produces its own social relations, refuses the state's translation without necessarily confronting it — functions as a war machine in this sense. The Zapatista autonomous communities are a war machine. The Kurdish commune system is a war machine. <a class="xl" href="how-linux-became-the-internet.html">The early open-source movement, before it got absorbed into the corporate software stack, was a war machine.</a> What they share is not violence but the stubborn maintenance of a different social logic that the state and capital cannot fully incorporate.</p>
<p>The risk Deleuze and Guattari document carefully is that the war machine gets captured — becomes a standing army, an institution, a state of its own. The revolutionary movement that seizes state power and then becomes the state. The commune that gets legally recognized and then has to operate by the state's rules. <a class="xl" href="the-party-ate-the-revolution.html">The reterritorialization of the war machine is the central problem of every liberation movement that succeeds.</a></p>` }} />
          </Section>
          <Section id="lines-of-flight" num="05" title="Lines of flight: exodus before exodus had a name">
            <div dangerouslySetInnerHTML={{ __html: `<p>The concept that connects Deleuze and Guattari most directly to the practical politics of the commons is the <strong>line of flight</strong> — <em>ligne de fuite</em>, which also means "vanishing line" in French, as in perspective drawing.<sup><a href="#fn3" id="ref3">3</a></sup> It is the movement by which something escapes a territory, breaks from a structure, finds a way out that was not previously visible.</p>
<p>Lines of flight are not planned escapes. They are the cracks that appear in every structure under pressure — the unexpected openings, the moments when something moves in a direction the system's logic did not anticipate. The worker who stops believing the company's story about what their labor is worth. The tenant who realizes that her neighbors' problems are structurally identical to hers. The developer who decides that the code they write should be owned by everyone. These are lines of flight — not because they immediately produce revolution but because they are the first movements toward a different territory.</p>
<p><a class="xl" href="hardt-negri.html">Hardt and Negri's concept of exodus — building the alternative by withdrawing productive activity from capture — is lines of flight made into strategy.</a> But Deleuze and Guattari are careful about the limits of strategy: lines of flight can be captured and reterritorialized. The escape from one structure becomes the founding movement of another. This is why the question is not just how to flee but what to build during the flight — what new territory, what new social relations, what institutions of the common get constructed in the spaces that open up.</p>
<div class="callout">
<span class="callout-label">Three kinds of line</span>
<p>Deleuze and Guattari describe social life as composed of three kinds of line running simultaneously. <strong>Molar lines</strong> are the rigid segmentations of official social life: classes, genders, races, nations, institutions — the identities and structures that the state and capital can name and manage. <strong>Molecular lines</strong> are the more fluid movements that run beneath the molar — the ways everyday life actually works, the informal economies, the care networks, the practices that don't quite fit the official categories. <strong>Lines of flight</strong> are the breaks that rupture the whole arrangement — moments when something moves so far from the existing territory that the existing maps no longer apply.</p>
<p>For organizers: most political work happens at the molar level, because that's where power is legible. But most of the energy for transformation accumulates at the molecular level — in the informal networks, the relationships that don't show up on org charts, the practices that are already commons even though no one is calling them that. The art is to recognize the molecular lines and help them become lines of flight before the reterritorialization arrives to absorb them.</p>
</div>` }} />
          </Section>
        </div>

        <Invitation
          label=""
          headline=""
          coda={``}
        >
          
        </Invitation>

        <NextReads items={[
          { href: 'hardt-negri', cat: "Thinker", title: "Hardt & Negri: The Wealth That Capital Cannot Build" },
          { href: 'gramsci', cat: "Thinker", title: "Gramsci: The Feeling That This Is Just How Things Are" },
          { href: 'foucault', cat: 'Thinker', title: 'Foucault: Power Is Not a Thing Anyone Holds' },
          { href: 'the-party-ate-the-revolution', cat: "Theory", title: "The Party Ate the Revolution" },
          { href: 'build-it-now', cat: "Practice", title: "Build It Now — What The Alternative Looks Like" },
          { href: 'case-study-rojava', cat: "Case Study", title: "Rojava: A Revolution in the Middle of a War" },
          { href: 'case-study-zapatistas', cat: "Case Study", title: "The Zapatistas: Thirty Years of Asking, Walking" }
        ]} />
        
        <Footnotes notes={FOOTNOTES} />
        <ArticleFooter seriesNote="Thinkers — Deleuze & Guattari — Anti-Oedipus (1972) — A Thousand Plateaus (1980)" />
      </ArticleWrap>
    </Layout>
  )
}
