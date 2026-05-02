import SeriesLanding from '../components/SeriesLanding'

export default function SeriesIV() {
  return (
    <SeriesLanding
      seriesIndex={3}
      intro={[
        "The first three series build their argument primarily from European and North American thinkers analyzing capitalism from positions of relative proximity to its centers. This series relocates the analysis.",
        "Seen from the colony, the plantation, the dam project, the occupied territory — the commons looks different, the struggle for it is more costly, and it's further advanced. Cedric Robinson, Walter Rodney, Frantz Fanon, Achille Mbembe, Arundhati Roy, and Abdullah Öcalan show what the framework missed.",
      ]}
      pullQuote="The people capitalism classified as outside the human built the most durable commons traditions we have. Built them under conditions explicitly designed to prevent that. Built them anyway."
      pieces={[
        "Cedric Robinson: capitalism wasn't color-blind and then stained by racism. Race was baked into the machinery from day one. The Black radical tradition — built under slavery and colonialism — is a commons tradition.",
        "Walter Rodney: Africa was not underdeveloped. It was developed — into poverty. Deliberately, systematically, over centuries. The engineering of underdevelopment, and why the same logic still runs.",
        "Frantz Fanon was a psychiatrist who treated colonizers and colonized in Algeria during revolution. What he saw: colonialism produces a particular kind of human being — and then requires that person's cooperation in their own subjection.",
        "Achille Mbembe extends Foucault into territory Foucault didn't go: not the power to manage life, but the power to decide who is exposed to death. Who gets to die, and why that decision is structural.",
        "Arundhati Roy reports from the enclosures while they're happening — the Narmada dams, the forest rights struggle. And the communities building commons anyway, under eviction orders.",
        "Öcalan from Kurdistan, Bookchin from Vermont, arriving at the same conclusion: the future is communal and decentralized or it won't exist. What confederation looks like in practice.",
      ]}
    />
  )
}
