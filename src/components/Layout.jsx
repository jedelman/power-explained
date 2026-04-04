import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SiteHeader from './SiteHeader'

export default function Layout({ title, description, seriesTag, children }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (title) document.title = title
    const meta = document.querySelector('meta[name="description"]')
    if (meta && description) meta.setAttribute('content', description)
  }, [title, description])

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
