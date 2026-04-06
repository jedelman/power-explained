import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = [
  { id: 'trente', label: 'The trente glorieuses: thirty years that changed everything' },
  { id: 'system', label: 'The System of Objects: the consumer object as sign' },
  { id: 'consumer-society', label: 'Consumer Society: the code that replaced need' },
  { id: 'symbolic-exchange', label: 'Symbolic Exchange: what the code kills' },
  { id: 'enclosure', label: 'The enclosure of desire' },
]

const FOOTNOTES = [
  `Baudrillard, J. (1968/1996). <em>The System of Objects</em>, trans. J. Benedict. Verso. Baudrillard's doctoral thesis, submitted under Henri Lefebvre at Nanterre — the same university where the May '68 uprising began, one year after submission. The book draws on furniture catalogues, advertising copy, car manuals, interior design magazines. The theoretical framework comes from Roland Barthes's semiology and Lefebvre's critique of everyday life, but the argument goes further than either: Baudrillard is not just analyzing how objects carry meaning but arguing that the system of meanings has replaced the system of uses as the primary structure of consumer society. <a href="#ref1">↩</a>`,
  `The <em>trente glorieuses</em> — the thirty glorious years — is Jean Fourastié's term for the period of exceptional growth from 1945 to 1975. France's GDP grew at an average annual rate of approximately 5% over the period. Household refrigerator ownership went from around 8% in 1954 to over 90% by 1974. <a href="#ref2">↩</a>`,
  `Baudrillard, J. (1970/1998). <em>The Consumer Society: Myths and Structures</em>, trans. C. Turner. Sage. Written in the immediate aftermath of May '68, trying to understand why the most sustained popular challenge to postwar capitalism had been absorbed so quickly. <a href="#ref3">↩</a>`,
  `Baudrillard, J. (1976/1993). <em>Symbolic Exchange and Death</em>, trans. I. H. Grant. Sage. The pivot point in Baudrillard's work — where the sociological analysis of consumer society becomes a philosophical argument about the structure of signification itself. Baudrillard draws on Mauss's theory of the gift, Saussurean semiology, and Bataille's concept of expenditure without return. <a href="#ref4">↩</a>`,
  `Veblen, T. (1899/1994). <em>The Theory of the Leisure Class</em>. Penguin. Veblen's concept of conspicuous consumption anticipates Baudrillard's sign-value analysis but stops short of it. For Veblen, the status-value is layered on top of the use-value. Baudrillard's argument is that in mature consumer society this distinction has collapsed: there is no use-value beneath the sign-value, no practical function prior to enrollment in the sign system. This is the step from sociology to semiology. <a href="#ref5">↩</a>`,
]

export default function BaudrillardConsumerSociety() {
  return (
    <Layout
      title="Baudrillard and the 1970s: The Simulation Arrives — Power Explained"
      description="Before Baudrillard theorized the hyperreal, he was a sociologist watching postwar France transform into a consumer society in a single generation. The System of Objects is where the simulation theory begins — in refrigerators, car manuals, and the grammar of the French home."
      seriesTag="Enclosure of the Mind — Series VI"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: 'var(--display)', fontSize: 'clamp(4rem,18vw,12rem)', fontWeight: 700, letterSpacing: '-0.04em', opacity: 0.05, whiteSpace: 'nowrap', pointerEvents: 'none', lineHeight: 1 }}>BAUDRILLARD</div>
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          <span className="hero-eyebrow"><a href="enclosure-of-the-mind.html" style={{color:"inherit",textDecoration:"underline",textDecorationColor:"rgba(255,255,255,0.3)"}}>Enclosure of the Mind — Series VI</a></span>
          <h1>Baudrillard<br />and the 1970s</h1>
          <p className="hero-dek">The theory of simulation did not arrive fully formed. It was built, over a decade, from the close observation of a specific historical transformation: France going from a peasant-artisan economy to a consumer society in a single generation. Before Baudrillard theorized the hyperreal, he was cataloguing refrigerators. The refrigerator is where it starts.</p>
          <div className="hero-bio">
            <span className="bio-dates">1968 — 1976</span>
            <p className="bio-line">Three books across eight years: <em>The System of Objects</em> (1968), <em>The Consumer Society</em> (1970), <em>Symbolic Exchange and Death</em> (1976). If you want the mature theory — simulacra, hyperreality, the precession of models — the <a href="baudrillard.html" style={{color: 'var(--paper)', textDecorationColor: 'rgba(255,255,255,0.4)'}}>Baudrillard thinker page</a> covers it. This piece is the history: the specific transformation he was watching, what he saw in it, and how the refrigerator became the map that ate the territory.</p>
          </div>
        </div>
      </div>

      <ArticleWrap>
        <ContentsNav sections={SECTIONS} />
        <div className="body-text">

          <Section id="trente" num="01" title="The trente glorieuses: thirty years that changed everything">
            <div dangerouslySetInnerHTML={{ __html: `<p>Between 1945 and 1975, France grew at an average annual rate of five percent. In 1954, fewer than one in ten French households owned a refrigerator. By 1974, more than nine in ten did. The same trajectory — near-zero to near-universal in twenty years — applied to washing machines, televisions, automobiles, central heating, indoor plumbing.<sup><a href="#fn2" id="ref2">2</a></sup> An economy substantially organized around artisan production and small agriculture was remade, in a single generation, into a mass consumer society.</p>
<p>The physical infrastructure changed with it. The <em>grands ensembles</em> — the vast suburban housing estates built by the state across the 1950s and 1960s — moved millions of working-class families from cramped urban tenements into modern apartments with dedicated kitchen space, fitted bathrooms, and rooms designed to hold consumer goods. The supermarket arrived, replacing the daily round of the market and the specialist shop with a weekly expedition to a building organized entirely around the logic of consumer choice.</p>
<p>Baudrillard was a sociologist at Nanterre watching all of this happen in real time. His doctoral thesis, submitted in 1968 — the year the uprising began at his own university — was not about politics or economics in the conventional sense. It was about furniture. About cars. About the grammar of the French home as it was being transformed by mass production and consumer credit. He was asking a question that seemed minor and turned out to be everything: what <em>is</em> the consumer object? Not what does it do — that was the obvious question, the one engineers and economists had already answered. What is it?<sup><a href="#fn1" id="ref1">1</a></sup></p>` }} />
          </Section>

          <Section id="system" num="02" title="The System of Objects: the consumer object as sign">
            <div dangerouslySetInnerHTML={{ __html: `<p>Objects have two registers: what they do and what they mean. A refrigerator keeps food cold; it also signifies modernity, hygiene, domestic competence, membership in the postwar consumer civilization. A car transports its driver; it also signifies freedom, status, masculinity, taste, a self-image assembled from advertising copy and product placement.</p>
<p>Veblen had noticed something like this in 1899 — conspicuous consumption, the purchase of things to display status rather than for use.<sup><a href="#fn5" id="ref5">5</a></sup> But Baudrillard's argument goes further than Veblen in a way that is the key to everything that follows. For Veblen, the status-value is layered on top of the use-value: there is still a car beneath the signal, still a use-value that precedes and grounds the status-value. Baudrillard argues that in the mature consumer society this hierarchy has inverted — and then collapsed. The object is not first a use-value that then acquires sign-value. It is constituted as a desirable object — as something worth wanting — through its position in a <em>system</em> of signs, and the use-value is, at best, a secondary property.</p>
<div class="callout">
  <span class="callout-label">The grammar of the modern kitchen</span>
  <p>Baudrillard's method is close reading of furniture catalogues, appliance manuals, interior design magazines. His analysis of the modern kitchen is characteristic: it is not organized around cooking but around the display of a sign system — the coordinated surfaces, matching appliance finishes, the stainless steel that signifies hygiene and modernity. The refrigerator in this kitchen is not primarily a cooling device. It is a term in a sign system, and its meaning derives from its relationship to the other terms — the hob, the worktop, the splashback — more than from its function.</p>
</div>
<p>The political implication surfaces when you ask: who sets the code? The system of signs through which consumer objects acquire their meaning is not natural — it is produced. Someone decides that stainless steel means modernity, that open-plan means social confidence, that the matching ensemble means taste. The production of the code is the production of the desires that the objects then satisfy. The consumer who buys the coordinated kitchen is not satisfying a pre-existing need for a particular aesthetic. They are enacting a desire that was constituted by the code before they arrived at the showroom.</p>
<p>This is the consumer-society version of <a class="xl" href="gramsci-1930s.html">Gramsci's hegemony</a>: the code operates as common sense, constituting what counts as desirable, modern, tasteful, successful before anyone consciously chooses to endorse those values. And it operates through objects — through the material culture of everyday life — which makes it, in some ways, more robust than ideological common sense. You can argue with a proposition. It is harder to argue with a refrigerator.</p>` }} />
          </Section>

          <Section id="consumer-society" num="03" title="Consumer Society: the code that replaced need">
            <div dangerouslySetInnerHTML={{ __html: `<p><em>The Consumer Society</em> (1970) is written in the immediate aftermath of May '68 and it shows. Baudrillard is trying to understand why the most significant rupture in postwar French political life was absorbed so rapidly — why the energy that had briefly made the existing order seem contingent had, within months, been reconstituted as a consumer product.<sup><a href="#fn3" id="ref3">3</a></sup></p>
<p>His answer extends the System of Objects argument to the total environment. Consumer society is not a society that has a lot of goods. It is a society organized around the consumption of signs — around the continuous production and circulation of meanings through objects, images, and experiences. What has changed between the nineteenth century and the postwar period is not primarily the quantity of goods but the structure of their relationship to desire.</p>
<p>In the older economy, need was — at least in theory — prior to the commodity. People needed food, shelter, clothing, tools; the market produced goods to satisfy those needs; satisfaction was at least conceivable as a resting point. Consumer society destroys this structure. The code produces needs as fast as commodities satisfy them, because the needs are not for particular objects but for positions in a sign system that is continuously revised. You do not need the new model because the old one has stopped working. You need it because the old one has become last year's — has dropped from its position in the code — and your social meaning has dropped with it.</p>
<div class="pull">
  Consumer society does not<br/>
  satisfy need.<br/>
  It produces need<br/>
  <strong>faster than it satisfies it</strong>,<br/>
  because the need is for a position<br/>
  in a code that never stops moving.
</div>
<p>This is what makes consumer society a more total enclosure than anything that preceded it. Earlier forms of class domination operated through the extraction of surplus value from labor — taking what people produced. Consumer society operates through the constitution of desire — shaping what people want before they produce or consume anything. The enclosure is upstream of the economy. It happens in the formation of needs, in the structure of wanting, in what counts as a life worth having.</p>
<p>This connects to <a class="xl" href="debord-1968.html">Debord's spectacle</a> but goes further. Debord showed that lived experience gets replaced by its image. Baudrillard shows that desire itself gets constituted by the code — before any object, any image, any experience. The structure of wanting is produced upstream of the economy. You cannot revolt against what you genuinely want.</p>` }} />
          </Section>

          <Section id="symbolic-exchange" num="04" title="Symbolic Exchange: what the code kills">
            <div dangerouslySetInnerHTML={{ __html: `<p><em>Symbolic Exchange and Death</em> (1976) is the darkest and most philosophically dense of the three books, and in some ways the most important for this series. Having established that consumer society operates through a code that constitutes desire, Baudrillard now asks what that code displaces — what mode of social relation it destroys in order to install itself.<sup><a href="#fn4" id="ref4">4</a></sup></p>
<p>His answer draws on Marcel Mauss's anthropology of the gift. In Mauss's analysis, the gift is not primarily an economic transaction — it creates and maintains social bonds through the giving and receiving of things that are inalienable from the relationships they express. The potlatch of Northwest Coast Indigenous peoples is the extreme case: the deliberate, competitive destruction of wealth as a demonstration of social power and generosity. Value is produced not by keeping things but by giving them away.</p>
<p>Baudrillard's claim is that capitalism destroys symbolic exchange — the gift, the festival, the ritual, the collective expenditure that does not produce value — and replaces it with a closed system of signs that refer only to each other. The consumer object circulates in a code. It does not create social bonds; it marks social positions. It is not given; it is purchased. The social relation that the object mediates in consumer society is not the gift relation but the sign relation — and the sign relation is, in Baudrillard's analysis, a relation of radical isolation: each consumer, positioned in the code by their possessions, is alone in a crowd of signs.</p>
<div class="callout">
  <span class="callout-label">Death as the limit of simulation</span>
  <p>The title of the book points to its strangest argument, which is also its most important. The consumer code operates by excluding death. Death cannot be simulated — it cannot be represented as a position in a sign system, cannot be upgraded, cannot be made obsolete by a newer model. It is the one event that the code cannot absorb, because it terminates the consumer who does the consuming.</p>
  <p>Consumer culture's relationship to death is therefore one of continuous management and denial: the concealment of the dying, the medicalization of death as a failure to be corrected rather than a process to be lived, the funeral industry that turns mourning into a consumer choice. The culture of simulation is precisely a culture that cannot accommodate what cannot be simulated — and the intensity of its denial of death is the measure of how thoroughly simulation has replaced symbolic exchange as the primary mode of social life. This connects to <a class="xl" href="who-gets-to-die.html">Foucault's biopower</a> and to <a class="xl" href="reich-character-armor.html">Reich's armored body</a>, which is also a body organized around the denial of its own mortality.</p>
</div>
<p>By the mid-1970s, the theory has arrived at its destination. The consumer society of the <em>trente glorieuses</em> has produced a sign system so comprehensive that it has replaced the real as the operating medium of social life. The refrigerator that started as an object with a use-value and a sign-value has become a pure sign — a position in a code that refers to other signs rather than to any function or need or social relation outside the code. This is the hyperreal: not the simulation of something real, but a simulation that has consumed the real it was supposed to represent.</p>` }} />
          </Section>

          <Section id="enclosure" num="05" title="The enclosure of desire">
            <div dangerouslySetInnerHTML={{ __html: `<p>The consumer society Baudrillard analyzed in the 1970s was French and specific. The dynamic it expressed was global and generalizing. By the end of the decade, the Fordist settlement was ending — the oil shocks, stagflation, deindustrialization. What replaced it was not a different relationship between objects and signs but a more complete one: the attention economy, organized not around the production and sale of goods but around the capture and monetization of desire itself.</p>
<p>What the enclosure of desire means for commons theory is precise. The commons requires people who can want something other than what the code offers — who can feel the pull of mutual aid, collective governance, shared infrastructure — not as a sacrifice of what they really want but as something genuinely desirable. If desire has been constituted by the consumer code, then the commons appears in that code as a position of lack: the thing you give up when you share, the loss of individuation that belonging to something collective requires.</p>
<p>This is not a counsel of despair — it is a precise diagnosis. <a class="xl" href="deleuze-guattari.html">Deleuze and Guattari's insight</a> that desire must be given somewhere it actually wants to live, not just shown a correct program and told to want it, is the practical corollary. The commons has to be constituted as a site of genuine desire — not self-sacrifice in the name of collective good but a form of life that is actually more interesting, more alive, more satisfying than the sign-exchange the code offers. This is difficult. The code has a structural advantage: it is continuously revised, continuously exciting, continuously producing new positions for desire to occupy. The commons is slow, conflictual, unglamorous. It has to be desirable anyway.</p>
<p>In the 1980s, as the Fordist settlement collapsed and the code accelerated, two things happened simultaneously in American cities that illuminate the terrain. The drug war extended the enclosure of the interior frontier to communities that the consumer code had already systematically excluded. And in the rubble of deindustrialized Detroit and Chicago, musicians were building something — with synthesizers, with drum machines, with the technical tools of the military-industrial complex repurposed for collective ecstasy — that modeled what desire looks like when the code has nothing to offer it. That is the subject of <a class="xl" href="drug-war-deleuze-synthesizers.html">the next piece</a>.</p>` }} />
          </Section>

        </div>

        <Invitation
          label="The series"
          headline="Enclosure of the Mind"
          coda={``}
        >
          <p>The simulation theory began in a refrigerator and ended in the structure of desire itself. Baudrillard's arc from System of Objects to Symbolic Exchange traces the enclosure moving inward: from the object that carries signs, to the code that constitutes need, to the simulation that has consumed its referent. The consumer society he analyzed in 1970s France is now global infrastructure — and the question it leaves is whether desire can be reconstituted outside the code, in commons that are genuinely desirable rather than merely correct.</p>
        </Invitation>

        <NextReads items={[
          { href: 'drug-war-deleuze-synthesizers', cat: 'Series VI', title: 'The Analog Resistance: Drug War, Deleuze, and the Synthesizer' },
          { href: 'psychedelics-theory-of-mind', cat: 'Series VI', title: 'The Interior Frontier: Psychedelics and Theory of Mind' },
          { href: 'baudrillard', cat: 'Thinker', title: 'Baudrillard: When the Image Replaces the Real' },
          { href: 'deleuze-guattari', cat: 'Thinker', title: 'Deleuze & Guattari: How Power Moves' },
          { href: 'graeber', cat: 'Thinker', title: 'Graeber: The Value of Everything That Isn\'t Priced' },
          { href: 'mutual-aid-isnt-charity', cat: 'Theory', title: 'Mutual Aid Isn\'t Charity' },
        ]} />

        <Footnotes notes={FOOTNOTES} />
        <ArticleFooter seriesNote="Enclosure of the Mind — Series VI — Baudrillard — The System of Objects (1968) — The Consumer Society (1970) — Symbolic Exchange and Death (1976)" />
      </ArticleWrap>
    </Layout>
  )
}
