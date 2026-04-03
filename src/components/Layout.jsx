import { useEffect } from 'react'
import SiteHeader from './SiteHeader'

export default function Layout({ title, description, seriesTag, children }) {
  useEffect(() => {
    if (title) document.title = title
    const meta = document.querySelector('meta[name="description"]')
    if (meta && description) meta.setAttribute('content', description)
  }, [title, description])

  return (
    <>
      <SiteHeader seriesTag={seriesTag} />
      {children}
    </>
  )
}
