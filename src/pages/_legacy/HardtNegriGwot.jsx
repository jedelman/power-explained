import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = [
  { id: 'the-year', label: 'The year Empire was published' },
  { id: 'immaterial-enclosure', label: 'The immaterial enclosure: the common intellect as terrain' },
  { id: 'patriot-act', label: 'The Patriot Act as Enclosure Act' },
  { id: 'bodies', label: 'The bodies at the limit: Abu Ghraib and the biopolitics of terror' },
  { id: 'close', label: 'Closing the arc: from Reich\'s body to the global commons' },
]

const FOOTNOTES = [
  `Hardt, M. & Negri, A. (2000). <em>Empire</em>. Harvard University Press. Written before September 11 and published in 2000. Its prediction — that the global order would be managed through a network of institutions rather than a single hegemonic state, that sovereignty had become decentered and that wars would be fought not between nations but as police actions against those who resisted the system — appeared prescient within a year of publication. <a href="#ref1">↩</a>`,
  `Hardt, M. & Negri, A. (2004). <em>Multitude: War and Democracy in the Age of Empire</em>. Penguin Press. Their concept of "global civil war" — the GWOT as a permanent state of exception that produces the legal conditions for indefinite executive power — draws on Agamben's <em>State of Exception</em> (2003) and Carl Schmitt's analysis of the exception as the ground of sovereignty. <a href="#ref2">↩</a>`,
  `The USA PATRIOT Act was passed on October 26, 2001 — 45 days after September 11, with minimal congressional debate. The Snowden revelations of 2013 confirmed that the surveillance had been applied far beyond counterterrorism contexts to the comprehensive monitoring of global communications. <a href="#ref3">↩</a>`,
  `The photographs from Abu Ghraib prison, published in April 2004, documented systematic abuse of Iraqi detainees. The specific forms — sexual humiliation, forced nakedness, stress positions, mock execution — were techniques developed through the SERE program (Survival, Evasion, Resistance, Escape), reverse-engineered from Chinese Communist interrogation methods, and applied to produce "learned helplessness." Military psychologists testified that the techniques were unreliable for information extraction. The goal was the production of armored passivity. <a href="#ref4">↩</a>`,
  `Agamben, G. (2005). <em>State of Exception</em>, trans. K. Attell. University of Chicago Press. Agamben's argument — that the state of exception has become the permanent operating mode of the contemporary state — is the legal-philosophical complement to Hardt and Negri's biopolitical analysis. Guantánamo Bay is its paradigm case: a space deliberately located outside any legal jurisdiction, where bodies could be held indefinitely without charge. <a href="#ref5">↩</a>`,
]

export default function HardtNegriGwot() {
  return (
    <Layout
      title="The Immaterial Enclosure: Hardt, Negri, and the GWOT — Power Explained"
      description="Hardt and Negri published Empire in 2000. A year later, the GWOT began — and fit their framework with uncomfortable precision. The war on terror was not primarily about oil or democracy. It was about managing the conditions under which the immaterial commons could be enclosed."
      seriesTag="Enclosure of the Mind — Series VI"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: 'var(--display)', fontSize: 'clamp(3rem,12vw,8rem)', fontWeight: 700, letterSpacing: '-0.04em', opacity: 0.05, whiteSpace: 'nowrap', pointerEvents: 'none', lineHeight: 1 }}>EMPIRE</div>
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          <span className="hero-eyebrow"><a href="enclosure-of-the-mind.html" style={{color:"inherit",textDecoration:"underline",textDecorationColor:"rgba(255,255,255,0.3)"}}>Enclosure of the Mind — Series VI</a></span>
          <h1>The immaterial<br />enclosure</h1>
          <p className="hero-dek">In 2000, Hardt and Negri published a book arguing that global power had shifted from the management of physical territory to the management of immaterial production — knowledge, affect, communication, the common intellect. In 2001, the GWOT began. It fit their framework with uncomfortable precision. The war on terror was not primarily about oil or democracy. It was about managing the conditions under which the common intellect could be enclosed.</p>
          <div className="hero-bio">
            <span className="bio-dates">2000 — 2008</span>
            <p className="bio-line">If you want the theory — the common, immaterial labor, the multitude, exodus — the <a href="hardt-negri.html" style={{color: 'var(--paper)', textDecorationColor: 'rgba(255,255,255,0.4)'}}>Hardt & Negri thinker page</a> covers it. This piece is the historical situating: the GWOT read through the framework they had built, and what becomes visible when you read it that way.</p>
          </div>
        </div>
      </div>

      <ArticleWrap>
        <ContentsNav sections={SECTIONS} />
        <div className="body-text">

          <Section id="the-year" num="01" title="The year Empire was published">
            <div dangerouslySetInnerHTML={{ __html: `<p><em>Empire</em> appeared in 2000, before September 11, before the GWOT, before the Patriot Act or Abu Ghraib or Guantánamo. Its argument was that global power had reorganized around the management of immaterial production — that the primary site of value creation in advanced economies was no longer the factory floor but the commons of knowledge, communication, affect, and relationship that everyone produces together and that capital extracts through intellectual property, platform enclosure, and the management of attention.<sup><a href="#fn1" id="ref1">1</a></sup></p>
<p>A year later, the argument acquired a test case no one had anticipated. The GWOT was the largest projection of American military power since Vietnam, organized around an enemy that had no state, no territory, no army in the conventional sense — an enemy defined not by what it held but by what it represented: an unenclosed zone of solidarity, meaning, and identity that the global order could not absorb into its sign system. The Islamic world's commons of shared meaning — the Ummah, the networks of mutual obligation, the non-market forms of solidarity that had survived colonialism and structural adjustment — was not, in any narrow sense, a threat to American physical security. It was a threat to the conditions under which the global commons of the mind could be managed.</p>
<p>Hardt and Negri wrote <em>Multitude</em> (2004) directly in response, naming the GWOT as a form of biopower: not war in the classical sense of achieving political objectives through military force, but the permanent management of a global population — the production, through the state of exception, of legal conditions under which sovereign power could be exercised without constraint.<sup><a href="#fn2" id="ref2">2</a></sup> The war on terror was not a temporary emergency measure. It was infrastructure. It was the Enclosure Acts for the common intellect.</p>` }} />
          </Section>

          <Section id="immaterial-enclosure" num="02" title="The immaterial enclosure: the common intellect as terrain">
            <div dangerouslySetInnerHTML={{ __html: `<p>The original enclosures took the physical commons: the pasture, the forest, the fishery, the shared land that sustained subsistence life outside the wage relation. Fences, legal instruments, the state's coercive power to enforce them. What was enclosed was a material substrate of production.</p>
<p>The enclosures Hardt and Negri analyze operate on a different substrate: the common intellect — the shared language, knowledge, cultural memory, relational capacity, and communicative infrastructure through which all immaterial production draws. You cannot enclose language with a fence. The enclosure of the common intellect requires a different set of instruments: intellectual property regimes that manufacture scarcity where none exists, platform architectures that capture the social graph, surveillance systems that monitor the flows of communication and make them available to the state and to capital, legal frameworks that criminalize the unauthorized use of shared cultural material.</p>
<p>These instruments had been developing throughout the 1990s — the expansion of copyright terms, the Digital Millennium Copyright Act, the rise of patent trolling, the emergence of platform monopolies. What the GWOT added was the security dimension: the argument that the management of communication infrastructure was a matter of national security, that the state's interest in monitoring the flows of the common intellect overrode the privacy rights of the individuals whose communication constituted it.</p>
<div class="pull">
  The Patriot Act is to the<br/>
  common intellect<br/>
  what the Enclosure Acts<br/>
  were to the<br/>
  <strong>physical commons</strong>.
</div>
<p>The common intellect is the terrain that <a class="xl" href="debord-1968.html">Debord's spectacle</a> had colonized at the level of images, that <a class="xl" href="baudrillard-consumer-society.html">Baudrillard's consumer code</a> had colonized at the level of desire, that <a class="xl" href="shannon-simondon-1950s.html">Shannon's channel model</a> had colonized at the level of infrastructure. The GWOT was the coercive dimension of an enclosure that had been proceeding through these other mechanisms for fifty years. What the security state added was the explicit claim that the commons of mind — the flows of communication, solidarity, shared meaning — was a threat to be managed rather than a resource to be liberated.</p>` }} />
          </Section>

          <Section id="patriot-act" num="03" title="The Patriot Act as Enclosure Act">
            <div dangerouslySetInnerHTML={{ __html: `<p>The USA PATRIOT Act was passed forty-five days after September 11, with minimal congressional debate, in conditions of shock and fear that the executive branch managed with deliberate care.<sup><a href="#fn3" id="ref3">3</a></sup> Its surveillance provisions — expanded wiretapping authority, National Security Letters, "sneak and peek" searches, roving wiretaps — targeted communication infrastructure specifically: email, telephone, financial records, library borrowing. The stated purpose was counterterrorism. The actual architecture was permanent access.</p>
<p>The Snowden revelations of 2013 confirmed what critics had argued from the beginning: the surveillance apparatus built under the PATRIOT Act had been applied not to counterterrorism specifically but to the comprehensive monitoring of global communications. The NSA's PRISM program gave the government access to data from Google, Facebook, Apple, Microsoft, and Yahoo. The XKeyscore program allowed analysts to search the full content of emails, browsing histories, and online chats without prior authorization. The metadata collection program logged every phone call made in the United States — not content, but the relational map — who called whom, when, for how long — which is, in network terms, more revealing than content.</p>
<p>When Stewart Baker, former NSA general counsel, said in 2014 that "metadata absolutely tells you everything about somebody's life," he was making a point that intelligence professionals had understood for decades: the relational structure of communication is more revealing than its content. The surveillance state built a map of the common intellect's actual organization — not what people thought, but the structure of how they thought together. The network topology of solidarity, the nodes of influence and coordination, the flows of meaning that constitute a political community. With this map, you can do what the Enclosure Acts did with the physical commons: identify what needs to be fenced, which flows need to be interrupted, where the commons is generating excess that the existing order cannot absorb.</p>
<p>This is <a class="xl" href="gramsci-1930s.html">Gramsci's organic intellectual</a> problem inverted: Gramsci asked how the subaltern classes could produce their own intellectuals, capable of articulating popular experience into political form. The surveillance state asks, with much greater resources and technical precision, where those intellectuals are and what they are articulating — so that the articulation can be interrupted before it constitutes a movement.</p>
<p>The PATRIOT Act's surveillance architecture was the legal formalization of technical capacities the NSA had been developing since the 1970s, and that the commercial internet had been generating as a byproduct of its normal operations since the 1990s. What the GWOT provided was the political legitimacy to deploy those capacities openly, to make the enclosure of communication infrastructure a matter of national security. The emergency created the infrastructure. The infrastructure outlasted the emergency. The emergency, as Agamben had predicted, was permanent.<sup><a href="#fn5" id="ref5">5</a></sup></p>` }} />
          </Section>

          <Section id="bodies" num="04" title="The bodies at the limit: Abu Ghraib and the biopolitics of terror">
            <div dangerouslySetInnerHTML={{ __html: `<p>The photographs from Abu Ghraib prison, published in April 2004, showed a system — not the sadism of bad actors. The specific forms of abuse documented — sexual humiliation, forced nakedness, stress positions, sensory deprivation, mock execution — were techniques developed through the SERE program, reverse-engineered from Chinese Communist interrogation methods, and applied at Abu Ghraib, Guantánamo, and the CIA's black sites under legal memos that redefined torture as anything short of organ failure.<sup><a href="#fn4" id="ref4">4</a></sup> Their documented purpose, named in the military psychology literature that informed them: the production of "learned helplessness." Total passivity and compliance, achieved by systematically stripping the subject of any sense of agency, any embeddedness in a community that gives them meaning.</p>
<p>The connection to <a class="xl" href="reich-character-armor.html">Reich's analysis</a> is precise, not metaphorical. Character armor, in Reich's framework, is the body's organization around the management of threat — the chronic muscular tension that keeps the subject functional in a repressive environment. Abu Ghraib's techniques were designed to destroy that organization: to produce a body that cannot sustain the armoring that makes resistance possible. Not broken in the sense of damaged — broken in the sense of de-organized, reduced to a state of pure passivity.</p>
<p>What makes this relevant to the series argument is the scale at which the logic was applied. The individual bodies at Abu Ghraib were the visible edge of a project that operated at the level of populations. The GWOT's production of a permanent state of low-level fear across the American population — through color-coded threat levels, airport security theater, the continuous media management of terror as an ambient presence — was the same technique applied diffusely: the cultivation of an armoring that makes the population manageable, suspicious of the stranger, deferential to authority, willing to trade civil liberties for the promise of security.</p>
<p><a class="xl" href="gramsci-1930s.html">Gramsci's hegemony</a> operates through the constitution of common sense. The GWOT's contribution was the constitution of a specific common sense: that the world is divided between those who are safe and those who are threats, that security requires surveillance, that the commons of communication is a vector of danger rather than a condition of freedom. This common sense was produced not by argument but by the continuous management of fear as an affective state — a permanent low-level activation of the threat-response that <a class="xl" href="reich-character-armor.html">Reich</a> would have recognized as the political deployment of armoring at civilizational scale.</p>` }} />
          </Section>

          <Section id="close" num="05" title="Closing the arc: from Reich's body to the global commons">
            <div dangerouslySetInnerHTML={{ __html: `<p>The series began with Reich in the 1930s, watching fascism organize the desire of armored bodies. It ends here, with the GWOT producing armoring at global scale as a deliberate instrument of power — not the side effect of a security response but the intended product of a political project.</p>
<p>The arc is not a story of progress interrupted. It is a story of enclosure deepening — moving inward, from the physical commons to the institutional commons to the technical commons to the perceptual commons to the interior commons of consciousness to the common intellect itself. Each layer of enclosure is built on the layers beneath it, and each creates the conditions for the next.</p>
<div class="concept-table">
  <div class="concept-table-header">
    <span class="ct-title">The series argument in full</span>
    <span class="ct-subtitle">Eight enclosures, moving inward</span>
  </div>
  <div class="ct-row">
    <div class="ct-cell"><span class="ct-cell-label">1930s</span><div class="ct-cell-text"><strong>Reich:</strong> The armored body as the somatic substrate of political compliance. Fascism organizes desire rather than suppressing it.</div></div>
    <div class="ct-cell dim"><span class="ct-cell-label">Terrain enclosed</span><div class="ct-cell-text">The body's own capacity for pleasure, openness, and the loosening that freedom requires.</div></div>
  </div>
  <div class="ct-row">
    <div class="ct-cell"><span class="ct-cell-label">1930s</span><div class="ct-cell-text"><strong>Gramsci:</strong> Civil society as the factory of consent. The common sense that makes the existing order feel like the only possible world.</div></div>
    <div class="ct-cell dim"><span class="ct-cell-label">Terrain enclosed</span><div class="ct-cell-text">The institutional infrastructure of imagination — what it is possible to think, want, and consider realistic.</div></div>
  </div>
  <div class="ct-row">
    <div class="ct-cell"><span class="ct-cell-label">1950s</span><div class="ct-cell-text"><strong>Shannon / Simondon:</strong> The channel model built into infrastructure. Meaning excluded from the engineering problem. The associated milieu dissolved.</div></div>
    <div class="ct-cell dim"><span class="ct-cell-label">Terrain enclosed</span><div class="ct-cell-text">The technical architecture of communication — making channel ownership the foundational economic fact.</div></div>
  </div>
  <div class="ct-row">
    <div class="ct-cell"><span class="ct-cell-label">1960s</span><div class="ct-cell-text"><strong>Debord / '68:</strong> The spectacle as social relation mediated by images. Lived experience replaced by its representation. The rupture absorbed.</div></div>
    <div class="ct-cell dim"><span class="ct-cell-label">Terrain enclosed</span><div class="ct-cell-text">The capacity for genuine encounter — with other people, with the world, with one's own experience.</div></div>
  </div>
  <div class="ct-row">
    <div class="ct-cell"><span class="ct-cell-label">1960s–70s</span><div class="ct-cell-text"><strong>Psychedelics / Bateson:</strong> The interior frontier — ordinary consciousness as produced state. MKULTRA, criminalization, the closure of the terrain.</div></div>
    <div class="ct-cell dim"><span class="ct-cell-label">Terrain enclosed</span><div class="ct-cell-text">The texture of consciousness itself — the range of states available, the experience of the ordinary as constructed.</div></div>
  </div>
  <div class="ct-row">
    <div class="ct-cell"><span class="ct-cell-label">1970s</span><div class="ct-cell-text"><strong>Baudrillard:</strong> Consumer society enclosing desire. The code that constitutes need before any object comes into view. Symbolic exchange destroyed.</div></div>
    <div class="ct-cell dim"><span class="ct-cell-label">Terrain enclosed</span><div class="ct-cell-text">The structure of wanting — what counts as a life worth having, produced by the sign system before any conscious choice.</div></div>
  </div>
  <div class="ct-row">
    <div class="ct-cell"><span class="ct-cell-label">1980s</span><div class="ct-cell-text"><strong>Drug war / synthesizers:</strong> Hybridization as composition of the commons. Disco, punk, hip hop suppressed and absorbed. The associated milieu dispersed.</div></div>
    <div class="ct-cell dim"><span class="ct-cell-label">Terrain enclosed</span><div class="ct-cell-text">The practice of composing commons from difference — the dancefloor, the cypher, the community of practice around the technical object.</div></div>
  </div>
  <div class="ct-row">
    <div class="ct-cell"><span class="ct-cell-label">2000s</span><div class="ct-cell-text"><strong>Hardt / Negri / GWOT:</strong> The common intellect as terrain. The Patriot Act as Enclosure Act. Armoring at civilizational scale through managed fear.</div></div>
    <div class="ct-cell dim"><span class="ct-cell-label">Terrain enclosed</span><div class="ct-cell-text">The shared language, knowledge, relational capacity, and communicative infrastructure through which all immaterial production draws.</div></div>
  </div>
</div>
<p>The series does not end with the GWOT because the enclosure did not. The surveillance infrastructure built after September 11 became the template for the commercial attention economy. The Patriot Act's monitoring of communication flows became Cambridge Analytica's modeling of political desire. And in 2022, the enclosure found its most comprehensive instrument: the large language model, trained on the full output of the common intellect and returned as proprietary infrastructure. <a class="xl" href="ai-and-the-left.html">The next piece</a> is where that leads.</p>` }} />
          </Section>

        </div>

        <Invitation
          label="The series"
          headline="Enclosure of the Mind"
          coda={``}
        >
          <p>The GWOT built the legal and technical infrastructure for the comprehensive monitoring of the common intellect. The fear it produced was not a side effect but an instrument — armoring at civilizational scale, the somatic substrate for a politics of compliance. The series has traced the enclosure of the mind from Reich's armored bodies through eight historical moments to this: the common intellect as the primary terrain of accumulation, and the surveillance state as its Enclosure Act. The question the series closes with — what it would mean to build from this rather than simply be enclosed by it — is the subject of the final piece.</p>
        </Invitation>

        <NextReads items={[
          { href: 'ai-and-the-left', cat: 'Series VI', title: 'AI and the Left: The Enclosure We\'re Building Together' },
          { href: 'drug-war-deleuze-synthesizers', cat: 'Series VI', title: 'The Analog Resistance: Drug War, Hybridization, and the Synthesizer' },
          { href: 'hardt-negri', cat: 'Thinker', title: 'Hardt & Negri: The Wealth That Capital Cannot Build' },
          { href: 'foucault', cat: 'Thinker', title: 'Foucault: Power Is Not a Thing Anyone Holds' },
          { href: 'who-gets-to-die', cat: 'Theory', title: 'Who Gets to Die: Foucault\'s Biopower' },
          { href: 'for-agents', cat: 'Tools', title: 'For Agents: The Commons Framework' },
        ]} />

        <Footnotes notes={FOOTNOTES} />
        <ArticleFooter seriesNote="Enclosure of the Mind — Series VI — Hardt & Negri — Empire (2000) — Multitude (2004) — the GWOT — the Patriot Act" />
      </ArticleWrap>
    </Layout>
  )
}
