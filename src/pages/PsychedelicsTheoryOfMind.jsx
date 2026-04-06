import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = [
  { id: 'the-claim', label: 'The interior claim: consciousness as commons terrain' },
  { id: 'bateson', label: 'Bateson\'s ecology of mind: the argument that earns it' },
  { id: 'huxley-laing', label: 'Huxley\'s doors and Laing\'s divided self' },
  { id: 'mkultra', label: 'MKULTRA: the state recognizes the terrain' },
  { id: 'criminalization', label: 'Criminalization and the closure of the frontier' },
]

const FOOTNOTES = [
  `Bateson, G. (1972). <em>Steps to an Ecology of Mind</em>. University of Chicago Press. A collection of essays written between 1935 and 1971. The central claim runs through all of it: mind is not a property of individual organisms but a pattern that emerges in the relationship between organism and environment. The relevant essays for this piece are "The Cybernetics of 'Self': A Theory of Alcoholism" (1971), "Form, Substance, and Difference" (the Korzybski Memorial Lecture, 1970), and "Pathologies of Epistemology" (1969). <a href="#ref1">↩</a>`,
  `Huxley, A. (1954). <em>The Doors of Perception</em>. Harper & Brothers. Huxley's "reducing valve" thesis — that the brain filters out most of reality to prevent information overload, and that psychedelics temporarily disable the filter — is not neuroscientifically precise but captures something real about the phenomenology: the experience of ordinary perception as selective rather than neutral, as an active construction that could be otherwise. The title is from Blake: "If the doors of perception were cleansed every thing would appear to man as it is, infinite." <a href="#ref2">↩</a>`,
  `Laing, R. D. (1960). <em>The Divided Self: An Existential Study in Sanity and Madness</em>. Tavistock Publications. Laing's later work, particularly <em>The Politics of Experience</em> (1967), moved toward an explicitly psychedelic politics: the "breakdown" of ordinary consciousness could be a "breakthrough" — a traversal of interior territory that the defended ego normally forecloses. Laing ran experimental therapeutic communities, including Kingsley Hall in London (1965–1970), where psychotic patients lived alongside staff without conventional psychiatric hierarchy. <a href="#ref3">↩</a>`,
  `The CIA's MKULTRA program ran from 1953 to 1973, with most records destroyed on the order of CIA Director Richard Helms in 1973. What survived was discovered through a Freedom of Information Act request in 1977. The Church Committee hearings (1975) and subsequent investigations revealed: experiments on unwitting subjects including mental patients, prisoners, and CIA employees; collaboration with universities, hospitals, and pharmaceutical companies; subprograms involving hypnosis, sensory deprivation, psychological torture, and radiation exposure alongside the LSD work. The most thorough account is Marks, J. (1979). <em>The Search for the Manchurian Candidate: The CIA and Mind Control</em>. Times Books. <a href="#ref4">↩</a>`,
  `Nixon's declaration of a "war on drugs" in June 1971 was accompanied by the Controlled Substances Act (1970), which placed LSD, psilocybin, mescaline, and cannabis in Schedule I. The political motivation was explicit: John Ehrlichman, Nixon's domestic policy advisor, told journalist Dan Baum in 1994 (published in <em>Harper's</em>, April 2016, after Ehrlichman's death): "The Nixon campaign in 1968, and the Nixon White House after that, had two enemies: the antiwar left and Black people... by getting the public to associate the hippies with marijuana and Blacks with heroin, and then criminalizing both heavily, we could disrupt those communities. We could arrest their leaders, raid their homes, break up their meetings." The drug war was the enforcement arm of a political project. <a href="#ref5">↩</a>`,
]

export default function PsychedelicsTheoryOfMind() {
  return (
    <Layout
      title="The Interior Frontier: Psychedelics and Theory of Mind — Power Explained"
      description="The psychedelic moment of the 1960s and 70s was, at its most rigorous, a political claim: that ordinary consciousness is a produced state, that it can be otherwise, and that the enclosure of the mind runs through the body's own chemistry."
      seriesTag="Enclosure of the Mind — Series VI"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: 'var(--display)', fontSize: 'clamp(4rem,18vw,12rem)', fontWeight: 700, letterSpacing: '-0.04em', opacity: 0.05, whiteSpace: 'nowrap', pointerEvents: 'none', lineHeight: 1 }}>INTERIOR</div>
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          <span className="hero-eyebrow"><a href="enclosure-of-the-mind.html" style={{color:"inherit",textDecoration:"underline",textDecorationColor:"rgba(255,255,255,0.3)"}}>Enclosure of the Mind — Series VI</a></span>
          <h1>The interior<br />frontier</h1>
          <p className="hero-dek">Ordinary consciousness is not a neutral baseline. It is a produced state — produced by the same social, institutional, and somatic forces this series has been tracking — and it can be otherwise. That claim emerged with unusual clarity in the decade when psychedelics entered mass use. The state understood its implications faster than the counterculture did. The criminalization came within a decade.</p>
          <div className="hero-bio">
            <span className="bio-dates">1954 — 1973</span>
            <p className="bio-line">The relevant thinkers: Gregory Bateson, whose <em>Steps to an Ecology of Mind</em> (1972) is the most rigorous philosophical account of what the psychedelic experience was pointing toward. Aldous Huxley, whose <em>Doors of Perception</em> (1954) made the phenomenological claim available to a mass audience. R.D. Laing, whose anti-psychiatry gave the claim its most explicitly political form. And, in the background, the CIA — which had been running MKULTRA since 1953, the same year Huxley first took mescaline, because the state knew what was at stake before anyone else did.</p>
          </div>
        </div>
      </div>

      <ArticleWrap>
        <ContentsNav sections={SECTIONS} />
        <div className="body-text">

          <Section id="the-claim" num="01" title="The interior claim: consciousness as commons terrain">
            <div dangerouslySetInnerHTML={{ __html: `<p>The series so far has tracked the enclosure of the mind through bodies, institutions, technical infrastructure, and the organized surface of everyday life. <a class="xl" href="reich-character-armor.html">Reich's character armor</a> showed how repression gets written into muscle and breath. <a class="xl" href="gramsci-1930s.html">Gramsci's hegemony</a> showed how it gets organized into the furniture of civil society. <a class="xl" href="shannon-simondon-1950s.html">Shannon's channel</a> showed how it gets built into the architecture of communication. <a class="xl" href="debord-1968.html">Debord's spectacle</a> showed how it gets crystallized into the social relation mediated by images.</p>
<p>Each of these is an enclosure operating from the outside in. But there is another dimension that none of these frameworks addresses directly: the interior. Not the somatic substrate (Reich) or the institutional environment (Gramsci) or the media architecture (Shannon, Debord), but the quality of consciousness itself — the texture of ordinary waking experience, the range of states available within it, the boundary between what counts as sane and what counts as mad.</p>
<p>Stripped of counterculture decoration, the claim is precise: <strong>ordinary waking consciousness is not a neutral baseline.</strong> It is a produced state — and it can be otherwise. The experience of being otherwise — temporarily, chemically, under conditions that dissolve the filters through which ordinary consciousness constructs its world — reveals that the ordinary is constructed, selective, and maintained by active work that the ordinary itself conceals.</p>
<p>This is politically explosive in a specific way. <a class="xl" href="gramsci-1930s.html">Gramsci's hegemony</a> operates by making the existing order feel like the only possible world — by producing a common sense so thoroughly internalized that alternatives are unthinkable. If ordinary consciousness is itself a product of that hegemony — if the enclosure runs all the way down into the texture of how the world appears — then any practice that dissolves ordinary consciousness, however briefly, is a direct challenge to the enclosure at its deepest level. Not a political argument against the existing order. A direct experience of its contingency.</p>
<p>The state understood this. The counterculture mostly didn't.</p>` }} />
          </Section>

          <Section id="bateson" num="02" title="Bateson's ecology of mind: the argument that earns it">
            <div dangerouslySetInnerHTML={{ __html: `<p>Gregory Bateson provides the rigorous philosophical framework that the psychedelic experience was pointing toward but rarely articulating precisely. His <em>Steps to an Ecology of Mind</em> (1972) is the most serious attempt in the period to think through what it would mean for mind to be what the experience suggested.<sup><a href="#fn1" id="ref1">1</a></sup></p>
<p>The central claim: mind is not a property of individual organisms. It is a pattern that emerges in the relationship between organism and environment. When you think, you are not running a computation inside your skull. You are participating in a process that includes your body, your sensory organs, your physical environment, the social relations you are embedded in, the language you think in, the tools you use to extend your cognition. The boundary of mind is not the boundary of skin.</p>
<p>Bateson called the failure to understand this "the epistemological error" — treating the self as a bounded unit separate from the systems it inhabits. The error has consequences he catalogued with increasing alarm: ecological destruction (treating the environment as a resource external to the self), addiction (the attempt to modify the self as a separate unit rather than change the relationship between self and world), arms races (treating the nation as a unit in competition with other units rather than as a node in a system).</p>
<div class="callout">
  <span class="callout-label">The epistemological error runs through the series</span>
  <p>The psychedelic experience, in Bateson's framework, is one of several conditions — including deep aesthetic experience, certain forms of religious practice, what he called "the experience of grace" — in which the epistemological error temporarily dissolves: the boundary between self and world becomes permeable, the isolated selfhood relaxes, and the pattern that connects organism and environment becomes directly perceptible. The political implication is exact: if the enclosure of the mind is partly maintained by this error — by the chronic sense of isolated selfhood that makes the spectacle's promise of connection-through-consumption feel necessary — then any experience that dissolves the error is, structurally, a breach in the enclosure.</p>
</div>
<p>Bateson was careful about what this does and doesn't mean. The dissolution of the epistemological error in a psychedelic experience does not automatically produce enlightenment or lasting change. What the experience provides is something more limited and more important: direct evidence that the ordinary is constructed. The common sense that makes the existing order feel like the only possible world is felt, in those conditions, as common sense — as a structure, not as reality itself. This is not a solution. It is a prerequisite for solutions that do not simply reproduce the structure they are trying to escape.</p>` }} />
          </Section>

          <Section id="huxley-laing" num="03" title="Huxley's doors and Laing's divided self">
            <div dangerouslySetInnerHTML={{ __html: `<p>Bateson provides the philosophical argument. Huxley and Laing provide its two most significant popular and political expressions.</p>
<p>Aldous Huxley took mescaline for the first time in May 1953 and wrote about it in <em>The Doors of Perception</em> (1954).<sup><a href="#fn2" id="ref2">2</a></sup> The book is not rigorous in the way Bateson is rigorous — its "reducing valve" thesis is more literary than scientific — but it performs something Bateson's essays do not: it makes the experience of ordinary consciousness as a selective, constructed, potentially otherwise state legible to a mass audience. Ordinary perception, Huxley shows, is not passive registration of a neutral world. It is active construction: highly selective, organized around practical purposes, filtering for what matters to the functioning organism while discarding an enormous surplus of available experience. The drug does not add something to perception. It removes something that was already there — a filter that ordinary consciousness maintains continuously and invisibly.</p>
<p>The political implication Huxley draws is limited — he was not a radical. But the generation that read him in the late 1950s and early 1960s drew it further: if ordinary consciousness filters for what capitalism needs the organism to perceive, want, and consider realistic, then dissolving the filter temporarily means encountering experience that the system has marked as noise.</p>
<p>R.D. Laing took this further into territory that made the psychiatric establishment deeply uncomfortable.<sup><a href="#fn3" id="ref3">3</a></sup> His <em>The Divided Self</em> (1960) argued that schizophrenia — the condition psychiatry treated as a biochemical malfunction — was an intelligible response to an unlivable situation. The schizophrenic's world had been made incoherent by the double binds, the contradictory demands, the systematic invalidation of experience that characterized certain family and social environments. The breakdown was not a random failure of brain chemistry. It was an attempt, however costly, to find a way to live inside a situation that made coherent selfhood impossible.</p>
<div class="pull">
  Laing's claim:<br/>
  the breakdown of ordinary<br/>
  consciousness is not always<br/>
  a malfunction.<br/>
  Sometimes it is<br/>
  <strong>the only sane response</strong><br/>
  to an insane situation.
</div>
<p>By his 1967 book <em>The Politics of Experience</em>, Laing had extended this into an explicitly psychedelic politics: the "breakdown" that psychiatry treated as illness could be a "breakthrough" — a traversal of interior territory that the defended ego normally forecloses. The psychedelic experience was, in this reading, a voluntarily entered version of what the schizophrenic undergoes involuntarily: a dissolution of the ordinary self that reveals both its constructed character and the possibility of something beyond it.</p>` }} />
          </Section>

          <Section id="mkultra" num="04" title="MKULTRA: the state recognizes the terrain">
            <div dangerouslySetInnerHTML={{ __html: `<p>The CIA began experimenting with LSD in 1953 — the same year Huxley first took mescaline. The program, eventually named MKULTRA, ran for twenty years, involved at least 150 research projects, and used unwitting subjects including mental patients, prisoners, and CIA employees.<sup><a href="#fn4" id="ref4">4</a></sup></p>
<p>The moral of MKULTRA is not primarily about the specific atrocities it committed, though these were substantial. It is about the order of operations. The state identified the interior frontier as politically significant terrain <em>before</em> the counterculture did. The first response was not suppression but attempted weaponization. You do not try to weaponize terrain you regard as irrelevant. The CIA's investment in understanding and controlling altered states of consciousness is the clearest evidence available that the state understood, at the institutional level, what Bateson and Laing were articulating philosophically: that the ordinary construction of consciousness is a political achievement, that it can be disrupted, and that whoever controls the disruption controls something important.</p>
<p>The attempt largely failed — LSD is too unpredictable, produces too many uncontrollable responses — and the state moved through a predictable sequence.</p>
<p><strong>Weaponization</strong> (1953–1973): attempt to turn the dissolution of ordinary consciousness into an interrogation tool and weapon of psychological warfare. The theory is exactly Bateson and Reich applied to interrogation — if you can dissolve the subject's ordinary self, you can access information and implant suggestions the defended self would refuse. The practice was torture. The failure was that consciousness, it turns out, does not dissolve into controllability. It dissolves into something else.</p>
<p><strong>Criminalization</strong> (1966–1971): LSD criminalized in 1968, psilocybin and mescaline with the Controlled Substances Act in 1970. Schedule I designation makes research effectively impossible and possession a felony. The counterculture organized around the substances is explicitly targeted. Criminalization follows weaponization when weaponization fails: if the interior frontier cannot be controlled, it must be closed.</p>
<p><strong>Commodification</strong> (2010s–present): fifty years after criminalization, psychedelics return — as microdosing productivity supplements, FDA-approved therapies for depression, Silicon Valley performance enhancement. The experience is repackaged as a consumer product within the very economic system whose common sense it was supposed to dissolve. When a practice cannot be weaponized or suppressed, it can be enclosed: stripped of its community context and political implications, sold back as a product. <a class="xl" href="baudrillard-consumer-society.html">Baudrillard's simulation completes what criminalization started.</a></p>
<p>Weaponize, suppress, commodify. This is the full logic of enclosure applied to interior terrain — the same sequence applied to every commons this series has examined.</p>` }} />
          </Section>

          <Section id="criminalization" num="05" title="Criminalization and the closure of the frontier">
            <div dangerouslySetInnerHTML={{ __html: `<p>Nixon's war on drugs was not primarily about drug use. John Ehrlichman, Nixon's domestic policy advisor, said so explicitly in a statement published after his death: the campaign's two enemies were the antiwar left and Black Americans, and associating the former with psychedelics and the latter with heroin, then criminalizing both heavily, was a strategy for disrupting those communities — arresting their leaders, raiding their homes, breaking up their meetings.<sup><a href="#fn5" id="ref5">5</a></sup></p>
<p>This is as close as we get to an official admission that the drug war was the enforcement arm of a political project. But Ehrlichman's statement describes only the immediate political motivation. The deeper logic is the one this series has been tracking. The communities organized around psychedelic experience in the late 1960s were, at their most serious, communities organized around the claim that ordinary consciousness is constructed and can be otherwise. They were practicing, in however undisciplined and culturally specific ways, something structurally equivalent to what <a class="xl" href="reich-character-armor.html">Reich's Sex-Pol clinics</a> had practiced in a different register: the direct address of the somatic and psychological substrate of political compliance.</p>
<p>The closure operated through several mechanisms. Criminalization dispersed the communities organized around the substances and made serious research impossible for fifty years. Cultural absorption worked on what criminalization left: the counterculture's imagery was incorporated into advertising and mass entertainment — the image of consciousness expansion commodified before the practice could mature. And the severing of the associated milieu was perhaps the most decisive. The psychedelic experience requires a community of practice to be politically generative rather than merely personally interesting — the ceremonial containers that Indigenous traditions developed over centuries, the integration work that therapeutic contexts emphasized, are all forms of associated milieu. What criminalization produced was the individual experience stripped of collective context, which is exactly how the wellness industry repackaged it fifty years later.</p>
<div class="pull">
  The enclosure of the interior<br/>
  was complete not when<br/>
  the substances were banned,<br/>
  but when the <strong>community<br/>
  that held them</strong><br/>
  was dispersed.
</div>
<p>The interior frontier exists. It is accessible. The enclosure is not permanent — the substances still dissolve the filter, the epistemological error still temporarily lifts, the constructed character of ordinary consciousness is still, in those conditions, directly perceptible. What the enclosure achieved is not the elimination of the terrain but its isolation: making it available only in forms that cannot threaten the structures it reveals, stripped of the community and practice that could translate the experience into durable political consequence.</p>
<p>In the 1980s, the drug war extended this project from psychedelics to the full range of substances that produced unauthorized interior states — with a racial targeting that made the political logic explicit. The theory of that extension, and the music that accidentally modeled its opposite, is the subject of <a class="xl" href="drug-war-deleuze-synthesizers.html">the next piece</a>.</p>` }} />
          </Section>

        </div>

        <Invitation
          label="The series"
          headline="Enclosure of the Mind"
          coda={``}
        >
          <p>The interior frontier is the deepest level of the enclosure this series has been mapping. Reich located the enclosure in the body's muscular organization. Gramsci located it in the institutions of civil society. Shannon built it into the architecture of communication. Debord named the social form it produced. Bateson, Huxley, and Laing identified its penetration into the texture of consciousness itself — and the state moved to close that frontier within a decade of its discovery, because it understood what was at stake. The next piece is about what happened when the drug war extended the closure in the 1980s — and about the music that, in the rubble of deindustrialized American cities, inadvertently built a theory of escape.</p>
        </Invitation>

        <NextReads items={[
          { href: 'drug-war-deleuze-synthesizers', cat: 'Series VI', title: 'The Analog Resistance: Drug War, Deleuze, and the Synthesizer' },
          { href: 'debord-1968', cat: 'Series VI', title: 'The Streets Were the Message: Debord and 1968' },
          { href: 'reich-character-armor', cat: 'Series VI', title: 'Reich: Why Freedom Doesn\'t Feel Like You Think It Should' },
          { href: 'foucault', cat: 'Thinker', title: 'Foucault: Power Is Not a Thing Anyone Holds' },
          { href: 'who-gets-to-die', cat: 'Theory', title: 'Who Gets to Die: Foucault\'s Biopower' },
          { href: 'deleuze-guattari', cat: 'Thinker', title: 'Deleuze & Guattari: How Power Moves' },
        ]} />

        <Footnotes notes={FOOTNOTES} />
        <ArticleFooter seriesNote="Enclosure of the Mind — Series VI — Bateson (1972) — Huxley (1954) — Laing (1960) — MKULTRA (1953–1973) — Controlled Substances Act (1970)" />
      </ArticleWrap>
    </Layout>
  )
}
