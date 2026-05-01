import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function OpenDataIsntEnough() {
  return (
    <Layout
      title="Open Data Isn't Enough — Power Explained"
      description="Your city publishes its data. You can look at it. Nothing changes. Here's why transparency without participation is just a better-looking black box."
      seriesTag=""
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `Open Data Isn't Enough` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>The city published the data. You can see it. Street maintenance budget, broken down by neighborhood. Permits issued, by type and by zip code. 311 complaints, mapped geographically, showing which neighborhoods complain most and which get heard.</p>
<p>You found something. The neighborhood with the most pothole complaints gets the fewest repairs. You showed it to friends. "Look," you said. "The city ignores the north side."</p>
<p>The data was right. The pattern was obvious. So nothing changed.</p>
<p>A journalist wrote a story about it. City officials said they'd look into it. The next year, the same pattern showed up in the data again. And the year after that.</p>
<p>You had access. You had evidence. You had clarity about the problem. What you didn't have was leverage.</p>
<h2>Seeing is not power</h2>
<p>Imagine you can watch every move in a chess game — but you're not one of the players. You can see the bad moves. You can see the strategy unfolding. You might even predict what happens next. But you can't touch the board.</p>
<p>That's what transparency without participation looks like. You get information. You don't get agency.</p>
<p>A few years ago, cities got very excited about open data. They built portals. Published spreadsheets. Hired open data coordinators and held hackathons and gave TED talks about government transparency.</p>
<p>Some of it was genuinely useful. Some of it still is.</p>
<p>But here's what happened: the data went up. Journalists dug into it. Occasionally a story ran. Occasionally a council member expressed concern. The underlying thing the data revealed — the pattern of neglect, the inequity in service delivery, the money flowing to the same contractors year after year — mostly continued.</p>
<p>The data was visible. The decisions weren't touched.</p>
<h2>Why information alone fails</h2>
<p>Information changes opinion. It doesn't change power.</p>
<p>You can have a perfect analysis showing that the city is ignoring a neighborhood. A council member can read it. They can believe it. They can feel bad about it. And then they can go back to the budget meeting where the contractors who got the work last year are waiting, where the political calculus is already settled, where changing the allocation means offending someone with more power than the person in the north side neighborhood.</p>
<p>The information doesn't change the structural pressure. The person making the decision still has incentives to maintain the existing pattern. The person on the north side still has no formal way to make the decision-maker care about what they know.</p>
<p>Information is a tool. But it's a tool in the hands of whoever has the power to act on it. When that's not you, the information just shows you what you can't change.</p>
<div class="pull">
You can know the system is broken.<br/>That doesn't make you able to fix it.<br/><strong>Knowledge and power are different things.</strong>
</div>
<h2>What would actually change it</h2>
<p>The neighborhood with the pothole complaints could be the same neighborhood with formal budget authority. Not advisory. Not "we'll listen to your input." Actual authority over a portion of the maintenance budget.</p>
<p>Then the data would matter. Because the people reading it would be the people with power to act on it.</p>
<p>Or the neighborhood could have a formal mechanism to propose an alternative contractor and require the city to justify why they didn't choose it.</p>
<p>Or the people making budget decisions could have to publicly explain why they're allocating the budget the way they do, knowing that the data showing their choices is public and people are paying attention.</p>
<p>Information plus participation equals power. Information alone equals frustration.</p>
<p>The next piece in this series is about what happens when participation actually works. When people aren't just watching the chess board — they have a real move to make.</p>
` }} />
        </div>
        
        
        
        <div className="nav-strip" style={{marginTop: "3rem", marginBottom: "2rem"}}>
          <a href="two-ways-to-fix-a-pothole.html">← Previous</a>
          <a href="how-linux-became-the-internet.html">Next →</a>
        </div>
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
