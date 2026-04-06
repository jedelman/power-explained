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
  `Gramsci, A. (1971). <em>Selections from the Prison Notebooks</em>, ed. and trans. Q. Hoare and G. Nowell-Smith. International Publishers. The Notebooks were written between 1929 and 1935 across 33 exercise books, under prison censorship — which is why Gramsci systematically replaced politically sensitive terms: "philosophy of praxis" for Marxism, "the founder" for Marx, "the modern prince" for the Communist Party. The censorship left traces in the text that complicate close reading. The Italian critical edition, <em>Quaderni del carcere</em>, ed. V. Gerratana (Einaudi, 1975), is more complete; the Hoare/Nowell-Smith selection remains the standard English access point. <a href="#ref1">↩</a>`,
  `The factory council movement is documented in <em>L'Ordine Nuovo</em>, the journal Gramsci co-founded in Turin in 1919. The relevant pieces are collected in Gramsci, A. (1977). <em>Selections from Political Writings 1910–1920</em>, ed. Q. Hoare. Lawrence and Wishart. The councils emerged from internal commissions (commissioni interne) in the Fiat and other Turin factories — bodies that Gramsci argued should be extended and transformed into organs of workers' self-governance rather than simple collective bargaining units. The movement peaked in the factory occupations of September 1920 and collapsed when the industrialists refused to negotiate and the socialist leadership failed to extend the action nationally. <a href="#ref2">↩</a>`,
  `Gramsci's concept of passive revolution draws on Vincenzo Cuoco's analysis of the failed Neapolitan revolution of 1799 and is applied most systematically to the Italian Risorgimento — the unification process of 1848–1870. Gramsci argues that the Risorgimento produced national unification without a revolutionary rupture: the Piedmontese state absorbed the energy of the Mazzinian popular movement and channeled it toward a unification that preserved the existing social hierarchy in the south while creating a unified national market for northern industrial capital. The result was a state whose hegemony was always thin — dependent on coercion in the south, on the Catholic Church as a substitute civil society, and on the chronic exclusion of the peasant masses from political life. See the Notebooks, Q10, Q13, Q15. <a href="#ref3">↩</a>`,
  `The Southern Question is addressed most directly in Gramsci's 1926 essay "Some Aspects of the Southern Question" (<em>La questione meridionale</em>), written just before his arrest — it is the last substantial piece he completed before imprisonment. Gramsci argues that the Italian peasantry of the south is the social base that any serious revolutionary politics must address, and that the northern working class cannot achieve its own liberation without breaking the alliance between northern industrialists and southern landlords that maintains the peasantry in permanent subjection. The organic intellectual of the south — the figure who can bridge the intellectual strata and the popular classes — is the crucial missing element. <a href="#ref4">↩</a>`,
  `Gramsci's engagement with Benedetto Croce runs throughout the Notebooks and constitutes one of its most sustained arguments. Croce was the dominant figure in Italian intellectual life — a liberal philosopher of enormous prestige who had accommodated himself to fascism (at least initially) and whose idealist philosophy Gramsci saw as the hegemonic intellectual framework of the Italian bourgeoisie. Gramsci's "philosophy of praxis" is developed explicitly as an alternative to Croce's idealism: a philosophy adequate to the experience and potential of the subaltern classes, grounded in the actual practices and common sense of people who work with their hands rather than in the contemplative tradition of professional intellectuals. See Notebooks Q10, Q11. <a href="#ref5">↩</a>`,
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
          <span className="hero-eyebrow">Enclosure of the Mind — Series VI</span>
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
            <div dangerouslySetInnerHTML={{ __html: `<p>Mussolini's prosecutor, presenting the case for Gramsci's imprisonment in 1926, said something that has since become famous: <em>We must stop this brain from functioning for twenty years.</em> What happened instead is that the brain, supplied with books and exercise books under prison censorship, produced nearly three thousand pages of analysis over the next six years — before his health failed and the writing stopped.<sup><a href="#fn1" id="ref1">1</a></sup></p>
<p>The Notebooks are dense, discontinuous, written in deliberate code to get past the censors, frequently contradicting themselves as Gramsci's thinking moved. They are not a finished system. They are a man thinking under duress about a specific failure, trying to understand it completely enough to prevent it happening again — knowing he would not live to see whether it did.</p>
<p>The failure he was thinking through was not abstract. It was Italy in the 1920s. A workers' movement that had come close — very close, in 1919 and 1920 — to something genuinely transformative, and then had not only failed but collapsed into its opposite. The same social forces that had sustained the movement had, within a few years, sustained fascism. The same Catholic workers who had joined factory councils were joining Blackshirt rallies. The same peasants of the south who had risen in land seizures were acquiescing to the new order.</p>
<p>The orthodox Marxist explanation — that the fascists had used violence, that the bourgeoisie had organized its resistance, that objective conditions weren't ripe — was true as far as it went. Gramsci thought it didn't go far enough. Violence and coercion were part of the answer. But fascism had done something more than defeat the left. It had achieved a degree of popular consent that couldn't be explained by force alone. The question that consumed him: where did that consent come from? How had it been built? And — the question with the most urgent practical implications — how do you build something that defeats it?</p>` }} />
          </Section>

          <Section id="before" num="02" title="What he had already seen: Turin and the factory councils">
            <div dangerouslySetInnerHTML={{ __html: `<p>Gramsci was not theorizing from the outside. He had been there. In Turin, between 1919 and 1920, he had helped build one of the most serious experiments in workers' self-governance that Europe had seen — and he had watched it fail in ways that shaped everything he wrote afterward.</p>
<p>Turin was Italy's Detroit: the city of Fiat, of large-scale industrial production, of a concentrated and organized working class. The factory councils that emerged in 1919 were not just trade unions fighting over wages. They were, in Gramsci's reading and aspiration, the embryonic institutions of a different kind of society — organs of workers' control that could, if extended and connected, become the basis for a genuinely democratic management of production.<sup><a href="#fn2" id="ref2">2</a></sup></p>
<p>The journal he co-founded, <em>L'Ordine Nuovo</em> — The New Order — was the theoretical voice of the council movement, arguing that the internal factory commissions that already existed in Turin's plants could be transformed from collective bargaining bodies into governing institutions. Not just negotiating with capital over the terms of exploitation, but progressively taking over the organization of production itself. The Soviet model, but built from the actual Italian working class rather than imported as a blueprint.</p>
<div class="pull">
  The councils weren't just<br/>
  negotiating better terms.<br/>
  They were practicing<br/>
  <strong>a different kind of society</strong><br/>
  inside the existing one.
</div>
<p>In September 1920, the movement peaked: workers occupied the factories across the industrial north. The industrialists locked out; the workers ran production themselves. For a few weeks, the factories of Turin and Milan operated under workers' control. It was, in retrospect, the high-water mark.</p>
<p>Then it collapsed. The socialist party leadership refused to extend the action nationally — fearing, correctly, that it would provoke a full-scale confrontation the movement wasn't ready to win. The industrialists waited them out. The occupations ended without concessions. Within two years, Mussolini was in power. Within four, Gramsci was in prison.</p>
<p>What Gramsci took from this sequence — and what drives the Notebooks — is the conviction that the failure was not primarily military or organizational. It was hegemonic. The movement had built something extraordinary inside the factories. It had not built anything in the terrain that surrounds the factories: in the churches, the schools, the newspapers, the family forms, the common sense of daily life that tells people what is realistic, what is possible, who they are and what they deserve. When the industrial moment passed, there was nothing to hold the opening.</p>` }} />
          </Section>

          <Section id="passive-revolution" num="03" title="Passive revolution: how Italy got here">
            <div dangerouslySetInnerHTML={{ __html: `<p>One of Gramsci's most important concepts in the Notebooks — and one of the least discussed outside specialist circles — is <strong>passive revolution</strong>. It explains not just why fascism succeeded in the 1920s but why the terrain was already unfavorable long before fascism arrived.<sup><a href="#fn3" id="ref3">3</a></sup></p>
<p>A passive revolution, in Gramsci's analysis, is a process of significant social transformation that is carried out from above — by existing elites — in order to prevent transformation from below. It is revolution as counter-revolution: real change, managed in ways that preserve the essential hierarchy. The energy of a popular movement is absorbed, redirected, and used to modernize the social order while keeping the subaltern classes in their place.</p>
<p>Gramsci's primary example is the Italian Risorgimento — the unification of Italy in the 1860s. What should have been a genuine bourgeois revolution, capable of breaking up the feudal structures of the south and creating the conditions for modern political life, was instead managed by the Piedmontese state and the Moderate liberals around Cavour as a process of <em>trasformismo</em>: the systematic absorption of potential opposition into the existing system, the buying off of leaders, the neutralization of movements before they could develop their full force.</p>
<div class="concept-table">
  <div class="concept-table-header">
    <span class="ct-title">Passive revolution: the mechanism</span>
    <span class="ct-subtitle">How transformation from above forecloses transformation from below</span>
  </div>
  <div class="ct-row">
    <div class="ct-cell">
      <span class="ct-cell-label">The popular pressure</span>
      <div class="ct-cell-text">A genuine movement emerges from below — with demands, energy, and the potential to transform the social order if allowed to develop its own institutional forms and its own leadership.</div>
    </div>
    <div class="ct-cell dim">
      <span class="ct-cell-label">The passive revolution response</span>
      <div class="ct-cell-text">Elites grant enough of the movement's demands to relieve the pressure — co-opting its leaders, incorporating its language, delivering partial reforms — while preserving the essential hierarchy and preventing the movement from developing independent institutional power.</div>
    </div>
  </div>
  <div class="ct-row">
    <div class="ct-cell">
      <span class="ct-cell-label">The Risorgimento version</span>
      <div class="ct-cell-text">Mazzini's popular nationalist movement had the energy to produce a genuinely democratic unification. Cavour's Piedmontese state absorbed and redirected it: unification happened, but under monarchist leadership, with the southern peasantry excluded from political life and the feudal land structure of the south intact.</div>
    </div>
    <div class="ct-cell dim">
      <span class="ct-cell-label">What this produced</span>
      <div class="ct-cell-text">A unified Italian state whose hegemony was always thin: coercive in the south, dependent on the Church as substitute civil society, incapable of integrating the peasant masses into political life. The conditions for fascism were built into the settlement of 1861.</div>
    </div>
  </div>
  <div class="ct-row">
    <div class="ct-cell">
      <span class="ct-cell-label">The contemporary version</span>
      <div class="ct-cell-text">A movement emerges with genuine transformative potential. It achieves electoral success, or institutional recognition, or significant media visibility. Its leaders are incorporated into existing institutions. Its demands are partially met in forms that don't threaten the underlying structure.</div>
    </div>
    <div class="ct-cell dim">
      <span class="ct-cell-label">What this produces</span>
      <div class="ct-cell-text">A movement that has spent its energy achieving a reform that forecloses the transformation that made the energy available. The terrain is left more stable for the existing order than it was before the movement began. <a class="xl" href="the-party-ate-the-revolution.html">The party ate the revolution.</a></div>
    </div>
  </div>
</div>
<p>What passive revolution explains is why the Italian working class arrived at the 1920s without the cultural and institutional resources it needed. It had never built them, because every prior moment when building might have been possible had been managed into a settlement that preserved the hierarchy. The factory councils of 1919 were not defeated by fascism — they were defeated by the accumulated weight of sixty years of passive revolution, which had left Italian civil society organized around institutions — the Church, the liberal state, the patronage networks of the south — that were fundamentally hostile to working-class self-organization.</p>
<p>Fascism then came and reorganized that civil society more aggressively, more completely. But it was building on a structure that already existed.</p>` }} />
          </Section>

          <Section id="civil-society" num="04" title="The factory of consent: civil society as the terrain">
            <div dangerouslySetInnerHTML={{ __html: `<p>The concept of hegemony — the full theory — is in the <a class="xl" href="gramsci.html">Gramsci thinker page</a>. What's worth dwelling on here, in the historical context of the Notebooks, is why civil society is where Gramsci focuses.</p>
<p>The standard Marxist analysis of the capitalist state locates power in two places: the economic base (ownership of the means of production) and the political superstructure (the state, the law, the army). Change the base — socialize the means of production — and the superstructure follows. Hold the state — seize power — and you can direct the transformation of the base.</p>
<p>Gramsci's observation, from the ruins of the workers' movement, is that this analysis misses a third layer: <strong>civil society</strong>. Between the economic base and the political state sits the dense network of institutions through which a society reproduces its worldview: churches, schools, universities, newspapers, professional associations, political parties, trade unions, cultural organizations, the family itself. These are not simply instruments of the ruling class — they are sites of active ideological production, where the common sense that makes the existing order seem natural and inevitable is continuously manufactured and maintained.<sup><a href="#fn1" id="ref1">1</a></sup></p>
<div class="pull">
  The state is the armor.<br/>
  Civil society is the <strong>consent</strong><br/>
  that makes the armor<br/>
  unnecessary most of the time.
</div>
<p>In Western Europe — and this is where Gramsci distinguishes his analysis from the Russian experience — civil society is thick. It is not a thin buffer between an autocratic state and a politically undeveloped people, as it was in Tsarist Russia. It is a rich, layered, multiply redundant system of ideological reproduction that can absorb shocks that would topple a purely coercive state. You can defeat the army. You cannot defeat the school, the church, the newspaper, the family, the professional association, the sports club — not all at once, not by force, because they are already inside the people who need to change.</p>
<p>This is why the strategy of the frontal assault — take the state, redirect the economy — keeps failing in places with developed civil societies. The state falls; the civil society reconstitutes a new one on the old hegemonic foundations. The Soviet model applied to Italy would not produce Italian socialism. It would produce a new form of the old problem, because the ideological substrate — what Gramsci calls common sense — remains untouched.</p>
<p>Gramsci is writing this from inside Italian fascism's project of reorganizing civil society: the Church-state Lateran Accords of 1929, the Fascist youth organizations, the transformation of the trade unions into corporatist bodies, the reorganization of education. He is watching, in real time, what it looks like when a movement takes seriously the terrain of civil society rather than just the terrain of state power. Fascism understood, better than the left, that winning the state is not enough. You have to win the schools.</p>` }} />
          </Section>

          <Section id="southern-question" num="05" title="The Southern Question and the organic intellectual">
            <div dangerouslySetInnerHTML={{ __html: `<p>The last major piece Gramsci wrote before his arrest was an essay on the Southern Question — the problem of the Italian south, its peasantry, its relationship to the northern working class, and what any serious revolutionary politics had to do about it.<sup><a href="#fn4" id="ref4">4</a></sup> It is, in retrospect, the pivot between his practical political work and the theoretical project of the Notebooks. And it introduces, in embryonic form, one of his most generative concepts: the organic intellectual.</p>
<p>The Southern Question was not just a regional issue. It was a structural feature of Italian capitalism: the north industrialized on the basis of a unified national market that depended on the south remaining an internal colony — supplying cheap agricultural labor, absorbing manufactured goods, providing the tax base and military manpower that the northern industrial project required. The southern peasantry was not peripheral to Italian capitalism. It was one of its foundations. And the alliance between northern industrialists and southern landlords — held together by the liberal state — was one of the main obstacles to any transformation.</p>
<p>The left had largely failed the south. It had organized the northern working class — imperfectly, but substantially — while treating the southern peasantry as either a backward mass to be educated into class consciousness or an irrelevant player in a drama centered on industrial production. Gramsci thought this was both analytically wrong and politically fatal: wrong because the peasantry was a social force of enormous potential, fatal because leaving it outside the coalition guaranteed that the industrialists could keep using it against the workers.</p>
<p>The concept he reaches for to explain how this could be different is the <strong>organic intellectual</strong>. Every social class, Gramsci argues, generates its own intellectuals — not primarily in the narrow sense of academics and writers, but in the broader sense of people who perform the organizational and ideological functions that give the class coherence, self-awareness, and the capacity for political action. The bourgeoisie has its lawyers, economists, journalists, priests, managers — people who translate the interests and worldview of capital into the common sense of daily life. The question is whether the subaltern classes can develop their own.<sup><a href="#fn5" id="ref5">5</a></sup></p>
<div class="callout">
  <span class="callout-label">What an organic intellectual actually is</span>
  <p>Gramsci's concept is frequently misread as "an intellectual who is politically committed to the working class." This is not wrong but it misses the specificity. The organic intellectual is someone who performs intellectual functions — organizing, connecting, articulating, theorizing — from within a subaltern social group rather than from outside it. The distinction is between the traditional intellectual (the philosopher, the priest, the lawyer, who floats above class attachments in their self-understanding and serves the existing order by default) and the organic intellectual who is embedded in a class's actual experience and serves its capacity for self-organization.</p>
  <p>For the southern peasantry, the organic intellectual would be someone who could bridge the world of the peasant community — its actual practices, its embedded knowledge, its grievances and aspirations — with the broader political and intellectual terrain. Not someone who arrived with a program and explained it, but someone who could articulate what was already there in popular experience into a form capable of connecting with other social forces. The missing figure in the Italian south was exactly this: intellectuals produced by the peasantry who remained committed to it rather than being absorbed upward into the strata that maintained the existing order.</p>
</div>
<p>Gramsci's engagement with Benedetto Croce — the dominant figure in Italian intellectual life, a liberal philosopher of enormous prestige who had accommodated himself to fascism — is the other pole of the same argument. Croce's idealist philosophy was, in Gramsci's analysis, the hegemonic intellectual framework of the Italian bourgeoisie: sophisticated, apparently universal, presenting the interests of a specific class as the interests of civilization itself. The philosophy of praxis that Gramsci was developing in the Notebooks was explicitly constructed as its alternative — a philosophy adequate to the experience of people who work with their hands, grounded in practice rather than contemplation, capable of becoming the common sense of the subaltern classes rather than the refined possession of a cultivated elite.</p>` }} />
          </Section>

          <Section id="what-it-means" num="06" title="What it means to build the alternative">
            <div dangerouslySetInnerHTML={{ __html: `<p>Read as a live response to catastrophe rather than as a finished theoretical system, the Prison Notebooks have a specific urgency that the academic reception has largely smoothed away. Gramsci is not building a model for general application. He is trying to understand, with whatever time he has left, what went wrong — and what would have had to be different for it to go right.</p>
<p>The conclusion he reaches is not comfortable. The failure of the Turin factory councils was not a failure of the councils themselves. They were extraordinary — genuine experiments in workers' self-governance, proving in practice that production could be organized differently. The failure was that they existed in isolation. Around them, the terrain of civil society — the institutions through which the population understood itself, its interests, its possibilities — remained organized around assumptions that made the councils seem like a temporary aberration rather than the beginning of something. When the industrial moment passed, the terrain reasserted itself.</p>
<p>This is the lesson that connects Gramsci to <a class="xl" href="reich-character-armor.html">Reich's analysis</a> and to the rest of this series. <a class="xl" href="reich-character-armor.html">Reich</a> showed that the enclosure of the mind runs through the body — through the armoring that makes liberation feel threatening before it becomes a thought. Gramsci shows that it runs through institutions — through the organized common sense that makes the existing order feel like the only possible world before anyone is asked to defend it. The two analyses are not in competition. They describe the same enclosure at different levels.</p>
<div class="pull">
  You cannot build a new world<br/>
  inside institutions organized<br/>
  around the assumptions<br/>
  of the <strong>old one</strong>.
</div>
<p>What Gramsci is arguing for, in the Notebooks, is a politics that takes the terrain of civil society as seriously as the terrain of the state and the economy — that builds the organic intellectuals, the counter-institutions, the alternative common sense that makes a different world thinkable before the crisis that might make it possible arrives. The war of position: patient, long-term work in the institutions of everyday life, building the conditions under which a different politics becomes ordinary.</p>
<p>He was right that this is what it takes. He was also in prison, dying, watching fascism do exactly this with far greater resources and far less scruple. The asymmetry is the problem that the rest of the series is about: the enclosure has institutional advantages, temporal advantages, and — as <a class="xl" href="shannon-simondon-1950s.html">the next piece shows</a> — technical advantages that the counter-hegemonic project has to understand before it can address them.</p>
<p>Gramsci died in 1937, a few days after his release from prison, his health destroyed. His notebooks were smuggled out by his sister-in-law Tatiana and eventually published in Italy in the early 1950s. They arrived just in time for the postwar period to demonstrate, on a global scale, exactly the dynamic he had described: liberation movements winning state power and then finding that the terrain of civil society, organized around colonial common sense, reconstituted subordination in new forms. The theory was right. The problem was real. It still is.</p>` }} />
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
