import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function LibMinersAndCnt() {
  return (
    <Layout
      title="The Libertarian Tradition They Buried — Power Explained"
      description="The West Virginia miners who fought the Battle of Blair Mountain weren't asking the government for help. The CNT-FAI in Spain ran factories, railways, and farms without bosses or state — the largest anarchist experiment in history. This tradition was buried because it proved you don't need either."
      seriesTag="For Libertarians"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `The <em>Libertarian</em><br />Tradition<br />They Buried` }} />
          <p className="hero-dek">The West Virginia miners who fought the Battle of Blair Mountain weren't asking the government for help. The CNT-FAI ran factories, railways, and farms without bosses or party — the largest anarchist experiment in history. This tradition was buried because it proved you don't need either.</p>
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<div class="nav-strip">
<a href="for-libertarians.html">Overview</a>
<a href="lib-skin-in-the-game.html">I. Skin in the game</a>
<a href="lib-liberty-and-hegemony.html">II. Liberty and hegemony</a>
<a class="current" href="lib-miners-and-cnt.html">III. The buried tradition</a>
</div>
<p>The word "libertarian" was coined by anarchists. Joseph Déjacque used it in 1857 to describe a position to the left of liberalism: not merely free from state interference, but free from all hierarchy — from the boss as much as from the magistrate. The term was later adopted by American propertarians in the twentieth century, but the original meaning was something more radical and more consistent: if coercion is wrong, all coercion is wrong, including the coercion of the employer who can fire you for organizing, the landlord who can evict you on thirty days' notice, the corporation that can dump poison in your watershed because it owns the land.</p>
<p>The tradition that takes this seriously — the anarchist and anarcho-syndicalist tradition — was one of the most significant political movements of the late nineteenth and early twentieth centuries. It's been systematically buried: partly by state violence, partly by authoritarian socialists who needed to discredit horizontal self-governance, and partly by the propertarian capture of libertarian language that prefers you not know any of this.</p>
<h2>West Virginia, 1921: armed workers, no state required</h2>
<p>The coal operators of southern West Virginia ran company towns — total enclosure of workers' lives as well as their labor. The company owned the houses, the stores, the roads, the doctors. Workers were paid in scrip redeemable only at company stores. Union organizers were murdered. The Baldwin-Felts Detective Agency — private enforcers on company payroll — evicted striking miners' families and shot organizers in the streets. The state of West Virginia was the coal operators' state; the governor deployed the National Guard on their behalf.</p>
<p>The <a class="xl" href="https://umwa.org" rel="noopener" target="_blank">United Mine Workers</a> organized anyway — not through petition, not through electoral politics, but through mutual aid, collective discipline, and armed self-defense. The key organizer in the West Virginia coalfields for years before Blair Mountain was <a class="xl" href="https://www.motherjones.com/about/history/mother-jones-biography/" rel="noopener" target="_blank">Mary Harris "Mother Jones"</a> — in her seventies and eighties, arrested repeatedly, called "the most dangerous woman in America" by a US district attorney. What made her dangerous was her analysis: she understood that the company town enclosed not just labor but the entire commons of community life — the home, the family, the children's future. Her tactic of bringing miners' wives and families onto the picket lines wasn't a sentimental addition to labor organizing. It was a structural recognition that the enclosure was total and the resistance had to be too.</p>
<p>This maps directly onto what <a class="xlr" href="sj-reproductive-commons.html">Federici showed</a> about reproductive labor: the company town was a textbook enclosure of the domestic commons. The company owned the house you lived in, which meant it owned the conditions under which your family reproduced — the work of feeding, raising, and maintaining the workforce that made the company's profits possible. Jones understood before Federici theorized it that you couldn't fight the workplace enclosure without fighting the community enclosure simultaneously. Her organizing model was mutual aid at the scale of the whole settlement: women, children, and workers as a single governed community defending a commons, not wage-earners defending a contract. It's the same logic that makes <a class="xlr" href="env-indigenous-land-governance.html">Indigenous territorial governance</a> outperform workplace-only labor strategies — when the community has soul in the game across all dimensions of life, not just the economic transaction, the resistance is harder to break.</p>
<p>When Baldwin-Felts agents murdered the police chief of Matewan — Sid Hatfield, who had refused to evict union miners — it triggered the largest armed labor uprising in American history. The <a class="xl" href="https://wvminewars.com" rel="noopener" target="_blank">West Virginia Mine Wars Museum</a> documents the full record.</p>
<div class="case">
<span class="case-label">August–September 1921 · West Virginia</span>
<h3>The Battle of Blair Mountain</h3>
<p>Ten thousand miners — organized, armed, and operating with genuine community solidarity — marched on Logan County to end the reign of Sheriff Don Chafin, the operators' man, who had deputized hundreds of company enforcers and was blocking union organizing through terror. They weren't marching to demand government action. They were prepared to take the county themselves.</p>
<p>The federal government intervened — on the side of the operators. Army Air Service planes flew reconnaissance over the miners' positions while company-hired planes dropped improvised gas bombs on them. When President Harding ordered regular federal troops into the coalfields, the miners stood down rather than fire on the U.S. Army. Their leaders were charged with treason and murder. The union was broken in those coalfields for another decade.</p>
<p>What the Battle of Blair Mountain demonstrates isn't just labor history. It's a case study in what working-class commons governance looks like under real conditions: horizontal organization, mutual obligation, collective decision-making, the willingness to defend the community's interests against both private capital and the state that protects it. No vanguard party. No government program. Self-organized, self-governed, self-defended — and eventually crushed by federal military power because it was effective.</p>
</div>
<div class="pull">
        Ten thousand armed miners, self-organized,<br/>no party, no government.<br/><strong>That's the tradition they don't teach.</strong>
</div>
<h2>Spain, 1936: running the economy without bosses</h2>
<p>The <a class="xl" href="https://cnt.es" rel="noopener" target="_blank">Confederación Nacional del Trabajo</a> — CNT — was founded in 1910 on explicitly anarcho-syndicalist principles: workers governing their own workplaces through unions, no political parties, no hierarchical leadership, decision-making through federated assemblies. By the 1930s it had over a million members. Its political wing, the Federación Anarquista Ibérica (FAI), maintained the explicitly anti-statist orientation against reformist drift.</p>
<p>When Franco launched his coup in July 1936, the CNT-FAI didn't wait for the government. In Barcelona and across Catalonia and Aragon, workers seized the factories, the transport networks, the utilities, and the land — and ran them. Not through state ownership. Through direct workers' control: factory committees managing production, coordinating through syndicates, supplying each other through confederal networks. Collectivized agriculture in Aragon fed the Republican zone. The Barcelona tram system — collectivized — ran more reliably than before. The wood and metal workers ran their industries through rotating committees accountable to the shop floor.</p>
<p>George Orwell went to Spain as a socialist and came back describing something he hadn't expected to find: a society, in parts of Catalonia, that had actually abolished hierarchy in practice, not just in theory. The hotel where he stayed in Barcelona was collectivized. The waiters didn't cringe. There were no visible class distinctions. He described it, with evident shock, as the closest thing to genuine equality he had ever experienced. <a class="xl" href="the-party-ate-the-revolution.html">The party — the Stalinist PCE — subsequently destroyed it</a>, which Orwell documented in <em>Homage to Catalonia</em>. But it ran, for over a year, at scale, without bosses and without the state.</p>
<h2>Why this tradition was buried</h2>
<p>The anarcho-syndicalist tradition posed a problem for both dominant political projects of the twentieth century. For authoritarian socialists, it proved that a vanguard party was not necessary for working-class self-organization — and that workers who governed themselves would resist the party's attempt to replace that governance with state control. Trotsky said it directly: the anarchists' refusal to submit to party discipline was counter-revolutionary. He was right that it threatened the party. He was wrong about which side was the problem.</p>
<p>For propertarian capitalism, the CNT-FAI proved that workers could run complex industry without bosses, that profits were not the necessary incentive for production, and that hierarchy in the workplace was a choice rather than a natural requirement of economic organization. This is the most threatening possible demonstration to an ideology premised on the necessity of capital and management.</p>
<p>So both sides had reasons to bury it. The historical record got filtered through Cold War categories that left no space for genuine horizontal self-governance — it was either state socialism or free markets, and anything that didn't fit those categories got disappeared from the story. <a class="xl" href="the-tradition-they-buried.html">The tradition they buried</a> is this one.</p>
<h2>What this means for you</h2>
<p>If you're libertarian because you believe in genuine human freedom — not freedom for the corporation to externalize costs, not freedom for the landlord to extract rent from people with no alternative, but actual freedom for actual people to govern their own lives — then this is your tradition more than Hayek or Mises is.</p>
<p><a class="xl" href="kropotkin.html">Kropotkin</a> argued from evolutionary biology that mutual aid — cooperative, horizontal self-organization — was more fundamental to human survival than competition. The commons was his evidence: centuries of communities governing shared resources without hierarchy, producing sustainability that markets and states couldn't match. The West Virginia miners and the CNT-FAI were proving the same point in industrial conditions.</p>
<p>The Zapatista communities in Chiapas have been governing themselves without the Mexican state for thirty years — <a class="xl" href="case-study-zapatistas.html">read that case study</a>. Rojava built stateless federated governance under military siege — <a class="xl" href="case-study-rojava.html">read that one too</a>. These aren't utopias and they're not without problems. They're proof of concept at scale. The thing you've been told is impossible — genuine self-governance without hierarchy — has been built, repeatedly, by working people who decided they didn't need the boss or the party to tell them what to do.</p>
<div class="close-box">
<span class="close-label">Series conclusion</span>
<h3>The question was always: who governs?</h3>
<p>Skin in the game says governance should be closest to those who bear the consequences. Liberty requires the commons that makes independence possible — not just formal freedom but material freedom. And the historical record shows that working people, given the chance, build exactly the kinds of horizontal, self-governed institutions that produce both.</p>
<p>The fight isn't government versus market. It's hierarchy versus commons. Both the state and the corporation are hierarchy — concentrated decision-making insulated from consequences, maintained by force, legitimized by <a href="lib-liberty-and-hegemony.html" style="color:rgba(var(--paper-rgb),0.9);text-decoration:none;border-bottom:1px solid rgba(var(--paper-rgb),0.3);">hegemony</a>. The commons is the alternative to both. It always has been.</p>
<div class="close-links">
<a class="close-link" href="for-libertarians.html">Back to overview →</a>
<a class="close-link" href="build-the-commune-without-the-state.html">Build the commune →</a>
<a class="close-link" href="the-tradition-they-buried.html">The full buried tradition →</a>
<a class="close-link" href="the-party-ate-the-revolution.html">Why the party failed →</a>
</div>
</div>
<div class="nav-strip light">
<a href="lib-liberty-and-hegemony.html">← Liberty and hegemony</a>
<a href="for-libertarians.html">Back to overview →</a>
</div>` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="" />
      </ArticleWrap>
    </Layout>
  )
}
