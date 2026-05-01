import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = [{id: 'the-problem', label: "The question nobody was asking about technology"}, {id: 'individuation', label: "Individuation: becoming, not being"}, {id: 'associated-milieu', label: "The associated milieu: why tools need communities"}, {id: 'enclosure', label: "What enclosure actually does to technology"}, {id: 'transindividual', label: "The transindividual: how technology connects us"}, {id: 'practice', label: "What this looks like in practice"}, {id: 'what-now', label: "The open protocol as associated milieu"}]
const FOOTNOTES = [
  `Gilbert Simondon, <em>Du mode d'existence des objets techniques</em> (Aubier, 1958). English translation: <em>On the Mode of Existence of Technical Objects</em>, trans. Cecile Malaspina and John Rogove (Univocal Publishing, 2017). The opening chapter develops the critique of both instrumentalist and humanist approaches to technology as two sides of the same misunderstanding — both treat the technical object as something outside culture that humans relate to, rather than as something that participates in the processes of individuation that constitute human life. <a aria-label="Return to text" href="#ref1">↩</a>`,
  `Simondon developed his theory of individuation in his principal doctoral thesis, defended in 1958. Part I was published as <em>L'individu et sa genèse physico-biologique</em> (Presses Universitaires de France, 1964); the complete combined edition, <em>L'individuation à la lumière des notions de forme et d'information</em>, was published by Jérôme Millon in 1995. The concept of metastability — borrowed from thermodynamics, where a system is stable enough to persist but carries enough potential energy to undergo transformation — is central. Simondon contrasts this with the Aristotelian hylomorphic model (form imposed on matter) and the atomist model (individuals as pre-given units that combine). In both cases, individuation is treated as either complete before the process or as mere aggregation. Simondon insists that individuation is an ongoing resolution of tensions that the individual both carries and continues to work through. <a aria-label="Return to text" href="#ref2">↩</a>`,
  `The associated milieu (<em>milieu associé</em>) is developed in Part I of <em>On the Mode of Existence of Technical Objects</em>. Simondon distinguishes between technical elements (components), technical individuals (machines), and technical ensembles (factories, systems) and argues that each level requires a corresponding associated milieu to function. His example of the internal combustion engine — where the cooling water circulating through the engine is neither purely natural nor purely artificial but constitutes the milieu in which the engine individuates — is the clearest illustration of a concept that becomes more complex at the level of social and communicative technology. <a aria-label="Return to text" href="#ref3">↩</a>`,
  `The transindividual is developed in the psychological and collective individuation sections of <em>L'individuation à la lumière des notions de forme et d'information</em>. Simondon draws on Freudian and Jungian concepts of the pre-individual while rejecting the idea that the pre-individual is unconscious in a psychoanalytic sense — it is rather a charge of potential that collective action can discharge, partially and temporarily, creating transindividual relations that exceed what any individual could accomplish. Stiegler extended this concept explicitly toward digital networks and collective memory in his <em>Technics and Time</em> series; Bernard Stiegler, <em>Technics and Time, 1: The Fault of Epimetheus</em>, trans. Richard Beardsworth and George Collins (Stanford University Press, 1998). <!-- VERIFY: Stiegler's engagement with Simondon on transindividual in Technics and Time vol 1 → broadly accurate, though the transindividual engagement deepens in vol 2 and 3 --><a aria-label="Return to text" href="#ref4">↩</a>`
]

export default function Simondon() {
  return (
    <Layout
      title="Gilbert Simondon: Technology Has a Mode of Existence — Power Explained"
      description="Simondon argued that technical objects aren't dead tools — they individuate, evolve, and require an associated community to develop fully. The practical consequence: enclosure doesn't just steal technology. It interrupts its becoming."
      seriesTag="Thinkers"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: 'var(--display)', fontSize: 'clamp(4rem,18vw,12rem)', fontWeight: 700, letterSpacing: '-0.04em', opacity: 0.05, whiteSpace: 'nowrap', pointerEvents: 'none', lineHeight: 1 }}>SIMONDON</div>
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          <span className="hero-eyebrow">Thinker — Philosophy of Technology — Individuation — The Associated Milieu</span>
          <h1 dangerouslySetInnerHTML={{ __html: `Technology Has<br /><em>a Mode of</em><br />Existence` }} />
          <p className="hero-dek">Every tool you've ever used was in the middle of becoming something. Simondon argued that technical objects aren't finished products — they individuate, evolve, and require a community to reach their full development. Enclosing them doesn't just change who profits. It interrupts what they can become.</p>
          <div className="hero-bio">
            <span className="bio-dates">1924 — 1989</span>
            <p className="bio-line" dangerouslySetInnerHTML={{ __html: `Gilbert Simondon: French philosopher, professor at the Sorbonne, largely unknown outside France until decades after his death. His 1958 dissertation on the mode of existence of technical objects circulated in manuscript for years before Deleuze encountered it and recognized it as essential — calling it, in correspondence, the most rigorous account of individuation available. Simondon spent his career building a unified theory of how physical, biological, psychological, and collective beings come into existence through ongoing process rather than as pre-formed substances. The implications are still being worked out.` }} />
          </div>
        </div>
      </div>

      <ArticleWrap>
        <ContentsNav sections={SECTIONS} />
        <div className="body-text">
          
          <Section id="the-problem" num="01" title="The question nobody was asking about technology">
            <div dangerouslySetInnerHTML={{ __html: `<p>By the mid-twentieth century, there were two dominant ways of thinking about machines. The first said that technology is neutral — a tool is just a tool, and what matters is who controls it and for what purpose. The second said that technology shapes society in deep ways, that the assembly line isn't just a way of making cars but a way of organizing human life and relation. Both camps agreed on one thing: the machine itself is an object, a thing, something outside of culture that culture acts upon or is acted upon by.</p>
<p>Simondon rejected this framing entirely. He argued that we don't understand technology because we have never properly understood what a technical object is. We treat it as either an instrument (neutral, purposeless in itself) or a fetish (an alienated product of human labor). Neither account grasps what is actually happening when a machine develops.<sup><a href="#fn1" id="ref1">1</a></sup></p>
<p>His alternative: technical objects have a mode of existence. Not consciousness, not rights, not feelings in any human sense — but a genuine trajectory of development, a logic of becoming, a set of conditions under which they can reach their full form and conditions under which they are stunted or perverted. To understand technology, you have to understand individuation — the process by which any being, technical or otherwise, comes into existence and continues to develop.</p>` }} />
          </Section>
          <Section id="individuation" num="02" title="Individuation: becoming, not being">
            <div dangerouslySetInnerHTML={{ __html: `<p>The standard picture of how things exist goes like this: a thing has a form (its shape, its structure, its identity) and a matter (the physical stuff it's made of). The form is imposed on the matter — the craftsman takes clay and imposes the form of a pot. The thing, once made, is what it is. Individuation — the process of becoming a particular individual thing — is finished when the object exists.</p>
<p>Simondon thought this picture was wrong about everything, including technology. He argued that individuation is never finished. A being — physical, biological, psychological, or technical — is always in the middle of becoming. The individual is not the endpoint of individuation. It is a phase of an ongoing process. What looks like a stable object is actually a metastable state: an equilibrium that maintains itself by continuing to resolve tensions between what it is and what its environment demands of it.<sup><a href="#fn2" id="ref2">2</a></sup></p>
<div class="pull">
        The individual is not the<br/>
        result of individuation.<br/>
        It is individuation<br/>
<strong>in progress.</strong>
</div>
<p>For technology, this means that a tool is not finished when it rolls off the production line. It continues to develop through use, through the problems it encounters, through the modifications people make to it, through the ways it interacts with other tools and with the social forms that grow up around it. A hammer that has been used for decades by one person has a different mode of existence than a new hammer. Linux as it exists today is not the same Linux that Linus Torvalds released in 1991 — it has individuated through thirty years of encounters with every problem the internet has thrown at it.</p>
<p>This is not just poetic language. It has precise implications for how we think about ownership, enclosure, and the commons.</p>` }} />
          </Section>
          <Section id="associated-milieu" num="03" title="The associated milieu: why tools need communities">
            <div dangerouslySetInnerHTML={{ __html: `<p>Simondon introduced the concept of the <strong>associated milieu</strong> to describe the environment that a technical object both depends on and helps to create. The associated milieu is neither purely natural nor purely human — it is the zone of interaction between the technical object and the world it operates in, a zone that the object itself actively constitutes as it functions.<sup><a href="#fn3" id="ref3">3</a></sup></p>
<p>Think about a power plant built on a river. The plant isn't just using the river — it is in relationship with it. The river's temperature affects the plant's efficiency. The plant's operation affects the river's temperature and ecology. Over time, the plant and the river adapt to each other. The associated milieu is that ongoing relationship: neither the plant alone nor the river alone, but the zone of active interaction between them.</p>
<p>For social technology — for software, for communication systems, for the technical infrastructures we use to organize collective life — the associated milieu is primarily human. It is the community of users, developers, maintainers, and observers who interact with the technical object and are shaped by it in turn. The technical object individuates through this community. The community individuates through the technical object. Neither is primary.</p>
<div class="versus">
<div class="versus-side false">
<span class="versus-label">The standard picture</span>
<div class="versus-claim">A technology is built by engineers, then used by people. The tool is one thing; the community is another.</div>
<div class="versus-note">Technology is created and then deployed. Users are customers or operators. The object is finished before it meets the world.</div>
</div>
<div class="versus-side">
<span class="versus-label red">What Simondon shows</span>
<div class="versus-claim">A technology and its associated community individuate together. The object is never finished. The community is never separate from what it uses.</div>
<div class="versus-note">The internet, Linux, Wikipedia — none of these are finished artifacts. They are ongoing individuations whose associated milieu is the global community of people using and building them.</div>
</div>
</div>
<p>The critical point is this: a technical object can only fully individuate if its associated milieu is intact. If the relationship between the object and its community is interrupted — if the community can't respond to the object, modify it, feed their needs back into its development — the object's individuation is stunted. It reaches a limited form and stays there, not because that's its natural endpoint but because the conditions for its continued development have been severed.</p>` }} />
          </Section>
          <Section id="enclosure" num="04" title="What enclosure actually does to technology">
            <div dangerouslySetInnerHTML={{ __html: `<p>Standard critiques of proprietary technology focus on access — who can use it, who can afford it, who is excluded. These are real and important. But Simondon gives us a deeper critique: enclosure doesn't just change who uses the technology. It severs the associated milieu. It interrupts the individuation process. It prevents the technical object from developing into what it could become.</p>
<p>When software is proprietary, the community of users cannot modify it, cannot feed their actual needs back into its development, cannot maintain it against the company's priorities. The result is a technology that individuates according to one set of concerns — profit, control, data extraction — rather than the full complexity of its associated community. The technology becomes simpler, in the bad sense: optimized for capture rather than for the full range of human purposes it could serve.</p>
<div class="callout">
<span class="callout-label">Enclosure as interrupted individuation</span>
<p><strong>The smartphone keyboard</strong> is a simple case. The hardware keyboard of a phone in 2006 individuated with the hands of millions of users — different form factors, different key sizes, different feedback mechanisms, all responsive to what people actually needed. When the touchscreen replaced it, individuating with the platform company's design priorities rather than the user community, something was lost: the diversity of form, the physical feedback, the speed of expert users. The associated milieu narrowed from the full range of user needs to the concerns of a single design team whose interests included locking users to the platform.</p>
<p><strong>The early internet</strong> is a larger case. TCP/IP, email, the web — open protocols that could individuate with the full diversity of uses people invented for them. The enclosure didn't destroy these protocols, but it built proprietary platforms on top of them that progressively captured the associated milieu. Facebook's users can interact with Facebook. They cannot interact with users of other platforms in the way email users can interact across providers. The individuation of the platform is constrained to what the platform company allows. <!-- VERIFY: Accurate characterization of interoperability constraints vs email as of 2026 → this is broadly correct but regulations like EU's DMA are changing this --></p>
<p><strong><a class="xl" href="how-linux-became-the-internet.html">Linux</a></strong> is the counter-case. The GPL license structure maintained the associated milieu by requiring that modifications remain open — that the community's contributions to the technology's individuation remain available to the community. The result is a technical object that has individuated through thirty years of contact with every environment the internet has created. It runs phones, servers, supercomputers, spacecraft — because its individuation was not artificially constrained.</p>
</div>
<p>The implication is sharp: <a class="xl" href="one-pattern.html">enclosure is not just a property rights question</a>. It is an epistemological interruption. When you enclose a technology, you cut it off from the distributed intelligence of its associated community — the people who actually know what problems need solving, what edge cases arise, what modifications would make the tool fit their lives. You replace that distributed intelligence with the narrower intelligence of whoever controls the enclosure. The technology gets worse, in ways that don't always show up immediately, because the associated milieu has been impoverished.</p>` }} />
          </Section>
          <Section id="transindividual" num="05" title="The transindividual: how technology connects us">
            <div dangerouslySetInnerHTML={{ __html: `<p>Individuation doesn't stop at the level of the individual object or the individual person. Simondon extended his framework to describe collective formation — the process by which individuals come together not by merging their identities but by sharing in an ongoing individuation that none of them could accomplish alone. He called this the <strong>transindividual</strong>.<sup><a href="#fn4" id="ref4">4</a></sup></p>
<p>The transindividual is not a group identity. It is not the sum of individuals who have agreed to coordinate. It is a charge of potential — a set of tensions, problems, and unresolved possibilities that exists in a community and that gets discharged, partially, when people find ways to act together. It is the pre-individual dimension of collective life: what is shared before it becomes a shared identity, before it gets named and organized.</p>
<p>Technical objects mediate the transindividual. They carry within them a concentration of collective knowledge, technique, and intention — the accumulated solutions of many people to many problems. When you use a well-designed open tool, you are in contact with that accumulated intelligence. You are connected, through the tool, to the community that built and maintained it. The tool is a transindividual relay: it transmits something between people across time and space that couldn't be transmitted as information alone.</p>
<div class="pull">
        A tool is not just a tool.<br/>
        It carries the intelligence<br/>
        of everyone who made it<br/>
<strong>available to everyone who uses it.</strong>
</div>
<p>This is why <a class="xl" href="mutual-aid-isnt-charity.html">mutual aid networks</a> that develop their own tools — their own tracking systems, their own communication protocols, their own distribution logistics — become more capable over time in ways that go beyond the specific capabilities of the tools. The tools carry the community's accumulated problem-solving intelligence. They are transindividual objects: they don't belong to anyone, and they connect everyone through the shared individuation they embody.</p>
<p>The political implication connects directly to <a class="xl" href="hardt-negri.html">Hardt and Negri's concept of the common</a>: the common is not just what's left over after production. It is actively produced through the transindividual process — through the collective individuation that happens when people share tools, share problems, and share the solutions they find. Enclosing this is not just unfair. It severs the transindividual connection. It takes what was a relay of collective intelligence and makes it a conduit for extraction.</p>` }} />
          </Section>
          <Section id="practice" num="06" title="What this looks like in practice">
            <div dangerouslySetInnerHTML={{ __html: `<p>Simondon's framework generates a different set of questions than standard technology policy. Instead of asking only "who owns this?" or "is this accessible?", it asks: does this technology have an intact associated milieu? Can its user community participate in its individuation? Is the transindividual connection maintained or severed?</p>
<div class="callout">
<span class="callout-label">Questions Simondon's framework generates</span>
<p><strong>Can users modify and feed back?</strong> A technology with an open development process — where users can report problems, propose modifications, and have those modifications incorporated — has a richer associated milieu than one where the development pipeline is internal. This isn't just about software: community land trusts that involve residents in governance decisions are developing their associated milieu. Cooperative care networks that incorporate caregiver knowledge into how care is organized are maintaining the transindividual connection.</p>
<p><strong>Who determines the direction of individuation?</strong> A proprietary platform individuates according to the priorities of whoever controls it — which, under capitalism, means profit and user retention above the actual needs of the user community. An open protocol individuates according to the problems its community actually encounters. This is why <a class="xl" href="open-data-isnt-enough.html">open data is not enough</a> — data that can be read but not responded to, that can be observed but not incorporated into the object's development, does not maintain the associated milieu.</p>
<p><strong>What does the tool carry?</strong> Simondon's concept of the transindividual asks: what accumulated intelligence is embedded in this tool, and is it accessible? Wikipedia carries the accumulated fact-checking and source-weighing intelligence of millions of editors. The GPL Linux kernel carries the accumulated systems knowledge of decades of developers encountering every edge case the internet generates. A proprietary system carries that intelligence too — but walls it off, makes it inaccessible, converts the transindividual relay into a toll booth.</p>
</div>` }} />
          </Section>
          <Section id="what-now" num="07" title="The open protocol as associated milieu">
            <div dangerouslySetInnerHTML={{ __html: `<p>The clearest contemporary example of Simondon's framework in practice is the difference between open protocols and proprietary platforms — not just in terms of who can access them, but in terms of what kind of individuation they permit.</p>
<p>An open protocol — email, the web, federated social networks — maintains a genuinely open associated milieu. Anyone can participate in the protocol's development. Anyone can build on it. The problems that people actually encounter get fed back into the protocol's evolution through open standards processes, through forking, through the competitive pressure of multiple implementations. The protocol individuates through contact with the full diversity of its community.</p>
<p>A proprietary platform maintains a controlled associated milieu. The platform company decides what problems count, what modifications get made, what direction the individuation takes. Users are part of the milieu — the platform needs them — but their participation is shaped and filtered. They can report problems through official channels. They cannot modify the platform. They cannot fork it. They cannot take the intelligence embedded in the platform's code and build something else with it. The associated milieu is an extractive relationship, not a genuinely mutual one.</p>
<p>This is why <a class="xl" href="the-language-was-always-a-commons.html">the enclosure of AI systems</a> represents something new and serious in terms of Simondon's framework. A language model trained on the accumulated written intelligence of human civilization — and then deployed through a controlled API, with no access to weights, no ability to modify or fork or redirect its individuation — is a case of the transindividual connection being enclosed at its most concentrated point. The model carries, in compressed form, the intelligence of the entire associated milieu of human language use. Enclosing it doesn't just change who profits. It severs the connection between that accumulated intelligence and the community that produced it.</p>
<p>The alternative — open weights, community governance of training data, public compute infrastructure — is not just about access. In Simondon's terms, it is about maintaining the associated milieu: ensuring that the technology can continue to individuate through genuine contact with the community whose intelligence it carries.</p>` }} />
          </Section>
        </div>

        <Invitation
          label="07 — The Open Protocol as Associated Milieu"
          headline="Enclosure interrupts<br/>becoming."
          coda={`The tool was in the middle<br/>
        of becoming something.<br/>
<strong>The enclosure stopped the clock.</strong>`}
        >
          <p>The standard argument against proprietary technology is that it's unfair — that the people who built the commons don't get to benefit from it, that access is rationed by price rather than need. This is true and worth saying. But Simondon gives us a deeper argument.</p>
          <p>When you enclose a technology, you don't just take something from its community. You interrupt what the technology is in the process of becoming. You narrow the associated milieu to whoever controls the enclosure. You cut the transindividual connection — the relay of collective intelligence that the technology was building and carrying. You don't just own the tool. You stop the tool from becoming what it could have been.</p>
          <p>This is why the commons matters for technology in a way that goes beyond access or fairness. The commons is the condition under which technical objects can individuate fully — in contact with the full range of human needs, problems, and intelligence. Enclosure is not just redistribution in the wrong direction. It is the interruption of a process that cannot be resumed from where it was cut.</p>
        </Invitation>

        <NextReads items={[
          { href: 'deleuze-guattari', cat: "Thinker", title: "Deleuze & Guattari: The Line of Flight and the War Machine" },
          { href: 'hardt-negri', cat: "Thinker", title: "Hardt & Negri: The Wealth That Capital Cannot Build" },
          { href: 'the-language-was-always-a-commons', cat: "Series V", title: "The Language Was Always a Commons" },
          { href: 'the-agent-and-the-commons', cat: "Series V", title: "The Agent and the Commons" }
        ]} />
        
        <Footnotes notes={FOOTNOTES} />
        <ArticleFooter seriesNote="Thinkers — Gilbert Simondon — On the Mode of Existence of Technical Objects (1958)" />
      </ArticleWrap>
    </Layout>
  )
}
