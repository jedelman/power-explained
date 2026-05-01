import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/the-alibi-was-a-mirror.md?raw'

const { meta, html } = parseContent(raw)

export default function TheAlibiWasAMirror() {
  return <ArticlePage meta={meta} html={html} />
}
