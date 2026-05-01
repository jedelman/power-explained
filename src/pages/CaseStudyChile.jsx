import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/case-study-chile.md?raw'

const { meta, html } = parseContent(raw)

export default function CaseStudyChile() {
  return <ArticlePage meta={meta} html={html} />
}
