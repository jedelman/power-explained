export default function SeriesNav() {
  const series = [
    {
      id: 'series-i',
      title: 'Series I: The Basic Architecture',
      pieces: [
        { num: '01', title: 'Why Your City Doesn\'t Work', url: '/why-your-city-doesnt-work' },
        { num: '02', title: 'Your City Knows Less', url: '/your-city-knows-less' },
        { num: '03', title: 'Who Gets Paid', url: '/who-gets-paid' },
        { num: '04', title: 'Two Ways to Fix a Pothole', url: '/two-ways-to-fix-a-pothole' },
        { num: '05', title: 'Open Data Isn\'t Enough', url: '/open-data-isnt-enough' },
        { num: '06', title: 'How Linux Became the Internet', url: '/how-linux-became-the-internet' },
        { num: '07', title: 'Mutual Aid Isn\'t Charity', url: '/mutual-aid-isnt-charity' },
      ]
    },
    {
      id: 'series-ii',
      title: 'Series II: The Hidden Engine',
      pieces: [
        { num: '08', title: 'The Outside Capital Needs', url: '/the-outside-capital-needs' },
        { num: '09', title: 'Who Pays for the Next Shift', url: '/who-pays-for-the-next-shift' },
        { num: '10', title: 'The Other and the Outside', url: '/the-other-and-the-outside' },
        { num: '11', title: 'Which Women', url: '/which-women' },
        { num: '12', title: 'Falling Through the Gap', url: '/falling-through-the-gap' },
        { num: '13', title: 'What They Burned', url: '/what-they-burned' },
        { num: '14', title: 'What We Do on Monday', url: '/what-we-do-on-monday' },
      ]
    }
  ]

  return (
    <nav className="series-nav">
      {series.map(s => (
        <div key={s.id} className="series-section">
          <h3 className="series-title">{s.title}</h3>
          <ul className="pieces-list">
            {s.pieces.map(piece => (
              <li key={piece.url}>
                <a href={piece.url}>
                  <span className="piece-num">{piece.num}</span>
                  <span className="piece-title">{piece.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}
