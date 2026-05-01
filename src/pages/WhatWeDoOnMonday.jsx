import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/what-we-do-on-monday.md?raw'

const { meta, html } = parseContent(raw)

export default function WhatWeDoOnMonday() {
  return <ArticlePage meta={meta} html={html} />
}
