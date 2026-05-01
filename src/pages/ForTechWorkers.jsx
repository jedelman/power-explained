import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/for-tech-workers.md?raw'

const { meta, html } = parseContent(raw)

export default function ForTechWorkers() {
  return <ArticlePage meta={meta} html={html} />
}
