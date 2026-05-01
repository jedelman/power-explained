import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/how-linux-became-the-internet.md?raw'

const { meta, html } = parseContent(raw)

export default function HowLinuxBecameTheInternet() {
  return <ArticlePage meta={meta} html={html} />
}
