import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function FallingThroughTheGap() {
  return (
    <Layout
      title="Falling Through the Gap — Power Explained"
      description="Kimberlé Crenshaw named a structural problem: institutions built to process categories one at a time are blind to people whose oppression is produced by the combination. They fall through the gap."
      seriesTag="The Hidden Engine — Series II"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `Falling Through the Gap` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>In 1976, a group of Black women who worked at a General Motors plant in St. Louis filed a discrimination lawsuit. Their argument: GM had discriminated against them on the basis of race and sex.</p>
<p>The court rejected the claim. Here's why.</p>
<p>GM could demonstrate that it hired Black people. The evidence: the mostly Black men working on the assembly floor. GM could also demonstrate that it hired women. The evidence: the mostly white women working in clerical positions. Therefore, the court reasoned, GM did not discriminate on the basis of race or sex.</p>
<p>The women who filed the suit occupied a position the legal framework could not see. They were Black and women — and it was the combination, not either factor alone, that produced their exclusion. There was no legal category for what had happened to them. They fell through the gap.</p>
<p>Kimberlé Crenshaw named this gap intersectionality.</p>
<h2>What the word actually means</h2>
<p>Intersectionality has become a buzzword in ways that have obscured what it originally meant. It wasn't a theory of identity. It wasn't a claim about how many kinds of oppression someone experiences. It was a specific legal and structural argument: institutions built to process categories one at a time are systematically blind to people whose oppression is produced by the combination of categories.</p>
<p>The GM case is the archetype. The legal system could analyze race discrimination. It could analyze sex discrimination. It could not analyze the specific way those systems combined to produce an outcome that neither alone would predict. The two-dimensional analysis had a blind spot at the intersection, and the people in that blind spot had no legal recourse.</p>
<p>This is not a coincidence. It follows from how the categories were constructed in the first place. Anti-discrimination law was developed primarily in response to the experiences of people who faced discrimination on a single axis — Black men fighting race discrimination, white women fighting sex discrimination. The legal categories reflect those experiences. People whose experiences are produced by both systems simultaneously were not centered in the design. They were its remainder.</p>
<div class="pull">
        The gap isn't an oversight.<br/>It's <strong>built into the architecture</strong>.
      </div>
<h2>Three dimensions of the problem</h2>
<p>In her 1991 paper, Crenshaw identified three distinct ways intersectionality shows up.</p>
<p><strong>Structural intersectionality</strong>: The actual material conditions of people at the intersection are different from the conditions of people on any single axis. A Black woman experiencing domestic violence faces a different set of barriers than a white woman — immigration status may be a factor, fear of police may prevent her from calling for help, shelters may be located in ways that are inaccessible to her. The structural conditions of her life are different in specific, concrete ways. Policy designed around the generic "domestic violence victim" will miss her.</p>
<p><strong>Political intersectionality</strong>: Mainstream feminist movements have historically organized around the experiences of white women. Mainstream antiracist movements have historically centered Black men. Black women are both members of these movements and not quite fully represented by either. When the interests of the two movements conflict — or when each movement has to choose what to prioritize — women of color find themselves in a position where both movements can claim them instrumentally without centering their specific needs.</p>
<p><strong>Representational intersectionality</strong>: Cultural images of Black women operate simultaneously through racist and sexist frames, reinforcing both sets of stereotypes at once. The way Black women are represented in media, in political discourse, and in cultural imagination is not simply "women's stereotypes + racial stereotypes." It's a specific set of images produced by the combination — images that have their own history, logic, and effects.</p>
<div class="callout">
<span class="callout-label">The unmarked default</span>
<p>Every category has an unmarked default — the person who is assumed when the category is invoked without further specification. "Workers" defaults to white men. "Women" defaults to white women. "Black people" defaults to Black men. These defaults aren't accidental; they reflect who was centered in the construction of each category and whose experience the category was built to describe. <a class="xl" href="gramsci.html">This is hegemony at the level of categories</a>: the particular masquerading as universal, invisible because it never has to announce itself.</p>
<p>The unmarked default is the hidden <a class="xl" href="glossary.html#alibi">alibi</a>. It makes the category appear universal when it is actually particular. And it determines who falls through the gap when the category fails to account for them.</p>
</div>
<h2>What intersectionality is not</h2>
<p>It's worth being precise about what Crenshaw's framework doesn't claim. It doesn't say that everyone is oppressed in multiple ways, or that oppression is infinitely divisible, or that you can't analyze systems without accounting for every possible combination of factors. It says that when the conditions of people's lives are produced by the combination of multiple systems of domination, analysis that treats those systems as separate and independent will systematically misrepresent those conditions — and policy designed on that misrepresentation will fail the people who most need it to work. Intersectionality is a diagnostic tool: it tells you where the gaps are and who is falling through them. <a class="xl" href="what-we-do-on-monday.html">Building institutions without those gaps is the harder work — and it's where the next article begins.</a></p>
<h2>The connection to the commons</h2>
<p><a class="xl" href="glossary.html#capture">Capture, in this framework</a>, operates at the level of category formation. When a system processes people through single-axis categories, the people at the intersections are structurally excluded from the system's protections — but not from the system's extractions. They still pay taxes. They still produce value. They still show up in the statistics that justify the system's existence. But the benefits of the system don't reach them in proportion to their contributions, because the categories through which benefits are distributed were built without them in mind.</p>
<p>This is not a metaphor. It's a description of how institutions work when they're designed around unmarked defaults. The GM workers contributed their labor. The legal system's protections didn't reach them. The contribution and the protection operated through different categories, and the categories didn't overlap where those workers lived.</p>
<p>Building systems without these gaps requires starting from the people at the intersection — from the people most harmed by the combination of systems — rather than from the unmarked defaults. That is both an ethical and a practical claim. Ethically: it's just. Practically: systems designed around the hardest cases are more likely to work for everyone than systems designed around the easy cases and extended awkwardly to everyone else.</p>` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
