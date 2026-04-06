import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = [
  { id: 'postwar', label: 'The postwar settlement and its technical surplus' },
  { id: 'shannon', label: 'Shannon\'s move: meaning is noise' },
  { id: 'what-the-model-does', label: 'What the model does to communication' },
  { id: 'simondon', label: 'Simondon\'s counter: what the channel loses' },
  { id: 'two-worlds', label: 'Two worlds in the same decade' },
  { id: 'infrastructure', label: 'The infrastructure being built' },
]

const FOOTNOTES = [
  `Shannon, C. E. (1948). "A Mathematical Theory of Communication." <em>Bell System Technical Journal</em>, 27, 379–423 and 623–656. The paper was written at Bell Labs, which was the research arm of AT&T — itself a regulated monopoly with substantial government contracts and deep ties to military communications work. Shannon had spent the war years working on cryptography and fire-control systems; the 1948 paper draws directly on that work, particularly the analysis of signals in noise. The institutional context matters: Bell Labs was not a disinterested research institution. It was the R&D arm of a corporation whose business was the ownership and operation of communication channels. A theory of communication that defined the channel as the central object of analysis and made meaning irrelevant to transmission was, incidentally, a theory that made the channel's ownership the central economic fact. <a href="#ref1">↩</a>`,
  `Shannon's definition of information is in Section 1 of the 1948 paper: "The fundamental problem of communication is that of reproducing at one point either exactly or approximately a message selected at another point. Frequently the messages have <em>meaning</em>... These semantic aspects of communication are irrelevant to the engineering problem." The move is philosophically significant: Shannon is not denying that meaning exists. He is claiming that meaning is orthogonal to the engineering problem he is solving. The consequence — that the engineering solution gets built into infrastructure while the meaning question gets left to others — is where the political economy begins. <a href="#ref2">↩</a>`,
  `Simondon, G. (1958/2017). <em>On the Mode of Existence of Technical Objects</em>, trans. C. Malaspina and J. Rogove. Univocal Publishing. (Orig. French: <em>Du mode d'existence des objets techniques</em>, Aubier, 1958.) Simondon's principal thesis was defended the same year the book was published — 1958, ten years after Shannon's paper. The two works are never in direct dialogue; Simondon does not cite Shannon, and the information-theoretic tradition largely ignored Simondon until his rediscovery by Deleuze and later Stiegler. The parallel is structural rather than intertextual: both are responding to the same postwar technical moment, and they are responding to opposite things within it. <a href="#ref3">↩</a>`,
  `The military origins of postwar information theory are documented in Paul Edwards, <em>The Closed World: Computers and the Politics of Discourse in Cold War America</em> (MIT Press, 1996) and Fred Turner, <em>From Counterculture to Cyberculture</em> (University of Chicago Press, 2006). The SAGE air defense system, ARPA, the funding of MIT's Research Laboratory of Electronics (where Shannon spent much of his career after Bell Labs), and the Defense Department's role in building the early internet are all part of the same institutional complex. The theory of information and the infrastructure of information were co-produced under military auspices, and this shapes what the theory sees as central and what it treats as noise. <a href="#ref4">↩</a>`,
  `Simondon's concept of the associated milieu (<em>milieu associé</em>) is developed in Part I of <em>On the Mode of Existence of Technical Objects</em>. His paradigm case is the Guimbal turbine — a hydroelectric turbine designed to be submerged in the water it uses to generate power, so that the water simultaneously cools the turbine and provides its working fluid. The water is neither purely natural nor purely artificial; it is constituted as a technical milieu by the turbine's operation. Simondon's argument is that every genuine technical individual requires such an associated milieu — a structured environment that it both depends on and helps constitute. When technical objects are stripped from their associated milieus and treated as portable instruments, they degrade: they work less well, they lose their capacity for development, and the human communities organized around maintaining them dissolve. <a href="#ref5">↩</a>`,
]

export default function ShannonSimondon1950s() {
  return (
    <Layout
      title="The Channel and the Ghost: Shannon & Simondon in the 1950s — Power Explained"
      description="In the 1950s, two thinkers looked at the same postwar technical world and drew opposite conclusions. Shannon built a theory of communication that made meaning irrelevant. Simondon asked what was being lost."
      seriesTag="Enclosure of the Mind — Series VI"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: 'var(--display)', fontSize: 'clamp(3rem,12vw,8rem)', fontWeight: 700, letterSpacing: '-0.04em', opacity: 0.05, whiteSpace: 'nowrap', pointerEvents: 'none', lineHeight: 1 }}>SHANNON SIMONDON</div>
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          <span className="hero-eyebrow"><a href="enclosure-of-the-mind.html" style={{color:"inherit",textDecoration:"underline",textDecorationColor:"rgba(255,255,255,0.3)"}}>Enclosure of the Mind — Series VI</a></span>
          <h1>The channel<br />and the ghost</h1>
          <p className="hero-dek">In 1948, Claude Shannon published a mathematical theory of communication that defined information precisely enough to build a civilization on — and explicitly excluded meaning from the definition. Ten years later, Gilbert Simondon published a philosophy of technology that identified exactly what that exclusion was costing. Neither read the other. Both were right.</p>
          <div className="hero-bio">
            <span className="bio-dates">1948 — 1958</span>
            <p className="bio-line">The theory of how to move information reliably was built inside the military-industrial complex, at Bell Labs and MIT, with Defense Department funding. The critique of what that theory was losing was written in Paris, in a philosophical tradition that the English-speaking world would not discover for another two decades. The infrastructure got built. The critique arrived late.</p>
          </div>
        </div>
      </div>

      <ArticleWrap>
        <ContentsNav sections={SECTIONS} />
        <div className="body-text">

          <Section id="postwar" num="01" title="The postwar settlement and its technical surplus">
            <div dangerouslySetInnerHTML={{ __html: `<p>The Second World War produced, as a byproduct of its industrial slaughter, an enormous technical surplus. Radar, cryptography, ballistics computation, long-distance radio communication, early electronic computing — all had been developed under wartime pressure at scales and speeds that peacetime research could not have achieved. By 1945, the United States and Britain sat atop a mountain of technical capacity with no immediate military application, staffed by scientists and engineers who had spent years solving communication and computation problems under the hardest possible constraints.</p>
<p>The question of what to do with this surplus was not settled by the market alone. The Cold War provided the institutional framework: military funding continued, now redirected toward the threat of Soviet expansion. The Pentagon, ARPA, and the service branches became the primary patrons of postwar technical research. Bell Labs — the research arm of AT&T, itself a regulated monopoly — became one of the central nodes of a military-industrial-academic complex that was simultaneously building the infrastructure of the information age and theorizing it.<sup><a href="#fn4" id="ref4">4</a></sup></p>
<p>This institutional context is not incidental to the theory that emerged from it. Shannon's mathematical theory of communication was developed at Bell Labs by a man who had spent the war years working on cryptography and anti-aircraft fire control. The theory solved the problems that mattered to Bell Labs: how to transmit signals reliably over noisy telephone lines, how to maximize the capacity of communication channels, how to encode messages efficiently. It did not solve — and explicitly set aside — the problem of what the messages meant.</p>
<p>That exclusion was a design decision. And design decisions, when they get built into infrastructure, become the invisible architecture of everything built on top of them.</p>` }} />
          </Section>

          <Section id="shannon" num="02" title="Shannon's move: meaning is noise">
            <div dangerouslySetInnerHTML={{ __html: `<p>Shannon's 1948 paper opens with a statement of scope that reads as modest but is philosophically radical: "The fundamental problem of communication is that of reproducing at one point either exactly or approximately a message selected at another point. Frequently the messages have <em>meaning</em>... These semantic aspects of communication are irrelevant to the engineering problem."<sup><a href="#fn2" id="ref2">2</a></sup></p>
<p>This is not a claim that meaning doesn't exist. It's a claim that meaning is orthogonal to the engineering problem. The channel doesn't care what it's carrying. The mathematics of transmission works the same whether the signal is a symphony, a military command, a grocery list, or noise. From the channel's perspective, these are all just probability distributions over possible symbols — and the engineering task is to transmit the distribution as faithfully as possible, at the highest rate the channel allows, with the minimum expenditure of resources.</p>
<p>The theory Shannon built on this foundation is genuinely beautiful. Information, in his framework, is not a substance — it's a measure of uncertainty. A message carries information to the extent that it resolves uncertainty about which message was sent. A completely predictable message (one that could be anticipated with certainty) carries no information. A completely random message (pure noise) carries maximum information per symbol but conveys nothing intelligible. Between these poles, the theory defines precisely how much information a channel can carry, how to encode messages to approach that limit, and how to detect and correct errors introduced by noise.<sup><a href="#fn1" id="ref1">1</a></sup></p>
<div class="pull">
  Shannon's theory is beautiful<br/>
  and exactly right<br/>
  about the problem<br/>
  it was <strong>designed to solve</strong>.
</div>
<p>The theory's power is inseparable from its scope restriction. By defining information without reference to meaning, Shannon made it possible to treat all communication as a single unified engineering problem — and to solve it with mathematical precision. This unification was enormously productive. It made digital communication possible. It made the internet possible. It made every form of electronic media that exists possible.</p>
<p>It also, incidentally, made the channel the central economic and political object of communication. If meaning is irrelevant to transmission, then the valuable thing — the scarce thing, the thing worth owning — is the channel itself. Whoever owns the channel owns communication, regardless of what flows through it. The theory is neutral about this; it simply doesn't see it. But the infrastructure built on the theory is not neutral. AT&T owned the telephone network. The cable companies own the cable. Google and Meta own the channels through which most human communication now flows. Shannon's theoretical move — meaning is noise — naturalizes the ownership of channels as the foundational fact of communication, because it makes the channel, not the meaning, the object of the engineering science.</p>` }} />
          </Section>

          <Section id="what-the-model-does" num="03" title="What the model does to communication">
            <div dangerouslySetInnerHTML={{ __html: `<p>A model that excludes meaning from communication doesn't just miss something. It actively shapes the infrastructure built in its image — and the infrastructure then shapes what kinds of communication are possible, at what cost, under whose control.</p>
<p>Consider what gets optimized when you build communication infrastructure around Shannon's framework. You optimize for throughput: how many bits per second can the channel carry? You optimize for fidelity: does the received signal match the transmitted signal? You optimize for efficiency: how close to the theoretical maximum can you get? These are the metrics that matter to an engineer solving Bell Labs' problem. They are not the metrics that matter to someone trying to understand whether a community is able to deliberate, whether a relationship can sustain its complexity, whether the communication environment is producing the conditions for genuine thought.</p>
<div class="concept-table">
  <div class="concept-table-header">
    <span class="ct-title">What the channel model optimizes vs. what it ignores</span>
    <span class="ct-subtitle">The metrics that get built into infrastructure</span>
  </div>
  <div class="ct-row">
    <div class="ct-cell">
      <span class="ct-cell-label">Optimized</span>
      <div class="ct-cell-text"><strong>Throughput.</strong> How many messages per unit time. Engagement metrics, post frequency, notification volume. The more the channel carries, the more valuable it is to whoever owns it.</div>
    </div>
    <div class="ct-cell dim">
      <span class="ct-cell-label">Ignored</span>
      <div class="ct-cell-text">Whether the messages are worth sending. Whether the volume of communication produces understanding or prevents it. Whether a communication environment that maximizes throughput also maximizes the conditions for genuine thought.</div>
    </div>
  </div>
  <div class="ct-row">
    <div class="ct-cell">
      <span class="ct-cell-label">Optimized</span>
      <div class="ct-cell-text"><strong>Fidelity.</strong> Does the received signal match the transmitted signal? This is the technical success criterion. In social media terms: does the post reach its intended audience? Does the message get through?</div>
    </div>
    <div class="ct-cell dim">
      <span class="ct-cell-label">Ignored</span>
      <div class="ct-cell-text">Whether getting through is the same as being understood. Whether the context required to understand the message survives transmission. Whether a communication optimized for reach has been optimized against depth.</div>
    </div>
  </div>
  <div class="ct-row">
    <div class="ct-cell">
      <span class="ct-cell-label">Optimized</span>
      <div class="ct-cell-text"><strong>Engagement.</strong> The channel-owner's proxy for information content: the more uncertain you are about which message comes next (the more surprised you are), the more information you're receiving. Outrage, novelty, and threat maximize engagement by Shannon's definition.</div>
    </div>
    <div class="ct-cell dim">
      <span class="ct-cell-label">Ignored</span>
      <div class="ct-cell-text">That maximizing surprise is the opposite of building understanding. That a communication environment optimized for engagement is optimized for the emotional states that prevent deliberation. That the channel's metrics and the community's needs are structurally opposed.</div>
    </div>
  </div>
</div>
<p>None of this was Shannon's intention. He was solving a real engineering problem with extraordinary elegance. But the framework, once built into the infrastructure of global communication, became the invisible architecture within which all subsequent questions about communication got answered. The debate about social media is conducted largely within Shannon's framework — as a debate about what flows through the channel, not about whether the channel model is the right one. <a class="xl" href="baudrillard-consumer-society.html">Baudrillard's later argument that the medium has become the message</a> — or rather that the channel has consumed the message — is the consequence of building a world around a model that defined the channel as the only object worth theorizing.</p>` }} />
          </Section>

          <Section id="simondon" num="04" title="Simondon's counter: what the channel loses">
            <div dangerouslySetInnerHTML={{ __html: `<p>Gilbert Simondon published <em>On the Mode of Existence of Technical Objects</em> in 1958, the same year he defended his doctoral thesis on individuation. He was a philosopher at the University of Paris, working in a tradition — phenomenology, philosophy of technology — that had almost no contact with the Anglo-American information theory that Shannon represented. He did not cite Shannon. He was not responding to Shannon. But he was responding to the same moment — the postwar technical acceleration — and he was responding to opposite things within it.<sup><a href="#fn3" id="ref3">3</a></sup></p>
<p>Simondon's opening argument is that contemporary culture has two bad ways of relating to technology, and they are mirror images of each other. The <strong>technocratic</strong> view treats technical objects as tools — as instruments in service of human purposes, carrying no values of their own, to be assessed purely by their efficiency at achieving given ends. The <strong>humanist</strong> view treats technical objects as threats — as dehumanizing forces that erode authentic human experience and need to be resisted or regulated. Both views, Simondon argues, share the same error: they treat the technical object as external to human life, as something humans relate to rather than something that participates in the processes through which human life is constituted.</p>
<p>His alternative: technical objects have their own mode of existence, their own developmental logic, their own way of carrying and transmitting the human gesture that produced them. A well-designed tool is not a neutral instrument — it is a crystallized form of human problem-solving, a gesture that has been made permanent and transmissible. When you use a well-made knife, you are, in a sense, in contact with the understanding of the knife-maker — not as a mystical connection but as a functional one: the knife's balance, its edge geometry, its handle shape all encode solutions to the problem of cutting that took generations to develop.</p>
<div class="callout">
  <span class="callout-label">The associated milieu</span>
  <p>Simondon's key concept for this piece is the <strong>associated milieu</strong> — the structured environment that a genuine technical individual both requires and helps constitute.<sup><a href="#fn5" id="ref5">5</a></sup> His paradigm case is the Guimbal turbine: a hydroelectric turbine designed to be submerged in the river water it uses to generate power, so that the same water simultaneously provides the working fluid and cools the machine. The water is neither purely natural nor purely artificial — it's constituted as a technical milieu by the turbine's operation. And the turbine only works properly when this milieu is intact.</p>
  <p>The political implication: technical objects stripped from their associated milieus degrade. They work less well, they lose their capacity for development, and the human communities organized around maintaining them dissolve. A tool taken from the community of practice that developed it becomes, over time, just a mechanism — something that can be operated but not understood, replaced but not repaired, used but not extended.</p>
  <p>Shannon's channel is a technical object designed to be milieu-independent: it works the same regardless of what flows through it or who operates it or what community it serves. This is a feature, from the engineering perspective — it's what makes the channel universally deployable. It's what allows AT&T to own a phone network that serves everyone without understanding anyone. It's also what makes the channel the perfect instrument of enclosure: a technical object with no associated milieu has no community to defend it, no practice to sustain it, no human gesture encoded in it that resists being directed toward any purpose its owner chooses.</p>
</div>
<p>Simondon was not making a political argument in the explicit sense. He was making a philosophical argument about what technology is. But the political consequences are precise: a technical infrastructure built around channel-independence — around the deliberate excision of the associated milieu — is infrastructure optimized for ownership rather than use, for control rather than participation, for the enclosure of communication rather than its commons.</p>` }} />
          </Section>

          <Section id="two-worlds" num="05" title="Two worlds in the same decade">
            <div dangerouslySetInnerHTML={{ __html: `<p>The parallel between Shannon and Simondon is not accidental. It is structural. They are both responding to the same postwar technical acceleration, but from positions that make them sensitive to opposite features of it.</p>
<p>Shannon is inside the military-industrial complex — at Bell Labs, funded by the same apparatus that is building the Cold War communications infrastructure. The problem he is solving is real: how to transmit information reliably over noisy channels at maximum speed. The solution he finds is genuinely elegant and genuinely correct. But the institutional position shapes what counts as a problem and what counts as noise. Meaning is noise. The community organized around communication is noise. The associated milieu is noise. These are not Shannon's failures of vision; they are the features of the institutional lens through which he is looking.</p>
<p>Simondon is outside that complex — in a French philosophical tradition that is simultaneously engaged with phenomenology, with the philosophy of science, and with a politics of labor that takes seriously the question of what industrialization is doing to the workers who operate the machines. His sensitivity is to what the technical rationalization of the postwar period is losing: the craft knowledge, the community of practice, the human gesture encoded in tools, the associated milieu that makes genuine technical culture possible as opposed to mere technical operation.</p>
<div class="pull">
  Shannon saw the channel.<br/>
  Simondon saw<br/>
  what the channel<br/>
  was <strong>replacing</strong>.
</div>
<p>Together they describe the full terrain of the 1950s technical moment. Shannon provides the theory that makes the enclosure of communication technically possible and economically natural — the channel as the central object, meaning as irrelevant, ownership of the channel as the foundational fact. Simondon provides the counter-theory that names what is lost when the channel model wins: the associated milieu, the community of practice, the human gesture, the possibility of a technical culture in which people understand rather than merely operate the machines that organize their lives.</p>
<p>The tragedy — if that's the right word — is that Shannon's theory got built into infrastructure while Simondon's critique remained in French philosophy journals, largely untranslated, for thirty years. By the time Deleuze and Stiegler began drawing on Simondon in the 1980s and 1990s, the infrastructure it critiqued was already global. The critique arrived after the concrete had set.</p>` }} />
          </Section>

          <Section id="infrastructure" num="06" title="The infrastructure being built">
            <div dangerouslySetInnerHTML={{ __html: `<p>This is not a story about two philosophers. It is a story about which theory got built into the world and what that has meant for everything since.</p>
<p>The infrastructure of global communication was built, in the 1950s and 1960s, around Shannon's framework: channels, throughput, fidelity, signal-to-noise. The telephone network, the early internet, the satellite communication systems, the data networks — all of them are engineering expressions of a theory that made meaning irrelevant and the channel central. They were funded by military budgets and built by corporations whose business model was, precisely, the ownership of channels.</p>
<p>By the time the internet became public and commercial in the 1990s, the architecture was already determined. The question that structured every subsequent debate — about privacy, about content moderation, about algorithmic amplification, about platform power — was Shannon's question: how do you manage the channel? Not Simondon's question: what kind of associated milieu does this technical object require to function well, and are we building it?</p>
<p>The consequences are visible everywhere. Social media platforms are extraordinarily efficient channels — they move enormous volumes of signal with minimal loss, at almost no marginal cost per message. They are also systematically destroying the associated milieus that give communication its meaning: the communities of practice, the shared contexts, the slow accumulation of trust and understanding that makes it possible for messages to be received as more than noise. They optimize for Shannon's metrics while consuming Simondon's conditions.</p>
<p>This is not a conspiracy. It is the predictable outcome of building a communication civilization on one theory while ignoring the other. <a class="xl" href="reich-character-armor.html">Reich showed that the enclosure of the mind runs through the body</a>. <a class="xl" href="gramsci-1930s.html">Gramsci showed that it runs through institutions</a>. Shannon and Simondon together show that it runs through infrastructure — through the technical architecture of communication itself, which determines what kinds of meaning can be transmitted, at what cost, under whose control, and at whose expense.</p>
<p>The students who took to the streets in <a class="xl" href="debord-1968.html">1968</a> were, among other things, reacting to this infrastructure — though they did not have the language to name it precisely. Debord had the language. He called it the spectacle. And the spectacle is, among other things, what you get when you build a civilization around Shannon's channel and forget Simondon's milieu.</p>` }} />
          </Section>

        </div>

        <Invitation
          label="The series"
          headline="Enclosure of the Mind"
          coda={``}
        >
          <p>The enclosure of the mind operates at multiple levels simultaneously. Reich located it in the body. Gramsci located it in institutions. Shannon and Simondon reveal its technical layer: the infrastructure of communication itself, built around a theory that made meaning irrelevant and the channel central. By 1968, this infrastructure was visible to anyone who looked. The students looked. Debord had already written the theory.</p>
        </Invitation>

        <NextReads items={[
          { href: 'debord-1968', cat: 'Series VI', title: 'The Streets Were the Message: Debord and 1968' },
          { href: 'reich-character-armor', cat: 'Series VI', title: 'Reich: Why Freedom Doesn\'t Feel Like You Think It Should' },
          { href: 'gramsci-1930s', cat: 'Series VI', title: 'Gramsci in the 1930s: The Factory of Consent' },
          { href: 'tech-shannon', cat: 'Thinker', title: 'Shannon: Information Is Not What You Think It Is' },
          { href: 'simondon', cat: 'Thinker', title: 'Simondon: Why Tools Need Communities' },
          { href: 'how-linux-became-the-internet', cat: 'Theory', title: 'How Linux Became the Internet\'s Infrastructure' },
        ]} />

        <Footnotes notes={FOOTNOTES} />
        <ArticleFooter seriesNote="Enclosure of the Mind — Series VI — Shannon (1948) — Simondon (1958) — the postwar technical settlement" />
      </ArticleWrap>
    </Layout>
  )
}
