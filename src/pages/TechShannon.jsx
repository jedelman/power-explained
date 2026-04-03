import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = [{id: 'the-problem', label: "The problem Shannon was solving"}, {id: 'signal-noise', label: "Signal, noise, and the channel"}, {id: 'entropy', label: "Entropy: the cosmological turn"}, {id: 'commons', label: "The channel as commons"}, {id: 'enclosure', label: "What enclosure does to information"}, {id: 'builders', label: "What the builders knew"}]
const FOOTNOTES = [
  `Claude E. Shannon, "A Mathematical Theory of Communication," <em>Bell System Technical Journal</em> 27 (July 1948): 379–423; (October 1948): 623–656. Reprinted with a preface by Warren Weaver as <strong>The Mathematical Theory of Communication</strong> (University of Illinois Press, 1949). The paper is freely available online and is readable by non-specialists in its conceptual sections, though the proofs require mathematical background. The standard biography is <strong>A Mind at Play: How Claude Shannon Invented the Information Age</strong> by Jimmy Soni and Rob Goodman (Simon &amp; Schuster, 2017). <a aria-label="Return to text" href="#ref1">↩</a>`,
  `The von Neumann "entropy" anecdote appears in Myron Tribus and Edward C. McIrvine, "Energy and Information," <em>Scientific American</em> 225 (September 1971): 179–188. Its accuracy has been questioned, and Shannon himself gave inconsistent accounts of how he chose the term. The priority dispute with Wiener is documented in several places; the most authoritative account is in Soni and Goodman's biography. Norbert Wiener was developing cybernetics simultaneously and independently; his <em>Cybernetics: Or Control and Communication in the Animal and the Machine</em> (MIT Press, 1948) appeared the same year as Shannon's paper. <a aria-label="Return to text" href="#ref2">↩</a>`,
  `Shannon's channel capacity theorem states that the maximum rate of reliable information transmission over a noisy channel is C = B log₂(1 + S/N), where B is the bandwidth of the channel and S/N is the signal-to-noise ratio. This is now called the Shannon-Hartley theorem. The result was revolutionary because it established a hard upper bound — previously engineers had assumed that more noise simply meant more errors, with no theoretical ceiling. Shannon showed that up to the capacity C, arbitrarily reliable transmission is possible; above it, it is not. <a aria-label="Return to text" href="#ref3">↩</a>`,
  `Shannon entropy H is defined as H = −Σ p(x) log₂ p(x), where the sum is over all possible messages x and p(x) is the probability of each. A uniform distribution over many possible messages (maximum uncertainty) gives maximum entropy; a distribution where one message is certain gives zero entropy. The conceptual point — that information content is proportional to unpredictability — is the core intuition. Shannon himself was careful to distinguish his entropy from thermodynamic entropy, but the mathematical identity between the two formulas is exact. <a aria-label="Return to text" href="#ref4">↩</a>`,
  `The connection between Shannon entropy and thermodynamic entropy was elaborated by Léon Brillouin in <em>Science and Information Theory</em> (Academic Press, 1956) and further developed in Edwin Jaynes's work on the maximum entropy principle. The key result — sometimes called Landauer's principle — is that erasing one bit of information necessarily dissipates at least kT ln 2 joules of energy, where k is Boltzmann's constant and T is temperature. This was confirmed experimentally in 2012. The deep connection between information and physics is developed accessibly in Charles Seife, <em>Decoding the Universe</em> (Viking, 2006). <a aria-label="Return to text" href="#ref5">↩</a>`
]

export default function TechShannon() {
  return (
    <Layout
      title="The Channel and the Common — Power Explained"
      description="Claude Shannon invented information theory in 1948. He was trying to solve a phone company's engineering problem. What he built turned out to be a description of how everything transmits, degrades, and survives."
      seriesTag="For People Who Build the Internet — Part I"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: 'var(--display)', fontSize: 'clamp(4rem,18vw,12rem)', fontWeight: 700, letterSpacing: '-0.04em', opacity: 0.05, whiteSpace: 'nowrap', pointerEvents: 'none', lineHeight: 1 }}>SHANNON</div>
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          <span className="hero-eyebrow">For People Who Build the Internet — Part I — Shannon</span>
          <h1 dangerouslySetInnerHTML={{ __html: `The Channel<br /><em>and the</em><br />Common` }} />
          <p className="hero-dek">Claude Shannon invented information theory in 1948 to solve a phone company's engineering problem. What he built turned out to be a description of how everything transmits, degrades, and survives — and a framework for understanding what shared infrastructure actually is.</p>
          
          <div className="hero-bio">
            <span className="bio-dates">1916 — 2001</span>
            <p className="bio-line" dangerouslySetInnerHTML={{ __html: `Claude Elwood Shannon: mathematician and electrical engineer at Bell Labs, later MIT. Author of "A Mathematical Theory of Communication" (1948), which founded the field of information theory and underpins every digital system built since. Also built a chess-playing machine, a juggling robot, and a device that calculated in Roman numerals. Rode a unicycle down the corridors of Bell Labs while juggling. One of the most consequential scientists of the twentieth century.` }} />
          </div>
        </div>
      </div>

      <ArticleWrap>
        <ContentsNav sections={SECTIONS} />
        <div className="body-text">
          
          <Section id="the-problem" num="01" title="The problem Shannon was solving">
            <div dangerouslySetInnerHTML={{ __html: `<p>In 1948, Claude Shannon was an engineer at Bell Telephone Laboratories working on a very specific and unglamorous problem: how do you transmit a message reliably over a wire that introduces random errors? The telephone system was full of noise. Signals degraded over distance. How much information could you actually push through a channel of given capacity, and how much redundancy did you need to build in so that errors could be corrected at the other end?</p>
<p>The problem was practical. The solution was cosmic.</p>
<p>Shannon published "A Mathematical Theory of Communication" in the Bell System Technical Journal in July and October 1948. By the time he finished, he had invented a new field, given a precise mathematical definition to the previously vague concept of "information," and connected the behavior of communication systems to the behavior of thermodynamic entropy — the measure of disorder that governs how energy spreads through the universe.<sup><a href="#fn1" id="ref1">1</a></sup></p>
<p>Norbert Wiener, working on similar problems from a different direction, reportedly said the paper made him feel that Shannon had stolen his thunder. John von Neumann, who had already done foundational work on computing, told Shannon he should call his central concept "entropy" partly because the word was already associated with physics and partly because "nobody knows what entropy really is, so in a debate you will always have the advantage." Shannon used the word anyway, and meant it precisely.<sup><a href="#fn2" id="ref2">2</a></sup></p>` }} />
          </Section>
          <Section id="signal-noise" num="02" title="Signal, noise, and the channel">
            <div dangerouslySetInnerHTML={{ __html: `<p>Shannon's framework has three elements: a source that produces a message, a channel that transmits it, and a destination that receives it. Between source and destination, noise corrupts the signal. The engineering question is: given a channel with a certain capacity and a certain noise level, what is the maximum rate at which information can be transmitted with arbitrarily low error?</p>
<p>The answer — Shannon's channel capacity theorem — is that there is a hard limit, determined by the channel's bandwidth and noise level, below which you can transmit reliably, and above which you cannot. Redundancy is the tool: by encoding the message cleverly, adding carefully designed repetition, you can push your error rate arbitrarily close to zero as long as you stay below the channel's capacity. But the capacity limit itself is inviolable. No cleverness overcomes it.<sup><a href="#fn3" id="ref3">3</a></sup></p>
<p>What this means practically is that every communication system has a ceiling — a maximum information throughput defined by its physical and structural properties. The channel is a commons with a capacity. You can use it well or poorly, but you cannot use it beyond what it is.</p>
<div class="pull">
        The channel has a capacity.<br/>You can use it well or poorly.<br/><strong>You cannot use it beyond what it is.</strong>
</div>
<p>This is not just a statement about telephone wires. Shannon's proof applies to any noisy channel: radio signals, optical fibers, DNA replication, neural transmission, the spread of ideas through a social network. Anywhere information moves through a medium that introduces errors, the same mathematics applies. The channel capacity theorem is one of the most general results in all of science.</p>` }} />
          </Section>
          <Section id="entropy" num="03" title="Entropy: the cosmological turn">
            <div dangerouslySetInnerHTML={{ __html: `<p>Shannon defined information in terms of surprise. A message carries information proportional to how unexpected it is. If you already know what someone is going to say, their saying it carries no information — zero bits. If they say something completely unpredictable, the message carries maximum information. The mathematical measure of this — the average information content of a source — Shannon called entropy, using the same term thermodynamics uses for the measure of disorder in a physical system.<sup><a href="#fn4" id="ref4">4</a></sup></p>
<p>This connection to thermodynamic entropy is not just a naming coincidence. The physicist Léon Brillouin and, later, others showed that the relationship is deep: information and physical entropy are related by the same mathematics because they are, at a fundamental level, the same thing. Acquiring information — resolving uncertainty — requires physically decreasing entropy somewhere in the system, which requires energy. The universe's tendency toward maximum entropy (maximum disorder, maximum noise) is the same tendency that degrades signals in a communication channel. Shannon's phone company problem and the second law of thermodynamics are, mathematically, the same problem.<sup><a href="#fn5" id="ref5">5</a></sup></p>
<p>What this means is that information — the thing the internet runs on, the thing knowledge is made of, the thing that commons-based production generates and shares — is not an abstract or weightless phenomenon. It exists in tension with entropy, with the universe's tendency toward disorder. Maintaining information requires energy. Sharing it without degradation requires good channels. And the capacity of those channels is a hard physical limit, not a social convention.</p>
<div class="callout">
<span class="callout-label">Why this matters beyond engineering</span>
<p><strong>Knowledge is physical.</strong> The commons of shared knowledge — the accumulated understanding that communities build together and that new members inherit — has the same relationship to entropy that any information system does. It degrades if not maintained. It gets noisy if the channel gets bad. This is not metaphor. The social conditions for transmitting knowledge reliably are the information-theoretic conditions for a good channel.</p>
<p><strong>Noise is not neutral.</strong> In Shannon's framework, noise is what corrupts the signal. In a knowledge commons, noise is what makes information harder to transmit faithfully: misinformation, suppression, broken social infrastructure, the deliberate flooding of channels with garbage. <a class="xl" href="open-data-isnt-enough.html">Open data without good channels</a> is like a powerful transmitter and a broken wire — the capacity is there, the signal doesn't arrive.</p>
<p><strong>Redundancy is not waste.</strong> Shannon showed that redundancy — apparently inefficient repetition — is what makes reliable transmission possible. In a knowledge commons, redundancy means multiple institutions, multiple carriers, multiple ways of transmitting the same essential knowledge. The "inefficiency" of having community organizations, libraries, and informal networks all carrying overlapping information is the redundancy that makes the commons resilient.</p>
</div>` }} />
          </Section>
          <Section id="commons" num="04" title="The channel as commons">
            <div dangerouslySetInnerHTML={{ __html: `<p>Shannon's framework makes the structure of shared infrastructure visible in a new way. A communication channel is, at its core, a commons: a shared resource with a real capacity, accessed by multiple parties, capable of being managed well or badly, capable of being congested, degraded, or enclosed.</p>
<p>The internet began as this kind of channel — open, shared, running on protocols that nobody owned, designed to route around failures and to treat all packets equally. The engineers who built it understood, in Shannon's terms, that they were designing a channel and that the channel's value lay in its openness and its capacity, not in any particular thing transmitted over it. <a class="xl" href="how-linux-became-the-internet.html">Linux, TCP/IP, the web protocols</a> — all of this was commons infrastructure: collectively maintained, openly specified, available to everyone.</p>
<p>What happened next is a Shannon story told in reverse. The channel got enclosed. The open protocol layer got a proprietary application layer built on top of it. The shared infrastructure of the internet became the substrate for platforms that controlled what could be transmitted, at what rate, to whom. The channel capacity is still there — still shared, still governed by Shannon's mathematics — but the access to it is now mediated by a small number of entities that extract rent from what passes through.</p>` }} />
          </Section>
          <Section id="enclosure" num="05" title="What enclosure does to information">
            <div dangerouslySetInnerHTML={{ __html: `<p>In Shannon's framework, a channel's value is in its capacity — its ability to transmit information reliably. Enclosure doesn't increase channel capacity. It captures the rent from existing capacity while making decisions about access that are driven by extraction rather than transmission.</p>
<p>The practical result is predictable: noise increases, redundancy decreases, the channel serves extractors rather than communicators. Social media platforms were built on open protocols and then enclosed them — not to increase information transmission but to optimize for engagement metrics that maximized advertising revenue. The result is a channel flooded with noise (rage-optimized content, misinformation, manufactured controversy) and hostile to the kind of reliable, redundant, community-maintained transmission that Shannon's framework identifies as the goal.</p>
<p>This is what <a class="xl" href="tech-berners-lee.html">Tim Berners-Lee</a> watched happen to the web he gave away. The channel he designed for maximum open capacity got enclosed, and the enclosure optimized against reliable transmission. More users, more traffic, less actual information per unit of attention.</p>
<div class="pull">
        Enclosure doesn't increase channel capacity.<br/>It captures the rent from capacity<br/><strong>while optimizing against transmission.</strong>
</div>
<p>The commons-based alternative is visible in the parts of the internet that still work this way: open source repositories where code is transmitted, maintained, and improved through a redundant, distributed network of contributors; Wikipedia, a massive knowledge commons that maintains information fidelity through community governance rather than algorithmic optimization; email, still running on open protocols, still the most reliable mass communication system on the internet despite decades of predictions of its death.</p>` }} />
          </Section>
          <Section id="builders" num="06" title="What the builders knew">
            <div dangerouslySetInnerHTML={{ __html: `<p>Linus Torvalds, building Linux, and Steve Wozniak, designing the Apple I and II with open schematics, and John Carmack, open-sourcing the Quake engine — none of them were theorists. They were builders with a strong intuition about what made systems work. That intuition, when you examine it, is Shannon's intuition: open channels, redundant transmission, distributed maintenance, no single point of enclosure.</p>
<p>Torvalds understood that a kernel developed by thousands of contributors would be more reliable than one developed by a single company — not because collective ownership was morally superior, but because the distributed model provided exactly the kind of redundancy Shannon showed was necessary for reliable transmission. Bugs get found because many eyes look. Fixes propagate because the channel is open. The kernel is more robust because it's not a single signal on a private wire.</p>
<p>Wozniak gave away his early designs — literally handed out schematics at the Homebrew Computer Club — because he thought the knowledge was the point. The hardware was the channel; the knowledge was the signal; making the channel open maximized what could be transmitted. The business model his partner Jobs built on top of that open foundation worked precisely because the foundation was open: Apple's proprietary layer rode on a commons substrate that it didn't have to pay to maintain.</p>
<p>Carmack's decision to release the Quake source code was the same logic applied to software: the game engine was a channel, the creativity of the modding community was the signal, and opening the channel maximized what could flow through it. The games that were built on that open engine — including games that Carmack never imagined — are the information that the channel capacity made possible.</p>` }} />
          </Section>
        </div>
        
        <Invitation
          label="07 — The Infrastructure Argument"
          headline="The strongest case<br/>for the commons<br/>is Shannon's."
          coda={`
        The universe tends toward noise.<br/>
        The channel is what we built<br/>
<strong>to push back.</strong>
`}
        >
          <p>Shannon didn't write about politics. He was solving a phone company's problem. But the framework he built is the strongest technical argument for commons infrastructure that exists.</p>
          <p>Open channels maximize information transmission. Redundant, distributed systems are more reliable than single-point systems. Noise — whether from physical interference or from algorithmic optimization for extraction — degrades the signal. The channel's capacity is a commons resource: it can be used well, used badly, or enclosed, but it cannot be privately produced. It exists before anyone arrives to exploit it.</p>
          <p>The internet you use every day runs on this commons. TCP/IP, DNS, the HTTP protocol, the open source software that runs most of the world's servers — these are shared channels, collectively maintained, available to everyone. The platforms built on top of them are enclosed layers that capture rent from the commons underneath. The question of who should own the infrastructure of digital life is, in Shannon's terms, the question of who should own the channel.</p>
          <p>Shannon's answer, implicit in his framework, is that the channel's value comes from its openness. Enclose it and you get rent. Keep it open and you get information. The second law of thermodynamics is what you're fighting when you try to transmit anything reliably. The last thing you need is to also be fighting the enclosure of the medium itself.</p>
        </Invitation>

        
        
        <Footnotes notes={FOOTNOTES} />
        <ArticleFooter seriesNote="For People Who Build the Internet — Part I — Shannon" />
      </ArticleWrap>
    </Layout>
  )
}
