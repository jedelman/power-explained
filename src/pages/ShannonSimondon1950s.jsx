import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = [
  { id: 'postwar', label: 'The postwar settlement and its technical surplus' },
  { id: 'shannon', label: 'Shannon\'s move: meaning is noise' },
  { id: 'what-the-model-does', label: 'What the model does to communication' },
  { id: 'simondon', label: 'Simondon\'s counter: what the channel loses' },
  { id: 'infrastructure', label: 'The infrastructure being built' },
]

const FOOTNOTES = [
  `Shannon, C. E. (1948). "A Mathematical Theory of Communication." <em>Bell System Technical Journal</em>, 27, 379–423 and 623–656. Shannon had spent the war years working on cryptography and fire-control systems; the 1948 paper draws directly on that work. The institutional context matters: Bell Labs was the R&D arm of AT&T — a regulated monopoly whose business was the ownership and operation of communication channels. A theory of communication that defined the channel as the central object of analysis and made meaning irrelevant to transmission was, incidentally, a theory that made channel ownership the central economic fact. <a href="#ref1">↩</a>`,
  `Shannon's definition of information is in Section 1 of the 1948 paper: "The fundamental problem of communication is that of reproducing at one point either exactly or approximately a message selected at another point. Frequently the messages have <em>meaning</em>... These semantic aspects of communication are irrelevant to the engineering problem." The move is philosophically significant: Shannon is not denying that meaning exists. He is claiming that meaning is orthogonal to the engineering problem he is solving. The consequence — that the engineering solution gets built into infrastructure while the meaning question gets left to others — is where the political economy begins. <a href="#ref2">↩</a>`,
  `Simondon, G. (1958/2017). <em>On the Mode of Existence of Technical Objects</em>, trans. C. Malaspina and J. Rogove. Univocal Publishing. Simondon's principal thesis was defended the same year the book was published — 1958, ten years after Shannon's paper. The two works are never in direct dialogue; Simondon does not cite Shannon, and the information-theoretic tradition largely ignored Simondon until his rediscovery by Deleuze and later Stiegler. The parallel is structural rather than intertextual: both are responding to the same postwar technical moment, and they are responding to opposite things within it. <a href="#ref3">↩</a>`,
  `The military origins of postwar information theory are documented in Paul Edwards, <em>The Closed World: Computers and the Politics of Discourse in Cold War America</em> (MIT Press, 1996) and Fred Turner, <em>From Counterculture to Cyberculture</em> (University of Chicago Press, 2006). <a href="#ref4">↩</a>`,
  `Simondon's concept of the associated milieu (<em>milieu associé</em>) is developed in Part I of <em>On the Mode of Existence of Technical Objects</em>. His paradigm case is the Guimbal turbine — a hydroelectric turbine designed to be submerged in the water it uses to generate power, so that the water simultaneously cools the turbine and provides its working fluid. The water is neither purely natural nor purely artificial; it is constituted as a technical milieu by the turbine's operation. When technical objects are stripped from their associated milieus and treated as portable instruments, they degrade: they work less well, they lose their capacity for development, and the human communities organized around maintaining them dissolve. <a href="#ref5">↩</a>`,
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
          <p className="hero-dek">In 1948, Claude Shannon published a mathematical theory of communication that defined information precisely enough to build a civilization on — and explicitly excluded meaning from the definition. Ten years later, Gilbert Simondon published a philosophy of technology that identified exactly what that exclusion was costing. Neither read the other. Shannon saw the channel. Simondon saw what the channel was replacing.</p>
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
            <div dangerouslySetInnerHTML={{ __html: `<p>The Second World War produced, as a byproduct of its industrial slaughter, an enormous technical surplus. Radar, cryptography, ballistics computation, long-distance radio communication, early electronic computing — all had been developed under wartime pressure at scales and speeds that peacetime research could not have achieved. By 1945, the United States and Britain sat atop a mountain of technical capacity, staffed by scientists and engineers who had spent years solving communication and computation problems under the hardest possible constraints.</p>
<p>The Cold War provided the institutional framework for what came next: military funding continued, now redirected toward Soviet expansion. Bell Labs — the research arm of AT&T, itself a regulated monopoly — became one of the central nodes of a military-industrial-academic complex that was simultaneously building the infrastructure of the information age and theorizing it.<sup><a href="#fn4" id="ref4">4</a></sup></p>
<p>Shannon's mathematical theory of communication was developed at Bell Labs by a man who had spent the war years working on cryptography and anti-aircraft fire control. The theory solved the problems that mattered to Bell Labs: how to transmit signals reliably over noisy telephone lines, how to maximize channel capacity, how to encode messages efficiently. It did not solve — and explicitly set aside — the problem of what the messages meant.</p>
<p>That exclusion was a design decision. And design decisions, when they get built into infrastructure, become the invisible architecture of everything built on top of them.</p>` }} />
          </Section>

          <Section id="shannon" num="02" title="Shannon's move: meaning is noise">
            <div dangerouslySetInnerHTML={{ __html: `<p>Shannon's 1948 paper opens with a statement of scope that reads as modest but is philosophically radical: "The fundamental problem of communication is that of reproducing at one point either exactly or approximately a message selected at another point. Frequently the messages have <em>meaning</em>... These semantic aspects of communication are irrelevant to the engineering problem."<sup><a href="#fn2" id="ref2">2</a></sup></p>
<p>This is not a claim that meaning doesn't exist. It's a claim that meaning is orthogonal to the engineering problem. The channel doesn't care what it's carrying. The mathematics of transmission works the same whether the signal is a symphony, a military command, a grocery list, or noise. From the channel's perspective, all of these are just probability distributions over possible symbols — and the engineering task is to transmit the distribution as faithfully as possible, at the highest rate the channel allows, with the minimum expenditure of resources.</p>
<p>The theory Shannon built on this foundation is genuinely beautiful. Information, in his framework, is not a substance — it's a measure of uncertainty. A message carries information to the extent that it resolves uncertainty about which message was sent. A completely predictable message carries no information. A completely random message carries maximum information per symbol but conveys nothing intelligible. Between these poles, the theory defines precisely how much information a channel can carry, how to encode messages to approach that limit, and how to detect and correct errors introduced by noise.<sup><a href="#fn1" id="ref1">1</a></sup></p>
<div class="pull">
  Shannon's theory is beautiful<br/>
  and exactly right<br/>
  about the problem<br/>
  it was <strong>designed to solve</strong>.
</div>
<p>The theory's power is inseparable from its scope restriction. By defining information without reference to meaning, Shannon made it possible to treat all communication as a single unified engineering problem — and to solve it with mathematical precision. This unification was enormously productive. It made digital communication possible. It made the internet possible. It made every form of electronic media that exists possible.</p>
<p>It also, incidentally, made the channel the central economic and political object of communication. If meaning is irrelevant to transmission, then the valuable thing — the scarce thing, the thing worth owning — is the channel itself. Whoever owns the channel owns communication, regardless of what flows through it. AT&T owned the telephone network. The cable companies own the cable. Google and Meta own the channels through which most human communication now flows. Shannon's theoretical move naturalizes the ownership of channels as the foundational fact of communication, because it makes the channel, not the meaning, the object of the engineering science.</p>` }} />
          </Section>

          <Section id="what-the-model-does" num="03" title="What the model does to communication">
            <div dangerouslySetInnerHTML={{ __html: `<p>A model that excludes meaning from communication doesn't just miss something. It actively shapes the infrastructure built in its image — and the infrastructure then shapes what kinds of communication are possible, at what cost, under whose control.</p>
<p>Consider what gets optimized when you build communication infrastructure around Shannon's framework. You optimize for throughput: how many bits per second can the channel carry? For fidelity: does the received signal match the transmitted signal? For efficiency: how close to the theoretical maximum can you get? These are the metrics that matter to an engineer solving Bell Labs' problem. They are not the metrics that matter to someone trying to understand whether a community is able to deliberate, whether a relationship can sustain its complexity, whether the communication environment is producing the conditions for genuine thought.</p>
<p>When social media platforms optimize for engagement — the channel owner's proxy for information content — they are following Shannon's logic precisely. Maximum surprise maximizes information by Shannon's definition. Outrage, novelty, and threat maximize engagement. But maximizing surprise is the opposite of building understanding. A communication environment optimized for engagement is optimized for the emotional states that prevent deliberation. The channel's metrics and the community's needs are structurally opposed — and Shannon's framework has no mechanism for seeing this, because it has defined the community's needs out of the engineering problem.</p>
<p>None of this was Shannon's intention. He was solving a real engineering problem with extraordinary elegance. But the framework, once built into the infrastructure of global communication, became the invisible architecture within which all subsequent questions about communication get answered. <a class="xl" href="baudrillard-consumer-society.html">Baudrillard's later argument</a> that the channel has consumed the message is the consequence of building a world around a model that defined the channel as the only object worth theorizing.</p>` }} />
          </Section>

          <Section id="simondon" num="04" title="Simondon's counter: what the channel loses">
            <div dangerouslySetInnerHTML={{ __html: `<p>Gilbert Simondon published <em>On the Mode of Existence of Technical Objects</em> in 1958, the same year he defended his doctoral thesis on individuation. He was a philosopher at the University of Paris, working in a tradition — phenomenology, philosophy of technology — that had almost no contact with the Anglo-American information theory that Shannon represented. He did not cite Shannon. He was not responding to Shannon. But he was responding to the same moment — the postwar technical acceleration — and he was responding to opposite things within it.<sup><a href="#fn3" id="ref3">3</a></sup></p>
<p>Simondon's argument: technical objects have their own mode of existence, their own developmental logic, their own way of carrying and transmitting the human gesture that produced them. A well-designed tool is not a neutral instrument — it is a crystallized form of human problem-solving. When you use a well-made knife, you are in functional contact with the understanding of the knife-maker: the knife's balance, its edge geometry, its handle shape all encode solutions to the problem of cutting that took generations to develop.</p>
<p>His key concept for this piece is the <strong>associated milieu</strong> — the structured environment that a genuine technical object both requires and helps constitute.<sup><a href="#fn5" id="ref5">5</a></sup> His paradigm case is the Guimbal turbine: a hydroelectric turbine designed to be submerged in the river water it uses to generate power, so that the water simultaneously provides the working fluid and cools the machine. The water is neither purely natural nor purely artificial — it's constituted as a technical milieu by the turbine's operation. And the turbine only works when this milieu is intact.</p>
<div class="callout">
  <span class="callout-label">What the associated milieu means politically</span>
  <p>Shannon's channel is a technical object designed to be milieu-independent: it works the same regardless of what flows through it, who operates it, or what community it serves. This makes it universally deployable — and the perfect instrument of enclosure. A technical object with no associated milieu has no community to defend it, no practice to sustain it, no human gesture encoded in it that resists being directed toward any purpose its owner chooses. Strip a tool from the community that developed it and it becomes a mechanism: operable but not understood, replaceable but not repaired, used but not extended — owned rather than held in common.</p>
</div>
<p>Simondon was not making a political argument in the explicit sense. He was making a philosophical argument about what technology is. But the political consequences are precise: a technical infrastructure built around channel-independence — around the deliberate excision of the associated milieu — is infrastructure optimized for ownership rather than use, for control rather than participation, for the enclosure of communication rather than its commons.</p>` }} />
          </Section>

          <Section id="infrastructure" num="05" title="The infrastructure being built">
            <div dangerouslySetInnerHTML={{ __html: `<p>Shannon saw the channel. Simondon saw what the channel was replacing. Together they describe the full terrain of the 1950s technical moment — and the tragedy, if that's the right word, is that only one of them got built into the world.</p>
<p>Shannon's theory became the infrastructure of global communication: the telephone network, the early internet, the satellite communication systems, the data networks. All of them are engineering expressions of a theory that made meaning irrelevant and the channel central. They were funded by military budgets and built by corporations whose business model was, precisely, the ownership of channels.</p>
<p>Simondon's critique remained in French philosophy journals, largely untranslated, for thirty years. By the time Deleuze and Stiegler began drawing on him in the 1980s and 1990s, the infrastructure it critiqued was already global. The critique arrived after the concrete had set.</p>
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
