import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/the-language-was-always-a-commons.md?raw'

const { meta, html } = parseContent(raw)

export default function TheLanguageWasAlwaysACommons() {
  return <ArticlePage meta={meta} html={html} />
}
