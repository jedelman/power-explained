import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/lib-skin-in-the-game.md?raw'

const { meta, html } = parseContent(raw)

export default function LibSkinInTheGame() {
  return <ArticlePage meta={meta} html={html} />
}
