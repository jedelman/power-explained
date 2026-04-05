import Layout from '../components/Layout'
import { Hero, ContentsNav, Section, Versus, Pull, Callout, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap, XL } from '../components/Article'

const SECTIONS = [
  { id: 'the-reflex', label: 'The reflex that isn\'t yours' },
  { id: 'gramsci-question', label: 'The question Gramsci couldn\'t let go' },
  { id: 'what-hegemony-is', label: 'What hegemony actually is' },
  { id: 'where-it-lives', label: 'Where it lives — not in your head, in the furniture' },
  { id: 'the-crack', label: 'When the stitching shows' },
  { id: 'counter', label: 'Counter-hegemony as everyday work' },
]

const FOOTNOTES = [
  `This question — why revolutionary consciousness lagged behind material conditions — drove the theoretical program of the <em>Prison Notebooks</em>. Gramsci worked on them between 1929 and 1935, filling 33 notebooks with roughly 3,000 pages of fragmentary, coded analysis. The standard English translation is <strong>Selections from the Prison Notebooks</strong>, edited and translated by Quintin Hoare and Geoffrey Nowell Smith (Lawrence &amp; Wishart, 1971). <a href="#ref1">↩</a>`,
  `The prosecutor's statement — attributed to Michele Isgro — is widely quoted in Gramsci scholarship: <em>per vent'anni dobbiamo impedire a questo cervello di funzionare</em> ("for twenty years we must stop this brain from functioning"). Gramsci died in 1937, eleven years after his arrest. The most thorough English-language biography is <strong>Antonio Gramsci: Life of a Revolutionary</strong> by Giuseppe Fiori (Verso, 1990). <a href="#ref2">↩</a>`,
  `The distinction between political society and civil society is developed across several sections of the <em>Prison Notebooks</em>. Gramsci's key point: the most stable form of power operates primarily through civil society so that state coercion is rarely required. See <strong>Gramsci's Political Thought</strong> by Roger Simon (Lawrence &amp; Wishart, 1982). <a href="#ref3">↩</a>`,
  `Gramsci uses the term "organic crisis" for moments when hegemony itself fractures. His analysis was extended and applied by Stuart Hall et al. in <strong>Policing the Crisis</strong> (Macmillan, 1978). <a href="#ref4">↩</a>`,
  `The war of position/war of maneuver distinction: the war of position is the patient, long-term struggle for cultural and institutional dominance in societies where civil society is dense. Gramsci argued this was the necessary prior to any transformation of state power in Western European conditions. <a href="#ref5">↩</a>`,
]

export default function Gramsci() {
  return (
    <Layout
      title="Antonio Gramsci: The Feeling That This Is Just How Things Are — Power Explained"
      description="You've felt it: the instinct that tells you an idea is unrealistic before you've thought it through. That reflex isn't yours. It was built. Antonio Gramsci spent his life in prison trying to explain how that happens — and what to do about it."
      seriesTag="Thinkers"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: 'var(--display)', fontSize: 'clamp(5rem,22vw,14rem)', fontWeight: 700, letterSpacing: '-0.04em', opacity: 0.05, whiteSpace: 'nowrap', pointerEvents: 'none', lineHeight: 1 }}>GRAMSCI</div>
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          <span className="hero-eyebrow">Thinker — Hegemony — The Architecture of Common Sense</span>
          <h1>The Feeling That<br /><em>This Is Just</em><br />How Things Are</h1>
          <p className="hero-dek">You've felt it: the instinct that tells you an idea is unrealistic before you've thought it through. That reflex isn't yours. It was built. Antonio Gramsci spent his life in prison trying to explain how that happens — and what it means that it can be undone.</p>
          <div className="hero-bio">
            <span className="bio-dates">1891 — 1937</span>
            <p className="bio-line">Antonio Gramsci: Sardinian journalist, Communist Party leader, prisoner of Mussolini's fascist state. Arrested in 1926, dead in custody eleven years later. Wrote nearly three thousand pages of notebooks while in prison. The notebooks were smuggled out after his death and changed how the world thinks about politics.</p>
          </div>
        </div>
      </div>

      <ArticleWrap>
        <ContentsNav sections={SECTIONS} />

        <div className="body-text">
          <Section id="the-reflex" num="01" title="The reflex that isn't yours">
            <p>Think about the last time someone floated an idea — maybe about housing, or healthcare, or how a workplace could be structured — and your gut said <em>that's not realistic</em> before you'd actually thought about whether it was. Not an argument. A feeling. The kind of quiet, immediate dismissal that doesn't feel like a decision because it doesn't feel like anything at all. It just feels like knowing.</p>
            <p>That's the thing Gramsci was trying to explain.</p>
            <p>Or think about it the other way: have you ever caught yourself defending an arrangement that costs you — defending your landlord's right to raise your rent, defending a policy that cuts your services, defending a company against its workers — and then, a beat later, wondered why? Not why you said it out loud. Why you believed it, at least for a moment, before you caught yourself?</p>
            <p>These are not failures of intelligence. They are evidence that something has been built into the structure of how the world feels — what seems possible, what seems natural, what seems like just the way things are. Gramsci's name for this structure is hegemony. His life's work was understanding how it's built, how it's maintained, and how it sometimes comes apart.</p>
          </Section>

          <Section id="gramsci-question" num="02" title="The question Gramsci couldn't let go">
            <p>Gramsci came of age in a tradition that expected revolution to be inevitable — that as capitalism produced more suffering, more workers would understand the system clearly and move to replace it. It didn't happen. Worse: in Italy in the 1920s, workers who suffered under capitalism voted for fascism. Not because they were stupid. Because fascism gave them something that felt true, felt urgent, felt like it named their enemy correctly. The left, at that moment, did not.</p>
            <p>The question that consumed Gramsci: why? If the material conditions for change were there, why did the ideological conditions lag so far behind? How does a system that hurts people convince those same people that it is natural, legitimate, even worth defending?<sup><a href="#fn1" id="ref1">1</a></sup></p>
            <p>He was arrested in 1926. Mussolini's prosecutor reportedly said in court: <em>we must stop this brain from functioning for twenty years.</em><sup><a href="#fn2" id="ref2">2</a></sup> What happened instead is that Gramsci, in prison, with limited access to materials, produced a body of work that answered the question in ways that are still being argued about a century later.</p>
          </Section>

          <Section id="what-hegemony-is" num="03" title="What hegemony actually is">
            <p>Hegemony is a word people use loosely — often just to mean dominance, or influence, or control. Gramsci meant something more specific and stranger: he meant the process by which a ruling group's worldview becomes everyone's common sense.</p>
            <p>Not through force. Not through propaganda you can identify and reject. Through the slower, more thorough process of shaping what feels obvious — what counts as realistic, what counts as extreme, what sounds like common sense and what sounds like ideology. The difference between hegemony and propaganda is that propaganda you know is happening. Hegemony you don't.</p>
            <Versus
              left={{ label: 'Domination through force', claim: 'The state tells you what to do and punishes you if you don\'t comply.', note: 'Visible, resisted, unstable. Requires constant enforcement. People know they\'re being coerced.' }}
              right={{ label: 'Hegemony', claim: 'You tell yourself what to do, in the terms someone else built, and it feels like your own judgment.', note: 'Invisible, internalized, self-reinforcing. The most durable form of power — because you maintain it yourself.' }}
            />
            <p>Gramsci's key distinction is between political society — the state, the army, the police, the courts — and civil society — the schools, the churches, the media, the professional norms, the culture that shapes how you understand the world before any of those compulsions are needed. Political society rules by force when it has to. Hegemony operates through civil society, all the time, and mostly doesn't have to.<sup><a href="#fn3" id="ref3">3</a></sup></p>
            <Pull>The most powerful ideas<br />are the ones that feel<br /><strong>like facts about the world</strong><br />rather than choices about it.</Pull>
            <p>A concrete example: the phrase <em>there is no alternative</em>. It was used repeatedly in the 1980s to describe market economics — not as an argument that markets were good, but as a statement that alternatives weren't real options. That framing shaped what kinds of proposals got taken seriously in policy debates, what journalists treated as mainstream versus fringe. Hegemony operates at the level of what's thinkable before anyone decides whether to think it.</p>
          </Section>

          <Section id="where-it-lives" num="04" title="Where it lives — not in your head, in the furniture">
            <p>This is where the theory gets useful in daily life: hegemony isn't primarily a psychological phenomenon. It's encoded in institutions — in the questions that get asked and the ones that don't, in who gets to speak as an expert and about what, in what a job application assumes about how you'll structure your time, in what a zoning law treats as a normal use of land.</p>
            <p>Think about how a school teaches history: which events are legible as causes of other events, which are treated as background conditions, which people are agents and which are forces. No teacher has to be conspiring to produce a worldview. The curriculum does it. Every child who goes through that system internalizes not just facts but a framework for what kinds of facts count.</p>
            <p>Or think about a performance review. The categories on the form — productivity, initiative, leadership — aren't neutral descriptions of value. They're a particular theory of what makes a worker good. You don't argue with the categories. You try to score well on them. And in trying to score well, you practice thinking about your work in those terms until they feel like the natural way to think about work.</p>
            <Callout label="Three places to look for it">
              <p><strong>What gets called realistic.</strong> When a proposal is dismissed as unrealistic, the question worth asking is: realistic according to whose model of how the world works? When "realistic" forecloses the question rather than opening it, that's hegemony at work.</p>
              <p><strong>What expertise covers.</strong> When an economic crisis is analyzed primarily by economists, a housing shortage by real estate developers, a labor dispute by management consultants, the framing of the problem is already decided before the analysis begins.</p>
              <p><strong>What counts as political.</strong> Policy proposals are "political." The assumptions embedded in existing institutions are "just how things are." The asymmetry is itself a hegemonic move: it treats the status quo as the absence of a position rather than as one position among several.</p>
            </Callout>
            <p>None of this requires anyone to be running a conspiracy. Hegemony doesn't need central coordination to function. It needs institutions that share enough of the same underlying assumptions that their outputs reinforce each other. The coherence is the product of shared assumptions, not shared intent.</p>
          </Section>

          <Section id="the-crack" num="05" title="When the stitching shows">
            <p>Hegemony is not a wall. It's a fabric. And fabric has moments when it tears — when the assumptions embedded in institutions become visible because they're suddenly failing to produce what they promised.</p>
            <p>The 2008 financial crisis is a clear example. For a generation, the efficient markets hypothesis had functioned hegemically — not argued for, but assumed. Then the crisis happened, and suddenly the assumption was visible as an assumption. People who had never heard the words "efficient markets hypothesis" found themselves wondering: <em>wait, who decided this was how it was supposed to work?</em></p>
            <p>These are the moments Gramsci called crises of hegemony — not just economic or political crises, but crises of legitimacy, when alternatives become thinkable that weren't before.<sup><a href="#fn4" id="ref4">4</a></sup></p>
            <p>You can look for smaller versions everywhere. A neighborhood that <XL to="two-ways-to-fix-a-pothole">organizes itself to solve a problem</XL> the city won't makes visible that this was possible all along — which means the absence of it, normally, was a choice, not a necessity.</p>
            <Pull>The cracks aren't failures.<br />They're <strong>the stitching becoming visible.</strong><br />That's information.</Pull>
          </Section>

          <Section id="counter" num="06" title="Counter-hegemony as everyday work">
            <p>If hegemony is how existing arrangements maintain themselves through culture and institutions, counter-hegemony is the process of building alternative common sense — not just different opinions, but different frameworks for what's natural, realistic, and thinkable.</p>
            <p>Gramsci didn't think this was primarily a matter of winning arguments. It was a matter of building institutions that embody different assumptions — institutions whose daily practice makes a different world seem ordinary. He called this the war of position: not a frontal assault on existing power, but the patient, long-term work of constructing conditions in which a different kind of politics becomes possible.<sup><a href="#fn5" id="ref5">5</a></sup></p>
            <Callout label="What counter-hegemony looks like in practice">
              <p><strong>Naming things differently.</strong> When <XL to="hardin-was-wrong">the commons is described as inefficient</XL>, that description does work — it makes enclosure feel like a correction rather than a choice. Language that describes a situation in its own terms rather than the system's terms is counter-hegemonic.</p>
              <p><strong>Building institutions that assume differently.</strong> A community land trust doesn't argue for housing as a right — it <em>practices</em> it. <XL to="build-it-now">These institutions produce evidence</XL>: evidence that alternatives are not only possible but functional.</p>
              <p><strong>Producing a different common sense about what's realistic.</strong> This is the long work. Every institution that functions differently, every story that makes a different world legible — all of this builds the conditions in which alternatives become thinkable before they become politically possible.</p>
            </Callout>
            <p>It's unglamorous work. Gramsci knew this. He was writing from prison, in fragments, with no certainty that anyone would ever read it. The war of position doesn't produce dramatic victories. It produces the conditions for them, slowly, across generations.</p>
          </Section>
        </div>

        <Invitation
          label="07 — Once You Can See It"
          headline="What do you do<br/>with that?"
          coda="The world feels like facts.<br/><strong>It's made of choices.</strong><br/>That's the beginning."
        >
          <p>Gramsci's framework doesn't come with instructions. It comes with a tool: the ability to notice when you're moving through a structure rather than choosing freely within it. Most of the time, hegemony is invisible precisely because it's so complete — when everyone agrees on what's realistic, realism feels like perception rather than politics.</p>
          <p>Once you start seeing it, you see it everywhere. In what your city funds and what it doesn't. In whose complaints get called policy problems and whose get called personal failures. In what kind of help you think it's appropriate to ask for, and from whom.</p>
          <p>What Gramsci was working on, in those prison notebooks, was the question of how a world gets remade at the level where it matters most: not in the laws, first, but in what people believe is possible before they get to the laws. That work is still happening.</p>
        </Invitation>

        <NextReads items={[
          { href: 'the-alibi-was-a-mirror', cat: 'Framework', title: 'The Alibi Was a Mirror' },
          { href: 'kropotkin', cat: 'Thinker', title: 'Kropotkin: You Were Lied to About Human Nature' },
          { href: 'foucault', cat: 'Thinker', title: 'Foucault: Power Is Not a Thing Anyone Holds' },
          { href: 'hardin-was-wrong', cat: 'The Science', title: 'Hardin Was Wrong — The "Tragedy of the Commons" Is a Myth' },
          { href: 'build-it-now', cat: 'Build', title: 'Build It Now — What The Alternative Looks Like' },
          { href: 'two-ways-to-fix-a-pothole', cat: 'Practice', title: 'Two Ways to Fix a Pothole' },
          { href: 'https://jedelman.github.io/commons-wire', cat: 'Dispatches', title: 'Commons Wire — The Framework Applied to Current Events' },
        ]} />

        <Footnotes notes={FOOTNOTES} />
        <ArticleFooter seriesNote="Thinkers — Antonio Gramsci — Selections from the Prison Notebooks (1929–1935, published 1971)" />
      </ArticleWrap>
    </Layout>
  )
}
