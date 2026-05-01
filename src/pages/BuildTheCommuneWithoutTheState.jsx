import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/build-the-commune-without-the-state.md?raw'

const { meta, html } = parseContent(raw)

export default function BuildTheCommuneWithoutTheState() {
  return <ArticlePage meta={meta} html={html} />
}
