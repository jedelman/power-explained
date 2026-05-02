import SeriesLanding from '../components/SeriesLanding'

export default function SeriesIII() {
  return (
    <SeriesLanding
      seriesIndex={2}
      intro={[
        "The people who looked at capitalism and said 'this has to go' were not wrong. A hundred and fifty years of reform has softened the edges. It has not changed the architecture.",
        "But the solutions that claimed to fix it reproduced the domination they were supposed to end. This series is about why — and about the tradition that had better answers, got buried, and is being rebuilt now.",
      ]}
      pullQuote="The party ate the revolution — not because of individual betrayal, but because of a structural feature. Hierarchical control of the state is the architecture of domination, regardless of who holds it."
      pieces={[
        "The diagnosis was right. A hundred and fifty years of evidence confirms it. The problem isn't the analysis of capitalism — it's what people concluded should come next.",
        "The Russian Revolution produced two organizational forms: the distributed soviets that arose from below, and the centralized party hierarchy that captured them. One of them won. Here's why that was predictable.",
        "There's a tradition of socialist and anarchist thought that had better answers than the tradition that won. It was buried — because its answers were threatening. What it knew, and what it built.",
        "You don't wait for the revolution to start building the world you want. You build it now, in the present, with the people you have. This is not a consolation prize. It is a specific claim about how change at scale actually happens.",
      ]}
    />
  )
}
