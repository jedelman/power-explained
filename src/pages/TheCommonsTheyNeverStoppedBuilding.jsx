import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/the-commons-they-never-stopped-building.md?raw'

const { meta, html } = parseContent(raw)

export default function TheCommonsTheyNeverStoppedBuilding() {
  return <ArticlePage meta={meta} html={html} />
}
