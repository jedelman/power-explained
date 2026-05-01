import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/drug-war-deleuze-synthesizers.md?raw'

const { meta, html } = parseContent(raw)

export default function DrugWarDeleuzeSynthesizers() {
  return <ArticlePage meta={meta} html={html} />
}
