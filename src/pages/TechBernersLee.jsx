import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = [{id: 'the-gift', label: "The gift"}, {id: 'how-it-worked', label: "How the commons worked"}, {id: 'enclosure', label: "How it got enclosed"}, {id: 'surveillance', label: "The surveillance turn"}, {id: 'the-drm-fight', label: "The DRM fight"}, {id: 'what-remains', label: "What remains"}]
const FOOTNOTES = [
  `The original 1989 proposal, titled "Information Management: A Proposal," is available on the CERN website at info.cern.ch, which also hosts the first web page ever created. Mike Sendall's annotation ("Vague but exciting") appears on the cover of the proposal and has been widely reproduced. Berners-Lee describes the development of the web in his memoir <strong>Weaving the Web: The Original Design and Ultimate Destiny of the World Wide Web</strong> (HarperSanFrancisco, 1999), which is the primary source for the decision to release the protocols into the public domain. <a aria-label="Return to text" href="#ref1">↩</a>`,
  `CERN's formal release of the web protocols into the public domain occurred on April 30, 1993. The document is preserved and publicly accessible. Berners-Lee has given numerous accounts of the decision in interviews and in <em>Weaving the Web</em>. His consistent position is that the value of the web lay in its universality and that any licensing regime would have fragmented it into competing proprietary systems. For context on what proprietary alternatives looked like, the contemporaneous CompuServe, AOL, and Prodigy services — all walled gardens — provide the counterfactual. <a aria-label="Return to text" href="#ref2">↩</a>`,
  `The World Wide Web Consortium was founded in October 1994 at MIT, with CERN and later Keio University as co-hosts. Its governance structure — member organizations paying dues, working groups developing specifications, director with significant authority — has been criticized from multiple directions: too corporate, not corporate enough, too slow, too fast, insufficiently representative of users. Berners-Lee served as director from founding until 2022, when he stepped back to a new "Chief Technology Officer" role. The W3C's process documents and membership lists are publicly available at w3.org. <a aria-label="Return to text" href="#ref3">↩</a>`,
  `Shoshana Zuboff, <strong>The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power</strong> (PublicAffairs, 2019). Zuboff's account of the origins of behavioral surplus extraction at Google is the standard academic treatment. For Berners-Lee's own response to surveillance capitalism and the motivations behind Solid, see his 2018 essay "One Small Step for the Web…" published on Medium, and subsequent interviews. The Solid project's technical documentation is at solidproject.org. <a aria-label="Return to text" href="#ref4">↩</a>`,
  `The W3C vote on Encrypted Media Extensions (EME) occurred in July 2017. The Electronic Frontier Foundation's resignation from the W3C, and the reasoning behind it, is documented in Cory Doctorow's essay "The W3C's DRM Capitulation Was Unnecessary, Shortsighted, and Disappointing," published by EFF on September 18, 2017, and in subsequent EFF materials. Berners-Lee's proposal for a compromise covenant — requiring EME licensors to pledge not to sue security researchers — was rejected during the standards process. The episode is one of the clearest documented cases of standards capture by incumbent interests in the history of the web. <a aria-label="Return to text" href="#ref5">↩</a>`
]

export default function TechBernersLee() {
  return (
    <Layout
      title="The Gift and the Enclosure — Power Explained"
      description="Tim Berners-Lee invented the web in 1989 and gave it away on principle. What happened next is the complete arc of digital commons destruction in one story."
      seriesTag="For People Who Build the Internet — Part III"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: 'var(--display)', fontSize: 'clamp(4rem,18vw,12rem)', fontWeight: 700, letterSpacing: '-0.04em', opacity: 0.05, whiteSpace: 'nowrap', pointerEvents: 'none', lineHeight: 1 }}>WEB</div>
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          <span className="hero-eyebrow">For People Who Build the Internet — Part III — Berners-Lee</span>
          <h1 dangerouslySetInnerHTML={{ __html: `The Gift<br /><em>and the</em><br />Enclosure` }} />
          <p className="hero-dek">Tim Berners-Lee invented the web in 1989 and gave it away on principle, against advice, at zero personal profit. What happened next is the complete arc of digital commons destruction — and digital commons resistance — in one story.</p>
          
          <div className="hero-bio">
            <span className="bio-dates">b. 1955</span>
            <p className="bio-line" dangerouslySetInnerHTML={{ __html: `Sir Timothy John Berners-Lee: British computer scientist, inventor of the World Wide Web, founder of the World Wide Web Consortium (W3C), currently a professor at MIT and Oxford. Proposed the web in 1989 while at CERN. Declined to patent it. Has spent thirty years trying to govern what it became. The W3C's 2017 decision to standardize DRM in browsers — against his stated objections — is one of the defining defeats in the history of digital commons governance.` }} />
          </div>
        </div>
      </div>

      <ArticleWrap>
        <ContentsNav sections={SECTIONS} />
        <div className="body-text">
          
          <Section id="the-gift" num="01" title="The gift">
            <div dangerouslySetInnerHTML={{ __html: `<p>In March 1989, Tim Berners-Lee submitted a proposal to his supervisors at CERN, the European particle physics laboratory. The proposal was for a system to manage information across a distributed network of computers: a web of documents linked by hyperlinks, accessible through a common protocol, identified by unique addresses. His supervisor, Mike Sendall, wrote on the cover sheet: <em>Vague but exciting.</em><sup><a href="#fn1" id="ref1">1</a></sup></p>
<p>By 1991, Berners-Lee had built the first web server, the first web browser, and the first web page. In April 1993, CERN released the web protocols into the public domain — no license fee, no patent, no requirement of any kind. Anyone could use them, build on them, extend them, sell products that ran on them. The web was a gift.</p>
<p>This was a decision, not an accident. Berners-Lee and CERN made a deliberate choice to forgo the intellectual property that could have made CERN, or Berners-Lee personally, enormously wealthy. The reasoning was that a proprietary web — one where you had to pay to use the protocols, or where a single entity controlled what could be built on them — would not be the web. Its value was universal access. Enclose it and you destroy it.<sup><a href="#fn2" id="ref2">2</a></sup></p>
<p>The decision was controversial inside CERN. There were people who thought the institution should retain licensing rights. Berners-Lee's position was that the web's utility was its openness — that the point was not to extract value from the protocol but to maximize what could be built on it. He was right. The open web became the infrastructure for an economy that created more value than any patent portfolio could have captured, and none of that value went to CERN or to Berners-Lee.</p>` }} />
          </Section>
          <Section id="how-it-worked" num="02" title="How the commons worked">
            <div dangerouslySetInnerHTML={{ __html: `<p>The early web was a commons in the technical sense: shared infrastructure, open protocols, no central control. HTTP, HTML, and URLs were specifications that anyone could implement. No single entity could decide what went on the web or who could access it. The architecture was deliberately decentralized — no hub that could be controlled, no chokepoint that could be enclosed.</p>
<p>The W3C, which Berners-Lee founded in 1994 to govern web standards, operated as a commons institution: member organizations, open processes, specifications that became standards through consensus. Not perfect — the W3C has always included large corporations alongside civil society and academic institutions, and the power dynamics inside it have always been contested. But the structure was designed to prevent any single actor from capturing the standard-setting process.<sup><a href="#fn3" id="ref3">3</a></sup></p>
<p>What this produced, in the 1990s and early 2000s, was an extraordinary period of commons-based innovation: anyone could build a web server, anyone could build a browser, anyone could publish a web page. The value wasn't in the protocol — it was in what people built on the protocol. And because the protocol was open, the people who built on it competed on the quality of what they built, not on control of the underlying infrastructure.</p>
<div class="pull">
        The web's value was not in the protocol.<br/>It was in what people built on the protocol<br/><strong>because it was open.</strong>
</div>` }} />
          </Section>
          <Section id="enclosure" num="03" title="How it got enclosed">
            <div dangerouslySetInnerHTML={{ __html: `<p>The enclosure didn't happen to the protocols. It happened on top of them. The open web layer — HTTP, HTML, URLs — remained open. What got enclosed was the application layer built on top: the platforms that became the default interfaces through which most people accessed the web's content and through which most content found its audience.</p>
<p>Google enclosed search — not by controlling the protocol, but by becoming the default way to navigate it. Facebook enclosed social — not by owning the web, but by becoming the default place where social relationships were recorded and maintained online. Amazon enclosed commerce. These are not web protocols. They are proprietary platforms that run on web protocols. The infrastructure remained open; the applications on top became chokepoints.</p>
<p>The enclosure model works because network effects compound: the platform that has the most users is the most useful platform, which attracts more users, which makes it more useful. Once a platform achieves dominant network position, switching costs become real — your social graph, your search history, your purchase history, your content audience all live inside the platform. The open protocol underneath doesn't help you leave because what you have is not your data on an open system. It's your relationships and history locked inside a closed one.</p>
<div class="callout">
<span class="callout-label">The architecture of platform capture</span>
<p><strong>Build on the commons.</strong> Every major platform was built on open protocols. Facebook runs on HTTP. Google indexes HTML pages. Amazon sells through browsers. The open infrastructure was not competed away — it was used as a free substrate for proprietary superstructure.</p>
<p><strong>Capture the social layer.</strong> The protocols move data. What the platforms captured was not data but relationships — the social graph that connects people to each other and to content. Relationships are stickier than data. Moving your files is easy. Moving your social network is nearly impossible.</p>
<p><strong>Monetize attention.</strong> The business model that paid for the enclosure was advertising — selling user attention to advertisers. This aligned platform incentives with maximizing engagement rather than maximizing information quality, which is <a class="xl" href="tech-shannon.html">Shannon's noise problem</a> in institutional form: the platform optimizes for what keeps people on the platform, which is not the same as what transmits information reliably.</p>
</div>` }} />
          </Section>
          <Section id="surveillance" num="04" title="The surveillance turn">
            <div dangerouslySetInnerHTML={{ __html: `<p>The advertising model required data. To sell targeted attention, you needed to know who was paying attention and what they were likely to respond to. This required tracking: recording what people looked at, what they clicked, what they bought, who they knew, what they said. The open web, designed for communication, became an apparatus for surveillance.</p>
<p>This was not Berners-Lee's design. He built a system for linking documents, not for tracking people. But the architecture he built — stateless HTTP, no built-in identity layer — left a gap that platforms filled with cookies, tracking pixels, login walls, and eventually the vast apparatus of what Shoshana Zuboff calls surveillance capitalism: the extraction of behavioral data as raw material for prediction products sold to advertisers.<sup><a href="#fn4" id="ref4">4</a></sup></p>
<p>Berners-Lee has been clear that he considers this a betrayal of what the web was designed to be. His most recent project, Solid, is an attempt to build a technical alternative: a protocol for personal data stores that separates your data from the applications that use it, so you own your data and applications request access rather than capturing it. Whether Solid succeeds is an open question. That its inventor felt it necessary is a measure of how thoroughly the enclosure succeeded.</p>` }} />
          </Section>
          <Section id="the-drm-fight" num="05" title="The DRM fight">
            <div dangerouslySetInnerHTML={{ __html: `<p>In 2017, the W3C voted to include Encrypted Media Extensions (EME) — a standard for Digital Rights Management — in the HTML specification. This was the moment that enclosure arrived at the protocol level. DRM in the browser standard meant that content could be locked in ways the open web had never permitted: content that couldn't be saved, copied, modified, or used by accessibility tools without permission from the content owner.</p>
<p>The Electronic Frontier Foundation, which held a W3C membership specifically to participate in standards processes, resigned from the consortium in protest. Berners-Lee personally advocated for a compromise that would have required content owners who used the standard to pledge not to sue security researchers who found vulnerabilities in DRM implementations. The compromise failed. The standard passed. The EFF left.<sup><a href="#fn5" id="ref5">5</a></sup></p>
<p>The vote was, in miniature, the history of the web's enclosure: open infrastructure, built on open protocols, governed by a body that included the companies that had profited most from openness, voting to introduce a mechanism that served the interests of those companies at the expense of the openness that had made the infrastructure valuable in the first place. The commons was used to build the enclosure of the commons.</p>` }} />
          </Section>
          <Section id="what-remains" num="06" title="What remains">
            <div dangerouslySetInnerHTML={{ __html: `<p>The open web is not gone. The protocols are still open. You can still run your own web server, your own email server, your own content publication system, without asking permission from anyone. The web Berners-Lee built still exists underneath the platforms that have enclosed most of its traffic.</p>
<p>The IndieWeb movement, the Fediverse (running on the ActivityPub protocol), and projects like Berners-Lee's own Solid are attempts to rebuild the social layer on open protocols — to create a commons-based alternative to the proprietary social platforms. These are not marginal. Mastodon has millions of users. Email, still running on fully open protocols, remains the largest digital communication system in the world by most measures.</p>
<p>The pattern is <a class="xl" href="how-linux-became-the-internet.html">Linux's pattern</a>: commons infrastructure, patient development, slow accumulation of critical mass, and then sudden relevance when the enclosed alternatives fail visibly. The question is whether the open protocols accumulate enough social infrastructure before the platforms complete their enclosure of the social layer.</p>` }} />
          </Section>
        </div>
        
        <Invitation
          label="07 — The Open Protocol Question"
          headline="He gave it away.<br/>We let it<br/>get taken back."
          coda={`
        He gave it away.<br/>
        The protocols are still there.<br/>
<strong>The question is what we build on them.</strong>
`}
        >
          <p>Tim Berners-Lee made the correct call in 1993. Open protocols produce more value than proprietary ones. The web is the proof — the open protocol layer generated trillions of dollars of economic activity that no single proprietor could have produced or captured. He was right, and he gave away the thing he was right about.</p>
          <p>What happened next is not a story about Berners-Lee making a mistake. It's a story about the structural tendency of any commons to attract enclosure once it becomes valuable. The web became valuable. The platforms enclosed the value. The protocols remained open but the applications on top became the chokepoints. This is what enclosure does: it doesn't destroy the commons, it builds on top of it and captures the rent.</p>
          <p>The response is not nostalgia for the early web. It's the same response it always is: build commons institutions at the layer that's being enclosed. The protocol layer is open — build the social layer on open protocols. The data layer is being captured — build personal data sovereignty into the architecture. The governance layer is being captured by incumbent platforms — build governance mechanisms that don't depend on the incumbents' consent.</p>
          <p>Berners-Lee is still doing this. He's 70 years old and still trying to fix what happened to the thing he built. The fact that the fix requires this much effort is a measure of how thoroughly the enclosure succeeded. The fact that the fight is still going is a measure of what a gift the open protocols actually were.</p>
        </Invitation>

        
        
        <Footnotes notes={FOOTNOTES} />
        <ArticleFooter seriesNote="For People Who Build the Internet — Part III — Berners-Lee" />
      </ArticleWrap>
    </Layout>
  )
}
