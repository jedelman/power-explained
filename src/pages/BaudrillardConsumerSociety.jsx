import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/baudrillard-consumer-society.md?raw'

const { meta, html } = parseContent(raw)

export default function BaudrillardConsumerSociety() {
  return <ArticlePage meta={meta} html={html} />
}
