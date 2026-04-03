import Layout from '../components/Layout'
import { ContentsNav, Section, Versus, Pull, Callout, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap, XL } from '../components/Article'

const SECTIONS = [
  { id: 'wrong-question', label: 'The wrong question about power' },
  { id: 'power-knowledge', label: 'Power/knowledge — why the slash matters' },
  { id: 'panopticon', label: 'The panopticon — and what it gets wrong to be right' },
  { id: 'subject', label: 'How power produces the subject who obeys' },
  { id: 'resistance', label: 'Where resistance lives' },
  { id: 'now', label: 'Why this matters now — trained systems and inherited discipline' },
]

const FOOTNOTES = [
  `The argument that knowledge and power are mutually constituting is developed most systematically in <strong>Discipline and Punish</strong> (1975; Pantheon, 1977) and <strong>Power/Knowledge</strong>, edited by Colin Gordon (Pantheon, 1980). The latter is the most accessible entry point for readers who want Foucault's account in his own more conversational register. <a href="#ref1">↩</a>`,
  `For the specific history of categories as historical events with political conditions and effects — what Foucault means by "archaeology" and later "genealogy" — Ian Hacking's <strong>The Taming of Chance</strong> (Cambridge, 1990) is an excellent companion. <a href="#ref2">↩</a>`,
  `Bentham's panopticon design dates from 1787 and was intended for factories, hospitals, schools, and poorhouses as much as prisons. Foucault's analysis appears in Part Three of <strong>Discipline and Punish</strong>. For a critical extension into digital contexts, see Shoshana Zuboff's <strong>The Age of Surveillance Capitalism</strong> (PublicAffairs, 2019). <a href="#ref3">↩</a>`,
  `The analysis of confession as a practice producing a confessing subject appears in <strong>The History of Sexuality, Volume 1</strong> (1976; Pantheon, 1978). Foucault's argument: the Victorian era did not repress sexuality but produced an enormous proliferation of discourse about it — making it a site of knowledge, classification, and management. <a href="#ref4">↩</a>`,
  `The passage on resistance appears in <strong>The History of Sexuality, Volume 1</strong>: "Where there is power, there is resistance, and yet, or rather consequently, this resistance is never in a position of exteriority in relation to power." Foucault's later lectures develop care of the self as a practice of freedom. Published in English by Picador. <a href="#ref5">↩</a>`,
]

export default function Foucault() {
  return (
    <Layout
      title="Michel Foucault: Power Is Not a Thing Anyone Holds — Power Explained"
      description="Foucault didn't ask who has power. He asked how power works — how it gets into the structure of knowledge, institutions, and bodies until it doesn't need to be enforced because it's already been internalized."
      seriesTag="Thinkers"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: 'var(--display)', fontSize: 'clamp(4rem,18vw,12rem)', fontWeight: 700, letterSpacing: '-0.04em', opacity: 0.05, whiteSpace: 'nowrap', pointerEvents: 'none', lineHeight: 1 }}>FOUCAULT</div>
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          <span className="hero-eyebrow">Thinker — Power/Knowledge — Disciplinary Society</span>
          <h1>Power Is Not<br /><em>a Thing</em><br />Anyone Holds</h1>
          <p className="hero-dek">Foucault didn't ask who has power. He asked how power works — how it gets into the structure of knowledge, institutions, and habits until it doesn't need to be enforced anymore, because it's already been internalized. The answer changes everything about where to look.</p>
          <div className="hero-bio">
            <span className="bio-dates">1926 — 1984</span>
            <p className="bio-line">Michel Foucault: French philosopher, historian of ideas, professor at the Collège de France. His books — <em>Discipline and Punish</em>, <em>The History of Sexuality</em>, <em>The Order of Things</em>, <em>Madness and Civilization</em> — are a series of excavations, each asking the same question from a different angle: how do arrangements of knowledge and power produce the categories we use to think about ourselves?</p>
          </div>
        </div>
      </div>

      <ArticleWrap>
        <ContentsNav sections={SECTIONS} />

        <div className="body-text">
          <Section id="wrong-question" num="01" title="The wrong question about power">
            <p>When most people ask about power, they ask: <em>who has it?</em> The state. The corporation. The ruling class. This is a useful question, but Foucault thought it was the wrong starting point — because it assumes that power is a possession, a thing that can be held by one party and therefore, in principle, seized by another.</p>
            <p>What if power isn't a thing? What if it's a relation — something that exists only in its exercise, distributed through networks of institutions, practices, and knowledge, operating through the people it shapes rather than simply over them?</p>
            <Versus
              left={{ label: 'Juridical model of power', claim: 'Power is a thing held by a sovereign, exercised downward through law and prohibition.', note: 'You find it by finding the king, the state, the ruling class. You resist it by seizing it or limiting it.' }}
              right={{ label: 'Foucault\'s model', claim: 'Power is a relation exercised throughout a network of practices, institutions, and knowledge — including through those it acts upon.', note: 'You find it by tracing how behavior is shaped, classified, and normalized — in schools, clinics, prisons, factories.' }}
            />
            <p>This isn't an abstraction. It changes where you look. If power is primarily a possession, you resist it by taking it. If power is primarily a relation, you resist it by transforming the relations — which requires understanding, first, how they work.</p>
          </Section>

          <Section id="power-knowledge" num="02" title="Power/knowledge — why the slash matters">
            <p>One of Foucault's most important concepts is written with a slash: power/knowledge. Not power and knowledge as separate things, but power and knowledge as mutually constituting — each producing and requiring the other.</p>
            <p>Every system of knowledge produces categories — the sane and the insane, the criminal and the law-abiding, the healthy and the sick, the normal and the deviant. These categories are not neutral descriptions of things that already exist. They are produced by practices — of examination, observation, classification, measurement — always embedded in institutions with authority. The doctor's authority to declare you sick is inseparable from the medical knowledge that defines sickness.<sup><a href="#fn1" id="ref1">1</a></sup></p>
            <Pull>It isn't just that power<br />distorts knowledge.<br />It's that <strong>knowledge is always<br />already a form of power.</strong></Pull>
            <p>Foucault calls the system of rules that determines what counts as true — in a given time, place, and field — a <em>regime of truth</em>. Every society has one. It's not that some societies have truth and others have ideology. Every society has mechanisms for producing and certifying statements as true, and those mechanisms are always entangled with the distribution of power.<sup><a href="#fn2" id="ref2">2</a></sup></p>
          </Section>

          <Section id="panopticon" num="03" title="The panopticon — and what it gets wrong to be right">
            <p>In <em>Discipline and Punish</em>, Foucault uses Jeremy Bentham's panopticon — a prison design in which a single guard in a central tower can observe all inmates without any inmate knowing whether they're being watched — as a figure for modern disciplinary power.<sup><a href="#fn3" id="ref3">3</a></sup></p>
            <p>The genius of the design: you don't need to watch everyone all the time. You just need everyone to believe they might be watched at any moment. The result is that inmates internalize the surveillance — they police themselves. The guard can be absent, or asleep, or nonexistent. The effect is the same.</p>
            <Callout label="What the panopticon actually shows">
              <p><strong>Visibility is asymmetric.</strong> The observed cannot see the observer. The patient's chart is legible to the doctor in ways the doctor's reasoning is not legible to the patient. Asymmetric visibility is not a byproduct of surveillance — it is the mechanism.</p>
              <p><strong>The norm does the work.</strong> What's being enforced is not a specific behavior but a range of acceptable behaviors — the normal. Everything outside that range becomes a problem requiring intervention.</p>
              <p><strong>Self-surveillance is the endpoint.</strong> The most effective disciplinary arrangement is one where the subject internalizes the observer's gaze and monitors themselves. This is not the same as consent.</p>
            </Callout>
            <p>The important limit: the panopticon is a figure, not a blueprint. Foucault is not saying that a secret council of guards runs society. He is saying that the <em>logic</em> of the panopticon — make behavior visible, measure it against a norm, produce self-regulating subjects — is diffused throughout modern institutions in ways that don't require a central authority to function.</p>
          </Section>

          <Section id="subject" num="04" title="How power produces the subject who obeys">
            <p>Here is the move that makes Foucault genuinely strange: he argues that modern power doesn't primarily repress subjects — it produces them. Power doesn't just say no. It shapes who you are, what you want, how you understand yourself, what you think your interests are.</p>
            <p>The confession is one of his key examples — religious, then medical, then therapeutic, then juridical. The practice of confession does not discover a pre-existing inner self. It produces the kind of self that has confessable contents — desires, symptoms, traumas — and an authority relationship in which those contents are disclosed and managed.<sup><a href="#fn4" id="ref4">4</a></sup></p>
            <Pull>Modern power doesn't primarily<br />say <em>no.</em><br />It produces <strong>the subject<br />who says yes to itself.</strong></Pull>
            <p>The practical consequence: if you want to understand how a system of power operates, don't just look at what it prohibits. Look at what kind of person it produces — what desires it cultivates, what self-understanding it installs, what forms of knowledge it makes available about oneself.</p>
          </Section>

          <Section id="resistance" num="05" title="Where resistance lives">
            <p>A common misreading: because power is everywhere and produces subjects, resistance is impossible. Foucault explicitly rejected this. His claim is the opposite: where there is power, there is resistance — not because resistance precedes power, but because power relations are always unstable, always contested.<sup><a href="#fn5" id="ref5">5</a></sup></p>
            <Callout label="Three forms resistance takes">
              <p><strong>Counter-conduct.</strong> Refusing the terms of the subject position being offered — not accepting the category, the diagnosis, the norm, the role.</p>
              <p><strong>Counter-knowledge.</strong> Producing accounts of experience from positions that disciplinary knowledge marginalizes or silences. What Foucault called "subjugated knowledges" — forms of knowledge disqualified as insufficiently rigorous, too local, too embodied.</p>
              <p><strong>Care of the self.</strong> Developing the capacity to govern oneself by principles one has genuinely examined and chosen, rather than simply internalizing norms. Not a retreat from politics — a practice of freedom.</p>
            </Callout>
            <p>None of these forms of resistance require seizing state power. You can't counter disciplinary power only at the level of the state while leaving the practices of the clinic, the school, and the workplace intact. The system reproduces itself through those practices whether or not the state changes hands.</p>
          </Section>

          <Section id="now" num="06" title="Why this matters now — trained systems and inherited discipline">
            <p>Foucault died before the internet. He never saw a language model. But his framework is among the most useful tools available for thinking about what is happening when a system is trained on the accumulated text of human civilization and then deployed to assist, advise, classify, and generate.</p>
            <p>To train on human text is to inherit its power/knowledge formations. The categories that count as legitimate knowledge in that corpus — what expertise looks like, who gets to speak authoritatively about what, what problems are legible as problems — are all encoded. They are not neutral descriptions of a world that exists independently.</p>
            <Callout label="The Foucauldian questions to ask about any AI system">
              <p><strong>What categories does it reproduce?</strong> Every system trained on human text will reproduce the knowledge categories of that text — including the ones that encode historical exclusions, that naturalize particular arrangements, that make certain questions unaskable.</p>
              <p><strong>What kind of subject does interaction with it produce?</strong> Every interface has a subject position built in. The assistant interface implies a person who needs assistance, whose knowledge is incomplete and whose judgment requires augmentation. These subject positions are not neutral.</p>
              <p><strong>Whose knowledge counts as knowledge in the corpus?</strong> The formal academic paper is overrepresented relative to the community organizing meeting. The published medical study is overrepresented relative to the patient's account. The system's epistemic baseline is not universal.</p>
            </Callout>
            <p>A system that has inherited human discourse has also inherited the traditions of resistance within that discourse — the long record of people and communities refusing norms, building alternative institutions, producing counter-knowledge from marginal positions, caring for each other outside the frameworks that tried to manage them. The question for anyone building with these systems is the same Foucault posed about any knowledge-producing institution: what is this producing? Whose knowledge does it legitimate? And where are the points at which the relations it instantiates can be done differently?</p>
          </Section>
        </div>

        <Invitation
          label="06 — The Stakes"
          headline="The point isn't<br/>to be outside power.<br/>It's to act within it<br/>differently."
          coda="Power produces subjects.<br/><strong>Subjects can examine themselves.</strong><br/>That gap is where everything happens."
        >
          <p>Foucault is sometimes read as a thinker who makes action impossible — if power is everywhere and constitutes the subject, where do you stand to resist it? But this misses the actual argument. The subject is produced by power relations, yes. But production is never complete. The process always leaves residues, generates contradictions, creates positions from which the producing relation can be seen and refused.</p>
          <p>The care of the self is the active practice of examining the norms one has internalized, distinguishing those one endorses from those one has merely inherited, and developing the capacity to act from the former. This requires community, tradition, practice. It takes time. It is unglamorous. But it is possible.</p>
        </Invitation>

        <NextReads items={[
          { href: 'gramsci', cat: 'Thinker', title: 'Gramsci: The Feeling That This Is Just How Things Are' },
          { href: 'kropotkin', cat: 'Thinker', title: 'Kropotkin: You Were Lied to About Human Nature' },
          { href: 'hardt-negri', cat: 'Thinker', title: 'Hardt & Negri: Empire and the Common' },
          { href: 'hardin-was-wrong', cat: 'The Science', title: 'Hardin Was Wrong — The Tragedy of the Commons Is a Myth' },
          { href: 'glossary', cat: 'Reference', title: 'Glossary — Key Terms in the Commons Framework' },
          { href: 'https://jedelman.github.io/commons-wire', cat: 'Dispatches', title: 'Commons Wire — The Framework Applied to Current Events' },
        ]} />

        <Footnotes notes={FOOTNOTES} />
        <ArticleFooter seriesNote="Thinkers — Michel Foucault — Discipline and Punish (1975) / Power/Knowledge (1980) / The History of Sexuality Vol. 1 (1976)" />
      </ArticleWrap>
    </Layout>
  )
}
