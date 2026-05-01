import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []
const FOOTNOTES = [
  `Hampton Roads, Virginia has become a significant location for data center development, driven by proximity to undersea cable landing points, available land and power, and state tax incentives. The broader questions of community benefit, environmental cost, and governance of AI infrastructure in specific localities are being engaged by a range of organizations; see the work at <a href="https://mithlond.jason-edelman.org" rel="noopener" target="_blank">Mithlond</a>, which examines these questions specifically in the Hampton Roads context. <!-- VERIFY: current state of Hampton Roads data center development --> <a href="#ref1">↩</a>`,
  `Open model weights have been released by several organizations; notable examples include Meta's Llama series and Mistral AI's models. The distinction between "open weights" and "open source" is substantive: open-source software conventionally includes source code, build instructions, and the ability to reproduce the artifact from scratch. Open-weights models release the trained parameters but typically not the training data or the full training pipeline, making true reproducibility impossible and leaving the training data enclosure intact. The Open Source Initiative has engaged with this distinction in developing criteria for what constitutes "open source AI." <!-- VERIFY: current OSI position on open source AI definition --> <a href="#ref2">↩</a>`,
  `Data cooperatives and data trusts are being developed in various forms. The concept has been advanced by researchers including Sylvie Delacroix and Neil Lawrence, who describe "bottom-up data trusts" in which individuals pool data governance rights rather than surrendering them individually to platforms. See Delacroix, Sylvie and Neil D. Lawrence. "Bottom-up data Trusts: disturbing the 'one size fits all' approach to data governance." <em>International Data Privacy Law</em> 9(4):236–252, 2019. Practical implementations include Driver's Seat Cooperative, a worker-owned data cooperative for gig drivers, and various health data initiatives in Europe. <!-- VERIFY: current status of Driver's Seat and comparable initiatives --> <a href="#ref3">↩</a>`
]

export default function TheLanguageWasAlwaysACommons() {
  return (
    <Layout
      title="The Language Was Always a Commons — Power Explained"
      description="Linux was built on a commons of formal code. AI is being built on a commons of human language — every book, argument, letter, and idea ever written down. That's a different kind of enclosure. And the decisions about who governs it are being made right now."
      seriesTag="Where We Go From Here — Series V"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `The Language Was Always a Commons` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>To train a language model, you feed it text. Vast quantities of text — books, articles, encyclopedias, scientific papers, legal documents, forum threads, code, poetry, letters, transcripts, every form of human writing that has been digitized. The model reads this corpus and learns the statistical patterns that govern how human beings use language: which words follow which other words, how arguments are structured, how questions get answered, how meaning is made. It is learning, in a very literal sense, from the accumulated written thought of civilization.</p>
<p>That corpus is a commons. Not metaphorically — structurally. It was produced collectively, by billions of people across centuries, under no single authority's direction, for no single purpose. No individual or institution created the English language, or the tradition of scientific writing, or the conventions of legal argument, or the way a story builds tension. Those things were built collectively, through use, through the ongoing social process of people communicating with each other across time. The knowledge encoded in any substantial corpus of human writing is communally owned in the only sense that matters: it was communally produced and no one has a legitimate claim to have built it alone.</p>
<p>The model trained on that corpus is something different. It is a private artifact, owned by whoever built it, whose access is controlled, whose outputs are monetized, whose governance answers to shareholders. The commons went in. The enclosure came out.</p>
<h2>Two kinds of commons, two kinds of enclosure</h2>
<p>Open-source software is built on a Turing-machine commons: formal code, governed by a precise grammar, discrete and replicable. The commons of code has edges you can see. A contribution is a specific set of instructions that either compile or don't, that do a specific thing that can be tested. The governance tools that protect it — the licenses that require derivative works to remain open — work because code is bounded. You can fork a codebase. You can run two versions. You can compare them.</p>
<p>Language models are built on a natural-language commons, and the difference is not a matter of degree. Natural language is not a formal system. Its meaning is not computable from its grammar alone — it depends on context, shared assumption, the accumulated pragmatic conventions of communities of speakers, the entire social history of how words have been used. The commons of language does not have edges you can see. It is not a repository you can fork. It is the shared substrate of human meaning-making: the thing that makes communication possible, that we all participate in every time we speak or write or read.</p>
<p>This changes what enclosure means.</p>
<p>When proprietary software enclosed code, what was enclosed was a specific artifact: this program, these instructions, this implementation. The commons of code remained available for anyone to use to build something else. The enclosure was partial — damaging, limiting, but not totalizing.</p>
<p>When a language model encloses natural language, what is being enclosed is not an artifact derived from the commons. It is the commons distilled. The model does not merely use human language as raw material and produce something separate from it. The model <em>is</em> the accumulated patterns of human language, compressed and made queryable. Its outputs are reconstructions of the commons. And if access to those reconstructions is controlled — priced, surveilled, withdrawn at will, filtered by the priorities of whoever owns the system — then the commons itself has been made artificially scarce, by people who did not build it.</p>
<div class="pull">
        The model doesn't use the commons<br/>
        as raw material.<br/>
        The model <strong>is the commons</strong>,<br/>
        compressed and enclosed.
      </div>
<h2>The agent in the commons</h2>
<p>There is a second difference, and it compounds the first.</p>
<p>A software program runs and produces outputs — it does not participate in the ongoing social process that produces meaning. A language model does. Its outputs become text in the world. People read them, respond to them, are influenced by them, incorporate them into their own writing, which becomes training data for subsequent models. The agent is not merely a product of the language commons. It is an actor in it — and an actor whose outputs, at the scale of current deployment, are reshaping the commons from which it was made.</p>
<p>This is a form of enclosure with no historical parallel. The landlord who encloses common land does not thereby alter the nature of land itself. The platform that encloses social attention does not change the structure of human sociability, though it shapes its expression. But an AI system that operates at scale within the natural-language commons, generating text that becomes part of the cultural and informational environment, is participating in the ongoing production of the commons it was trained on — while that commons remains under private governance.</p>
<p>Who decides what values, what framings, what knowledge, what ways of making meaning get amplified or suppressed? Who is accountable when the language commons is being shaped, at scale, by systems whose governance is internal to private institutions? These are not hypothetical future questions. They are present-tense governance questions being answered right now, by default, in the absence of commons governance structures that could answer them differently.</p>
<h2>The physical layer</h2>
<p>The language commons is immaterial — text, meaning, accumulated human thought. But the infrastructure required to enclose it is very physical indeed.</p>
<p>Training and running large AI systems requires data centers: buildings full of servers, consuming enormous quantities of electricity, requiring substantial water for cooling, occupying land, generating heat, drawing on local power grids and water systems. That infrastructure is being built now, rapidly, in communities across the country and around the world — often communities that were selected precisely because land and power were available and local regulatory resistance was manageable.</p>
<p>The communities hosting this infrastructure bear its costs: the power load on local grids, the industrial footprint, the water consumption, the transformation of the local built environment. The economic benefits — the jobs, the tax revenue, the supposed spillover from being adjacent to a technology hub — flow partly to those communities and substantially to the owners of the systems the infrastructure serves, who are typically not in those communities and whose stake in them begins and ends with the viability of the facility.</p>
<p>This is the Narmada pattern in a new form. <a class="xl" href="the-commons-they-never-stopped-building.html">Arundhati Roy</a> described it for dams: the greater common good is invoked to justify infrastructure whose benefits flow elsewhere and whose costs are borne locally. The data center version of this argument is already in use. The benefits of AI accrue to humanity broadly. The costs — power, water, land, heat — accrue to whoever is downwind and downstream of the facility.</p>
<p>The question Roy insisted on asking — who benefits, who pays, and are those honestly accounted for — is the right question for AI infrastructure. It is being asked, in specific places, by specific communities. In Hampton Roads, Virginia, where data center development is accelerating as part of the broader AI infrastructure buildout, the questions of who owns the facilities, who governs them, and whether communities receive structural economic benefit — not just jobs but equity, not just tax revenue but governance — are live questions that will be answered in the next several years, one way or another.<sup><a href="#fn1" id="ref1">1</a></sup></p>
<h2>What commons governance looks like at the live edge</h2>
<p>The governance decisions that determine whether AI infrastructure becomes a private enclosure or a shared commons are being made now — in the same way that the governance decisions about Linux's license were made in 1991, before anyone knew what was at stake. The difference is that we have the benefit of watching what happened when those early decisions were made well and when they were made badly. We know what the GPL protects against. We know what permissive licensing enables. We are not working without a map.</p>
<p>Open model weights — AI systems whose underlying parameters are publicly released — are the first step toward a commons-governed AI layer, in the same way that open-source code was the first step toward a commons-governed software layer. A model whose weights are public can be run locally, modified, audited, and improved by anyone with the compute to work with it. The enclosure at the access layer is broken. This matters. It is not sufficient — releasing weights without releasing training data or providing public compute is like releasing compiled code without the source — but it is a real and meaningful step in the right direction.<sup><a href="#fn2" id="ref2">2</a></sup></p>
<p>Data cooperatives — structures in which communities pool their data under collective governance rather than surrendering it to platforms — address the training commons directly. If the value of a language model derives from the data it was trained on, then the people who produced that data have a governance claim on the resulting system. Data cooperatives make that claim institutional: the data has collective owners, the collective owners have governance rights, and the system trained on their data is accountable to them.<sup><a href="#fn3" id="ref3">3</a></sup></p>
<p>Public compute infrastructure — compute capacity owned and operated as a public utility, accessible to researchers, small organizations, and communities that cannot afford the capital costs of training — addresses the infrastructure layer. The internet's foundational infrastructure was built with public investment and governed as a commons. The argument for public compute is the same: if AI infrastructure is as consequential as the internet, leaving it entirely to private capital produces the same concentrations and the same capture, for the same reasons.</p>
<div class="callout">
<span class="callout-label">This is 1993</span>
<p>Linux existed in 1993. It ran on a small fraction of computers. The decisions that had been made about its license were not yet visibly important — the infrastructure hadn't been built, the corporations hadn't arrived, the stakes weren't legible from the outside. But the decisions made in 1991 and 1992 determined what was possible in 2007 when Android arrived, and in 2015 when cloud computing consolidated, and today when Linux runs the majority of the world's servers.</p>
<p>We are in 1993 for AI governance. The decisions being made now — about model weights, about training data rights, about who owns compute infrastructure, about what communities receive in exchange for hosting data centers — will determine the structure of the next technology layer for decades. The window for commons governance is open. It will not remain open indefinitely.</p>
</div>
<h2>The choice available now</h2>
<p>The natural-language commons was built by everyone. It belongs, in the only meaningful sense, to everyone. The systems trained on it are among the most consequential pieces of infrastructure being built in our lifetimes — not because of any particular capability, but because they mediate access to the accumulated knowledge of civilization and because they are actors in the ongoing production of shared meaning.</p>
<p>Governing them as a commons — building the licenses, the data rights structures, the public infrastructure, the community accountability mechanisms that keep them oriented toward shared benefit — is not a technical problem. It is the same problem the Linux contributors solved in 1991 when they chose a license that prevented enclosure, the same problem the community land trust founders solved in 1969 when they built resale restrictions into the deed, the same problem the credit union organizers solved a hundred years ago when they wrote one-member-one-vote into the bylaws.</p>
<p>The problem is governance. The solution is the commons. The choice is available now, while the architecture is still being designed and the physical infrastructure is still being sited and the governance norms are still being established.</p>
<p>Nobody has to make that choice. That is exactly the point.</p>` }} />
        </div>
        
        
        
        <Footnotes notes={FOOTNOTES} />
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
