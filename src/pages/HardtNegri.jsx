import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = [{id: 'the-common', label: "The common: not what's left over, but what everything runs on"}, {id: 'immaterial-labor', label: "Immaterial labor: when your social life is the factory"}, {id: 'empire', label: "Empire: why there's no headquarters to storm"}, {id: 'multitude', label: "The multitude: not the working class, not the people — something new"}, {id: 'exodus', label: "Exodus: building the common by withdrawing from capture"}]
const FOOTNOTES = [
  `Hardt, M. &amp; Negri, A. (2009). <em>Commonwealth</em>. Harvard University Press. The third volume of their Empire trilogy. The theory of the common as a category distinct from both public (state-owned) and private property is developed in Part 2. Their argument is that the "republic of the common" is neither the liberal welfare state nor the anarchist dissolution of governance — it is a new institutional form that does not yet have a settled name. <a href="#ref1">↩</a>`,
  `The term "immaterial labor" was introduced by Italian theorist Maurizio Lazzarato in a 1996 essay ("Immaterial Labor," in <em>Radical Thought in Italy</em>, ed. Virno &amp; Hardt, University of Minnesota Press). Hardt and Negri adopted and extended the concept throughout the Empire trilogy. The broader tradition of Italian operaismo (workerism), which includes figures such as Mario Tronti, Romano Alquati, and later Paolo Virno, was a major influence on Negri's theoretical development from the 1960s onward. <a href="#ref2">↩</a>`,
  `Hardt, M. &amp; Negri, A. (2000). <em>Empire</em>. Harvard University Press. The book was drafted while Negri was under house arrest in Rome following his return from exile in France. The manuscript was smuggled out for publication — a detail that Negri himself noted was appropriate for a book about the difficulty of locating power. Its publication by Harvard University Press (rather than a small radical press) contributed to its unusual reach across academic and activist audiences. <a href="#ref3">↩</a>`,
  `The concept of the multitude is developed primarily in <em>Multitude: War and Democracy in the Age of Empire</em> (Penguin Press, 2004). Hardt and Negri explicitly contrast the multitude with Hobbes's "multitude" — which Hobbes saw as the dangerous, pre-political mass that the sovereign must tame — and with the "People" of liberal-democratic theory, which requires that diversity be subsumed into a unified will. Their multitude is diverse and plural but capable of collective action without requiring unity. The Spinozist philosophical grounding — from Negri's earlier work on Spinoza, <em>The Savage Anomaly</em> (1981) — is central to understanding why they believe this is possible. <a href="#ref4">↩</a>`,
  `Hardt, M. &amp; Negri, A. (2017). <em>Assembly</em>. Oxford University Press. The shift from the earlier books is significant: Hardt and Negri acknowledge more directly that horizontal, leaderless movements have struggled to hold institutional gains. Their proposed solution — leadership that "takes the back seat," sets the strategy while the multitude drives — was criticized as both vague and as a retreat from the earlier anti-leadership position. The debate is unresolved and productive. <a href="#ref5">↩</a>`,
  `The AT Protocol, developed by Bluesky, is an explicit attempt to build federated social infrastructure as a commons rather than as a platform — an open protocol that any developer can build on, where users can migrate between hosts without losing their social graph. Whether this represents genuine exodus or merely a different enclosure architecture is an open question that will be answered by governance decisions, not technical ones. The parallel to Ostrom's insight is exact: the technical commons requires institutional governance to remain a commons. Protocol openness is necessary but not sufficient. <a href="#ref6">↩</a>`
]

export default function HardtNegri() {
  return (
    <Layout
      title="Hardt & Negri: The Wealth That Capital Cannot Build — Power Explained"
      description="The common. Immaterial labor. The multitude. Michael Hardt and Antonio Negri spent two decades building the theoretical language for what platform capitalism confirmed: the most valuable thing in the modern economy is exactly the thing capital cannot produce — only capture."
      seriesTag="Thinkers"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: 'var(--display)', fontSize: 'clamp(4rem,18vw,12rem)', fontWeight: 700, letterSpacing: '-0.04em', opacity: 0.05, whiteSpace: 'nowrap', pointerEvents: 'none', lineHeight: 1 }}>HARDT NEGRI</div>
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          <span className="hero-eyebrow"></span>
          <h1 dangerouslySetInnerHTML={{ __html: `Hardt & Negri` }} />
          <p className="hero-dek">Michael Hardt is a literary theorist at Duke. Antonio Negri was an Italian philosopher who spent years as a political prisoner before fleeing to France, where he wrote the books that would define a generation of radical thought. Together, across four books and two decades, they built the most comprehensive attempt to understand what power looks like when it has no center — and where the exit from it lies.</p>
          <div className="hero-bio">
            <span className="bio-dates"></span>
            <p className="bio-line" dangerouslySetInnerHTML={{ __html: `` }} />
          </div>
        </div>
      </div>

      <ArticleWrap>
        <ContentsNav sections={SECTIONS} />
        <div className="body-text">
          
          <Section id="the-common" num="01" title="The common: not what\'s left over, but what everything runs on">
            <div dangerouslySetInnerHTML={{ __html: `<p>The oldest meaning of "the commons" is land held in common — pasture, forest, fishery shared by a community that governs its use together. <a class="xl" href="hardin-was-wrong.html">Garrett Hardin made the commons famous by arguing it was doomed to overuse.</a> <a class="xl" href="ostrom.html">Elinor Ostrom demolished that argument with evidence.</a> But Hardt and Negri pushed further than either of them and asked a different question: what is the commons in an economy that runs primarily on knowledge, information, code, affect, relationships, and care?</p>
<p>Their answer — developed most fully in <em>Commonwealth</em> (2009)<sup><a href="#fn1" id="ref1">1</a></sup> — is what they call <strong>the common</strong>. Not the commons in the old sense of shared land, but the accumulated wealth of human cooperation: language itself, shared knowledge, scientific understanding, software, cultural forms, the relational infrastructure of social life. All of it produced collectively. None of it producible by any individual acting alone. All of it potentially appropriable by private interests who arrive after the fact with legal instruments and fences.</p>
<p>This is not an academic distinction. It describes the structural situation of everyone who works with their mind, their relationships, or their care. A programmer contributes to open-source libraries built by thousands of contributors over decades — the common — then sells their labor to a company that depends on those libraries. A nurse draws on medical knowledge built by generations of practitioners and researchers — the common — and delivers care that depends as much on her relationship with the patient as on her technical skill. A writer works in a language shaped by every person who ever used it — the common — and produces meaning that becomes part of the cultural conversation that shapes the next generation of writers.</p>
<p>In each case, the productive substrate is collective and cannot be individually owned. In each case, what gets owned are the fences around it: the platform, the employer, the copyright holder, the licensing authority. <strong>The common is the source. Capture is what arrives at the source with a deed.</strong></p>
<div class="pull">
        Capital does not produce the common.<br/>
        The common produces <strong>everything else.</strong><br/>
        Capital arrives afterward<br/>
        with paperwork.
      </div>
<p>This reframes the entire question of what's being fought over. The struggle over wages is a struggle over how to distribute what the common generates. The struggle over intellectual property is a struggle over whether the common can be enclosed. The struggle over platform governance is a struggle over who controls the infrastructure that harvests the common's output. <a class="xl" href="the-outside-capital-needs.html">The thing capital needs but cannot build is the common.</a> That dependence is the leverage.</p>` }} />
          </Section>
          <Section id="immaterial-labor" num="02" title="Immaterial labor: when your social life is the factory">
            <div dangerouslySetInnerHTML={{ __html: `<p>Classical Marxism identified labor as the source of value and located labor in the factory — the physical transformation of raw materials into commodities by workers whose time and effort could be measured and appropriated. The factory was the site of production. Control the factory and you controlled the circuit.</p>
<p>Hardt and Negri, following Italian operaismo theorists including Maurizio Lazzarato,<sup><a href="#fn2" id="ref2">2</a></sup> argued that the dominant form of labor in advanced economies had shifted. The most economically significant work increasingly produces not physical objects but <strong>immaterial outputs</strong>: knowledge, communication, relationships, affects, care. They called this immaterial labor — not because the workers are not physical, but because the primary product of the work is not a physical thing.</p>
<p>Immaterial labor comes in three forms. Intellectual or cognitive labor produces ideas, knowledge, information, code. Communicative labor produces relationships, networks, the social context in which everything else functions. Affective labor produces care, attention, emotional states, the sense of being seen and tended to. All three produce outputs that are immediately social and collective — not a widget that one person makes and another person uses, but a contribution to a shared world that everyone inhabits.</p>
<div class="capture-map">
<div class="capture-map-header">
<span class="cm-title">What you produce → what it becomes → who holds the deed</span>
<span class="cm-subtitle">Immaterial labor and its capture</span>
</div>
<div class="cm-row">
<div class="cm-cell">
<span class="cm-cell-label">What you do</span>
<div class="cm-cell-text"><strong>Contribute to a forum</strong>Answer questions, build context, create the knowledge base that makes the platform useful.</div>
</div>
<div class="cm-cell">
<span class="cm-cell-label">What it produces</span>
<div class="cm-cell-text">A searchable archive of collective knowledge. The social infrastructure that makes the platform worth visiting.</div>
</div>
<div class="cm-cell capture">
<span class="cm-cell-label">Who captures it</span>
<div class="cm-cell-text">The platform owner, who monetizes the traffic, sells advertising, and can shut the archive down or lock it behind a paywall at any time.</div>
</div>
</div>
<div class="cm-row">
<div class="cm-cell">
<span class="cm-cell-label">What you do</span>
<div class="cm-cell-text"><strong>Maintain relationships at work</strong>Smooth conflicts, translate between teams, hold institutional knowledge, mentor newer colleagues.</div>
</div>
<div class="cm-cell">
<span class="cm-cell-label">What it produces</span>
<div class="cm-cell-text">Organizational coherence. The social fabric that makes coordinated action possible. Productivity that can't be attributed to any individual.</div>
</div>
<div class="cm-cell capture">
<span class="cm-cell-label">Who captures it</span>
<div class="cm-cell-text">The employer, whose quarterly earnings reflect this labor without naming it, and who can eliminate the position while wondering why teams fall apart.</div>
</div>
</div>
<div class="cm-row">
<div class="cm-cell">
<span class="cm-cell-label">What you do</span>
<div class="cm-cell-text"><strong>Post, react, engage</strong>Create content, signal preferences, build audience relationships, generate the behavioral data that trains recommendation systems.</div>
</div>
<div class="cm-cell">
<span class="cm-cell-label">What it produces</span>
<div class="cm-cell-text">The attention economy itself. Every scroll, every reaction teaches the machine what to show next. The product is the human, trained and delivered to advertisers.</div>
</div>
<div class="cm-cell capture">
<span class="cm-cell-label">Who captures it</span>
<div class="cm-cell-text">Platform shareholders, who own the capture apparatus — the algorithm, the server, the advertising contract — but not the attention they're selling. That's yours. Given freely.</div>
</div>
</div>
<div class="cm-row">
<div class="cm-cell">
<span class="cm-cell-label">What you do</span>
<div class="cm-cell-text"><strong>Provide care</strong>Raise children, tend to the sick and elderly, sustain the emotional lives of everyone around you.</div>
</div>
<div class="cm-cell">
<span class="cm-cell-label">What it produces</span>
<div class="cm-cell-text">The entire labor force of the next generation. The social reproduction without which no economy functions. <a class="xl" href="who-pays-for-the-next-shift.html">The work that makes all other work possible.</a></div>
</div>
<div class="cm-cell capture">
<span class="cm-cell-label">Who captures it</span>
<div class="cm-cell-text">Everyone else in the economy, who benefits from the labor without paying for it — or who pays below-market wages to the workers who do it professionally, because the market has always assumed much of it would be done for free.</div>
</div>
</div>
</div>
<p>The critical feature of immaterial labor — and this is what makes the concept more than an academic taxonomy — is that its products are inherently common. You cannot fully commodify a relationship. You cannot enclose language. You cannot make knowledge scarce without actively destroying it. The natural tendency of immaterial production is toward the common; the sustained effort of capital is to interrupt that tendency at every point, to manufacture scarcity where none exists, to create legal instruments that mimic physical enclosure in a world where fences don't hold.</p>
<p>This is why intellectual property law has expanded so dramatically over the same period that immaterial labor has become economically dominant. It is not a coincidence. It is the capture mechanism adapting to the new terrain of production.</p>` }} />
          </Section>
          <Section id="empire" num="03" title="Empire: why there\'s no headquarters to storm">
            <div dangerouslySetInnerHTML={{ __html: `<p>Classical anti-imperialism had a clear target: the metropole. London. Paris. Washington. The seat of power, which extracted wealth from the periphery and against which the colonized peoples could organize resistance. Decolonization was about seizing the state — not just any state, but the specific state that was doing the colonizing. There was a headquarters. The strategy followed from its location.</p>
<p><em>Empire</em> (2000)<sup><a href="#fn3" id="ref3">3</a></sup> argued that this form of sovereignty — territorial, centered, bounded by the nation-state — was over. Not because power had disappeared but because it had changed its form. The new power, which they called Empire (capitalized, to distinguish it from empires), operates as a network rather than a hierarchy. No single nation commands it, including the United States, which serves as a node in the network rather than its master. Capital flows across borders that no state fully controls. International institutions — the IMF, the WTO, the World Bank — enforce norms that no democracy voted for. Corporations operate across jurisdictions in ways designed to make accountability impossible. The rules that structure the global economy are made and enforced by entities that cannot be held responsible by any electorate.</p>
<p>The implication is not that there's no power. The implication is that the old maps are wrong. <a class="xl" href="gramsci.html">Gramsci understood that power is not just in the state — it is in the capillary structures of everyday life, in the common sense that makes domination feel natural.</a> Hardt and Negri pushed further: power is not just dispersed through culture, it is dispersed through the entire network of economic and institutional relations that governs global life. There is no headquarters. Storming the palace doesn't work when the palace is everywhere.</p>
<div class="callout">
<span class="callout-label">The three tiers of Empire's command</span>
<p>Hardt and Negri described Empire's governance structure as a set of three tiers. The first tier is the monopoly of force: the United States military, acting as a global police power without a global legal mandate. The second tier is the network of economic governance: the IMF, WTO, and World Bank, which set the rules of the global economy through structural adjustment programs, trade agreements, and debt conditions. The third tier is the moral and representational layer: transnational NGOs, international courts, and the media institutions that frame what counts as a legitimate grievance and what counts as terrorism.</p>
<p>These tiers interlock but are not commanded from a single point. That is the key. You cannot defeat Empire by defeating any one of them. The system reroutes. The legal legitimacy of the NGO tier absorbs the energy of movements that challenge the economic tier. The moral language of humanitarianism reframes the military tier as protection rather than occupation. The system is robust precisely because it has no single point of failure — which also means no single point of leverage. The leverage, if it exists, has to be structural rather than positional.</p>
</div>
<p>This analysis was sharply contested at the time of publication and has been criticized further since — particularly as nationalist and authoritarian movements made a resurgence that looked less like Empire and more like old-fashioned territorial state power. The rise of Xi, Putin, Modi, and the far-right nationalist parties of Europe fit awkwardly into a framework that announced the end of nation-state sovereignty. Hardt and Negri have acknowledged this tension. It does not invalidate the core observation — that the rules governing global capitalism are made and enforced by entities outside democratic accountability — but it complicates the picture. Empire coexists with empires, old-style.</p>` }} />
          </Section>
          <Section id="multitude" num="04" title="The multitude: not the working class, not the people — something new">
            <div dangerouslySetInnerHTML={{ __html: `<p>Classical Marxism organized its politics around a subject: the working class. A defined group, bound by a common relationship to the means of production, whose objective interests pointed toward collective ownership, whose organizational form was the party, whose historical mission was the seizure of state power. The theory of the subject determined the theory of organization which determined the theory of change.</p>
<p>This theory ran into a problem: the working class, as classically defined, was never the whole of the exploited. Women's unpaid reproductive labor didn't fit. The peasantry didn't fit. The colonized peoples whose land was the foundation of European accumulation didn't fit. The twentieth century's failed revolutions produced states that looked more like the movement organizations that built them than like the liberated commons that was supposed to be the goal. <a class="xl" href="the-party-ate-the-revolution.html">The party ate the revolution.</a></p>
<p>Liberal political theory had its own version of the unified subject: the People. Democratic sovereignty rests on the People — a unified will, expressed through elections, represented by a government. The People is also fictional: it papers over deep internal differences of interest, culture, and power by imagining a unity that must be constructed and maintained by the state, often through the exclusion of those who don't fit.</p>
<p>Hardt and Negri proposed a different subject: <strong>the multitude</strong>.<sup><a href="#fn4" id="ref4">4</a></sup> Not a unity imagined in advance, but an actual diversity of struggles and identities that share a common condition — exposure to Empire's extractive reach — without requiring that diversity to be flattened into sameness before acting. The working class becomes one component of the multitude, alongside women doing reproductive labor, precarious gig workers, subsistence farmers defending their land, open-source developers, community health workers, migrant laborers, and everyone else whose productive activity generates the common that Empire extracts.</p>
<div class="pull">
        The multitude does not need a vanguard.<br/>
        It needs a <strong>network</strong>.<br/>
        The organizational form is<br/>
        already the answer.
      </div>
<p>The multitude does not need to be unified before acting. Its constituent struggles are already connected at the level of structure — they are all responses to the same system of capture. What they need is not a party that subsumes them into a single line, but forms of coordination that let them act in concert while remaining distinct. The organizational implication is a network rather than a hierarchy: not the Leninist vanguard party, but something closer to what the Zapatistas call "one no, many yeses" — a shared rejection of the current arrangement, expressed through many different forms of positive construction.</p>
<p>This is aspirational more than descriptive, and critics have pressed the question: when actual movements confront actual power, don't they need more than a network? Hardt and Negri's most recent work, <em>Assembly</em> (2017),<sup><a href="#fn5" id="ref5">5</a></sup> grappled seriously with this: they acknowledged that leaderless movements had won significant battles but struggled to hold what they'd won. The solution they proposed was not to restore the vanguard party but to rethink what leadership means — from commanding to proposing, from directing to enabling, from speaking for the multitude to amplifying what the multitude is already saying.</p>` }} />
          </Section>
          <Section id="exodus" num="05" title="Exodus: building the common by withdrawing from capture">
            <div dangerouslySetInnerHTML={{ __html: `<p>The classical strategic debate in radical politics runs between two positions. The first: reform the system from within, use state power, win elections, change the rules. The second: revolutionary rupture, seize control, replace the system. Both positions agree that the site of transformation is power as constituted — the existing state and economic system.</p>
<p>Hardt and Negri proposed a third option: <strong>exodus</strong>. Not reform and not revolution in the classical sense, but a withdrawal of the multitude's productive activity from the machines of capture, combined with the direct construction of alternative institutions. The common is built not by winning control of the existing institutions but by creating new ones that embody different social relations.</p>
<p>This is not passive withdrawal. It is active construction. The worker who leaves a platform company and joins a cooperative is performing exodus. The community that builds a mutual aid network rather than waiting for state services is performing exodus. The developers who build federated protocols rather than building on corporate platforms are performing exodus. <a class="xl" href="build-it-now.html">The alternative is built in the present, not awaited in the future.</a> Every institution built on different principles is both a withdrawal from capture and a demonstration that the alternative is viable.</p>
<div class="callout">
<span class="callout-label">Exodus and the commons tradition</span>
<p>Exodus connects Hardt and Negri's framework to a much older tradition. <a class="xl" href="kropotkin.html">Kropotkin documented how mutual aid societies, cooperatives, and federations of voluntary associations built the social infrastructure of the nineteenth century without waiting for state permission.</a> <a class="xl" href="ostrom.html">Ostrom showed that commons institutions capable of governing shared resources durably already exist in their thousands, and have for centuries.</a> <a class="xl" href="graeber.html">Graeber described the prefigurative practice of building the society you want inside the shell of the one you're in.</a></p>
<p>Hardt and Negri's contribution is to place these practices inside a theory of why they are strategically necessary right now — not just good in principle, but the specifically appropriate response to a form of power that has no headquarters. You cannot storm Empire. You can build outside it, withdraw from it, make its capture mechanisms less productive, and demonstrate through the existence of functioning alternatives that the current arrangement is not inevitable. The commons has always been the answer. The task is recognizing that it was never gone.</p>
</div>
<p>Exodus does not mean abandoning the terrain of the state. It means not treating state capture as the only or primary form of political action. Hardt and Negri were explicit: the goal is not anarchist dissolution of all governance but the construction of institutions of the common that can eventually govern at scale — not because they have won state power, but because they have made the alternative so tangible and functional that the question of legitimacy shifts.</p>` }} />
          </Section>
        </div>

        <Invitation
          label=""
          headline=""
          coda={``}
        >
          
        </Invitation>

        <NextReads items={[
          { href: 'the-outside-capital-needs', cat: "Theory", title: "The Outside Capital Needs" },
          { href: 'the-commons-they-never-stopped-building', cat: "History", title: "The Commons They Never Stopped Building" },
          { href: 'build-it-now', cat: "Practice", title: "Build It Now — What The Alternative Looks Like" },
          { href: 'open-data-isnt-enough', cat: "Practice", title: "Open Data Isn't Enough" },
          { href: 'graeber', cat: "Thinker", title: "Graeber: The Work You're Already Doing Has a Name" },
          { href: 'gramsci', cat: "Thinker", title: "Gramsci: The Feeling That This Is Just How Things Are" },
          { href: 'foucault', cat: 'Thinker', title: 'Foucault: Power Is Not a Thing Anyone Holds' },
          { href: 'case-study-rojava', cat: "Case Study", title: "Rojava: A Revolution in the Middle of a War" },
          { href: 'case-study-zapatistas', cat: "Case Study", title: "The Zapatistas: Thirty Years of Asking, Walking" }
        ]} />
        
        <Footnotes notes={FOOTNOTES} />
        <ArticleFooter seriesNote="Thinkers — Hardt & Negri — Empire (2000) — Multitude (2004) — Commonwealth (2009) — Assembly (2017)" />
      </ArticleWrap>
    </Layout>
  )
}
