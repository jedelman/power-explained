import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/why-your-city-doesnt-work.md?raw'

const { meta, html } = parseContent(raw)

export default function WhyYourCityDoesntWork() {
  return <ArticlePage meta={meta} html={html} />
}
