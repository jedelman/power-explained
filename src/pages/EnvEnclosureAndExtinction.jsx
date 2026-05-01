import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/env-enclosure-and-extinction.md?raw'

const { meta, html } = parseContent(raw)

export default function EnvEnclosureAndExtinction() {
  return <ArticlePage meta={meta} html={html} />
}
