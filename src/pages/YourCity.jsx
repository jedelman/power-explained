import { useState } from 'react'
import Layout from '../components/Layout'

const TRACKS = [
  { id: 'diy', label: 'DIY Track', html: `<p>Power isn't invisible — it's just usually spread across documents nobody bothers to read. Property records, planning commission minutes, developer disclosure filings, 990s from major nonprofits. Everything you need to understand who actually runs your city is public. Here's what to look for.</p>
<div class="theory-note">
<span class="theory-note-label">The frame</span>
<p>This analysis uses the framework from <a class="xl" href="why-your-city-doesnt-work.html">Why Your City Doesn't Work</a> and <a class="xl" href="urban-capture.html">How Cities Get Captured</a>. The six questions below map directly to how <a class="xl" href="the-outside-capital-needs.html">capture mechanisms operate</a> at the local level.</p>
</div>
<ul class="question-list">
<li class="question-item">
<div class="question-header">
<span class="q-num">Q1</span>
<span class="q-title">Who owns the land — and what are they doing with it?</span>
</div>
<div class="q-body">
<p>Land ownership is the first axis of local power. In most American cities, a surprisingly small number of entities own a large share of developable land. Identifying them tells you whose interests dominate planning decisions.</p>
<p>Look for: large single owners near transit corridors; out-of-state LLCs holding vacant or underused parcels; <a class="xl" href="urban-land-value.html">land banking patterns</a> (buying and holding without developing); and who received recent rezonings.</p>
</div>
<div class="data-sources">
<div class="data-label">Where to look</div>
<ul>
<li>County assessor's property records (most are searchable online)</li>
<li>State LLC filings — check who owns the LLCs holding large parcels</li>
<li>City planning department: recent rezoning applications and approvals</li>
<li>ProPublica Nonprofit Explorer for major landholding nonprofits</li>
</ul>
</div>
</li>
<li class="question-item">
<div class="question-header">
<span class="q-num">Q2</span>
<span class="q-title">Who funds city government — and what do they want?</span>
</div>
<div class="q-body">
<p>Municipal budgets are a power map. Where does the revenue actually come from? Sales tax, property tax, fees, state transfers, federal grants, and developer exactions each carry different constituencies. Cities dependent on sales tax revenue have different political pressures than those relying on property tax. <a class="xl" href="why-your-city-doesnt-work.html">Revenue structure shapes whose interests city government serves.</a></p>
<p>Also look at: campaign finance for city council races; who funds local political action committees; which developers have active projects and which council members approved them.</p>
</div>
<div class="data-sources">
<div class="data-label">Where to look</div>
<ul>
<li>City's Comprehensive Annual Financial Report (CAFR) — usually on city website</li>
<li>State campaign finance database — search city council candidates</li>
<li>OpenSecrets local race data where available</li>
<li>City clerk: developer agreements and exaction records</li>
</ul>
</div>
</li>
<li class="question-item">
<div class="question-header">
<span class="q-num">Q3</span>
<span class="q-title">Who sits on the boards that matter?</span>
</div>
<div class="q-body">
<p>Most real land-use decisions in American cities pass through appointed bodies: planning commissions, port authorities, redevelopment agencies, housing authorities, utility boards. These are rarely elected. Who appoints the members? What are their professional backgrounds and financial interests? Who shows up to their meetings?</p>
<p>This is <a class="xl" href="urban-capture.html">where civic capture actually happens</a> — in low-visibility appointed bodies with high-stakes authority. The pattern: industry insiders appointed to regulate their own industry, serving consecutive terms, with minimal public oversight.</p>
</div>
<div class="data-sources">
<div class="data-label">Where to look</div>
<ul>
<li>City website: boards and commissions roster + appointment history</li>
<li>Planning commission agendas and minutes (especially dissenting votes)</li>
<li>LinkedIn: cross-reference board members with developer/industry affiliations</li>
<li>Property records: do board members own land that might benefit from their decisions?</li>
</ul>
</div>
</li>
<li class="question-item">
<div class="question-header">
<span class="q-num">Q4</span>
<span class="q-title">What got privatized — and what stayed public?</span>
</div>
<div class="q-body">
<p>Every city has a history of enclosure — the conversion of shared goods into private markets. Water, transit, parking, waste, energy, broadband. The question is not just what's currently private, but when it was privatized, by whom, and on what terms. Long-term privatization contracts (25–99 years) effectively remove the asset from democratic control for generations.</p>
<p>Compare to: what's still governed as a commons, and whether those institutions are being defunded or destabilized. <a class="xl" href="the-outside-capital-needs.html">The commons that remain tell you what the enclosure drive hasn't finished yet.</a></p>
</div>
<div class="data-sources">
<div class="data-label">Where to look</div>
<ul>
<li>City budget: what services were once in-house vs. contracted out?</li>
<li>City clerk: long-term concession agreements (parking, water, waste)</li>
<li>In the Public Interest (inthepublicinterest.org) for privatization research</li>
<li>Local journalism archives: past coverage of privatization votes</li>
</ul>
</div>
</li>
<li class="question-item">
<div class="question-header">
<span class="q-num">Q5</span>
<span class="q-title">Who builds the housing — and on what terms?</span>
</div>
<div class="q-body">
<p>Housing production is the sharpest lens on local power. In most cities, a handful of developers have relationships with city hall that determine what gets built, at what price, and who can afford it. The alternative — <a class="xl" href="hardin-was-wrong.html">community land trusts</a>, <a class="xl" href="build-it-now.html">limited-equity cooperatives</a>, social housing — exists but typically operates in the margins unless there's organized political pressure to expand it.</p>
<p>Look for: how much affordable housing is built vs. permitted vs. promised; how much is being converted to market-rate; what happened to the last affordable housing bond.</p>
</div>
<div class="data-sources">
<div class="data-label">Where to look</div>
<ul>
<li>City housing department: annual housing production report</li>
<li>NLIHC (nlihc.org) for state/local housing data</li>
<li>Community land trust directory: cltnetwork.org</li>
<li>HUD AFFH data for subsidized housing location and condition</li>
</ul>
</div>
</li>
<li class="question-item">
<div class="question-header">
<span class="q-num">Q6</span>
<span class="q-title">Where does mutual aid actually exist?</span>
</div>
<div class="q-body">
<p>The commons isn't only what gets taken. It's also what gets built in the spaces capital ignores. <a class="xl" href="mutual-aid-isnt-charity.html">Mutual aid networks, food cooperatives, tenant unions, community land trusts, credit unions, tool libraries</a> — these are the productive substrate that capture depends on but can't produce. Mapping what exists tells you where the leverage is.</p>
<p>This question inverts the power analysis: instead of asking who has power over the city, ask where residents have built durable power outside the capture structure.</p>
</div>
<div class="data-sources">
<div class="data-label">Where to look</div>
<ul>
<li>Mutual Aid Hub (mutualaidhub.org): searchable map of local networks</li>
<li>NCBA CLUSA (ncba.coop): local cooperative directory</li>
<li>Your state's credit union league: local member institutions</li>
<li>City's SNAP/food access map: compare with community garden and food co-op locations</li>
<li><a class="xl" href="the-commons-they-never-stopped-building.html">The commons they never stopped building →</a></li>
</ul>
</div>
</li>
</ul>
<div class="how-to">
<div class="how-to-header">
<span class="how-to-label">Putting it together</span>
</div>
<div class="how-to-body">
<ol>
<li>Run through all six questions for your city. Take notes — even rough ones.</li>
<li>Look for the same names and entities appearing across multiple questions. Overlap is the signal.</li>
<li>Map the relationship: who owns land <em>and</em> funds campaigns <em>and</em> sits on boards? That entity is the center of the capture structure.</li>
<li>Map the counter: who is building commons infrastructure in your city right now? That's the leverage point.</li>
<li>The brief doesn't need to be comprehensive to be useful. Three specific findings are worth more than a vague general analysis.</li>
</ol>
</div>
</div>` },
  { id: 'agent', label: 'Agent Track', html: `<p>If you're running an AI research agent, paste the prompt below. Fill in the variables in <span style="color:var(--red);font-family:var(--mono);font-size:0.9em;">[brackets]</span> before sending. The output should be a structured brief you can publish, share, or use as a foundation for organizing.</p>
<div class="how-to">
<div class="how-to-header">
<span class="how-to-label">Before you run</span>
</div>
<div class="how-to-body">
<ol>
<li>Give the agent web search access — most of the relevant data is in public records and local journalism archives.</li>
<li>Set output length to ~1500–2500 words. Enough for depth but short enough to be readable.</li>
<li>Tell the agent to flag when it can't find something rather than speculate. Gaps are findings.</li>
<li>Review the output before publishing — agents miss context that local knowledge catches.</li>
</ol>
</div>
</div>
<div class="prompt-box">
<span class="prompt-label">Pasteable agent prompt</span>
<button class="copy-btn" id="copy-prompt-btn" onclick="copyPrompt()">Copy</button>
<div class="prompt-text" id="prompt-content">You are a researcher conducting a power analysis of a city. Your job is to produce a structured brief that reveals who actually controls key decisions — land use, housing, public services, municipal governance — and where residents have built durable alternatives.

<span class="prompt-var">City:</span> [CITY NAME, STATE]
<span class="prompt-var">Research depth:</span> [QUICK (1–2 hours of research) / THOROUGH (full investigation)]
<span class="prompt-var">Output format:</span> [BRIEF (summary + key findings) / FULL REPORT (all six sections with detail)]

Investigate and report on each of the following six areas. For each, provide: key findings, the most important entities and relationships you discovered, what's missing or unclear, and what it implies for residents trying to change things.

1. LAND OWNERSHIP
Who are the largest landowners in [CITY]? Focus on: large single owners near transit corridors; out-of-state LLCs holding vacant or underused parcels; recent rezonings and who requested them. Sources: county assessor records, state LLC filings, planning commission agendas.

2. MUNICIPAL FINANCE AND POLITICAL FUNDING
What is the revenue structure of [CITY]'s municipal budget? Who funds city council campaigns — which developers, industries, and interests? Have any council members received significant contributions from entities with business before the city? Sources: city CAFR, state campaign finance database, city council meeting records.

3. APPOINTED BOARDS AND COMMISSIONS
What are the key appointed bodies governing land use, housing, utilities, and redevelopment in [CITY]? Who are the current members? What are their professional backgrounds and financial interests? Do any have conflicts of interest regarding decisions their bodies have made? Sources: city website boards roster, LinkedIn, property records.

4. PRIVATIZATION HISTORY
What services or assets in [CITY] have been privatized or contracted out in the last 30 years? Are there any long-term concession agreements currently in effect? What was publicly owned in 1990 that is now privately operated? Sources: city budget history, local journalism archives, city clerk contracts.

5. HOUSING PRODUCTION AND AFFORDABILITY
Who are the dominant developers in [CITY]? How much affordable housing has been built vs. promised in the last decade? Is there a community land trust operating in the city? What happened to affordable housing stock in the last major development cycle? Sources: city housing report, HUD data, cltnetwork.org.

6. COMMONS INFRASTRUCTURE
What mutual aid networks, housing cooperatives, food cooperatives, credit unions, tenant unions, or other commons institutions currently operate in [CITY]? Where are they concentrated? What gaps exist? Sources: mutualaidhub.org, ncba.coop, local cooperative league, city food access data.

SYNTHESIS
After completing all six sections, write a 200–300 word synthesis that:
- Names the 2–3 entities that appear across multiple sections (this is the capture structure)
- Names the 2–3 commons institutions with the most organizational capacity
- Identifies the single most vulnerable decision point — the place where organized resident pressure is most likely to change something
- Flags what couldn't be verified and why it matters

Be specific. Vague analysis is not useful. If you can't find something, say so and explain what that absence might mean.</div>
</div>
<div class="theory-note">
<span class="theory-note-label">What the prompt is built on</span>
<p>The six questions come from the framework in <a class="xl" href="why-your-city-doesnt-work.html">Why Your City Doesn't Work</a>, <a class="xl" href="urban-capture.html">How Cities Get Captured</a>, and <a class="xl" href="the-outside-capital-needs.html">The Outside Capital Needs</a>. The synthesis step is designed to identify both the capture structure and the productive substrate — <a class="xl" href="hardin-was-wrong.html">the commons that already exists</a> and can be strengthened.</p>
</div>
<div class="how-to">
<div class="how-to-header">
<span class="how-to-label">After you get results</span>
</div>
<div class="how-to-body">
<ol>
<li>Verify the three to five most specific claims before sharing publicly. Agents hallucinate details.</li>
<li>Share the brief with people who know the city. Local knowledge catches what research misses.</li>
<li>The synthesis section is the most useful for organizing — it tells you where to apply pressure.</li>
<li>If you publish it, link back to this site. The more city briefs exist, the more useful the pattern becomes.</li>
</ol>
</div>
</div>` },
  { id: 'organizer', label: 'Organizer Track', html: `<p>This track is for running the power analysis as a facilitated process — in a room, with a group. Tenant meeting, neighborhood assembly, study circle, union hall, community organization. The analysis is the same. The difference is that the knowledge comes from the people in the room, not from a researcher working alone.</p>
<div class="theory-note">
<span class="theory-note-label">The Freirean premise</span>
<p>Paulo Freire showed that people who are most affected by unjust arrangements usually know more about how those arrangements work than any outside researcher does — they just haven't had a structured process for naming what they know. <a class="xl" href="freire.html">Conscientization</a> isn't about delivering analysis to people who lack it. It's about creating conditions where people can name their situation together, see it as a situation rather than fate, and decide what to do about it. This facilitation guide is built on that premise.</p>
</div>
<div class="how-to">
<div class="how-to-header">
<span class="how-to-label">Before the session</span>
</div>
<div class="how-to-body">
<ol>
<li><strong>Don't arrive with the answers.</strong> You can arrive with the questions and with data you've already found — but the analysis has to be built in the room, not delivered to it. If you've already done a solo power brief, hold it back until after the group has named what they see.</li>
<li><strong>Prepare one generative image or document per question.</strong> Something concrete: a map of who owns the land near the meeting location, a list of planning commission members and their employers, a chart of the last decade of housing permits. The point is to give people something specific to react to, not an abstract question.</li>
<li><strong>Aim for 8–20 people.</strong> Small enough that everyone can speak; large enough that the knowledge in the room is genuinely collective. More than 20 needs breakout structure.</li>
<li><strong>Plan 90 minutes minimum.</strong> Two hours is better. The first 20 minutes of any honest political conversation is usually people deciding whether it's safe to say what they actually think.</li>
</ol>
</div>
</div>
<ul class="question-list">
<li class="question-item">
<div class="question-header">
<span class="q-num">01</span>
<span class="q-title">Start with what broke — not with the framework</span>
</div>
<div class="q-body">
<p>Open with a concrete question about something in the room's direct experience: <em>What has changed in this neighborhood in the last ten years? What do you notice that wasn't there before — or isn't there anymore?</em></p>
<p>Let people name things: the store that closed, the rent that doubled, the park that got a new fence, the bus route that got cut. Don't direct toward the framework yet. You're mapping the generative themes — the contradictions people are already living. These will become the frame for every question that follows.</p>
<p>Spend 15–20 minutes here. Write everything on a visible surface. Don't edit or interpret — just receive.</p>
</div>
<div class="data-sources">
<div class="data-label">Facilitation note</div>
<ul>
<li>The quietest people in the room often have the sharpest analysis. Direct questions help: "What have you noticed in your block specifically?"</li>
<li>If the group jumps to blame (a politician, a developer, a group) — note it and move on. You'll come back to it. Right now you're building the map, not assigning responsibility.</li>
</ul>
</div>
</li>
<li class="question-item">
<div class="question-header">
<span class="q-num">02</span>
<span class="q-title">Who owns the land here?</span>
</div>
<div class="q-body">
<p>Show the ownership map or list you prepared. Ask: <em>Does this match what you know? What's missing? What surprises you?</em></p>
<p>Then: <em>Who benefits when land values go up? Who gets displaced? When the city rezones something, who asked for it?</em> You're not delivering the analysis — you're posing the contradiction and letting the room name it.</p>
<p>The key move: connect what people named in step 01 to what the ownership map shows. "You said the corner lot has been empty for three years. Who owns it? What are they waiting for?"</p>
</div>
<div class="data-sources">
<div class="data-label">Prep material</div>
<ul>
<li>County assessor map of the neighborhood — 10 largest owners by acreage or assessed value</li>
<li>Any parcels that received rezonings in the last five years</li>
<li>Vacant lots: who owns them, how long have they been vacant</li>
</ul>
</div>
</li>
<li class="question-item">
<div class="question-header">
<span class="q-num">03</span>
<span class="q-title">Who's in the room where decisions get made?</span>
</div>
<div class="q-body">
<p>Show the planning commission or relevant board roster. Ask: <em>Do you recognize any of these names? Do you know what they do for work? Have you ever been to one of these meetings?</em></p>
<p>Then: <em>When was the last time a decision by this body affected your neighborhood? Did anyone here know about it before it happened? Did anyone get to say anything?</em></p>
<p>The goal is to make visible what is usually invisible: that the decisions people are living with were made in rooms they didn't know existed, by people they didn't elect, who may have had financial interests in the outcomes. Naming this is not cynicism. It's the beginning of strategy.</p>
</div>
<div class="data-sources">
<div class="data-label">Prep material</div>
<ul>
<li>Planning commission roster with employers — one page, readable at a glance</li>
<li>One or two decisions from the last two years that affected the neighborhood</li>
<li>When and where the commission meets, and whether meetings are accessible</li>
</ul>
</div>
</li>
<li class="question-item">
<div class="question-header">
<span class="q-num">04</span>
<span class="q-title">What used to be ours — and what do we still have?</span>
</div>
<div class="q-body">
<p>This question moves in two directions at once. Ask: <em>What services or places in this city were public ten or twenty years ago that aren't now? What did you lose?</em></p>
<p>Then immediately: <em>What do we still have? What's still governed by the community, or still accessible to everyone? What are people defending?</em></p>
<p>The first half names the enclosure. The second half names the commons — what's still here, what people are fighting for, what hasn't been taken yet. Both are equally important. The analysis isn't just about what's wrong. It's about what exists to build from.</p>
</div>
<div class="data-sources">
<div class="data-label">Prep material</div>
<ul>
<li>Any privatizations or contracting-out in the last 20 years (transit, water, parking, waste)</li>
<li>Community institutions that still exist: libraries, parks, public pools, community centers</li>
<li>Anything currently threatened with closure or privatization</li>
</ul>
</div>
</li>
<li class="question-item">
<div class="question-header">
<span class="q-num">05</span>
<span class="q-title">Where are people already building the alternative?</span>
</div>
<div class="q-body">
<p>Ask: <em>Does anyone here know of a mutual aid network, a food cooperative, a tenant union, a community land trust, a credit union — something in this city where people are governing a resource together?</em></p>
<p>Then: <em>Have you participated in any of these? What made it work? What made it hard?</em></p>
<p>This is often where the room's energy shifts. People have been in these spaces — they know what cooperative governance feels like, even if they don't use that language. The point of this question is to make that experience legible as political: as an alternative to the capture structure, not just a community service.</p>
</div>
<div class="data-sources">
<div class="data-label">Prep material</div>
<ul>
<li>Mutual Aid Hub map for the city</li>
<li>Local cooperative directory</li>
<li>Any tenant unions or housing cooperatives you've identified</li>
<li>The commons they never stopped building: <a class="xl" href="the-commons-they-never-stopped-building.html">→</a></li>
</ul>
</div>
</li>
<li class="question-item">
<div class="question-header">
<span class="q-num">06</span>
<span class="q-title">What would have to change — and who would have to move?</span>
</div>
<div class="q-body">
<p>This is the synthesis question — and the most important one to get right. Don't rush it. Ask: <em>Based on everything we've named today — the ownership patterns, the board membership, the privatizations, the commons that still exists — where is the leverage? What's the one thing that, if it changed, would change other things?</em></p>
<p>Then: <em>Who in this room has a relationship to that leverage point? Who do you know who does?</em></p>
<p>Freire's point: the analysis only matters if it connects to action that the people in the room can take. Not action in general — specific action by specific people with specific relationships to specific institutions. The brief is not the outcome. What people decide to do next is the outcome.</p>
</div>
<div class="data-sources">
<div class="data-label">Facilitation note</div>
<ul>
<li>If the group gets stuck on an enemy (a developer, a politician), redirect: "That's the obstacle. What's the leverage? What could actually change their calculus?"</li>
<li>End with a specific ask: not "what should we do" but "who will do what by when." Even one concrete commitment is more valuable than a general consensus.</li>
<li>Document the session. The knowledge built in the room belongs to the room — write it up and share it back within a week.</li>
</ul>
</div>
</li>
</ul>
<div class="how-to">
<div class="how-to-header">
<span class="how-to-label">After the session</span>
</div>
<div class="how-to-body">
<ol>
<li><strong>Write up what the room named</strong> — not your analysis, but the specific things people said. Circulate it within a week. This creates a shared record and signals that what people said mattered.</li>
<li><strong>Now compare with the solo brief.</strong> Where does the room's knowledge match the research? Where does it diverge? The divergences are the most interesting findings — they're usually where lived experience has caught something that public records miss.</li>
<li><strong>Follow the commitments.</strong> Whoever said they'd do something — check in. The session's value is determined by what happens in the week after it, not in the room itself.</li>
<li><strong>Consider running it again in six months</strong> with the same group. Conscientization is a process, not an event. The second session is almost always sharper than the first.</li>
</ol>
</div>
</div>
<div class="theory-note">
<span class="theory-note-label">The theory behind this structure</span>
<p>This facilitation guide applies Freire's <strong>problem-posing method</strong> to the power analysis framework. The six questions are posed as contradictions to investigate together, not conclusions to deliver. The sequence — from lived experience (what broke) to structural analysis (who owns, who decides) to existing alternatives (what we still have) to strategy (what would have to change) — follows the conscientization arc: naming the situation, understanding it as historical and therefore changeable, and orienting toward action. <a class="xl" href="freire.html">Freire →</a></p>
</div>` }
]

const PROMPT = `You are a researcher conducting a power analysis of a city. Your job is to produce a structured brief that reveals who actually controls key decisions — land use, housing, public services, municipal governance — and where residents have built durable alternatives.

City: [CITY NAME, STATE]
Research depth: [QUICK (1–2 hours of research) / THOROUGH (full investigation)]
Output format: [BRIEF (summary + key findings) / FULL REPORT (all six sections with detail)]

Investigate and report on each of the following six areas. For each, provide: key findings, the most important entities and relationships you discovered, what's missing or unclear, and what it implies for residents trying to change things.

1. LAND OWNERSHIP
Who are the largest landowners in [CITY]? Focus on: large single owners near transit corridors; out-of-state LLCs holding vacant or underused parcels; recent rezonings and who requested them. Sources: county assessor records, state LLC filings, planning commission agendas.

2. MUNICIPAL FINANCE AND POLITICAL FUNDING
What is the revenue structure of [CITY]'s municipal budget? Who funds city council campaigns — which developers, industries, and interests? Have any council members received significant contributions from entities with business before the city? Sources: city CAFR, state campaign finance database, city council meeting records.

3. APPOINTED BOARDS AND COMMISSIONS
What are the key appointed bodies governing land use, housing, utilities, and redevelopment in [CITY]? Who are the current members? What are their professional backgrounds and financial interests? Do any have conflicts of interest regarding decisions their bodies have made? Sources: city website boards roster, LinkedIn, property records.

4. PRIVATIZATION HISTORY
What services or assets in [CITY] have been privatized or contracted out in the last 30 years? Are there any long-term concession agreements currently in effect? What was publicly owned in 1990 that is now privately operated? Sources: city budget history, local journalism archives, city clerk contracts.

5. HOUSING PRODUCTION AND AFFORDABILITY
Who are the dominant developers in [CITY]? How much affordable housing has been built vs. promised in the last decade? Is there a community land trust operating in the city? What happened to affordable housing stock in the last major development cycle? Sources: city housing report, HUD data, cltnetwork.org.

6. COMMONS INFRASTRUCTURE
What mutual aid networks, housing cooperatives, food cooperatives, credit unions, tenant unions, or other commons institutions currently operate in [CITY]? Where are they concentrated? What gaps exist? Sources: mutualaidhub.org, ncba.coop, local cooperative league, city food access data.

SYNTHESIS
After completing all six sections, write a 200–300 word synthesis that:
- Names the 2–3 entities that appear across multiple sections (this is the capture structure)
- Names the 2–3 commons institutions with the most organizational capacity
- Identifies the single most vulnerable decision point — the place where organized resident pressure is most likely to change something
- Flags what couldn't be verified and why it matters

Be specific. Vague analysis is not useful. If you can't find something, say so and explain what that absence might mean.`

export default function YourCity() {
  const [activeTrack, setActiveTrack] = useState(TRACKS[0]?.id || '')
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(PROMPT).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const current = TRACKS.find(t => t.id === activeTrack)

  return (
    <Layout
      title="Your City: A Power Analysis — Power Explained"
      description="Six questions that reveal who actually runs your city — and who pays the price. Research it yourself, hand it to an agent, or run it as a facilitated process with a room of people."
      seriesTag="Tools"
    >
      <div dangerouslySetInnerHTML={{ __html: `` }} />

      <div style={{ maxWidth: 'var(--max)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        {TRACKS.length > 1 && (
          <div style={{ display: 'flex', gap: '1px', marginBottom: '2rem', background: 'var(--rule-strong)', border: '1px solid var(--rule-strong)' }}>
            {TRACKS.map(t => (
              <button
                key={t.id}
                onClick={() => setActiveTrack(t.id)}
                style={{
                  flex: 1, padding: '0.85rem 1.25rem',
                  fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                  background: activeTrack === t.id ? 'var(--ink)' : 'var(--paper)',
                  color: activeTrack === t.id ? 'var(--paper)' : 'rgba(var(--ink-rgb),0.5)',
                  border: 'none', cursor: 'pointer', transition: 'all 0.15s',
                }}
              >{t.label}</button>
            ))}
          </div>
        )}

        {current && <div dangerouslySetInnerHTML={{ __html: current.html }} />}

        <div style={{ background: '#1a1714', color: '#f0e8d8', padding: '2.5rem', position: 'relative', marginTop: '2rem' }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(240,232,216,0.4)', display: 'block', marginBottom: '1.25rem' }}>Agent prompt — city power analysis</span>
          <button
            onClick={copy}
            style={{
              position: 'absolute', top: '1.25rem', right: '1.25rem',
              fontFamily: 'var(--mono)', fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase',
              background: 'none', border: '1px solid rgba(240,232,216,0.25)',
              color: copied ? '#d4604f' : 'rgba(240,232,216,0.5)',
              padding: '0.4rem 0.75rem', cursor: 'pointer',
            }}
          >{copied ? 'Copied' : 'Copy'}</button>
          <pre style={{ fontFamily: 'var(--mono)', fontSize: '0.78rem', lineHeight: 1.8, color: 'rgba(240,232,216,0.88)', whiteSpace: 'pre-wrap', margin: 0 }}>{PROMPT}</pre>
        </div>

        <div dangerouslySetInnerHTML={{ __html: `<div class="article-footer">
<a class="back-link" href="index.html">Back to all pieces</a>
</div>` }} style={{ marginTop: '2rem' }} />
      </div>
    </Layout>
  )
}
