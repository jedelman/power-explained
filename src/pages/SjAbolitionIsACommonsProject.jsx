import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/sj-abolition-is-a-commons-project.md?raw'

const { meta, html } = parseContent(raw)

export default function SjAbolitionIsACommonsProject() {
  return <ArticlePage meta={meta} html={html} />
}
