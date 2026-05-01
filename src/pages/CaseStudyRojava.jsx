import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/case-study-rojava.md?raw'

const { meta, html } = parseContent(raw)

export default function CaseStudyRojava() {
  return <ArticlePage meta={meta} html={html} />
}
