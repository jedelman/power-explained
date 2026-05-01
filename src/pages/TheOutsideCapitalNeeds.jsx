import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []
const FOOTNOTES = [
  `Luxemburg, Rosa. <em>Die Akkumulation des Kapitals: Ein Beitrag zur ökonomischen Erklärung des Imperialismus</em>. Berlin: Buchhandlung Vorwärts Paul Singer, 1913. English translation: <em>The Accumulation of Capital</em>, trans. Agnes Schwarzschild. London: Routledge &amp; Kegan Paul, 1951. The book was immediately controversial within Marxist economics — both Lenin and Bukharin wrote responses, arguing her math was wrong. The debate about whether her core argument is correct remains unresolved. Ecological and feminist economists have found her "outside" framework productive for thinking about capitalism's dependence on unpaid reproductive labor and natural systems. <a href="#ref1">↩</a>`,
  `Luxemburg, Rosa. <em>Sozialreform oder Revolution?</em> Leipzig: Verlag der Leipziger Volkszeitung, 1899. Written as a response to Eduard Bernstein's revisionist argument in <em>Die Voraussetzungen des Sozialismus</em> (1899). The pamphlet compiled articles originally published in the <em>Leipziger Volkszeitung</em> in 1898–1899; a revised and expanded second edition appeared in 1908. English translation: <em>Social Reform or Revolution</em> (Pathfinder Press, 1970). Luxemburg's argument is structural rather than moral: capitalism cannot be reformed into socialism because the logic of accumulation will always reassert itself against any regulatory constraint. <a href="#ref2">↩</a>`,
  `Luxemburg, Rosa. <em>Massenstreik, Partei und Gewerkschaften</em>. Hamburg: Erdmann Dubber, 1906. Written in response to the 1905 Russian Revolution and the debates it triggered within the German SPD about the relationship between mass action, party discipline, and trade union organization. English translation: "The Mass Strike, the Political Party and the Trade Unions," in <em>Rosa Luxemburg Speaks</em> (Pathfinder Press, 1970). The pamphlet's core claim — that the mass strike is not a tactic chosen by a party but a spontaneous form that the working class generates under revolutionary conditions — anticipated later theoretical work on distributed coordination and emergence. <a href="#ref3">↩</a>`,
  `Luxemburg was arrested on January 15, 1919, by the Guards Cavalry Rifle Division (Garde-Kavallerie-Schützen-Division), a Freikorps unit operating under authorization from the Social Democratic government. She was interrogated, beaten, and shot; her body was thrown into the Landwehr Canal in Berlin and recovered on June 1, 1919. She was born March 5, 1871, making her 47 at the time of her death — not 51, as sometimes stated. The order was issued by Waldemar Pabst, the division's first staff officer; he later acknowledged responsibility and stated he had received political cover from Social Democratic Defense Minister Gustav Noske. No one was prosecuted for the killings of Luxemburg or Karl Liebknecht, who was murdered the same night. <a href="#ref4">↩</a>`
]

export default function TheOutsideCapitalNeeds() {
  return (
    <Layout
      title="The Outside Capital Needs — Power Explained"
      description="Rosa Luxemburg figured out that capitalism can't feed itself. To keep growing, it has to take from people and places outside the market. When there's nothing left to take, it eats itself."
      seriesTag="The Hidden Engine — Series II"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `The Outside Capital Needs` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>You work. You get paid. You buy things. The profit comes from the difference between what you're paid and what you produce. Simple.</p>
<p>But there's a problem with the math.</p>
<p>Workers only earn enough to buy part of what they produce. Capitalists spend some of their profits but reinvest the rest. So there's always more stuff being made than workers and capitalists combined can purchase. The system needs extra buyers. It needs an outside.</p>
<p>For two hundred years, that outside existed. Colonial territories. Peasant economies. Subsistence communities that hadn't been pulled into the market yet. Capital could expand into these spaces — sell goods, extract resources, put people to work — and keep the circuit running.</p>
<p>But the outside is finite. As capitalism spreads globally, it keeps incorporating more of that outside into itself. When there's nothing left outside, the circuit breaks.</p>
<p>This is what Rosa Luxemburg figured out in 1913. And it's the key to understanding why the system keeps looking for new frontiers to exploit.</p>
<h2>What capital can't make</h2>
<p>Luxemburg wasn't just describing an economics problem. She was identifying something every powerful system does: it depends on resources it cannot produce itself.</p>
<p>Capital needs markets, labor, raw materials that come from communities, ecologies, relationships it didn't create and can't replicate. It can enclose them. Extract from them. Destroy them. It cannot build them from scratch.</p>
<p>This is what we mean by the commons — the shared productive capacity that communities build together. The common language and knowledge people use without paying for it. The informal networks of care and support. The natural systems that provide clean water and breathable air. The social trust that makes institutions function at all.</p>
<p>None of this is produced by the market. All of it is required by the market to function.</p>
<p>Capital can capture the commons. It can privatize water, commodify attention, patent seeds. But once captured and privatized, those things stop being what they were. A commons that's been enclosed isn't a commons anymore — it's an asset. And assets don't spontaneously regenerate. They depreciate.</p>
<div class="pull">
Capital can capture the commons.<br/>It <strong>cannot replace</strong> it.
</div>
<h2>Two kinds of change</h2>
<p>Luxemburg drew a line between two different kinds of change.</p>
<p>One operates within the system's rules. Win elections. Pass laws. Negotiate better wages. These are real gains. But they work within the existing structure. They can improve conditions under capture. They cannot change the structure of capture itself. The system eventually routes around any reform.</p>
<p>The other kind is structural. It doesn't ask for better terms within the existing arrangement — it asks why this arrangement exists and whether a different one is possible. This is harder, riskier, slower. But it's the only kind of change that can address the underlying problem instead of managing its symptoms.</p>
<p>You need to know which kind of work you're doing. Don't mistake one for the other.</p>
<h2>How change actually moves</h2>
<p>In 1906, Luxemburg published <em>The Mass Strike</em>, describing something she saw happening in the Russian revolution of 1905: change that coordinated without central command.</p>
<p>Strikes spreading from factory to factory, city to city, without a party organization issuing instructions. Workers reading each other and responding. Distributed intelligence, operating faster than any hierarchy could manage.</p>
<p>This wasn't chaos. It was a different kind of order. And it was more effective than the centralized models that claimed to speak for the movement.</p>
<p>She was describing what we now understand as a property of complex systems: distributed coordination often outperforms centralized planning when the environment is changing fast and the knowledge is local. City hall doesn't know your street better than you do. A party headquarters doesn't know your factory floor. The mass strike worked because it processed local knowledge locally, in real time.</p>
<div class="callout">
<span class="callout-label">The question she left open</span>
<p>Luxemburg mapped the "outside" that capital requires as geographic — colonial territories, pre-capitalist economies. What she didn't fully ask was: who is the outside at home? What labor, within the capitalist center itself, is being used without being counted?</p>
<p><a class="xl" href="who-pays-for-the-next-shift.html">The next article begins to answer that question.</a></p>
</div>
<p>Rosa Luxemburg was arrested in January 1919 and executed without trial by a right-wing paramilitary unit with the knowledge of the Social Democratic government she had spent years opposing. She was forty-seven years old. Her body was thrown in a canal.</p>
<p>The ideas survived because they were right. The system does depend on what it cannot produce. The outside is real. And the question of what that outside is made of — who lives there, whose labor it runs on, whose knowledge it extracts — is the question the next generation of thinkers picked up and refused to let go.</p>
` }} />
        </div>
        
        
        
        <Footnotes notes={FOOTNOTES} />
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
