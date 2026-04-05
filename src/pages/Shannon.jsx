// Shannon.jsx — redirect to TechShannon
// The original Shannon stub was superseded by the full tech series page at /tech-shannon.
// This component redirects anyone who lands on /shannon to the real article.
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Shannon() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/tech-shannon', { replace: true })
  }, [navigate])
  return null
}
