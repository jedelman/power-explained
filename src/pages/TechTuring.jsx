import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/tech-turing.md?raw'

const { meta, html } = parseContent(raw)

export default function TechTuring() {
  return <ArticlePage meta={meta} html={html} />
}
