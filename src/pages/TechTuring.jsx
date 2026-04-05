import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = [{id: 'the-machine', label: "The universal machine"}, {id: 'commons-computation', label: "Computation as commons"}, {id: 'the-war', label: "What he did in the war"}, {id: 'the-prosecution', label: "What the state did after"}, {id: 'the-pattern', label: "The pattern that keeps repeating"}, {id: 'what-it-means', label: "What the machine means now"}]
const FOOTNOTES = [
  `Alan M. Turing, "On Computable Numbers, with an Application to the Entscheidungsproblem," <em>Proceedings of the London Mathematical Society</em>, Series 2, 42 (1936–37): 230–265. The Entscheidungsproblem (decision problem) had been posed by David Hilbert: is there a mechanical procedure that can decide, for any mathematical proposition, whether it is provable? Turing showed the answer is no by demonstrating that the halting problem — whether a given program will eventually halt on a given input — is undecidable. Alonzo Church reached the same conclusion independently at almost the same time, using a different formal system. The standard biography is Andrew Hodges, <strong>Alan Turing: The Enigma</strong> (Simon &amp; Schuster, 1983), which is also the basis for the 2014 film <em>The Imitation Game</em>, which takes significant liberties with the historical record. <a aria-label="Return to text" href="#ref1">↩</a>`,
  `The concept of a stored-program computer — where the program is stored in memory as data, rather than wired into the machine's hardware — was developed independently by Turing, John von Neumann, and the teams at the University of Pennsylvania (ENIAC) and the University of Manchester (Baby) in the late 1940s. The theoretical priority is Turing's 1936 paper; the practical implementations required substantial additional engineering. Von Neumann's 1945 draft report on the EDVAC is often cited as the first document describing the stored-program architecture, though its relationship to concurrent work by Turing and others has been disputed. <a aria-label="Return to text" href="#ref2">↩</a>`,
  `The official history of Bletchley Park was declassified and published as F.H. Hinsley et al., <em>British Intelligence in the Second World War</em>, 5 vols. (HMSO, 1979–1990). The claim that the work shortened the war by two years comes from Hinsley's estimates in volume 1; other historians have suggested higher figures. The number of people employed at Bletchley at peak is approximately 9,000–10,000, though estimates vary. For a readable account focused on Turing's role, see Sinclair McKay, <em>The Secret Life of Bletchley Park</em> (Aurum Press, 2010). <a aria-label="Return to text" href="#ref3">↩</a>`,
  `The Bletchley operation remained classified until the mid-1970s. Turing received the OBE in the 1946 New Year Honours List; the citation gave no details. The full extent of his wartime contribution was not publicly acknowledged until the partial declassification of GCHQ materials in the following decades. As of the early 2000s, some Bletchley materials remain classified. <a aria-label="Return to text" href="#ref4">↩</a>`,
  `The prosecution occurred under Section 11 of the Criminal Law Amendment Act 1885 — the same statute under which Oscar Wilde was convicted in 1895. The act criminalized "gross indecency" between men. It was repealed and replaced by the Sexual Offences Act 1967, which partially decriminalized homosexual acts between men over 21 in private in England and Wales. Complete decriminalization came later; equal age of consent was not achieved until 2001. The government apology was issued by Prime Minister Gordon Brown in September 2009. The royal pardon, under the Royal Prerogative of Mercy, was granted posthumously in December 2013. A 2017 law ("Turing's Law") provided posthumous pardons for men convicted of abolished offences, though critics noted that living men who had been convicted of the same offences had to apply individually rather than receiving automatic pardons. <a aria-label="Return to text" href="#ref5">↩</a>`
]

export default function TechTuring() {
  return (
    <Layout
      title="The Universal Machine and the Ungrateful State — Power Explained"
      description="Alan Turing invented the conceptual foundation for all computing. Then the state that depended on his work prosecuted him for being gay and chemically castrated him. He was 41 when he died."
      seriesTag="For People Who Build the Internet — Part II"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: 'var(--display)', fontSize: 'clamp(4rem,18vw,12rem)', fontWeight: 700, letterSpacing: '-0.04em', opacity: 0.05, whiteSpace: 'nowrap', pointerEvents: 'none', lineHeight: 1 }}>TURING</div>
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          <span className="hero-eyebrow">For People Who Build the Internet — Part II — Turing</span>
          <h1 dangerouslySetInnerHTML={{ __html: `The Universal<br /><em>Machine and the</em><br />Ungrateful State` }} />
          <p className="hero-dek">Alan Turing invented the conceptual foundation for all computing, helped break the Nazi codes, and shortened the war. Then the state that depended on his work prosecuted him for being gay and chemically castrated him. He was 41 when he died.</p>
          
          <div className="hero-bio">
            <span className="bio-dates">1912 — 1954</span>
            <p className="bio-line" dangerouslySetInnerHTML={{ __html: `Alan Mathison Turing: mathematician, logician, cryptanalyst, theoretical computer scientist. Invented the concept of the Turing machine — the theoretical basis for all programmable computers — in 1936. Led the Bletchley Park team that cracked the Enigma cipher. Prosecuted for "gross indecency" in 1952, subjected to chemical castration by court order. Died of cyanide poisoning in 1954; inquest ruled suicide. The British government issued a formal apology in 2009. Royal pardon in 2013.` }} />
          </div>
        </div>
      </div>

      <ArticleWrap>
        <ContentsNav sections={SECTIONS} />
        <div className="body-text">
          
          <Section id="the-machine" num="01" title="The universal machine">
            <div dangerouslySetInnerHTML={{ __html: `<p>In 1936, Turing published a paper solving a problem in mathematical logic that had nothing to do with engineering: he was answering David Hilbert's question about whether there could be a mechanical procedure for deciding whether any given mathematical statement was provable.<sup><a href="#fn1" id="ref1">1</a></sup> Working alongside <a class="xl" href="godel.html">Gödel's incompleteness results</a>, Turing showed the answer was no — there could be no such procedure, because the problem of deciding whether a computation halts is undecidable in principle.</p>
<p>To prove this, Turing invented a device. Not a physical machine — a thought experiment: an abstract machine that reads and writes symbols on an infinite tape, according to a finite set of rules. Simple enough to analyze precisely. Powerful enough, he showed, to compute anything that can be computed at all. Any computation, by any machine, could be simulated on a Turing machine given the right program.</p>
<p>Then he described a Universal Turing Machine: a single machine that could simulate any other Turing machine, if given that machine's rules as input. One machine that could do everything any machine could do. The program — the rules — was just data, read from the tape like anything else. The machine and its instructions were the same kind of thing.</p>
<p>This is the conceptual foundation of every computer ever built. The stored-program computer — the computer you are using right now — is a physical instantiation of Turing's universal machine: one device that can run any program, because the program is just data that the device reads and executes. Turing invented this concept in 1936 to prove a result in mathematical logic. The entire information age follows from it.<sup><a href="#fn2" id="ref2">2</a></sup></p>` }} />
          </Section>
          <Section id="commons-computation" num="02" title="Computation as commons">
            <div dangerouslySetInnerHTML={{ __html: `<p>The universal machine is a commons argument in its structure. The whole point is that it's universal — that one general-purpose device replaces any number of special-purpose ones. The universality is not a convenience. It's the thing that makes computation shareable, forkable, and collectively improvable.</p>
<p>Before the stored-program computer, computation meant building a machine for each task: a machine that computed ballistic trajectories, a different machine that processed payroll, a third machine for weather forecasting. Each machine encoded its function in hardware. You could not share the machine across different problems. You could not give someone else your computation in a form they could modify. The machine was closed.</p>
<p>Turing's universal machine opens this. Because the program is just data, it can be copied, transmitted, shared, improved, and given away at zero marginal cost. The computation that runs on a universal machine is, in principle, a commons: one copy is as good as any other, sharing it doesn't deplete it, and the capacity of the machine to run new programs is not reduced by the programs already written for it.</p>
<div class="pull">
        The program is just data.<br/>Data can be copied at zero cost.<br/><strong>Computation is a commons by nature.</strong>
</div>
<p>This is not how computation is organized in practice. Proprietary software, digital rights management, trade secret law, and patent protection all work to make computation behave like a scarce, depletable resource — to make it act like something other than what it is. <a class="xl" href="how-linux-became-the-internet.html">The open source movement</a> is the attempt to organize computation according to its actual nature: as a commons, shareable and collectively improved, rather than as private property, enclosed and extracted.</p>` }} />
          </Section>
          <Section id="the-war" num="03" title="What he did in the war">
            <div dangerouslySetInnerHTML={{ __html: `<p>In September 1939, Turing reported to Bletchley Park, the British signals intelligence center. The German military was encrypting its communications using the Enigma machine — a device that could encode messages in any of an astronomically large number of ways, changed daily according to a key that the British didn't have. The Germans considered Enigma unbreakable.</p>
<p>Turing led the team that broke it. He built on earlier Polish work to design the Bombe — an electromechanical device that could rapidly test possible Enigma configurations and find the daily settings. By 1941, British intelligence was reading significant portions of German military communications. The Bletchley operation eventually employed around ten thousand people and was reading German, Italian, and Japanese coded messages throughout the war.<sup><a href="#fn3" id="ref3">3</a></sup></p>
<p>The historical consensus is that the Bletchley operation shortened the war by at least two years. Some estimates go higher. Winston Churchill called the Bletchley personnel the geese that laid the golden eggs but never cackled. Turing's contribution was foundational: without his work on the Bombe and on the theoretical approach to cryptanalysis, the operation would not have succeeded on the timeline it did.</p>
<p>The operation was entirely secret. Turing returned to mathematical research after the war. Nobody outside a small circle knew what he had done. He received the Order of the British Empire in 1946 — a decoration given to many thousands of people for wartime service, carrying no indication of what specifically he had done. The work that had saved an unknowable number of lives was classified.<sup><a href="#fn4" id="ref4">4</a></sup></p>` }} />
          </Section>
          <Section id="the-prosecution" num="04" title="What the state did after">
            <div dangerouslySetInnerHTML={{ __html: `<p>In January 1952, Turing reported a burglary at his house. During the investigation, he acknowledged a sexual relationship with a nineteen-year-old man. Both men were charged with "gross indecency" — the same law under which Oscar Wilde had been prosecuted sixty years earlier. Turing pleaded guilty. He was convicted in March 1952.<sup><a href="#fn5" id="ref5">5</a></sup></p>
<p>He was given a choice: prison or probation with chemical castration — a course of synthetic estrogen injections intended to suppress sexual drive. He chose the injections. Over the following year, his body changed. He developed gynecomastia. He described the treatment to friends with sardonic detachment.</p>
<p>In June 1954, he was found dead in his bedroom. A half-eaten apple was on his nightstand. Cyanide poisoning. The inquest ruled suicide. His mother believed it was accidental — he had been working with cyanide in a home chemistry experiment. The question remains open. He was 41.</p>
<div class="callout">
<span class="callout-label">The specifics matter</span>
<p>This is not a story about persecution in the abstract. The British state prosecuted Turing under a law it enforced selectively, against a population it targeted deliberately, for behavior that harmed no one. The prosecution was not an accident or an anomaly — between 1885 and 1967, thousands of men were convicted under the same statute. The law was a tool of social control, wielded against a group the state had decided to treat as criminal.</p>
<p>The man prosecuted had, nine years earlier, done work that materially contributed to the state's survival. The state knew this, and prosecuted him anyway. Not despite knowing — indifferently to it. The knowledge the state depended on and the person who produced it were separable, in the state's accounting. The knowledge was useful. The person was a problem.</p>
<p>This is the logic <a class="xl" href="the-alibi-was-a-mirror.html">Fanon identified</a> in the colonial context and <a class="xl" href="who-gets-to-die.html">Mbembe named as necropolitics</a>: the sovereign decision about who is expendable, made not by calculating whether a person is useful but by applying a category that decides the question before it's asked.</p>
</div>` }} />
          </Section>
          <Section id="the-pattern" num="05" title="The pattern that keeps repeating">
            <div dangerouslySetInnerHTML={{ __html: `<p>The story of Alan Turing is extreme. But the structure it represents is not. Every system of power generates knowledge it depends on from people it would prefer not to recognize. The knowledge and the person are treated as separable: take the knowledge, discard the person, apply the category that makes the discarding legible as order rather than cruelty.</p>
<p><a class="xl" href="what-they-burned.html">Silvia Federici's witches</a> knew things — about medicine, midwifery, contraception, community governance — that the communities they lived in depended on. The enclosure that destroyed them was partly about land and partly about knowledge: eliminating the people who carried knowledge that made communities less dependent on the new economic order. Take the effect of the knowledge, eliminate the carriers.</p>
<p><a class="xl" href="underdevelopment-is-a-verb.html">Walter Rodney showed</a> how African labor and resources financed European industrialization while the people whose work built that wealth were simultaneously constructed as less than full humans, unfit for the institutions their work made possible. The commons extracted, the producers excluded.</p>
<p>The pattern: the system takes what it needs from people it won't recognize. The commons is produced by people the enclosure has decided are outside the category of those who deserve a share of what they produce. This is not a bug. It's the mechanism.</p>` }} />
          </Section>
          <Section id="what-it-means" num="06" title="What the machine means now">
            <div dangerouslySetInnerHTML={{ __html: `<p>The computers you work with every day are Turing machines. Every program you write runs on an instantiation of the concept Turing invented in 1936 to prove a result in logic. The universality he showed was possible — one device that can run any computation — is the reason computation can be a commons at all. The stored-program computer is the technological precondition for everything <a class="xl" href="how-linux-became-the-internet.html">Linux</a>, <a class="xl" href="tech-berners-lee.html">the web</a>, and open source software represent.</p>
<p>The open source movement builds on Turing's universality and <a class="xl" href="tech-shannon.html">Shannon's channel theory</a> without usually naming either. The intuition that software should be shareable, forkable, and collectively improved is the intuition that computation is a commons by nature — that the artificial scarcity imposed by proprietary licensing runs against the grain of what the technology actually is. Turing's thought experiment made this nature visible. What people do with it is a political question.</p>
<p>The AI systems now being built on top of this commons infrastructure are an interesting test case. They are trained on the accumulated commons of human knowledge — text, code, images, ideas produced by millions of people over decades. The training is possible because the underlying computation is Turing-universal: any sufficiently powerful universal machine can, given the right program and data, learn from the collective output of human civilization. What happens to that capacity — whether it gets enclosed as private property or remains commons infrastructure — is the current frontier of the enclosure question.</p>` }} />
          </Section>
        </div>
        
        <Invitation
          label="07 — The Debt That Can't Be Repaid"
          headline="The apology came<br/>fifty-five years<br/>too late."
          coda={`
        The machine runs any program.<br/>
        It doesn't care who wrote it.<br/>
<strong>The state that killed him did.</strong>
`}
        >
          <p>The British government apologized for the treatment of Alan Turing in 2009. A royal pardon followed in 2013. His face appeared on the fifty-pound note in 2021. None of this reached him. The pardon came sixty years after the prosecution that ended his life.</p>
          <p>The political point is not that states should apologize more promptly, though they should. It's that the logic that prosecuted Turing — the categorical decision that certain people's existence is a problem, regardless of what they've contributed — is not a historical artifact. It's a structural feature of systems that organize social life by sorting people into those whose knowledge and labor are useful and those whose full humanity is recognizable.</p>
          <p>Turing's universal machine showed that computation doesn't care who writes the program. The machine runs any program, from any source, with equal fidelity. This indifference to origin is part of what makes computation a commons: the knowledge, once encoded, circulates without carrying the social status of the person who encoded it. The state that prosecuted Turing didn't understand that it was trying to separate the knowledge from the person in a domain where they are inseparable — where what you can build depends entirely on the free participation of the people who know how to build it.</p>
          <p>The commons requires recognizing the full humanity of the people who produce it. Not as a moral luxury. As a functional prerequisite. Systems that extract knowledge from people they won't recognize are paying a long-term cost they account for badly. Turing's case is the proof.</p>
        </Invitation>

        
        
        <NextReads items={[
          { href: 'tech-shannon', cat: 'Series — Part I', title: 'The Channel and the Common' },
          { href: 'tech-berners-lee', cat: 'Series — Part III', title: 'The Gift and the Enclosure' },
          { href: 'tech-raymond', cat: 'Series — Part IV', title: 'The Bazaar Was Right, the Politics Were Wrong' },
          { href: 'how-linux-became-the-internet', cat: 'Framework', title: 'How Linux Became the Internet' },
          { href: 'the-human-was-a-story', cat: 'Series IV', title: 'The Human Was a Story — Sylvia Wynter' },
          { href: 'for-tech-workers', cat: 'Entry Point', title: 'For People Who Build the Internet' },
        ]} />
        <Footnotes notes={FOOTNOTES} />
        <ArticleFooter seriesNote="For People Who Build the Internet — Part II — Turing" />
      </ArticleWrap>
    </Layout>
  )
}
