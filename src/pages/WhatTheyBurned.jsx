import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/what-they-burned.md?raw'

const { meta, html } = parseContent(raw)

export default function WhatTheyBurned() {
  return <ArticlePage meta={meta} html={html} />
}
