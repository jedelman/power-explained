import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import SiteHeader from './SiteHeader'

const BASE_URL = 'https://power-explained.jason-edelman.org'

function setMeta(name, content, attr = 'name') {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function Layout({ title, description, seriesTag, children }) {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (!title) return
    document.title = title
    const canonical = `${BASE_URL}${location.pathname}`
    const ogImage = `${BASE_URL}/og-image.png`

    setMeta('description', description)
    setLink('canonical', canonical)
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', canonical, 'property')
    setMeta('og:type', 'article', 'property')
    setMeta('og:site_name', 'Power Explained', 'property')
    setMeta('og:image', ogImage, 'property')
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    setMeta('twitter:image', ogImage)
  }, [title, description, location.pathname])

  // Intercept clicks on internal .html links inside dangerouslySetInnerHTML
  // and route them through React Router instead of hard-navigating
  useEffect(() => {
    const handleClick = (e) => {
      const a = e.target.closest('a')
      if (!a) return
      const href = a.getAttribute('href') || ''
      if (
        href.endsWith('.html') &&
        !href.startsWith('http') &&
        !href.startsWith('//') &&
        !href.startsWith('#')
      ) {
        e.preventDefault()
        const path = '/' + href.replace(/^\//, '').replace(/\.html$/, '')
        navigate(path)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [navigate])

  return (
    <>
      <SiteHeader seriesTag={seriesTag} />
      {children}
    </>
  )
}

