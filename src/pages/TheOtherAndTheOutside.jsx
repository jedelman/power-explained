import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function TheOtherAndTheOutside() {
  return (
    <Layout
      title="The Other and the Outside — Power Explained"
      description="Simone de Beauvoir showed how the division of labor gets made to seem natural. The assignment of women to care work isn't biology. It's a story — and stories can be changed."
      seriesTag="The Hidden Engine — Series II"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `The Other and the Outside` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>Simone de Beauvoir opens <em>The Second Sex</em> with a question she says has never been asked seriously: what is a woman?</p>
<p>Not a biological question. Not a question about chromosomes or hormones. A social question. Who gets called a woman, what that means, what expectations come with it, what is permitted and what is forbidden — where does all of that come from?</p>
<p>Her answer: it doesn't come from nature. It comes from construction. And the construction serves a purpose.</p>
<h2>The Other</h2>
<p>De Beauvoir borrowed a concept from Hegel — a nineteenth-century German philosopher whose ideas about how consciousness works run through almost all of modern political theory: the idea that every dominant group defines itself by defining someone else as different, lesser, outside the norm. Masters need slaves to know themselves as masters. Colonizers need the colonized. Every "we" that places itself at the center of history requires a "them" defined as peripheral.</p>
<p>Women, she argued, are assigned this function in relation to men. Man is the subject — the one who makes history, builds culture, acts in the world. Woman is the Other — defined not by her own qualities but by her difference from the default. She exists in relation to him, as his complement, his opposite, his exception.</p>
<p>This assignment is not neutral. It comes with a specific content. Men are associated with transcendence — with history, culture, production, the future. Women are associated with immanence — with nature, the body, reproduction, repetition. Men make things happen. Women are what men return to.</p>
<p>De Beauvoir was clear: this is not biology. These associations are learned, enforced, and reproduced. And they conveniently make the economic arrangement described by <a class="xl" href="who-pays-for-the-next-shift.html">Kollontai</a> seem natural. If women are inherently suited to domestic life — if care work is what they are rather than what they do — then the fact that they do it unpaid doesn't look like exploitation. It looks like order.</p>
<div class="pull">
        Call it <strong>nature</strong><br/>and no one asks who benefits.
      </div>
<h2>How the alibi works</h2>
<p>In the framework we've been building, an <a class="xl" href="glossary.html#alibi">alibi</a> is what a system needs you to believe in order to seem legitimate. The alibi for the gendered division of labor is the claim that it's natural. Women are nurturing by nature. Men are providers by nature. The arrangement reflects who people are, not what power has organized.</p>
<p>When an alibi is working, it's invisible. It doesn't feel like an argument — it feels like reality. The arrangement just seems obvious. This is what de Beauvoir called mystification: a constructed social fact that presents itself as a natural truth.</p>
<p>When the alibi becomes visible — when people start noticing that "natural" is doing a lot of ideological work — the system becomes temporarily unstable. That's what the second wave of feminism in the 1960s and 70s was, in large part: a mass project of making the alibi visible. Making the word "housewife" feel like a choice rather than a destiny. Making domestic labor feel like work rather than nature. Once you see the construction, you can't easily unsee it.</p>
<p>De Beauvoir's philosophical contribution was to give that project a rigorous foundation. The Other isn't a natural category. It's produced. And because it's produced, it can be undone.</p>
<h2>Freedom as the goal</h2>
<p>For de Beauvoir, the answer to Othering is subjectivity — the capacity to act in the world on one's own terms, to make choices that are genuinely one's own rather than choices prescribed by a role. This is the existentialist frame: freedom isn't given, it's achieved, through acts of will against the forces that try to contain you.</p>
<p>This is a powerful framework. It's also limited in a specific way that the next thinkers in this series will press on directly.</p>
<p>De Beauvoir's "woman" is, in practice, a certain kind of woman. Educated. European. Relatively affluent. The freedom she's reaching toward — the ability to pursue a career, to live independently, to be a subject rather than an object — is a freedom that assumes certain material conditions. Not everyone starts from the same place. Not everyone's Othering works the same way.</p>
<div class="callout">
<span class="callout-label">The question she left open</span>
<p>De Beauvoir showed how the category "woman" is constructed to serve the needs of a dominant group. But she didn't ask: what happens when you're simultaneously Othered along multiple axes? When you're not just a woman but also Black, or colonized, or poor — and each of those categories comes with its own logic of exclusion?</p>
<p>The answer to that question takes the entire analysis apart and puts it back together differently. <a class="xl" href="which-women.html">That's where we go next.</a></p>
</div>
<p>What de Beauvoir established, and what remains foundational, is the mechanism. The assignment of immanence to women — the insistence that they belong to nature, body, repetition, care — is not a description of what women are. It is a tool for organizing the division of labor, distributing the costs of reproduction, and making that distribution feel inevitable.</p>
<p>It is, in the language of this series, the ideological layer of a <a class="xl" href="glossary.html#capture">capture mechanism</a>. The economic capture of reproductive labor (Kollontai) required an ideological justification (de Beauvoir) to be stable. You couldn't just extract that labor indefinitely without a story about why it was natural and right. The story came first, or alongside, or interwoven — and the story did the work of making the exploitation invisible.</p>
<p>Once you see the story as a story, the exploitation becomes visible. And visible exploitation is unstable exploitation.</p>` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
