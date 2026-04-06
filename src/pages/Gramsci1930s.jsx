import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = [
  { id: 'the-cell', label: 'The cell and the question' },
  { id: 'before', label: 'What he had already seen: Turin and the factory councils' },
  { id: 'passive-revolution', label: 'Passive revolution: how Italy got here' },
  { id: 'civil-society', label: 'The factory of consent: civil society as the terrain' },
  { id: 'southern-question', label: 'The Southern Question and the organic intellectual' },
  { id: 'what-it-means', label: 'What it means to build the alternative' },
]

const FOOTNOTES = [
  `Gramsci, A. (1971). <em>Selections from the Prison Notebooks</em>, ed. and trans. Q. Hoare and G. Nowell-Smith. International Publishers. Written between 1929 and 1935 across 33 exercise books, under prison censorship — which is why Gramsci systematically replaced politically sensitive terms: "philosophy of praxis" for Marxism, "the founder" for Marx, "the modern prince" for the Communist Party. The Italian critical edition, <em>Quaderni del carcere</em>, ed. V. Gerratana (Einaudi, 1975), is more complete; the Hoare/Nowell-Smith selection remains the standard English access point. <a href="#ref1">↩</a>`,
  `The factory council movement is documented in <em>L'Ordine Nuovo</em>, the journal Gramsci co-founded in Turin in 1919. The relevant pieces are collected in Gramsci, A. (1977). <em>Selections from Political Writings 1910–1920</em>, ed. Q. Hoare. Lawrence and Wishart. The movement peaked in the factory occupations of September 1920 and collapsed when the industrialists refused to negotiate and the socialist leadership failed to extend the action nationally. <a href="#ref2">↩</a>`,
  `Gramsci's concept of passive revolution draws on Vincenzo Cuoco's analysis of the failed Neapolitan revolution of 1799 and is applied most systematically to the Italian Risorgimento. The relevant Notebooks: Q10, Q13, Q15. <a href="#ref3">↩</a>`,
  `The Southern Question is addressed most directly in Gramsci's 1926 essay "Some Aspects of the Southern Question" (<em>La questione meridionale</em>), written just before his arrest — the last substantial piece he completed before imprisonment. <a href="#ref4">↩</a>`,
  `Gramsci's engagement with Benedetto Croce runs throughout the Notebooks and constitutes one of its most sustained arguments. Croce was the dominant figure in Italian intellectual life — a liberal philosopher of enormous prestige who had accommodated himself to fascism and whose idealist philosophy Gramsci saw as the hegemonic intellectual framework of the Italian bourgeoisie. See Notebooks Q10, Q11. <a href="#ref5">↩</a>`,
]

export default function Gramsci1930s() {
  return (
    <Layout
      title="Gramsci in the 1930s: The Factory of Consent — Power Explained"
      description="Antonio Gramsci wrote the Prison Notebooks as fascism consolidated around him. He was trying to understand a specific, urgent failure: why the Italian working class had not resisted. The answer changed how we think about power."
      seriesTag="Enclosure of the Mind — Series VI"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: 'var(--display)', fontSize: 'clamp(4rem,18vw,12rem)', fontWeight: 700, letterSpacing: '-0.04em', opacity: 0.05, whiteSpace: 'nowrap', pointerEvents: 'none', lineHeight: 1 }}>GRAMSCI</div>
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          <span className="hero-eyebrow"><a href="enclosure-of-the-mind.html" style={{color:"inherit",textDecoration:"underline",textDecorationColor:"rgba(255,255,255,0.3)"}}>Enclosure of the Mind — Series VI</a></span>
          <h1>Gramsci in the 1930s:<br />The factory of consent</h1>
          <p className="hero-dek">The Prison Notebooks were not written in the abstract. They were written in a fascist cell, by a man watching from the inside as the movement he had built collapsed and the world he had tried to change hardened around him. Gramsci wasn't constructing a theory. He was conducting an autopsy — and trying to understand what would have had to be different.</p>
          <div className="hero-bio">
            <span className="bio-dates">Written 1929–1935</span>
            <p className="bio-line">If you want the theory — what hegemony is, how it operates, what counter-hegemony requires — the <a href="gramsci.html" style={{color: 'var(--paper)', textDecorationColor: 'rgba(255,255,255,0.4)'}}>Gramsci thinker page</a> covers it. This piece is the history: the specific crisis that produced the theory, the wreckage Gramsci was working through, and what becomes visible when you read the Notebooks as a live response to a catastrophe rather than as a finished system.</p>
          </div>
        </div>
      </div>

      <ArticleWrap>
        <ContentsNav sections={SECTIONS} />
        <div className="body-text">

          <Section id="the-cell" num="01" title="The cell and the question">
            <div dangerouslySetInnerHTML={{ __html: `<p>Mussolini's prosecutor said something that has since become famous: <em>We must stop this brain from functioning for twenty years.</em> What happened instead is that the brain, supplied with books and exercise books under prison censorship, produced nearly three thousand pages of analysis over the next six years — before his health failed and the writing stopped.<sup><a href="#fn1" id="ref1">1</a></sup></p>
<p>The failure Gramsci was thinking through was not abstract. It was Italy in the 1920s: a workers' movement that had come close — very close, in 1919 and 1920 — to something genuinely transformative, and then had not only failed but collapsed into its opposite. The same social forces that had sustained the movement had, within a few years, sustained fascism. The same Catholic workers who had joined factory councils were joining Blackshirt rallies. The same peasants who had risen in land seizures were acquiescing to the new order.</p>
<p>The standard explanations didn't satisfy him. Violence and coercion were part of the answer. But fascism had done something more than defeat the left. It had achieved a degree of popular consent that couldn't be explained by force alone. Where did that consent come from? How had it been built? And — the question with the most urgent practical implications — how do you build something that defeats it?</p>` }} />
          </Section>

          <Section id="before" num="02" title="What he had already seen: Turin and the factory councils">
            <div dangerouslySetInnerHTML={{ __html: `<p>Gramsci was not theorizing from the outside. In Turin, between 1919 and 1920, he had helped build one of the most serious experiments in workers' self-governance that Europe had seen — and he had watched it fail in ways that shaped everything he wrote afterward.</p>
<p>Turin was Italy's Detroit: the city of Fiat, of large-scale industrial production, of a concentrated and organized working class. The factory councils that emerged in 1919 were not just trade unions fighting over wages. They were, in Gramsci's reading and aspiration, the embryonic institutions of a different kind of society — organs of workers' control that could, if extended and connected, become the basis for a genuinely democratic management of production.<sup><a href="#fn2" id="ref2">2</a></sup></p>
<div class="pull">
  The councils weren't just<br/>
  negotiating better terms.<br/>
  They were practicing<br/>
  <strong>a different kind of society</strong><br/>
  inside the existing one.
</div>
<p>In September 1920, the movement peaked: workers occupied the factories across the industrial north. For a few weeks, the factories of Turin and Milan operated under workers' control. Then it collapsed. The socialist party leadership refused to extend the action nationally. The industrialists waited them out. Within two years, Mussolini was in power. Within four, Gramsci was in prison.</p>
<p>What Gramsci took from this sequence is the conviction that the failure was not primarily military or organizational. It was hegemonic. The councils had built something extraordinary inside the factories. They had not built anything in the terrain that surrounds factories: in the churches, the schools, the newspapers, the family forms, the common sense of daily life that tells people what is realistic and possible. When the industrial moment passed, there was nothing to hold the opening.</p>` }} />
          </Section>

          <Section id="passive-revolution" num="03" title="Passive revolution: how Italy got here">
            <div dangerouslySetInnerHTML={{ __html: `<p>One of Gramsci's most important concepts — and one of the least discussed outside specialist circles — is <strong>passive revolution</strong>. It explains not just why fascism succeeded in the 1920s but why the terrain was already unfavorable long before fascism arrived.<sup><a href="#fn3" id="ref3">3</a></sup></p>
<p>A passive revolution is a process of significant social transformation carried out from above — by existing elites — in order to prevent transformation from below. It is revolution as counter-revolution: real change, managed in ways that preserve the essential hierarchy. The energy of a popular movement is absorbed, redirected, and used to modernize the social order while keeping the subaltern classes in their place.</p>
<p>Gramsci's primary example is the Italian Risorgimento — the unification of Italy in the 1860s. What should have been a genuine bourgeois revolution, capable of breaking up the feudal structures of the south, was instead managed by the Piedmontese state as a process of <em>trasformismo</em>: the systematic absorption of potential opposition into the existing system, the buying off of leaders, the neutralization of movements before they could develop their full force. Unification happened — but under monarchist leadership, with the southern peasantry excluded from political life and the feudal land structure of the south intact.</p>
<p>The result was a unified Italian state whose hegemony was always thin: coercive in the south, dependent on the Church as substitute civil society, incapable of integrating the peasant masses into political life. The conditions for fascism were built into the settlement of 1861.</p>
<p>What passive revolution explains is why the Italian working class arrived at the 1920s without the cultural and institutional resources it needed. Every prior moment when building might have been possible had been managed into a settlement that preserved the hierarchy. Fascism then reorganized that civil society more aggressively, more completely. But it was building on a structure that already existed.</p>
<p>The contemporary pattern is the same. A movement achieves electoral success, or institutional recognition, or significant media visibility. Its leaders are incorporated. Its demands are partially met in forms that don't threaten the underlying structure. The movement spends its energy achieving a reform that forecloses the transformation that made the energy available. <a class="xl" href="the-party-ate-the-revolution.html">The party ate the revolution.</a> The terrain is left more stable for the existing order than before the movement began.</p>` }} />
          </Section>

          <Section id="civil-society" num="04" title="The factory of consent: civil society as the terrain">
            <div dangerouslySetInnerHTML={{ __html: `<p>The full theory of hegemony is in the <a class="xl" href="gramsci.html">Gramsci thinker page</a>. What's worth dwelling on here, in the historical context of the Notebooks, is the specific argument about civil society — and why it matters that Gramsci is making it from inside Italian fascism's project of reorganizing it.<sup><a href="#fn1" id="ref1">1</a></sup></p>
<p>The standard Marxist analysis of the capitalist state locates power in two places: the economic base (ownership of the means of production) and the political superstructure (the state, the law, the army). Gramsci's observation, from the ruins of the workers' movement, is that this analysis misses a third layer: <strong>civil society</strong>. Between the economic base and the political state sits the dense network of institutions through which a society reproduces its worldview — churches, schools, universities, newspapers, professional associations, political parties, trade unions, cultural organizations, the family itself.</p>
<div class="pull">
  The state is the armor.<br/>
  Civil society is the <strong>consent</strong><br/>
  that makes the armor<br/>
  unnecessary most of the time.
</div>
<p>In Western Europe — and this is where Gramsci distinguishes his analysis from the Russian experience — civil society is thick. It is not a thin buffer between an autocratic state and a politically undeveloped people. It is a rich, layered, multiply redundant system of ideological reproduction that can absorb shocks that would topple a purely coercive state. You can defeat the army. You cannot defeat the school, the church, the newspaper, the family, the professional association, the sports club — not all at once, not by force, because they are already inside the people who need to change.</p>
<p>This is why the strategy of the frontal assault keeps failing in places with developed civil societies. The state falls; the civil society reconstitutes a new one on the old hegemonic foundations. The Soviet model applied to Italy would not produce Italian socialism. It would produce a new form of the old problem, because the ideological substrate — what Gramsci calls common sense — remains untouched.</p>
<p>Gramsci is writing this while watching fascism do exactly what he's describing: the Church-state Lateran Accords of 1929, the Fascist youth organizations, the transformation of trade unions into corporatist bodies, the reorganization of education. Fascism understood, better than the left, that winning the state is not enough. You have to win the schools.</p>` }} />
          </Section>

          <Section id="southern-question" num="05" title="The Southern Question and the organic intellectual">
            <div dangerouslySetInnerHTML={{ __html: `<p>The last major piece Gramsci wrote before his arrest was on the Southern Question — the problem of the Italian south, its peasantry, its relationship to the northern working class, and what any serious revolutionary politics had to do about it.<sup><a href="#fn4" id="ref4">4</a></sup> It introduces, in embryonic form, one of his most generative concepts: the organic intellectual.</p>
<p>The left had largely failed the south — organizing the northern working class while treating the southern peasantry as either a backward mass to be educated into class consciousness or an irrelevant player in a drama centered on industrial production. Gramsci thought this was both analytically wrong and politically fatal: wrong because the peasantry was a social force of enormous potential, fatal because leaving it outside the coalition guaranteed that industrialists could keep using it against the workers.</p>
<p>Every social class, Gramsci argues, generates its own intellectuals — not primarily academics and writers, but people who perform the organizational and ideological functions that give the class coherence, self-awareness, and the capacity for political action. The bourgeoisie has its lawyers, economists, journalists, priests, managers — people who translate the interests and worldview of capital into the common sense of daily life. The subaltern classes can develop their own.<sup><a href="#fn5" id="ref5">5</a></sup></p>
<p>The organic intellectual is not simply a politically committed intellectual. It is someone who performs intellectual functions from within a subaltern group rather than from outside it — someone who can articulate what is already there in popular experience into a form capable of connecting with other social forces. Not someone who arrives with a program and explains it. Someone who can bridge the world of the community — its actual practices, its embedded knowledge, its grievances — with the broader political terrain. The missing figure in the Italian south was exactly this: intellectuals produced by the peasantry who remained committed to it rather than being absorbed upward into the strata that maintained the existing order.</p>
<p>The philosophy of praxis that Gramsci was developing in the Notebooks was constructed explicitly as an alternative to Croce's idealism: a philosophy adequate to the experience of people who work with their hands, capable of becoming the common sense of the subaltern classes rather than the refined possession of a cultivated elite.</p>` }} />
          </Section>

          <Section id="what-it-means" num="06" title="What it means to build the alternative">
            <div dangerouslySetInnerHTML={{ __html: `<p>Read as a live response to catastrophe rather than as a finished theoretical system, the Prison Notebooks have a specific urgency that the academic reception has largely smoothed away. The conclusion Gramsci reaches is not comfortable.</p>
<p>The failure of the Turin factory councils was not a failure of the councils themselves. They were extraordinary — genuine experiments in workers' self-governance, proving in practice that production could be organized differently. The failure was that they existed in isolation. Around them, the terrain of civil society — the institutions through which the population understood itself, its interests, its possibilities — remained organized around assumptions that made the councils seem like a temporary aberration rather than the beginning of something. When the industrial moment passed, the terrain reasserted itself.</p>
<p>This is the lesson that connects Gramsci to <a class="xl" href="reich-character-armor.html">Reich's analysis</a>. <a class="xl" href="reich-character-armor.html">Reich</a> showed that the enclosure of the mind runs through the body — through the armoring that makes liberation feel threatening before it becomes a thought. Gramsci shows that it runs through institutions — through the organized common sense that makes the existing order feel like the only possible world before anyone is asked to defend it. The two analyses describe the same enclosure at different levels.</p>
<div class="pull">
  You cannot build a new world<br/>
  inside institutions organized<br/>
  around the assumptions<br/>
  of the <strong>old one</strong>.
</div>
<p>What Gramsci is arguing for is a politics that takes the terrain of civil society as seriously as the terrain of the state and the economy — that builds the organic intellectuals, the counter-institutions, the alternative common sense that makes a different world thinkable before the crisis that might make it possible arrives. The war of position: patient, long-term work in the institutions of everyday life, building the conditions under which a different politics becomes ordinary.</p>
<p>He was right that this is what it takes. He was also in prison, dying, watching fascism do exactly this with far greater resources and far less scruple. The asymmetry is the problem that the rest of the series is about: the enclosure has institutional advantages, temporal advantages, and — as <a class="xl" href="shannon-simondon-1950s.html">the next piece shows</a> — technical advantages that the counter-hegemonic project has to understand before it can address them.</p>
<p>Gramsci died in 1937, a few days after his release from prison, his health destroyed. His notebooks were smuggled out and eventually published in Italy in the early 1950s — just in time for the postwar period to demonstrate, on a global scale, exactly the dynamic he had described: liberation movements winning state power and then finding that the terrain of civil society, organized around colonial common sense, reconstituted subordination in new forms. The theory was right. The problem was real. It still is.</p>` }} />
          </Section>

        </div>

        <Invitation
          label="The series"
          headline="Enclosure of the Mind"
          coda={``}
        >
          <p>Reich located the enclosure in the body. Gramsci located it in the institutions of civil society — in the organized common sense that makes the existing order feel inevitable before anyone is asked to defend it. The two analyses together describe the full depth of the problem: somatic and institutional, pre-conscious and organized, operating below argument and through the furniture of everyday life. The next piece asks what happened when the same period that produced the Prison Notebooks also produced a new theory of information — and what that theory was designed to exclude.</p>
        </Invitation>

        <NextReads items={[
          { href: 'shannon-simondon-1950s', cat: 'Series VI', title: 'The Channel and the Ghost: Shannon & Simondon in the 1950s' },
          { href: 'reich-character-armor', cat: 'Series VI', title: 'Reich: Why Freedom Doesn\'t Feel Like You Think It Should' },
          { href: 'gramsci', cat: 'Thinker', title: 'Gramsci: The Feeling That This Is Just How Things Are' },
          { href: 'the-party-ate-the-revolution', cat: 'Theory', title: 'The Party Ate the Revolution' },
          { href: 'case-study-rojava', cat: 'Case Study', title: 'Rojava: The Revolution That Wrote Women\'s Liberation Into the Constitution' },
          { href: 'build-it-now', cat: 'Series III', title: 'Build It Now — What the Alternative Looks Like' },
        ]} />

        <Footnotes notes={FOOTNOTES} />
        <ArticleFooter seriesNote="Enclosure of the Mind — Series VI — Gramsci — Prison Notebooks (1929–1935) — Some Aspects of the Southern Question (1926)" />
      </ArticleWrap>
    </Layout>
  )
}
