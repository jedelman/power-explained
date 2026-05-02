import SeriesLanding from '../components/SeriesLanding'

export default function SeriesI() {
  return (
    <SeriesLanding
      seriesIndex={0}
      intro={[
        "You already know something is wrong. Cities that can't fix potholes. Services that seem designed to frustrate. Officials who listen carefully and change nothing. The machine produces the same outcomes regardless of who runs it.",
        "This series explains why. Not as a conspiracy — as a structural argument. The way cities collect information, make decisions, and distribute resources isn't broken. It's working exactly as designed. Understanding the design is the first step to building something different.",
      ]}
      pullQuote="The commons is not a failure mode. It is a governance form — one that works, under conditions that can be described and replicated, and that keeps getting enclosed."
      pieces={[
        "The template most cities run on was designed for a world of scarce information flowing upward. That world no longer exists — but the template remains. Here's what it produces, and why.",
        "Your city doesn't know what you know. The information that would make it work — granular, local, lived — never makes it into the system. Not because officials don't care. Because the system can't hold it.",
        "When you show up to participate, someone else captures the value. The relationship between participation, information, and benefit isn't what civic mythology says it is.",
        "Two approaches to a broken street. One makes the information disappear into bureaucracy. The other makes it compound. The difference between them is the difference between a commons and an enclosure.",
        "More data didn't fix anything. It just made the dysfunction legible to more people. Why open data is necessary but not sufficient — and what would actually change things.",
        "Thousands of people, no boss, no central plan, no profit motive — and they built the software that runs the internet. What this actually proves, and what it doesn't.",
        "When the hurricane hit, neighbors found each other before the agencies arrived. Mutual aid isn't charity. It isn't crisis response. It's an infrastructure — one that capitalism depends on but refuses to count as work.",
      ]}
    />
  )
}
