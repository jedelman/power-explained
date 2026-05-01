import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []
const FOOTNOTES = [
  `Luxemburg, Rosa. "Organisationsfragen der russischen Sozialdemokratie." <em>Neue Zeit</em> 22(2):484–492, July 1904; also published in <em>Iskra</em> No. 69. English translation circulated as "Leninism or Marxism?" — a title not Luxemburg's own — in <em>Rosa Luxemburg Speaks</em> (Pathfinder Press, 1970). The pamphlet was a direct response to Lenin's organizational theses in <em>What Is To Be Done?</em> (1902) and his <em>One Step Forward, Two Steps Back</em> (1904). <a href="#ref1">↩</a>`,
  `Lenin, V.I. <em>Chto Delat'? Nabolevshiye Voprosy Nashego Dvizheniya</em> (What Is To Be Done? Burning Questions of Our Movement). Stuttgart: Dietz, 1902. The argument about "trade union consciousness" appears in Chapter II: "The Spontaneity of the Masses and the Consciousness of the Social-Democrats." Lenin's formulation: "The history of all countries shows that the working class, exclusively by its own effort, is able to develop only trade union consciousness." The vanguard party's role is to supply socialist consciousness from without. <a href="#ref2">↩</a>`,
  `Pannekoek, Anton. <em>De Arbeidersraden</em>. Melbourne: Southern Advocate for Workers Councils, 1950 (first English edition); Dutch original published 1946. Written under the Nazi occupation of the Netherlands. A later English edition was published by Root &amp; Branch (Boston, 1970). Pannekoek (1873–1960) was a professional astronomer at the University of Amsterdam, specializing in stellar evolution and the history of astronomy. The book argues that factory councils — not parties, trade unions, or states — are the necessary form of socialist organization because they are the unit at which workers actually hold productive knowledge. <a href="#ref3">↩</a>`,
  `Herman Gorter (1864–1927): Dutch Marxist poet and theorist; his <em>Open Letter to Comrade Lenin</em> (1920) is the primary council communist response to Lenin's <em>"Left-Wing" Communism</em>, arguing that Western European conditions required mass self-organization rather than vanguard parties. Otto Rühle (1874–1943): German socialist educator; his <em>The Revolution Is Not a Party Affair</em> (1920) argued that party organization itself — not just the Bolshevik variant — reproduced hierarchical domination and was incompatible with genuine workers' liberation. Rühle later collaborated with Wilhelm Reich on the psychology of authoritarian character. <a href="#ref4">↩</a>`,
  `Lenin, V.I. <em>"Levizna" v kommunizme — detskaya bolezn'</em> ("Left-Wing" Communism: An Infantile Disorder). Moscow: Communist International, June 1920. Written in April–May 1920 specifically to discredit council communism, syndicalism, and anti-parliamentary currents within the international communist movement ahead of the Second Congress of the Comintern. The council communists' response, in various forms: Lenin's argument assumed the vanguard party's superior knowledge of revolutionary conditions — precisely the claim Luxemburg had already refuted in 1904, and which the subsequent history of Bolshevism confirmed as wrong. <a href="#ref5">↩</a>`,
  `CNT membership figures are contested in the historical literature. The commonly cited figure of 1.5 million refers to the period before the July 1936 coup; after mass recruitment in the revolutionary weeks following Franco's uprising, membership reached 1.58–1.6 million by late 1936–1937. See Antony Beevor, <em>The Battle for Spain</em> (Weidenfeld &amp; Nicolson, 2006); Graham Kelsey, <em>Anarchosyndicalism, Libertarian Communism and the State</em> (Kluwer, 1991). The FAI had overlapping but distinct membership — roughly 30,000–50,000 — functioning as a more explicitly anarchist tendency within the broader CNT ecosystem. <a href="#ref6">↩</a>`,
  `Orwell, George. <em>Homage to Catalonia</em>. London: Secker &amp; Warburg, 1938. Orwell served with the POUM (Partido Obrero de Unificación Marxista) militia on the Aragon front. The book's account of the May Days (Barcelona, May 1937) — in which Communist-aligned Republican police and assault guards opened fire on POUM and anarchist fighters — was largely suppressed or dismissed on the British left for years after publication. His later essay "Looking Back on the Spanish War" (1943) extends the same analysis. The experience was formative for <em>Animal Farm</em> (1945) and <em>Nineteen Eighty-Four</em> (1949). <a href="#ref7">↩</a>`
]

export default function TheTraditionTheyBuried() {
  return (
    <Layout
      title="The Tradition They Buried — Power Explained"
      description="There was a socialist and anarchist tradition with better answers than the one that won. It lost. That's not a coincidence — the winning tradition had strong reasons to bury it."
      seriesTag="Against Authoritarianism — Series III"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `The Tradition They Buried` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>There's a tradition of socialist and anarchist thought and practice that you probably haven't spent much time with, because it lost. Not just politically — it was actively buried. The people in it were killed, imprisoned, exiled, or discredited. Their organizations were destroyed. Their histories were written by their enemies or not written at all.</p>
<p>It had better answers than the tradition that won. That's not a coincidence — it was buried because its answers were threatening.</p>
<h2>Luxemburg vs. Lenin: the argument that mattered</h2>
<p>In 1904, Rosa <a class="xl" href="the-outside-capital-needs.html">Luxemburg</a> published a pamphlet called <em>Organizational Questions of the Russian Social Democracy</em>.<sup><a href="#fn1" id="ref1">1</a></sup> It was a direct response to Lenin's model of the revolutionary party, laid out in his <em>What Is To Be Done?</em><sup><a href="#fn2" id="ref2">2</a></sup></p>
<p>Lenin's argument: the working class, left to its own devices, develops only "trade union consciousness" — the desire for better wages and conditions within capitalism, not the desire to overthrow capitalism. Revolutionary consciousness has to be brought to workers from outside, by a disciplined party of professional revolutionaries who have developed the correct theory and can lead the class toward its historical destiny.</p>
<p>Luxemburg's response: this is backwards, and it's dangerous. The party cannot have more insight into revolutionary conditions than the workers living those conditions. When you build an organization on the premise that leadership knows better than members, you don't get a revolutionary instrument — you get a bureaucracy that is structurally incapable of learning from the people it claims to represent. You get an organization that will suppress the spontaneous, distributed political activity of workers — exactly the activity that produces genuine revolutionary capacity — in favor of party discipline.</p>
<p>She was not arguing against organization. She was arguing against a specific model of organization that concentrated knowledge and authority at the top. Her alternative: organization that processes distributed intelligence rather than replacing it.</p>
<p>Lenin won the argument in the short run because his model produced a revolution. Luxemburg won the argument in the long run because his model then ate the revolution. She was executed in 1919 and never got to say "I told you so," but the evidence is extremely clear.</p>
<div class="pull">
        The <a class="xl" href="glossary.html#vanguard">vanguard party</a> doesn't lead<br/>the working class.<br/>It <strong>substitutes</strong> for it.
      </div>
<h2>The council communists</h2>
<p>After the Russian Revolution, a current emerged within international communism that took Luxemburg's critique seriously and developed it further. The <a class="xl" href="glossary.html#council-communism">council communists</a> argued that the <a class="xl" href="glossary.html#soviet">soviets</a> — workers' councils organized at the point of production, federated horizontally rather than commanded vertically — were the genuine revolutionary form. The most rigorous of them was Anton Pannekoek, a Dutch astronomer who brought to political theory the same systems-level thinking he applied to stars. His book <em>Workers' Councils</em><sup><a href="#fn3" id="ref3">3</a></sup> makes the argument clearly: the factory council, not the party, is the basic unit of socialist organization, because it's where workers actually have the knowledge to make production decisions. A party headquarters can issue directives about steel output. It cannot know what the foundry floor knows. Other key figures included Herman Gorter and Otto Rühle, who each developed the critique in different directions — Gorter focusing on mass organization, Rühle on the psychology of hierarchy.<sup><a href="#fn4" id="ref4">4</a></sup></p>
<p>They were marginalized from the Communist International, which was controlled by Moscow and therefore committed to the Bolshevik model. Lenin dismissed their position as <em>"left-wing communism: an infantile disorder."</em><sup><a href="#fn5" id="ref5">5</a></sup> The phrase was intended as a refutation. It mostly just showed that the Comintern didn't have a serious answer to the critique.</p>
<p>The council communists were right that workers' self-organization is the only form of socialism that doesn't reproduce the fundamental problem. They were less developed on the question of what to do when that self-organization faces organized state violence — which is a real problem they didn't fully solve.</p>
<h2>Spain, 1936–1939</h2>
<p>The closest historical example of the alternative working at scale happened in Spain during the Civil War. When Franco's fascist coup began in July 1936, workers and peasants in Catalonia, Aragon, and other regions didn't wait for a party to tell them what to do. They collectivized factories and farms, organized militias, and ran large portions of the economy through workers' councils and anarchist federations — primarily the CNT (the Confederación Nacional del Trabajo — Spain's anarcho-syndicalist labor union, with roughly 1.5 million members at its peak<sup><a href="#fn6" id="ref6">6</a></sup>) and the FAI (Federación Anarquista Ibérica), an associated anarchist federation with overlapping membership.</p>
<p>This wasn't a small experiment. At its peak, the anarchist collectives involved hundreds of thousands of people, managed major industries, and demonstrated that complex economies could be coordinated without either capitalist markets or Stalinist central planning.</p>
<p>It was destroyed — not primarily by Franco, though Franco eventually won. It was destroyed first by the Spanish Communist Party, directed by Moscow, which systematically dismantled the revolutionary collectives in the name of building a unified Popular Front to fight the fascists. The argument was pragmatic: you can't fight a modern war with anarchist militias, you need a centralized military and state. The collectives were forcibly dissolved. Anarchist and dissident communist leaders were arrested and killed — by their ostensible allies.</p>
<p>George Orwell was there. <em>Homage to Catalonia</em><sup><a href="#fn7" id="ref7">7</a></sup> is his account of watching it happen in real time. It changed him permanently. He spent the rest of his life writing about the specific mechanism by which revolutionary movements destroy themselves from within.</p>
<div class="callout">
<span class="callout-label">The Kronstadt rebellion, 1921</span>
<p>In March 1921, sailors and workers at the Kronstadt naval fortress — people who had been among the most militant supporters of the Bolshevik revolution — rose up against the Bolshevik government. Their demands: free soviets (meaning soviets not controlled by the party), freedom of speech and assembly for socialist parties, an end to forced grain requisition from peasants.</p>
<p>These were the demands of the revolutionary program the Bolsheviks had run on in 1917. They were making the revolution accountable to its own stated principles.</p>
<p>The Bolsheviks crushed the rebellion militarily. Trotsky commanded the assault. Thousands were killed or sent to labor camps. Lenin called the rebels "tools of the White Guards" — the same smear technique that authoritarian movements use against internal critics to this day.</p>
<p>Kronstadt is important because it's the moment where the mask came entirely off. This wasn't Stalin's doing. This was the Bolshevik government, at the height of its revolutionary legitimacy, killing the people who had made the revolution in order to protect the party's monopoly on power.</p>
</div>
<h2>What this tradition got right</h2>
<p>The through-line from Luxemburg through the council communists through Spanish anarchism is a single consistent claim: the organizational form of the movement determines the organizational form of what the movement builds. A movement organized through distributed self-governance builds institutions of distributed self-governance. A movement organized through a vanguard party builds a state that looks like a vanguard party.</p>
<p>You cannot get to a society without domination by building a movement organized around domination. The means produce the ends. This is not idealism — it's a claim about organizational dynamics that has been confirmed by every major authoritarian socialist experiment in the twentieth century.</p>
<p>The tradition also understood something about what genuinely threatens capital: not the seizure of state power by a disciplined party, which capital can often accommodate, co-opt, or simply destroy. What genuinely threatens capital is the construction of an alternative substrate — communities that can reproduce themselves, coordinate themselves, and take care of themselves without routing through capitalist markets or state institutions. That is structurally harder to capture, because there's no central point to seize.</p>
<p>Gramsci called this the <a class="xl" href="gramsci.html">war of position</a> — the patient, long-term work of building the cultural and institutional conditions in which a different kind of politics becomes possible. Not a frontal assault, but the construction of an alternative common sense. The council communists understood the organizational half of this argument. Gramsci gave it a theory of culture.</p>
<p><a class="xl" href="build-it-now.html">The last piece is about what that looks like today.</a></p>` }} />
        </div>
        
        
        
        <Footnotes notes={FOOTNOTES} />
        <ArticleFooter seriesNote="Power Explained — Advanced Track" />
      </ArticleWrap>
    </Layout>
  )
}
