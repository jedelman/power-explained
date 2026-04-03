import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = [{id: 'category-error', label: "The category error: commons vs. open access"}, {id: 'empirical-record', label: "The empirical record: cases that shouldn't exist"}, {id: 'iad', label: "The IAD framework: what makes governance analyzable"}, {id: 'principles', label: "The eight design principles: annotated"}, {id: 'polycentric', label: "Polycentric governance: beyond the false binary"}, {id: 'objections', label: "Standard objections, addressed"}]
const FOOTNOTES = [
  `Hardin, G. (1968). "The Tragedy of the Commons." <em>Science</em> 162(3859):1243–1248. doi:10.1126/science.162.3859.1243. One of the most-cited papers in academic history; reprinted in over 100 anthologies. <a href="#ref1">↩</a>`,
  `Huxley, T.H. (1888). "The Struggle for Existence in Human Society." <em>The Nineteenth Century</em> 23 (February 1888). Huxley described nature as "a continuous free fight" and the natural state of mankind as "a Hobbesian war of each against all." Kropotkin's <em>Mutual Aid</em> (1902) was written explicitly in response to this lecture and the scientific tradition it represented. <a href="#ref2">↩</a>`,
  `Hardin, G. (1991). "The Tragedy of the 'Unmanaged' Commons: Population and the Disguises of Providence." In R.V. Andelson (ed.), <em>Commons Without Tragedy</em>. London: Shepheard-Walwyn. This is the earliest appearance of Hardin's reframing of his 1968 argument around the "unmanaged" qualifier. <a href="#ref3">↩</a>`,
  `Hardin, G. (1994). "The tragedy of the unmanaged commons." <em>Trends in Ecology &amp; Evolution</em> 9(5):199. doi:10.1016/0169-5347(94)90097-3. A one-page note; the title adopts the "unmanaged" framing but does not contain the explicit "weightiest mistake" language. <a href="#ref4">↩</a>`,
  `Hardin, G. (1998). "Extensions of 'The Tragedy of the Commons'." <em>Science</em> 280(5364):682–683. doi:10.1126/science.280.5364.682. The direct quotation: "To judge from the critical literature, the weightiest mistake in my synthesizing paper was the omission of the modifying adjective 'unmanaged.'" He then writes: "A 'managed commons' describes either socialism or the privatism of free enterprise. Either one may work; either one may fail: 'The devil is in the details.' But with an unmanaged commons, you can forget about the devil: As overuse of resources reduces carrying capacity, ruin is inevitable." Note that Hardin frames this as a "nuance" rather than a refutation of his original policy conclusions. Ostrom's critique goes further: the category error corrupts the analysis, not just the title. <a href="#ref5">↩</a>`,
  `Netting, R.M. (1981). <em>Balancing on an Alp: Ecological Change and Continuity in a Swiss Mountain Community</em>. Cambridge University Press. Netting's ethnographic study of Törbel, drawing on community records going back 350 years, preceded Ostrom's use of the case. He documented the "Kuh-Regel" (cow rule): no citizen could send more cattle to the alp than they could feed through winter. Ostrom cites documents from 1224, 1483, 1517, and later. The 1224 document is the earliest dated record of communal governance; the 1483 bylaws are the founding formal charter of the commons institution as Ostrom analyzes it. <a href="#ref6">↩</a>`,
  `Ostrom, V., Tiebout, C.M., &amp; Warren, R. (1961). "The Organization of Government in Metropolitan Areas: A Theoretical Inquiry." <em>American Political Science Review</em> 55(4):831–842. doi:10.2307/1952530. This paper introduced "polycentricity" into political science, though Vincent Ostrom later acknowledged that the term itself originated with philosopher and chemist Michael Polanyi (1951). The paper challenged the dominant view that the "multiplicity of political units in a metropolitan area is essentially a pathological phenomenon." <a href="#ref7">↩</a>`,
  `Ostrom, E. (2010). "Beyond Markets and States: Polycentric Governance of Complex Economic Systems." <em>American Economic Review</em> 100(3):641–672. doi:10.1257/aer.100.3.641. This is the published version of her December 8, 2009 Nobel Prize lecture delivered in Stockholm. The lecture is also available as a Nobel Foundation recording. <a href="#ref8">↩</a>`,
  `Ostrom, E. (1990). <em>Governing the Commons: The Evolution of Institutions for Collective Action</em>. Cambridge University Press. The eight design principles appear in Chapter 3. Subsequent scholarship has refined and in some cases expanded the principles (see Cox, Arnold, &amp; Tomás 2010, "A Review of Design Principles for Community-based Natural Resource Management," <em>Ecology and Society</em>), but the original formulation remains the canonical reference. <a href="#ref9">↩</a>`,
  `The Tribunal de las Aguas de Valencia is described by Britannica as having been "in existence at least since the 10th century." The most commonly cited founding date is approximately 960 CE, during the reigns of Caliphs Abd al-Rahman III and Al-Hakam II — though scholars note this is partly reconstructed tradition rather than a documented historical fact, as the Tribunal conducted all proceedings orally and kept no written records. King James I of Aragon formally confirmed the Tribunal's authority after the 1238 Christian reconquest of Valencia, decreeing it should continue "as was established and become custom." UNESCO inscribed the Tribunal as Intangible Cultural Heritage of Humanity in 2009 (alongside the Council of Good Men of the plain of Murcia). It meets every Thursday at noon outside Valencia Cathedral and remains in continuous operation. <a href="#ref10">↩</a>`
]

export default function Ostrom() {
  return (
    <Layout
      title="Elinor Ostrom: The Argument From Evidence — Power Explained"
      description="Hardin's 1968 model assumes no communication, no history, and no social structure — then concludes that cooperation fails. Ostrom spent thirty years finding communities that had been cooperating successfully for centuries. The model was wrong. Here is the evidence and the argument."
      seriesTag="Thinkers"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: 'var(--display)', fontSize: 'clamp(4rem,18vw,12rem)', fontWeight: 700, letterSpacing: '-0.04em', opacity: 0.05, whiteSpace: 'nowrap', pointerEvents: 'none', lineHeight: 1 }}>Q: </div>
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          <span className="hero-eyebrow">Thinker — Institutional Economics — Governing the Commons</span>
          <h1 dangerouslySetInnerHTML={{ __html: `Elinor Ostrom` }} />
          <p className="hero-dek">Hardin's 1968 model assumes no communication, no history, no social structure, and no rules — then concludes that collective management fails. Ostrom spent thirty years finding communities that had been managing shared resources successfully for centuries without privatization or state control. She documented what they had in common. In 2009 the Nobel committee called it a fundamental challenge to received wisdom. Here is the case she built.</p>
          <div className="hero-bio">
            <span className="bio-dates"></span>
            <p className="bio-line" dangerouslySetInnerHTML={{ __html: `` }} />
          </div>
        </div>
      </div>

      <ArticleWrap>
        <ContentsNav sections={SECTIONS} />
        <div className="body-text">
          
          <Section id="category-error" num="01" title="The category error: commons vs. open access">
            <div dangerouslySetInnerHTML={{ __html: `<p>Garrett Hardin's "The Tragedy of the Commons" (<em>Science</em>, 1968)<sup><a href="#fn1" id="ref1">1</a></sup> is built on a scenario: a pasture open to all herders. Each herder, acting rationally, will add one more animal because the benefit accrues to them while the cost of overgrazing is shared across all users. The logic iterates to collapse. Hardin concluded that <em>shared</em> governance of common-pool resources is structurally unstable. The only escapes are private property or state regulation.</p>
<p>This conclusion followed analytically from the model. The model's central assumption — a pasture "open to all," with no membership rules, no communication, no governance history — was never interrogated. Hardin labeled it "a commons." It isn't. It's an <strong>open-access regime</strong>, which is the opposite of a commons.</p>
<div class="callout highlight">
<span class="callout-label">The definitional distinction</span>
<p><strong>Open access:</strong> no defined boundaries, no membership, no rules for use, no exclusion mechanism. Any actor can extract any amount at any time. This is Hardin's pasture. It is correct that open-access resources face severe collective action problems.</p>
<p><strong>Commons:</strong> bounded membership, defined rules for use, accountability mechanisms, and — critically — the governance capacity of the members themselves. The institutional content of a commons is precisely what Hardin's model assumes away.</p>
<p>The error is not minor. Privatization advocates spent decades using a model that assumes the absence of governance to argue against governance. Ostrom's first and most lasting contribution is demonstrating that the variable Hardin held constant — community governance capacity — is empirically the decisive one.</p>
</div>
<p>Hardin himself eventually acknowledged the error, in stages. In a 1991 book chapter he first reframed the argument around the "unmanaged" commons.<sup><a href="#fn3" id="ref3">3</a></sup> A brief 1994 note in <em>Trends in Ecology &amp; Evolution</em> used "unmanaged" in its title.<sup><a href="#fn4" id="ref4">4</a></sup> In a 1998 <em>Science</em> essay he was explicit: the "weightiest mistake" in his original paper "was the omission of the modifying adjective 'unmanaged'" — and a managed commons "describes either socialism or the privatism of free enterprise. Either one may work; either one may fail: 'The devil is in the details.'"<sup><a href="#fn5" id="ref5">5</a></sup> The policy apparatus built on the 1968 formulation did not adjust accordingly. Ostrom's work is, in part, the extended empirical brief for why it should have.</p>` }} />
          </Section>
          <Section id="empirical-record" num="02" title="The empirical record: cases that shouldn\'t exist">
            <div dangerouslySetInnerHTML={{ __html: `<p>If Hardin's model were correct, durable self-governing commons would be rare or absent from the historical record. They are neither. Ostrom and her colleagues at the Workshop in Political Theory and Policy Analysis at Indiana University documented dozens of cases across centuries and continents. Several have been operating continuously since the medieval period.</p>
<div class="case-table">
<div class="case-table-header">
<span>Case</span>
<span>Operating Since</span>
<span>Status</span>
</div>
<div class="case-row">
<div class="case-cell">
<span class="case-name">Törbel, Switzerland</span>
<span class="case-desc">Alpine village (Canton Valais) governing summer mountain pastures, forests, and irrigation channels. Records of communal agreements date to 1224; formal bylaws regulating collective use documented from 1483. Studied first by anthropologist Robert Netting (1981),<sup><a href="#fn6" id="ref6">6</a></sup> then by Ostrom.</span>
</div>
<div class="case-cell"><span class="case-since">Records from 1224;<br/>bylaws from 1483</span></div>
<div class="case-cell"><span class="case-status active">Active</span></div>
</div>
<div class="case-row">
<div class="case-cell">
<span class="case-name">Hirano, Nagaike, Yamanoka — Japanese iriaichi</span>
<span class="case-desc">Mountain commons in Japan governed by village associations (iriai). Sustainable timber and resource extraction through locally developed use-right systems across three distinct communities.</span>
</div>
<div class="case-cell"><span class="case-since">1600s CE</span></div>
<div class="case-cell"><span class="case-status active">Active</span></div>
</div>
<div class="case-row">
<div class="case-cell">
<span class="case-name">Alicante and Murcia huertas, Spain</span>
<span class="case-desc">Communal irrigation systems in southeastern Spain governed by water courts with elected officials, allocation rules, and graduated sanctions. Predating state water law by centuries.</span>
</div>
<div class="case-cell"><span class="case-since">1435 / 1614 CE</span></div>
<div class="case-cell"><span class="case-status active">Active</span></div>
</div>
<div class="case-row">
<div class="case-cell">
<span class="case-name">Philippine zanjeras</span>
<span class="case-desc">Communal irrigation associations governing water distribution, infrastructure maintenance, and dispute resolution among smallholder farmers in Ilocos Norte.</span>
</div>
<div class="case-cell"><span class="case-since">1600s CE</span></div>
<div class="case-cell"><span class="case-status active">Active</span></div>
</div>
<div class="case-row">
<div class="case-cell">
<span class="case-name">Maine lobster fisheries</span>
<span class="case-desc">Harbor gangs develop and enforce informal territorial rules governing lobster harvesting zones, effectively managing a common-pool resource that state regulation repeatedly failed to stabilize.</span>
</div>
<div class="case-cell"><span class="case-since">~1900s CE</span></div>
<div class="case-cell"><span class="case-status active">Active</span></div>
</div>
<div class="case-row">
<div class="case-cell">
<span class="case-name">California groundwater basins</span>
<span class="case-desc">Polycentric governance arrangements — layered private agreements, special district rules, and court oversight — managing overdraft of shared aquifers. Ostrom's study of West Basin and Central Basin.</span>
</div>
<div class="case-cell"><span class="case-since">1940s–50s CE</span></div>
<div class="case-cell"><span class="case-status active">Active</span></div>
</div>
</div>
<p>The methodological challenge Ostrom faced was significant. These cases span radically different resource types, legal systems, cultures, and centuries. The standard social science move — abstract away the institutional detail to find the universal mechanism — would destroy the very variation she was trying to explain. Her response was to develop a framework capable of representing institutional complexity without flattening it. That framework is the IAD.</p>` }} />
          </Section>
          <Section id="iad" num="03" title="The IAD framework: what makes governance analyzable">
            <div dangerouslySetInnerHTML={{ __html: `<p>The Institutional Analysis and Development framework is Ostrom's methodological contribution. It provides a common vocabulary for analyzing how rules, people, biophysical conditions, and community attributes interact to produce governance outcomes — without presupposing that any particular arrangement will succeed or fail.</p>
<div class="iad-diagram">
<span class="iad-label">IAD Framework — Ostrom (1990, 2005)</span>
<div class="iad-grid">
<div class="iad-cell">
<span class="iad-cell-label">Input layer</span>
<div class="iad-cell-name">Biophysical Conditions</div>
<div class="iad-cell-desc">The nature of the resource: subtractability, excludability, spatial extent, regeneration rate. Determines what governance problems need solving.</div>
</div>
<div class="iad-cell">
<span class="iad-cell-label">Input layer</span>
<div class="iad-cell-name">Community Attributes</div>
<div class="iad-cell-desc">Size, homogeneity, shared norms, history of cooperation, capacity to generate trust. Affects the transaction costs of governance and the durability of rules.</div>
</div>
<div class="iad-cell">
<span class="iad-cell-label">Input layer</span>
<div class="iad-cell-name">Rules-in-Use</div>
<div class="iad-cell-desc">The actual operative rules — entry, use, monitoring, sanctions, modification — regardless of what the formal law says. A critical distinction: what rules say vs. what rules do.</div>
</div>
</div>
<div class="iad-arrow">↓ shape the ↓</div>
<div class="iad-grid" style="grid-template-columns: 1fr;">
<div class="iad-cell">
<span class="iad-cell-label">Analytical focus</span>
<div class="iad-cell-name">Action Situation</div>
<div class="iad-cell-desc">The arena in which actors make decisions about resource use. Participants, positions, actions available, information, costs and benefits, rules governing the situation. This is what governance actually is — not the formal rules, but the live situation actors navigate.</div>
</div>
</div>
<div class="iad-arrow">↓ produces ↓</div>
<div class="iad-grid" style="grid-template-columns: 1fr 1fr;">
<div class="iad-cell">
<span class="iad-cell-label">Outcome</span>
<div class="iad-cell-name">Patterns of interaction</div>
<div class="iad-cell-desc">What actors actually do in the situation — use levels, monitoring behavior, compliance, defection, collective action or its absence.</div>
</div>
<div class="iad-cell">
<span class="iad-cell-label">Outcome</span>
<div class="iad-cell-name">Outcomes evaluated against criteria</div>
<div class="iad-cell-desc">Efficiency, equity, sustainability, fiscal equivalence, accountability — multiple criteria, not just aggregate welfare. Evaluated empirically, not assumed from market structure.</div>
</div>
</div>
</div>
<p>The IAD framework's practical value is the <em>rules-in-use</em> concept. Most governance analysis works from formal rules — statutes, constitutions, contracts. Ostrom insisted on studying what rules actually govern behavior in practice. Communities develop extensive informal governance that is invisible to formal analysis but is doing the real work. The Swiss village that has been managing its alpine commons since the thirteenth century is not functioning on the basis of current Swiss property law. It has its own institutions, which predate the state and in many cases still operate alongside it.</p>
<p>This distinction matters for policy. Externally designed governance systems — including the privatization and nationalization that Hardin's model recommends — repeatedly fail not because they're wrong in principle but because they displace the informal institutions that were actually producing order, without replacing the function those institutions served. The wreckage of World Bank-mandated water privatization programs across the developing world in the 1990s is, in part, Hardin's model acting on Hardin's conclusions without Ostrom's corrective.</p>` }} />
          </Section>
          <Section id="principles" num="04" title="The eight design principles: annotated">
            <div dangerouslySetInnerHTML={{ __html: `<p>Ostrom's eight design principles are the empirical core of <em>Governing the Commons</em> (Cambridge University Press, 1990).<sup><a href="#fn9" id="ref9">9</a></sup> They are not prescriptions derived from theory. They are recurring patterns extracted from the cases — present in durable, successful commons and absent in failures. Ostrom herself noted that subsequent research has supported, qualified, and extended these principles but not refuted them as a class.</p>
<div class="principles-block">
<div class="principles-header">
<span class="principles-title">Design Principles for Governing Common-Pool Resources</span>
<span class="principles-source">Ostrom, Governing the Commons, 1990 — Chapter 3</span>
</div>
<div class="principle">
<div class="principle-head">
<span class="principle-num">P1</span>
<span class="principle-name">Clearly defined boundaries</span>
</div>
<div class="principle-body">The boundaries of the resource system and the individuals who have rights to use it are clearly defined. Who is in and what they can take is unambiguous.</div>
<div class="principle-note">This is the first move: converting Hardin's open-access problem into a bounded membership problem. Before any other governance question can be answered, the population of legitimate users must be defined. Many resource governance failures — fishing, groundwater, atmospheric commons — involve jurisdictional ambiguity that prevents this.</div>
</div>
<div class="principle">
<div class="principle-head">
<span class="principle-num">P2</span>
<span class="principle-name">Congruence between rules and local conditions</span>
</div>
<div class="principle-body">Appropriation and provision rules are adapted to local conditions of time, place, and technology. No universal rule set works everywhere.</div>
<div class="principle-note">This is the epistemological argument that Hayek made for markets and that Ostrom makes for community governance: the relevant information is local. Rules designed at a distance from the resource and its users routinely misfire not because the designers are malicious but because they don't have access to what the local community knows. The Alicante water courts are calibrated to the hydrology of the Alicante basin in ways that no national water law could be.</div>
</div>
<div class="principle">
<div class="principle-head">
<span class="principle-num">P3</span>
<span class="principle-name">Collective-choice arrangements</span>
</div>
<div class="principle-body">Most individuals affected by operational rules are included in modifying those rules. Governance is not static.</div>
<div class="principle-note">This principle addresses adaptability. Resource conditions change; rules that worked in one season or decade may not work in the next. Institutions that cannot revise their own rules become brittle. The governing condition is not democracy per se, but meaningful participation by those whose behavior the rules are meant to govern. Rules designed without this feature routinely develop an enforcement problem: people who had no voice in their design have less reason to consider them legitimate.</div>
</div>
<div class="principle">
<div class="principle-head">
<span class="principle-num">P4</span>
<span class="principle-name">Monitoring</span>
</div>
<div class="principle-body">Monitors actively audit both the condition of the resource and the behavior of appropriators. Monitors are either the appropriators themselves or are accountable to them.</div>
<div class="principle-note">The repeated game structure of CPR governance requires that defections be observable. Communities have repeatedly developed monitoring mechanisms — sometimes formal, often social — that external regulatory systems cannot replicate at equivalent cost. The Maine lobster harbor gangs know who is fishing where because they are there. State regulators do not.</div>
</div>
<div class="principle">
<div class="principle-head">
<span class="principle-num">P5</span>
<span class="principle-name">Graduated sanctions</span>
</div>
<div class="principle-body">Appropriators who violate rules receive sanctions calibrated to severity and context. First offenses receive small penalties; repeated or severe violations receive larger ones.</div>
<div class="principle-note">The calibration matters for two reasons. First, it maintains credibility: disproportionate penalties applied to minor violations undermine the legitimacy of the sanctioning system. Second, it preserves relationships: in communities where appropriators must continue to interact, penalties that permanently damage relationships reduce future cooperation. The graduated structure communicates norm expectation while leaving room for repair.</div>
</div>
<div class="principle">
<div class="principle-head">
<span class="principle-num">P6</span>
<span class="principle-name">Conflict resolution mechanisms</span>
</div>
<div class="principle-body">Appropriators and officials have rapid access to low-cost, local arenas for resolving disputes over rules and their application.</div>
<div class="principle-note">Transaction costs matter enormously in governance. A dispute mechanism that requires months and professional legal fees will not be used. Disputes that go unresolved escalate into defection. The Spanish water courts — the Tribunal de las Aguas de Valencia, operating continuously since at least the tenth century<sup><a href="#fn10" id="ref10">10</a></sup> — are specifically designed to resolve disputes on the day they are raised, before water conflicts can compound into harvest failures.</div>
</div>
<div class="principle">
<div class="principle-head">
<span class="principle-num">P7</span>
<span class="principle-name">Minimal recognition of rights to organize</span>
</div>
<div class="principle-body">The rights of appropriators to devise their own institutions are not challenged by external governmental authorities.</div>
<div class="principle-note">This is the constraint that external actors most frequently violate. The commons functions only if external state power is not deployed to dissolve its governance arrangements. Colonial policy systematically undermined indigenous commons governance not because the governance was failing but because it was competing with extraction systems that required landless, dependent labor. The same dynamic appears in contemporary World Bank structural adjustment programs that mandated privatization of water commons as a condition of debt relief.</div>
</div>
<div class="principle">
<div class="principle-head">
<span class="principle-num">P8</span>
<span class="principle-name">Nested enterprises</span>
</div>
<div class="principle-body">For resources that span multiple communities, governance activities are organized in multiple layers of nested enterprises, with appropriation, monitoring, enforcement, conflict resolution, and governance organized at appropriate scales.</div>
<div class="principle-note">This is the polycentricity argument in structural form. Resources with complex spatial extent cannot be governed by a single local institution or by a single central authority. The California groundwater basins Ostrom studied were governed by overlapping layers of private user agreements, special district rules, and court oversight — each operating at the scale appropriate to the governance problem it was solving. No single layer had complete authority; each had designated authority over specific decision types. The complexity was a feature, not a failure to rationalize.</div>
</div>
</div>` }} />
          </Section>
          <Section id="polycentric" num="05" title="Polycentric governance: beyond the false binary">
            <div dangerouslySetInnerHTML={{ __html: `<p>The deepest implication of Ostrom's work is not about fisheries or irrigation canals. It is about the architecture of governance itself. Hardin's framing produced a binary: private property or state regulation. These are described as the only two mechanisms capable of aligning individual incentives with collective welfare in the management of shared resources. Ostrom's evidence shows that both branches of this binary routinely fail, and that the cases of success involve a third option the model cannot see: polycentric self-governance.</p>
<p>The concept of polycentric order was developed by Vincent Ostrom, Elinor's husband and long-term collaborator, in a 1961 paper on metropolitan governance with Charles Tiebout and Robert Warren.<sup><a href="#fn7" id="ref7">7</a></sup> The core claim: governance systems with multiple overlapping decision centers — each with bounded autonomy, none with monopoly authority, all subject to the same overarching rules — outperform monocentric systems on virtually every dimension when governing complex, spatially distributed problems.</p>
<div class="pull">
        Privatization replaces governance with ownership.<br/>Nationalization replaces governance with administration.<br/>Polycentric governance <strong>is</strong> governance —<br/>at the scale and density the problem requires.
      </div>
<p>The policy implications are specific. In a polycentric system, different governance centers handle different decision types at the scale appropriate to each. Local communities set use rules for the resource portion they know. Regional bodies coordinate across communities where resource flows cross local boundaries. National law sets the outer frame and adjudicates conflicts between levels. No level is sovereign over all decisions; each has delegated authority over appropriate ones.</p>
<p>The failure mode of centralization is epistemic: a single governance center lacks the local knowledge that distributed users have, systematically fails to adapt rules to conditions it cannot observe, and — critically — has no feedback mechanism capable of correcting its own errors at the speed that resource conditions change. The failure mode of pure privatization is different: it resolves the governance question by removing the resource from commons governance entirely, at the cost of concentrating surplus extraction in whoever holds the property right. Both moves are responses to the same problem — the difficulty of collective action. Both avoid rather than solve it.</p>
<p>Ostrom's contribution is to show that communities with sufficient autonomy, information, and time develop governance institutions that solve the collective action problem without either move. The design principles are a description of what those institutions have in common. They are an argument that the capacity is real, durable, and replicable — not utopian, not exceptional, not dependent on unusual conditions of human virtue. They are the product of ordinary communities doing what they need to do to survive.</p>` }} />
          </Section>
          <Section id="objections" num="06" title="Standard objections, addressed">
            <div dangerouslySetInnerHTML={{ __html: `<div class="objection">
<div class="objection-q">Her cases are pre-modern and small-scale. The design principles don't translate to complex modern economies.</div>
<div class="objection-a">
<p>Ostrom addressed this directly. The California groundwater basins in her 1990 study are contemporary, large-scale, legally complex, and polycentric in exactly the way her framework describes. The Maine lobster fisheries operate within and alongside modern US commercial law. Her later work with Charlotte Hess on knowledge commons — internet governance, open-source software, scientific research commons — applies the framework to large-scale, digital, non-rival resources.</p>
<p>The scaling objection assumes that complexity invalidates the framework. What Ostrom showed is that complexity requires polycentric governance — not that it makes commons governance impossible, but that monocentric governance (either state or market) fails at the complexity threshold where the locality assumption breaks down.</p>
</div>
</div>
<div class="objection">
<div class="objection-q">The design principles are descriptive, not causal. Correlation, not mechanism.</div>
<div class="objection-a">
<p>This was a serious methodological concern that Ostrom took seriously. Her response was experimental as well as observational. Beginning in the 1980s, she and her colleagues ran laboratory experiments on commons governance — controlled settings in which participants managed common-pool resources under varying institutional conditions. The findings consistently supported the observational results: when communication was permitted, when participants could develop their own rules, when monitoring was mutual rather than external, cooperation rates were dramatically higher than standard game-theoretic models predicted.</p>
<p>The causal mechanism she proposed — repeated interaction under conditions of mutual monitoring creates the conditions for graduated trust-building that sustains cooperation — is consistent with both the historical cases and the experimental results. It is also consistent with evolutionary theory of cooperation, which is why <a class="xl" href="kropotkin.html">Kropotkin's empirical work</a> and Ostrom's institutional analysis converge on the same conclusion through different routes.</p>
</div>
</div>
<div class="objection">
<div class="objection-q">The cases that worked are all high-homogeneity communities. Diversity undermines commons governance.</div>
<div class="objection-a">
<p>The evidence here is genuinely mixed. Some studies find that social heterogeneity — inequality, ethnic diversity, conflicting interests — increases the transaction costs of commons governance and can undermine it. Ostrom acknowledged this and did not claim universal applicability. Her design principles specify community attributes as an input variable, not a constant.</p>
<p>The stronger version of the point: when commons governance fails in diverse communities, the failure is rarely endogenous to the community. It is almost always driven by external coercion — enclosure, colonization, legal override of community governance — that destroys the institutional conditions (P7: minimal recognition of rights) under which diverse communities can develop governance over time. The claim is not that diversity is irrelevant. It is that the relevant question is whether communities are given the conditions to develop governance, not whether homogeneity is a prerequisite.</p>
</div>
</div>
<div class="objection">
<div class="objection-q">What about global commons? Climate, biodiversity, the atmosphere? The framework obviously can't scale to that.</div>
<div class="objection-a">
<p>This is the hardest case, and Ostrom was explicit that global commons governance is a distinct and harder problem. She did not claim that polycentric self-governance of local communities directly solves climate change. Her argument for global commons was more modest: polycentric governance systems — multiple overlapping institutions operating at different scales, including national and international levels — outperform the monocentric global treaty approach that has characterized international climate negotiations.</p>
<p>Her Nobel lecture — delivered December 2009, published as "Beyond Markets and States: Polycentric Governance of Complex Economic Systems" in the <em>American Economic Review</em> (2010)<sup><a href="#fn8" id="ref8">8</a></sup> — explicitly extended the framework to the climate case. The argument: a polycentric approach allows experimentation, learning, and adjustment across many institutional contexts simultaneously. It builds social capital at local scales that changes the political conditions for higher-level action. It does not require universal agreement before action begins. The alternative — waiting for comprehensive global agreement — has a thirty-year track record of failure. The comparison class matters.</p>
</div>
</div>` }} />
          </Section>
        </div>

        <Invitation
          label=""
          headline=""
          coda={``}
        >
          
        </Invitation>

        <NextReads items={[
          { href: 'hardin-was-wrong', cat: "Foundation", title: "Hardin Was Wrong — The &quot;Tragedy of the Commons&quot; Is a Myth" },
          { href: 'kropotkin', cat: "Thinker", title: "Kropotkin: You Were Lied to About Human Nature" },
          { href: 'the-tradition-they-buried', cat: "History", title: "The Tradition They Buried" },
          { href: 'build-it-now', cat: "Practice", title: "Build It Now — What The Alternative Looks Like" },
          { href: 'gramsci', cat: "Thinker", title: "Gramsci: The Feeling That This Is Just How Things Are" }
        ]} />
        
        <Footnotes notes={FOOTNOTES} />
        <ArticleFooter seriesNote="Thinkers — Elinor Ostrom — Governing the Commons (1990) — Nobel Prize in Economic Sciences, 2009" />
      </ArticleWrap>
    </Layout>
  )
}
