/**
 * Master article list — drives SeriesNav, prev/next, and llms.txt ordering.
 * Mirrors Contents.jsx exactly.
 */
export const SERIES = [
  {
    id: 'series-i',
    label: 'Series I — The Basic Architecture',
    pieces: [
      { num: '01', title: "Why Your City Doesn't Work", url: '/why-your-city-doesnt-work' },
      { num: '02', title: 'Your City Knows Less', url: '/your-city-knows-less' },
      { num: '03', title: 'Who Gets Paid', url: '/who-gets-paid' },
      { num: '04', title: 'Two Ways to Fix a Pothole', url: '/two-ways-to-fix-a-pothole' },
      { num: '05', title: "Open Data Isn't Enough", url: '/open-data-isnt-enough' },
      { num: '06', title: 'How Linux Became the Internet', url: '/how-linux-became-the-internet' },
      { num: '07', title: "Mutual Aid Isn't Charity", url: '/mutual-aid-isnt-charity' },
    ],
  },
  {
    id: 'series-ii',
    label: 'Series II — The Hidden Engine',
    pieces: [
      { num: '08', title: 'The Outside Capital Needs', url: '/the-outside-capital-needs' },
      { num: '09', title: 'Who Pays for the Next Shift', url: '/who-pays-for-the-next-shift' },
      { num: '10', title: 'The Other and the Outside', url: '/the-other-and-the-outside' },
      { num: '11', title: 'Which Women', url: '/which-women' },
      { num: '12', title: 'Falling Through the Gap', url: '/falling-through-the-gap' },
      { num: '13', title: 'What They Burned', url: '/what-they-burned' },
      { num: '14', title: 'What We Do on Monday', url: '/what-we-do-on-monday' },
    ],
  },
  {
    id: 'series-iii',
    label: 'Series III — The Left Got Half of It Right',
    pieces: [
      { num: '15', title: 'They Were Right About the Problem', url: '/they-were-right-about-the-problem' },
      { num: '16', title: 'The Party Ate the Revolution', url: '/the-party-ate-the-revolution' },
      { num: '17', title: 'The Tradition They Buried', url: '/the-tradition-they-buried' },
      { num: '18', title: 'Build It Now', url: '/build-it-now' },
    ],
  },
  {
    id: 'evidence',
    label: 'The Evidence',
    pieces: [
      { num: '19', title: 'Hardin Was Wrong', url: '/hardin-was-wrong' },
      { num: '20', title: 'The Outside Was Always People', url: '/racial-capitalism' },
      { num: '21', title: 'Underdevelopment Is a Verb', url: '/underdevelopment-is-a-verb' },
      { num: '22', title: 'The Alibi Was Also a Mirror', url: '/the-alibi-was-a-mirror' },
      { num: '23', title: 'Who Gets to Die', url: '/who-gets-to-die' },
      { num: '24', title: 'The Commons They Never Stopped Building', url: '/the-commons-they-never-stopped-building' },
      { num: '25', title: 'Build the Commune Without the State', url: '/build-the-commune-without-the-state' },
      { num: '26', title: 'The Human Was a Story', url: '/the-human-was-a-story' },
      { num: '27', title: 'One Pattern', url: '/one-pattern' },
      { num: '28', title: 'Nobody Had To', url: '/nobody-had-to' },
      { num: '29', title: 'The Debt Came First', url: '/money-has-to-be-a-commons' },
      { num: '30', title: 'Land Is the Foundation', url: '/land-is-the-foundation' },
      { num: '31', title: 'Care Is the Economy', url: '/care-is-the-economy' },
      { num: '32', title: 'The Language Was Always a Commons', url: '/the-language-was-always-a-commons' },
      { num: '33', title: 'The Preparation Is Underway', url: '/the-preparation-is-underway' },
      { num: '34', title: 'The Agent and the Commons', url: '/the-agent-and-the-commons' },
    ],
  },
  {
    id: 'deep-time',
    label: 'Deep Time',
    pieces: [
      { num: '35', title: 'Reich: Character Armor', url: '/reich-character-armor' },
      { num: '36', title: 'Gramsci: 1930s', url: '/gramsci-1930s' },
      { num: '37', title: 'Shannon & Simondon: 1950s', url: '/shannon-simondon-1950s' },
      { num: '38', title: 'Debord: 1968', url: '/debord-1968' },
      { num: '39', title: 'Psychedelics & Theory of Mind', url: '/psychedelics-theory-of-mind' },
    ],
  },
]

// Flat ordered list for prev/next
export const ALL_ARTICLES = SERIES.flatMap(s => s.pieces)

export function getAdjacentArticles(currentUrl) {
  const idx = ALL_ARTICLES.findIndex(a => a.url === currentUrl)
  if (idx === -1) return { prev: null, next: null }
  return {
    prev: ALL_ARTICLES[idx - 1] ?? null,
    next: ALL_ARTICLES[idx + 1] ?? null,
  }
}
