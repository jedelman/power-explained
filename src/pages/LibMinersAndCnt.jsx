import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/lib-miners-and-cnt.md?raw'

const { meta, html } = parseContent(raw)

export default function LibMinersAndCnt() {
  return <ArticlePage meta={meta} html={html} />
}
