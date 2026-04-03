import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = [{id: 'the-essay', label: "The essay that changed how we think about software"}, {id: 'what-raymond-got-right', label: "What Raymond got right"}, {id: 'the-wrong-turn', label: "The wrong turn"}, {id: 'ostrom-vs-raymond', label: "What Ostrom adds"}, {id: 'the-capture', label: "How the framework got captured"}, {id: 'what-it-means', label: "What it means for tech workers now"}]
const FOOTNOTES = [
  `Eric S. Raymond, "The Cathedral and the Bazaar," first presented at the Linux Kongress, Würzburg, Germany, May 1997; published in revised form in <em>First Monday</em> 3, no. 3 (March 1998) and collected in <strong>The Cathedral and the Bazaar: Musings on Linux and Open Source by an Accidental Revolutionary</strong> (O'Reilly, 1999). The essay is freely available at catb.org. "Linus's Law" — Raymond's coinage, not Torvalds's — states: "Given enough eyeballs, all bugs are shallow." The empirical validity of the claim has been debated; the strongest evidence comes from the security record of widely-reviewed open source cryptographic implementations versus closed-source alternatives. <a aria-label="Return to text" href="#ref1">↩</a>`,
  `The "open core" business model — a free, open source core product with proprietary extensions or services — has been criticized by free software advocates as a form of commons enclosure since the early 2000s. The most prominent recent controversy was the Redis Labs relicensing in 2018 and the HashiCorp Business Source License adoption in 2023, both of which restricted use of popular open source tools by cloud providers. These cases illustrate both the vulnerability of open source commons to enclosure by original developers and the difficulty of maintaining commons governance when commercial interests are large. The analysis of open core as enclosure is developed in detail in Dirk Riehle's work on commercial open source. <a aria-label="Return to text" href="#ref2">↩</a>`,
  `Elinor Ostrom, <strong>Governing the Commons: The Evolution of Institutions for Collective Action</strong> (Cambridge University Press, 1990). Ostrom's eight design principles for robust commons institutions are listed in chapter 3. The application of Ostrom's framework to open source software governance has been developed by several researchers; see in particular Yochai Benkler, "Coase's Penguin, or Linux and the Nature of the Firm," <em>Yale Law Journal</em> 112 (2002): 369–446, which is the most rigorous academic analysis of why commons-based peer production works and why it differs from both markets and firms. <a aria-label="Return to text" href="#ref3">↩</a>`,
  `The underfunding and burnout of open source maintainers has been documented extensively since the 2014 Heartbleed vulnerability revealed that the OpenSSL library — used by the majority of the internet's encrypted connections — was maintained by two people, one of whom was part-time. The Ford Foundation and others subsequently funded the Core Infrastructure Initiative to address this. The problem is structural: open source commons produce enormous external value that is captured by commercial users, while the maintenance costs remain with voluntary contributors. For a comprehensive treatment, see Nadia Eghbal, <strong>Working in Public: The Making and Maintenance of Open Source Software</strong> (Stripe Press, 2020). <a aria-label="Return to text" href="#ref4">↩</a>`
]

export default function TechRaymond() {
  return (
    <Layout
      title="The Bazaar Was Right, the Politics Were Wrong — Power Explained"
      description="Eric Raymond wrote the most influential description of how open source actually works. His theory was correct. His political conclusions pointed in exactly the wrong direction."
      seriesTag="For People Who Build the Internet — Part IV"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: 'var(--display)', fontSize: 'clamp(4rem,18vw,12rem)', fontWeight: 700, letterSpacing: '-0.04em', opacity: 0.05, whiteSpace: 'nowrap', pointerEvents: 'none', lineHeight: 1 }}>BAZAAR</div>
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          <span className="hero-eyebrow">For People Who Build the Internet — Part IV — Raymond</span>
          <h1 dangerouslySetInnerHTML={{ __html: `The Bazaar<br /><em>Was Right,</em><br />the Politics<br />Were Wrong` }} />
          <p className="hero-dek">Eric Raymond wrote the most influential description of how open source actually works. His theory of why distributed development outcompetes hierarchical development was correct and important. His political conclusions pointed in exactly the wrong direction.</p>
          
          <div className="hero-bio">
            <span className="bio-dates">b. 1957</span>
            <p className="bio-line" dangerouslySetInnerHTML={{ __html: `Eric Steven Raymond: programmer, author, open source advocate, libertarian. Best known for "The Cathedral and the Bazaar" (1997), a field observation of the Linux development model that became the foundational text of the open source movement. Coined the term "open source" (with Christine Peterson) as a deliberate alternative to "free software," positioning the movement in terms of development efficiency rather than software freedom. Has held increasingly extreme libertarian political positions since the early 2000s.` }} />
          </div>
        </div>
      </div>

      <ArticleWrap>
        <ContentsNav sections={SECTIONS} />
        <div className="body-text">
          
          <Section id="the-essay" num="01" title="The essay that changed how we think about software">
            <div dangerouslySetInnerHTML={{ __html: `<p>In 1997, Eric Raymond presented "The Cathedral and the Bazaar" at a Linux conference in Germany. The essay described, from the inside, what was actually happening in the Linux development community — and why it was producing software that was outcompeting the products of large, well-funded, hierarchically managed software companies.</p>
<p>The cathedral was the traditional software development model: a small, carefully chosen team, building in private, releasing finished versions to the public. Controlled, planned, hierarchical. The bazaar was Linux: a chaotic-seeming, globally distributed community of contributors, developing in the open, releasing early and often, with Linus Torvalds as a coordinator rather than an architect. No master plan. No finished design. Constant iteration driven by thousands of people scratching their own itches.</p>
<p>The essay's central observation — "given enough eyeballs, all bugs are shallow" — became famous as Linus's Law. The claim was that open development, with many contributors examining the code, finds and fixes bugs faster than closed development with a small team. The distributed, open model was not just more ethical or more ideologically consistent. It was better engineering.<sup><a href="#fn1" id="ref1">1</a></sup></p>
<p>The essay helped catalyze the rebranding of "free software" as "open source" in 1998, a deliberate move to frame the movement in terms of development methodology rather than software freedom — to make it legible to corporations as a business argument rather than as a political one. This framing was enormously effective. Within a decade, major corporations were contributing to Linux. Today it runs most of the world's servers, phones, and infrastructure.</p>` }} />
          </Section>
          <Section id="what-raymond-got-right" num="02" title="What Raymond got right">
            <div dangerouslySetInnerHTML={{ __html: `<p>Raymond's description of why the bazaar works is a description of the commons in operation. He identified, from observation rather than theory, exactly the properties that <a class="xl" href="ostrom.html">Elinor Ostrom</a> spent her career documenting in non-software commons: distributed knowledge, peer monitoring, community governance, adaptation through iteration.</p>
<p>The key insight is that knowledge about a software system is distributed — no single person, no matter how skilled, knows everything about a complex codebase. The people who know about particular bugs are often the people who encountered them in use. The people who know the best fix for an edge case are often the people who hit the edge case. A development model that enlists all of that distributed knowledge will outperform one that tries to centralize it.</p>
<p>This is <a class="xl" href="your-city-knows-less.html">the same argument applied to city governance</a>: the people who know which intersection is dangerous, which building is deteriorating, which service is failing are the people who use those things. A governance model that enlists that distributed knowledge will outperform one that tries to centralize it in an agency that doesn't have it.</p>
<div class="pull">
        The bazaar works for the same reason<br/>the commons works:<br/><strong>distributed knowledge beats centralized ignorance.</strong>
</div>
<p>Raymond also identified, implicitly, the importance of <a class="xl" href="hardin-was-wrong.html">Ostrom's governance design principles</a>: clear community norms, peer monitoring, conflict resolution mechanisms, the ability to modify rules. Linux's development process has all of these. The Linus's Law claim — that many eyes find bugs — is the software version of Ostrom's finding that communities with good governance manage commons resources better than either private ownership or central control.</p>` }} />
          </Section>
          <Section id="the-wrong-turn" num="03" title="The wrong turn">
            <div dangerouslySetInnerHTML={{ __html: `<p>Raymond drew the wrong conclusion from his own correct observations. His political framework was libertarian: the bazaar worked because it was like a market — decentralized, voluntary, driven by self-interest. The implication was that open source demonstrated the superiority of market mechanisms over hierarchical control.</p>
<div class="versus">
<div class="versus-side false">
<span class="versus-label">Raymond's conclusion</span>
<div class="versus-claim">The bazaar works because it's like a market. Decentralized, voluntary exchange. Self-interest produces emergent order.</div>
<div class="versus-note">Implies: maximize individual freedom, minimize coordination, trust self-interest to produce good outcomes. Open source as vindication of market liberalism.</div>
</div>
<div class="versus-side">
<span class="versus-label red">What the evidence shows</span>
<div class="versus-claim">The bazaar works because it's a commons. Shared governance, collective maintenance, norms enforced by the community.</div>
<div class="versus-note">Implies: the commons outperforms both market and hierarchy for certain kinds of resources. Open source as vindication of commons governance.</div>
</div>
</div>
<p>The distinction is not semantic. Markets allocate by price, which means resources go to whoever can pay most. Commons governance allocates by need and collective decision, which means resources go where the community decides they're most useful. Linux did not get better because contributors were paid to improve it. It got better because contributors improved it in ways they cared about, governed by community norms that channeled those contributions productively.</p>
<p>Raymond's market framing made open source legible to corporations, which was strategically effective in the short term. But it also opened the door to exactly the enclosure that <a class="xl" href="tech-berners-lee.html">Berners-Lee watched happen to the web</a>: corporations could participate in open source as contributors while simultaneously building proprietary layers on top of it, capturing the value of the commons without contributing proportionally to its maintenance. The "open core" model — open source foundation, proprietary extensions — is the direct product of Raymond's framing, and it's a form of enclosure.<sup><a href="#fn2" id="ref2">2</a></sup></p>` }} />
          </Section>
          <Section id="ostrom-vs-raymond" num="04" title="What Ostrom adds">
            <div dangerouslySetInnerHTML={{ __html: `<p>Elinor Ostrom's research on commons governance — the Swiss villages, the Japanese forests, the Spanish water courts — found the same thing Raymond found in Linux, but theorized it correctly. She didn't find that commons worked because they were like markets. She found that commons worked because they had specific governance properties: defined membership, rules matched to local conditions, collective choice arrangements, monitoring, graduated sanctions, and the ability to modify the rules.<sup><a href="#fn3" id="ref3">3</a></sup></p>
<p>Applied to software: Linux works not because contributors are pursuing self-interest in a market, but because the Linux community has governance — maintainer hierarchies, patch review processes, community norms about code quality, mechanisms for resolving disputes about what to include and what to reject. The governance is what makes the distributed knowledge usable. Without it, the bazaar is just noise.</p>
<p>Ostrom's framework also explains why some open source projects fail. Projects without clear governance — where anyone can commit anything, where there are no maintainers with authority to make decisions, where conflicts get resolved by forking rather than by working through — often produce mediocre software or collapse into inactivity. The commons requires governance. Raymond's market framing obscures this, because markets (in the ideology) govern themselves through price signals and don't require explicit institutional design.</p>` }} />
          </Section>
          <Section id="the-capture" num="05" title="How the framework got captured">
            <div dangerouslySetInnerHTML={{ __html: `<p>Raymond's libertarian reframing of open source had a strategic goal: make it palatable to corporations that were hostile to Richard Stallman's "free software" framework, which emphasized political freedom and was explicitly critical of proprietary software as an ethical failure. The rebranding worked. Netscape released its browser source code in 1998 partly on the basis of Raymond's arguments. IBM, Red Hat, and others built open source businesses in the following years.</p>
<p>What the rebranding also did was remove the political teeth from the movement. "Free software" was a political claim: software freedom matters, proprietary software is a form of power over users, the commons should be defended on principle. "Open source" was a development methodology claim: distributed development produces better software. The first framing makes enclosure a political problem. The second makes it a neutral business decision.</p>
<div class="callout">
<span class="callout-label">The strategic trade-off</span>
<p><strong>What the rebranding gained:</strong> corporate adoption, mainstream legitimacy, Linux on every server, Android on every phone, open source as default infrastructure for the internet economy.</p>
<p><strong>What the rebranding cost:</strong> the political framework for resisting enclosure. When Amazon builds massive businesses on open source code while contributing minimally to its maintenance, the "open source" framing has no vocabulary for calling that what it is. The "free software" framing does: it's a free rider problem, and it's a political problem, not just a governance puzzle.</p>
<p>This is <a class="xl" href="gramsci.html">hegemony in technical culture</a>: the commons got institutionalized, but the language used to institutionalize it stripped out the politics that would have defended it against enclosure. The bazaar won the software argument and lost the political one.</p>
</div>` }} />
          </Section>
          <Section id="what-it-means" num="06" title="What it means for tech workers now">
            <div dangerouslySetInnerHTML={{ __html: `<p>If you work in tech, you work on a commons substrate you almost certainly didn't pay for. The programming languages, the frameworks, the libraries, the protocols, the operating systems — most of what you use to build things is open source, collectively maintained, given freely. Your employer's proprietary product rides on a commons that your employer did not produce and typically contributes to minimally.</p>
<p>Raymond's framework says this is fine — the market will sort it out, contributors will be compensated through reputation and employment, the bazaar will maintain itself. The evidence says otherwise. Open source maintainers are chronically underfunded, burnt out, and subject to harassment from users who treat them as service providers rather than community members.<sup><a href="#fn4" id="ref4">4</a></sup> The commons that the internet runs on is maintained by a small number of people who are doing it for reasons that have nothing to do with market incentives.</p>
<p>Linus Torvalds has maintained the Linux kernel for thirty years. Steve Wozniak gave away his early designs at the Homebrew Computer Club with no expectation of return. John Carmack open-sourced the Quake engine in 1999, making possible a generation of game developers who built on it freely. None of these were market decisions. They were gifts — acts of contribution to a commons that these builders understood was the substrate their own work depended on. The market framing doesn't explain them and doesn't protect them.</p>` }} />
          </Section>
        </div>
        
        <Invitation
          label="07 — The Correct Conclusion"
          headline="The bazaar works<br/>because it's a commons,<br/>not a market."
          coda={`
        Raymond described the commons correctly.<br/>
        He just didn't know<br/>
<strong>that's what it was.</strong>
`}
        >
          <p>Raymond's essay is still worth reading. His observation of what was happening in the Linux community was accurate and important. The distributed model does outperform the hierarchical one for the reasons he identified: distributed knowledge, many eyes, rapid iteration, community-governed standards.</p>
          <p>But the conclusion to draw from this is Ostrom's, not Hayek's. What the bazaar demonstrates is that commons governance — shared resources, collective maintenance, community norms, distributed decision-making — outperforms both hierarchical control and uncoordinated individual competition for certain kinds of resources. Software is one of those resources. Knowledge is another. Infrastructure is a third.</p>
          <p>The political implication is not libertarianism. It's the opposite: the commons requires active governance and active defense against enclosure. The bazaar doesn't maintain itself. Linux has maintainers, processes, governance. The web has the W3C. Wikipedia has an editorial community. None of these are markets. They are commons institutions — collectively governed, collectively maintained, defended against the enclosure that their own value attracts.</p>
          <p>If you build the internet, you are a commons producer. The question is whether you have the political vocabulary to defend what you produce — or whether you've been handed a framework that strips out the politics just when you need them most.</p>
        </Invitation>

        
        
        <Footnotes notes={FOOTNOTES} />
        <ArticleFooter seriesNote="For People Who Build the Internet — Part IV — Raymond" />
      </ArticleWrap>
    </Layout>
  )
}
