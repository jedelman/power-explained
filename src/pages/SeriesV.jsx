import SeriesLanding from '../components/SeriesLanding'

export default function SeriesV() {
  return (
    <SeriesLanding
      seriesIndex={4}
      intro={[
        "Four series. Dozens of thinkers. Different centuries, different continents, different domains. One pattern underneath all of it: enclosure — the conversion of something held in common into something controlled for private benefit.",
        "This series is about what comes next. Not abstractly. Concretely: how credit becomes a commons, how land can be held in trust, how care gets rebuilt collectively, how language and AI get governed by the people they belong to. The preparation is already underway.",
      ]}
      pullQuote="The commons is not what was taken. It is what people keep building, despite everything."
      pieces={[
        "Everything this site has argued reduces to one structural move, recurring across every domain and century. See it once and you can't unsee it.",
        "The system was designed this way — deliberately, by specific people, enforced by specific violence. Which means it can be designed differently. This is practical realism, not optimism.",
        "David Graeber: debt existed before money. Money was supposed to make debt easier to track. Instead it became a weapon. How credit becomes a tool of community self-determination instead of extraction.",
        "All wealth comes from land. All life depends on land. Community land trusts, indigenous governance, and the specific mechanics of taking land out of speculation permanently.",
        "The economy runs on care. Capitalism can't pay for it — if it had to, the profit structure collapses. What it looks like to rebuild care as commons: collectives, cooperatives, networks.",
        "Language is built by everyone who speaks it. AI is trained on humanity's expression without consent. The argument for governing knowledge and language as commons — and what that demands technically.",
        "Community land trusts. Credit unions. Cooperative farms. Solidarity networks. Time banks. These are not experiments. They are operating infrastructure. A map of what exists now.",
        "AI is an enclosure happening in real time. The people whose data trained the system should govern the system. What commons governance of AI requires — technically, politically, now.",
      ]}
    />
  )
}
