import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []
const FOOTNOTES = [
  `Claude E. Shannon, "A Mathematical Theory of Communication," <em>Bell System Technical Journal</em> 27, nos. 3–4 (July and October 1948): 379–423, 623–656. Republished with a postscript by Warren Weaver as <em>The Mathematical Theory of Communication</em> (University of Illinois Press, 1949). The 1949 book is the accessible entry point; Weaver's postscript attempts a plain-English account. For biography, Jimmy Soni and Rob Goodman's <em>A Mind at Play: How Claude Shannon Invented the Information Age</em> (Simon &amp; Schuster, 2017) is thorough and readable. The juggling and unicycling are documented. <a aria-label="Return to text" href="#ref1">↩</a>`,
  `The channel capacity theorem — now called the Shannon–Hartley theorem for continuous channels and Shannon's noisy-channel coding theorem for discrete channels — establishes that for any channel with a given capacity C (measured in bits per second), and any transmission rate R below C, there exists an encoding scheme that achieves arbitrarily low error probability. This was the surprising half of the result: you cannot exceed capacity, but below it you can always achieve reliability. Shannon proved existence without constructing the codes, which is characteristic of his approach. Practical error-correcting codes that approach channel capacity took decades to develop and are the basis of all modern digital communication. <a aria-label="Return to text" href="#ref2">↩</a>`,
  `The application of Shannon's framework to spectrum policy and internet architecture is well developed in Yochai Benkler's <em>The Wealth of Networks: How Social Production Transforms Markets and Freedom</em> (Yale University Press, 2006), particularly chapters 4–5. Benkler argues that the choice between commons and property regimes for spectrum and infrastructure has direct effects on the diversity and resilience of communication. Shannon's math underlies the technical arguments even when Benkler doesn't cite it directly. <a aria-label="Return to text" href="#ref3">↩</a>`,
  `The 1956 consent decree settling United States v. Western Electric Co. barred AT&amp;T from entering the computer business in exchange for allowing it to retain its telephone monopoly and its ownership of Western Electric, the manufacturing arm. Bell Labs' research was required to be licensed to all applicants at reasonable royalties. Jon Gertner's <em>The Idea Factory: Bell Labs and the Great Age of American Innovation</em> (Penguin Press, 2012) documents the institutional conditions in detail. The transistor's 1947 invention by Shockley, Bardeen, and Brattain at Bell Labs — licensed widely under the consent decree — is the most consequential single product of the commons-structured research institution. <a aria-label="Return to text" href="#ref4">↩</a>`,
  `Ludwig Boltzmann derived the entropy formula S = k log W in the 1870s–1890s; the full formulation appears in his 1877 paper "Über die Beziehung zwischen dem zweiten Hauptsatze der mechanischen Wärmetheorie und der Wahrscheinlichkeitsrechnung." Shannon's entropy H = −Σ p log p is mathematically equivalent (with different constants). The story of Shannon consulting John von Neumann about what to call the quantity — von Neumann supposedly saying "call it entropy, since no one knows what entropy really is, so in a debate you will always have the advantage" — is probably apocryphal but has been widely repeated. Whether or not Shannon needed the strategic cover, the mathematical equivalence is genuine and foundational. <a aria-label="Return to text" href="#ref5">↩</a>`,
  `Jean Baudrillard, <em>Le Système des objets</em> (Gallimard, 1968); English translation <em>The System of Objects</em>, trans. James Benedict (Verso, 1996). The argument about the morphological evolution of technical objects — the tendency toward functional coherence and the shedding of ornamental excess — appears in Part I. Baudrillard draws on the design critic and historian Abraham Moles. Note that the later Baudrillard of simulation and hyperreality is a different Baudrillard than the one writing here; <em>The System of Objects</em> is empirical and sociological in a way his 1970s–80s work is not. <a aria-label="Return to text" href="#ref6">↩</a>`,
  `Gilles Deleuze and Félix Guattari, <em>Mille Plateaux: Capitalisme et Schizophrénie 2</em> (Minuit, 1980); English translation <em>A Thousand Plateaus: Capitalism and Schizophrenia</em>, trans. Brian Massumi (University of Minnesota Press, 1987). The anti-teleological account of evolution — evolution as transversal variation across a plane of consistency rather than progress up a ladder — runs through the "Becoming" plateaus (10 and elsewhere). D&amp;G draw on Rupert Riedl's systems biology and Geoffrey Saint-Hilaire's comparative morphology as counterweights to the adaptationist program. The argument is that forms find each other across lineages — the eye evolves independently at least forty times — which cannot be explained by common descent but can be explained by convergence toward forms that the physics of light-sensitive environments selects for. <a aria-label="Return to text" href="#ref7">↩</a>`,
  `Packet-switching was developed independently by Paul Baran at RAND (1960–1964) and Donald Davies at the UK National Physical Laboratory (1965–1966). Baran's motivation was military: a network that could survive partial destruction. Davies' motivation was efficiency. Both arrived at the same architecture by different routes, which is the convergence pattern. The ARPANET, built on packet-switching from 1969, was a government-funded commons infrastructure. TCP/IP, developed by Vint Cerf and Bob Kahn and published in 1974, was deliberately placed in the public domain. <a aria-label="Return to text" href="#ref8">↩</a>`,
  `Tim Berners-Lee proposed the World Wide Web in March 1989 at CERN and published the first website in December 1990. He explicitly declined to patent HTTP or HTML. CERN agreed in April 1993 to release the Web protocols into the public domain with no royalties. Berners-Lee has said the decision not to seek a patent was the most important decision he made. For the full account and Berners-Lee's subsequent campaign for the web's original architecture against platform enclosure, see his <em>Weaving the Web</em> (HarperCollins, 1999) and the work of the World Wide Web Foundation, which he founded in 2009. <a aria-label="Return to text" href="#ref9">↩</a>`,
  `Elinor Ostrom, <em>Governing the Commons: The Evolution of Institutions for Collective Action</em> (Cambridge University Press, 1990). The design principles Ostrom extracted from successful commons — clearly defined boundaries, rules matched to local conditions, collective choice arrangements, monitoring, graduated sanctions — are best understood as the minimum governance structure needed to maintain channel integrity. Too little governance and the channel degrades through over-use; too much and the governance overhead exceeds the channel's productive capacity. Ostrom won the Nobel Memorial Prize in Economic Sciences in 2009, the first woman to do so. <a aria-label="Return to text" href="#ref10">↩</a>`
]

export default function Shannon() {
  return (
    <Layout
      title="The Channel and the Common — Power Explained"
      description="Claude Shannon proved that information has a physics. A channel is shared infrastructure. The question isn't whether information flows — it's whether the architecture is built to let it."
      seriesTag=""
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: 'var(--display)', fontSize: 'clamp(4rem,18vw,12rem)', fontWeight: 700, letterSpacing: '-0.04em', opacity: 0.05, whiteSpace: 'nowrap', pointerEvents: 'none', lineHeight: 1 }}>SHANNON</div>
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          <span className="hero-eyebrow">For People Building the Future — Claude Shannon — A Mathematical Theory of Communication (1948)</span>
          <h1 dangerouslySetInnerHTML={{ __html: `The Channel<br />and the Common` }} />
          <p className="hero-dek">Shannon proved that information has a physics. A channel is shared infrastructure. The question isn't whether signal flows — it's whether the architecture is built to let it. The internet answered that question once. Platform enclosure is trying to answer it again.</p>
          
          <div className="hero-bio">
            <span className="bio-dates">1916–2001</span>
            <p className="bio-line" dangerouslySetInnerHTML={{ __html: `Mathematician and electrical engineer. Bell Telephone Laboratories. Founded information theory with a single paper in 1948. Also juggled while riding a unicycle through the hallways of Bell Labs, which is relevant.` }} />
          </div>
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
        </div>
        
        <Invitation
          label="For People Building the Future — Series"
          headline="The form is already there.<br/>Your job is to stop blocking it."
          coda={`The internet is not broken. It has been <strong>interrupted</strong>. There's a difference.`}
        >
          <p>Shannon found the math. Ostrom found the governance. Berners-Lee built the prototype. The architecture that works has been demonstrated, proven, and repeatedly re-demonstrated every time someone builds commons infrastructure instead of a platform.</p>
          <p>The enclosures are real and the damage they do is real. But they are noise in a channel that keeps reasserting its form. The question for builders is whether you're helping the form find itself or adding more noise.</p>
        </Invitation>

        
        <NextReads items={[
          { href: 'godel', cat: "Thinkers — Logic", title: "Kurt Gödel: Every System Has an Outside" },
          { href: 'hardin-was-wrong', cat: "Series I — The Commons", title: "Hardin Was Wrong" },
          { href: 'how-linux-became-the-internet', cat: "Series I — The Commons", title: "How Linux Became the Internet" },
          { href: 'for-tech-workers', cat: "Entry Point", title: "For People Who Build the Internet" }
        ]} />
        
        <Footnotes notes={FOOTNOTES} />
        <ArticleFooter seriesNote="For People Building the Future — Claude Shannon — A Mathematical Theory of Communication (1948)" />
      </ArticleWrap>
    </Layout>
  )
}
