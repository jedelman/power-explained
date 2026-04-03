import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function BuildTheCommuneWithoutTheState() {
  return (
    <Layout
      title="Build the Commune Without the State — Power Explained"
      description="Murray Bookchin argued that ecology and hierarchy are the same problem. Abdullah Öcalan read Bookchin in prison and built it into a governing philosophy for millions of people. Rojava is the only live experiment at scale in everything this site has been about. It's also being bombed."
      seriesTag="The World the Framework Missed — Series IV"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `Build the Commune Without the State` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>Everything this series — and the three series before it — has been building toward is a question: what does the alternative actually look like? Not as theory, not as historical example, but as a living governance system operating right now, under real conditions, managing real conflicts, making real decisions about how people live?</p>
<p>The answer, and it is a partial and contested and embattled answer, is the Autonomous Administration of North and East Syria — the territory commonly called Rojava. It is the most significant attempt in the twenty-first century to build a commons-based, non-state governance system at regional scale. It was built by Kurdish, Arab, and Assyrian communities in the middle of a civil war, under siege from multiple directions, on the theoretical foundations of two people: a Vermont-born anarchist ecologist named Murray Bookchin, and a Kurdish revolutionary leader named Abdullah Öcalan who read Bookchin's books in an island prison and used them to change his movement's entire political direction.</p>
<h2>Bookchin: hierarchy and ecology are the same problem</h2>
<p>Murray Bookchin spent decades developing what he called <strong>social ecology</strong> — a political philosophy grounded in the claim that the environmental crisis and the social crisis are not separate problems with separate solutions. They are the same problem: hierarchy.</p>
<p>The domination of nature by human beings, Bookchin argued, is not a technical problem of resource management or economic incentives. It is the external expression of the same hierarchical logic that produces the domination of human beings by other human beings. Patriarchy, class society, colonialism, and the destruction of ecological systems are all manifestations of the same fundamental social tendency: the organization of relationships through domination rather than through mutual aid and complementarity.</p>
<p>You cannot solve the ecological crisis while maintaining hierarchical social organization, because hierarchical social organization is what produces the ecological crisis. A capitalist state that "goes green" — switches to renewable energy, implements carbon pricing, creates protected areas — is still organized around extraction, accumulation, and the domination of some people by others. It will keep producing ecological crises because that is what hierarchical societies do.</p>
<p>The corollary: the alternative to ecological destruction is not environmental policy. It is the construction of non-hierarchical social organization — from the ground up, at the scale of communities, federated upward rather than administered downward. Bookchin called this <strong>libertarian municipalism</strong> or <strong>democratic confederalism</strong>: governance organized through face-to-face democratic assemblies at the neighborhood and commune level, federated into larger structures that handle things that require coordination at larger scale, but without delegating sovereignty upward to a state apparatus that then governs from above. <a class="xl" href="for-environmentalists.html">If you're coming from an environmental background, there's an entry point written specifically for this argument.</a></p>
<div class="pull">
        The commune is not a nostalgic form.<br/>
        It is the only organizational structure<br/>
        in which ecological and social<br/>
<strong>democracy are the same thing.</strong>
</div>
<p>Bookchin was writing in North America, theorizing from the margins of the American left, largely ignored by mainstream politics and treated as eccentric even within radical circles. He died in 2006. He did not live to see his ideas become the basis of a governance system for millions of people.</p>
<h2>Öcalan in prison</h2>
<p>Abdullah Öcalan founded the Kurdistan Workers' Party — the PKK — in 1978. For most of its history, the PKK was a Marxist-Leninist national liberation movement pursuing an independent Kurdish state through armed struggle. It fought a brutal war against the Turkish state for decades. Tens of thousands of people died. Öcalan was captured in 1999 and imprisoned on the island of İmralı in the Sea of Marmara, where he has been held in solitary confinement — or near-solitary — ever since.</p>
<p>In prison, Öcalan read. He read extensively in Western political philosophy — and he read Bookchin. His account of encountering Bookchin's work describes something like a political conversion. The Marxist-Leninist framework he had operated within for twenty years had, he concluded, the same fundamental problem that this series has been diagnosing throughout: it aimed to capture the state rather than to replace the state with something different. A Kurdish state would reproduce Kurdish hierarchy. The goal was wrong.</p>
<p>From prison, Öcalan developed what he called <strong>democratic confederalism</strong> — a political philosophy built on three pillars: democratic autonomy (governance through self-organized communities rather than through a state), women's liberation (jineology — the science of women — as a foundational epistemology, not an afterthought), and an ecological society (Bookchin's social ecology as a governing principle, not an environmental policy). He wrote extensively, smuggling manuscripts out of prison. His writings were studied by PKK cadres and eventually became the governing philosophy of the Autonomous Administration in Rojava.</p>
<div class="callout">
<span class="callout-label">Jineology: women's liberation as structural precondition</span>
<p>One of the most significant aspects of Öcalan's framework — and one of the most visible in Rojava's actual governance — is the treatment of women's liberation not as one issue among many but as the foundational condition for any genuine social transformation. Öcalan argues that patriarchy is the oldest form of hierarchy, the template from which all subsequent hierarchies were built. A revolution that liberates the nation but maintains patriarchal relations within it has not freed itself from the logic of domination. It has simply moved who the dominators are.</p>
<p>In practice, this means: co-leadership at every level of governance (every position has both a male and a female co-holder), autonomous women's organizations with veto power over decisions affecting women, mandatory gender parity in all decision-making bodies, and the YPJ — the Women's Protection Units — as an autonomous fighting force with its own command structure. These are not symbolic commitments. They are structural features of the governance system that produce different outcomes than systems where gender equality is a stated value without structural enforcement.</p>
</div>
<h2>Rojava: the experiment</h2>
<p>When the Syrian civil war began in 2011 and the Assad government withdrew from the predominantly Kurdish northeast of Syria, the structures that had been built by Öcalan's movement stepped into the vacuum. The Autonomous Administration of North and East Syria was declared in 2012 and has governed a territory of roughly four to five million people across multiple ethnic communities — Kurdish, Arab, Assyrian, Armenian, Yazidi — ever since.</p>
<p>The governance structure is built from the bottom up. The basic unit is the commune — a neighborhood assembly of roughly a hundred to three hundred households that meets regularly to make decisions about local matters: dispute resolution, resource allocation, security, education, social needs. Communes federate into district councils. District councils federate into cantonal assemblies. The Autonomous Administration at the top level is not a state with sovereign authority but a coordination body — it handles matters that require coordination at scale (military defense, foreign relations, infrastructure) while local governance remains with the communes.</p>
<p>This is Ostrom's polycentric governance, Bookchin's libertarian municipalism, and the Spanish anarchist federation model from Series III — simultaneously, in practice, under fire.</p>
<p>The economy is not socialist in the traditional sense. It is organized around cooperative enterprises — worker cooperatives, agricultural cooperatives, community-owned businesses — alongside private small enterprise. The goal is not state ownership but the elimination of large-scale private capital extraction. The communes manage local resources through collective governance. The commons is not an ideological commitment; it is an administrative fact of how things work.</p>
<h2>What is being bombed</h2>
<p>Turkey has conducted multiple military operations against Rojava since 2016. The Turkish state considers the YPG and YPJ — the defense forces of the Autonomous Administration — to be extensions of the PKK and therefore terrorist organizations. NATO has not intervened to protect Rojava. The United States, which partnered with YPG forces to defeat the Islamic State in Syria, has repeatedly allowed or facilitated Turkish attacks on the same forces it partnered with.</p>
<p>The city of Afrin was captured by Turkish-backed forces in 2018. Serêkaniyê and Girê Spî were captured in 2019. Each operation involved displacement of civilian populations, destruction of infrastructure, and the replacement of the commune-based governance system with Turkish-backed administration.</p>
<p>What is being bombed is not primarily a military force. It is a governance experiment. The specific target of Turkish military strategy is the destruction of the Autonomous Administration's institutional capacity — the communes, the co-governance structures, the women's organizations, the cooperative economy. These are the things that make Rojava something other than a temporary military arrangement. Destroying them is the strategic objective because they are what would survive the military phase and constitute an actual alternative.</p>
<div class="pull">
        What gets bombed<br/>tells you what was threatening.<br/>
        Turkey is bombing the communes.<br/>
        That's <strong>the confirmation.</strong>
</div>
<h2>The synthesis this series has been building toward</h2>
<p>Go back through what this series has argued and look at where it lands.</p>
<p><a class="xl" href="racial-capitalism.html">Robinson showed</a> that racial capitalism classifies certain people as outside the human in order to extract from them without recognition. In Rojava, the Kurds, Arabs, Assyrians, and Yazidis building the Autonomous Administration are people who have all been classified, at various points and by various states, as outside the category of those deserving political recognition. They are building governance precisely by those who have been governed through their exclusion.</p>
<p><a class="xl" href="underdevelopment-is-a-verb.html">Rodney showed</a> that underdevelopment is a produced condition — that the routing architecture of extraction leaves some places with destroyed institutional capacity. The Syrian northeast was not wealthy or institutionally developed before the civil war. The Autonomous Administration is building governance capacity in conditions of material scarcity, under military pressure, without external support from any state willing to defend it.</p>
<p><a class="xl" href="the-alibi-was-a-mirror.html">Fanon warned</a> that the native bourgeoisie would inherit the colonial state and reproduce its logic. The Autonomous Administration explicitly refuses the state form — not because it lacks the military capacity to declare one, but because the theoretical framework, developed by Öcalan in prison over decades, identifies state capture as the wrong goal. This is Fanon's warning institutionalized as a founding principle.</p>
<p><a class="xl" href="who-gets-to-die.html">Mbembe showed</a> that necropolitics — the administration of death — is the operative mode of sovereign power when the alibi drops away. Rojava exists in necropolitical space. Turkey's bombardment, the Islamic State's prior occupation, the Assad government's siege — these are all necropolitical in Mbembe's sense: they operate by deciding who is exposed to death. The Autonomous Administration's response is not to build a counter-state that mirrors that power. It is to build governance structures that distribute the capacity for self-defense broadly through the population — women's units, community militias, nested security structures — rather than concentrating it in a sovereign military force.</p>
<p><a class="xl" href="the-commons-they-never-stopped-building.html">Roy showed</a> that commons-building happens under eviction orders, that the struggle generates organizational capacity that outlasts any particular outcome. The Autonomous Administration has already survived multiple Turkish military operations, the collapse of the Syrian state, the defeat of the Islamic State, and the withdrawal of American support. It survives because the governance capacity is distributed. You cannot decapitate it by killing a leader or capturing a capital. The communes remain.</p>
<p>And <a class="xl" href="hardin-was-wrong.html">Ostrom showed</a> that communities develop governance institutions when they need to, that those institutions share recognizable design principles across very different cultural contexts, and that the primary threat to commons governance is not internal defection but external enclosure — the state or market actor that overrides local governance because it can. Rojava is a live test of all of it: the governance principles, the external threat, the question of whether distributed institutional capacity can survive the enclosing force.</p>
<p>The answer so far: partially. The Autonomous Administration still governs most of the territory it claimed. The communes still meet. The women's co-governance structures still function. The cooperative economy still operates. The experiment is ongoing and contested and dangerous and not over.</p>
<p>That is the most honest thing this series can say: the alternative is not a blueprint. It is a practice. It is something people do, under conditions they didn't choose, with the theory they developed from the conditions they're in. It gets bombed because it works well enough to be threatening. That's the confirmation that it's worth studying.</p>` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="Power Explained — Advanced Track" />
      </ArticleWrap>
    </Layout>
  )
}
