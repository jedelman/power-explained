import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []
const FOOTNOTES = [
  `Parent-cooperative childcare has existed in various forms since the early 20th century; the University of Chicago cooperative nursery school (1916) is among the earliest documented examples in the United States. The cooperative model has been studied extensively in Scandinavia, where parent cooperatives represent a significant share of childcare provision in countries including Sweden and Norway. Research on the model consistently finds that cooperative governance correlates with higher parent satisfaction and, in many studies, with staff retention and quality metrics. For a survey of the model and its outcomes, see Pestoff, Victor. <em>A Democratic Architecture for the Welfare State</em>. Routledge, 2009. <a href="#ref1">↩</a>`,
  `The community health worker model has substantial evidence behind it in multiple contexts. Major medical journals have published systematic reviews finding that CHW programs improve outcomes for chronic disease management, maternal and child health, and care access in underserved communities. In the United States, the model has gained recognition through programs including the Promotoras de Salud tradition in Latino communities, which predates formal health system adoption by decades. The defining feature of effective CHW programs — community embeddedness producing knowledge that clinical systems don't have — is well-documented; see Lehmann, Uta and David Sanders. "Community Health Workers: What Do We Know About Them?" World Health Organization, 2007. <a href="#ref2">↩</a>`,
  `Time banking as a formal system was developed by Edgar Cahn, a legal scholar, in the 1980s; he described the concept in <em>No More Throw-Away People: The Co-Production Imperative</em> (Essential Books, 2000). Time banks now operate in dozens of countries. The research on their effects documents both the direct exchange of services and, perhaps more significantly, the rebuilding of social networks and mutual recognition in communities where conventional economic exclusion has eroded them. See Collom, Ed, Judith N. Lasker, and Corinne Kyriacou. <em>Equal Time, Equal Value: Community Currencies and Time Banking in the US</em>. Ashgate, 2012. <a href="#ref3">↩</a>`
]

export default function CareIsTheEconomy() {
  return (
    <Layout
      title="Care Is the Economy — Power Explained"
      description="Series II named care labor as the hidden engine capitalism depends on and cannot replace. This piece asks the practical question: what does it look like when you build that infrastructure as a commons?"
      seriesTag="Where We Go From Here — Series V"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `Care Is the Economy` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>The economy depends on care. Not as a metaphor — as a structural fact. Before anyone can go to work, someone has to feed and clothe them, get their children ready for school, check on their aging parents, manage the ten thousand logistical facts of household life that convert a biological organism into a functioning worker. When that work breaks down — when someone gets sick with no one to help, when childcare disappears, when elder care is unavailable — the worker disappears from the economy too.</p>
<p>Series II traced how this came to be invisible: the enclosure of the reproductive commons, the reorganization of care from communal function into private female labor, the ideological work of calling it nature rather than work. <a class="xl" href="what-they-burned.html">Federici</a> showed that this was a specific historical project, not an eternal arrangement. <a class="xl" href="who-pays-for-the-next-shift.html">Kollontai</a> named what it cost, and who paid.</p>
<p>This piece does not relitigate that argument. It asks what comes next: if care is work, and if the privatization of care is an enclosure that serves capital at the expense of the people who provide and receive it — then what does care look like when it is governed as a commons?</p>
<p>The answer exists. It is not theoretical. It has been built, in different forms, in different places, by people who got tired of waiting for the market or the state to solve a problem that neither is structurally capable of solving.</p>
<h2>Why the market and the state both fail</h2>
<p>The market fails at care for a reason that is specific and structural, not incidental. Care quality depends on relationship. A child thrives with a caregiver who knows them, who has continuity with them, who understands what they need before they can articulate it. An elder in declining health needs someone who tracks their patterns, advocates for them in medical settings, notices the small changes that signal a larger problem. None of that can be delivered by whoever was cheapest on the staffing app today.</p>
<p>The market's mechanism for improving quality — competition and consumer choice — does not work well when the person receiving care cannot evaluate it in advance, cannot easily switch providers, and is often the most vulnerable person in the transaction. It works even less well when the labor market for care is structured to keep wages low, which drives out the people who are most committed to the work and replaces them with whoever will accept the wage. The result is what we have: a care economy characterized by high turnover, low quality, and costs that are simultaneously unaffordable for families and inadequate to pay care workers a living wage. Both things are true at once because the market is optimizing for neither quality nor fairness — it is optimizing for the extraction of margin from the relationship between them.</p>
<p>The state fails differently. Public care programs — where they exist — tend toward bureaucratic standardization: care delivered according to protocols, monitored by metrics, administered by agencies that are accountable to legislators rather than to the people receiving care. This produces real benefits — universality, baseline quality, freedom from the market — but it also tends to strip care of the relational texture that makes it work. The care plan administered correctly and the care relationship that actually helps the person are not always the same thing, and institutional care structures are better at the first than the second.</p>
<p>Neither failure is a reason to abandon markets or states entirely. They are reasons to understand what they cannot do — and to build the structures that can do it.</p>
<div class="pull">
        Care quality depends on relationship.<br/>
        Neither the market<br/>
        nor the state<br/>
<strong>is built to sustain relationship.</strong><br/>
        The commons is.
      </div>
<h2>What care as a commons looks like</h2>
<p>The commons is built to sustain relationship. That is not a slogan — it is a structural consequence of how commons governance works. When the people who provide and receive care together govern the institution that organizes it, the institution is oriented toward what actually works for them rather than toward what is legible to an external metric or profitable to an external shareholder.</p>
<p>Childcare cooperatives are the most widespread form of this. Parents collectively operate the care arrangement — sharing labor, making governance decisions together, hiring and overseeing staff they have genuine authority over. The cost is lower than market care because the administrative extraction is gone. The quality is higher because the parents governing it are also the parents whose children are in it, and they do not tolerate what they would tolerate as customers of a service. The relationship between caregivers and families is sustained across time because the institution is governed by the people in those relationships.<sup><a href="#fn1" id="ref1">1</a></sup></p>
<p>Community health worker programs operate on a parallel principle at the intersection of healthcare and community life. Community health workers are people from the communities they serve — often trained to navigate health systems, connect neighbors to resources, identify people who have fallen through the gaps between formal care systems. They carry knowledge that no clinic possesses: which families are food-insecure, which elders are isolated, which people will not seek care until a preventable problem becomes a crisis because they distrust institutions or cannot navigate them. That knowledge is a commons — produced by living in the community, maintained through ongoing relationship — and it makes care work that formal systems cannot replicate.<sup><a href="#fn2" id="ref2">2</a></sup></p>
<p>Time banks make the underlying social logic explicit. Participants exchange care directly — an hour of elder companionship for an hour of childcare pickup, a ride to a medical appointment for a shared meal — without money changing hands, on the understanding that the community is the ledger and the ongoing relationships are the guarantee. What looks like an informal arrangement is actually a formalized commons: a system for managing the mutual care obligations that communities have always carried, made legible and sustainable through explicit governance.<sup><a href="#fn3" id="ref3">3</a></sup></p>
<h2>The enclosure of care, ongoing</h2>
<p>The privatization of care is not a historical event that happened and is over. It is an ongoing process. As care cooperatives prove their value, private equity moves in to acquire them. As community health worker programs demonstrate outcomes, health systems absorb them — and in the absorption, the community embeddedness that made them work gets gradually replaced by employment relationships with the institution, which requires the workers to follow its protocols rather than their community knowledge. As time banks grow, they face pressure to formalize in ways that make them legible to funders and grant-makers, and the formalization slowly converts the relational commons into an administered service.</p>
<p>This is the same pattern that appears in every domain: the commons proves its value, and that value attracts the enclosure. The response is not to avoid proving value — it is to build governance structures that resist capture, the same way the GPL resists proprietary capture of open-source code and the community land trust's resale restriction resists speculative capture of affordable housing.</p>
<p>The governance question for care commons is: what are the structural protections that keep the institution oriented toward the people in it, rather than toward whoever is in a position to extract from it? The childcare cooperative that requires all parents to participate in governance, not just pay fees, is building that protection. The community health worker program that maintains community accountability structures independent of the health system that employs it is building that protection. The time bank that holds its membership data as a commons and refuses to sell it is building that protection.</p>
<h2>Care is the foundation under everything</h2>
<p>Finance is a commons built from the trust and mutual obligation that communities produce. Land is a commons whose value is created by the community that inhabits it. Care is a commons whose product is the community itself — the capacity of people to show up for work, to raise children, to age with dignity, to recover from illness, to be present in the relationships and institutions that make collective life possible.</p>
<p>The enclosure of care does not just harm the people who provide and receive it. It degrades the substrate that every other economic activity runs on. When care is inadequate — when parents cannot find childcare, when workers have no one to care for aging parents, when community health networks are absent — the economy loses the thing it cannot produce itself. <a class="xl" href="the-outside-capital-needs.html">Luxemburg named this in 1913.</a> It has not changed.</p>
<p>Building care as a commons is not a soft supplement to the real work of economic change. It is the real work. It is the reconstruction of the substrate that was enclosed to make the current economy possible — and that has to be rebuilt, collectively, governed by the people who depend on it, to make a different economy possible.</p>
<p>The people doing that work right now — in childcare cooperatives, in community health networks, in mutual aid structures, in every arrangement where people have decided to take care of each other rather than wait for the market or the state to do it — are not waiting for the revolution. They are building it, at the scale they have, with the people they have, in the conditions they are in.</p>
<p>That is what the commons has always looked like. It is what it looks like now.</p>` }} />
        </div>
        
        
        
        <Footnotes notes={FOOTNOTES} />
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
