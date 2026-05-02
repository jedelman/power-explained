import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { SERIES, ALL_ARTICLES } from '../lib/articles'

// Map URL to series ID
function getSeriesForUrl(url) {
  for (const series of SERIES) {
    if (series.pieces.some(p => p.url === url)) {
      return series.id
    }
  }
  return null
}

export default function SeriesNav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const currentSeriesId = getSeriesForUrl(location.pathname)
  const currentSeries = SERIES.find(s => s.id === currentSeriesId)

  useEffect(() => { setOpen(false) }, [location.pathname])
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const current = location.pathname

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open series navigation"
        aria-expanded={open}
        style={{
          position: 'fixed',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1300,
          cursor: 'pointer',
          background: 'var(--yellow)',
          color: '#000',
          border: '1px solid rgba(0,0,0,0.2)',
          borderLeft: 'none',
          borderRadius: '0 4px 4px 0',
          padding: '0.85rem 0.55rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0.85,
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = 1}
        onMouseLeave={e => e.currentTarget.style.opacity = 0.85}
      >
        <span style={{ fontSize: '1rem', lineHeight: 1 }}>☰</span>
        <span style={{
          fontSize: '0.55rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontFamily: 'var(--mono)',
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          opacity: 0.7,
        }}>Contents</span>
      </button>

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { width: 300, bgcolor: 'var(--yellow)', color: '#000' } }}
      >
        <Box sx={{
          px: 2.5, pt: 2.5, pb: 1.5,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
        }}>
          <Typography sx={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.6 }}>
            {currentSeries ? currentSeries.label : 'All Pieces'}
          </Typography>
          <IconButton onClick={() => setOpen(false)} size="small" aria-label="Close" sx={{ color: '#000' }}>
            ✕
          </IconButton>
        </Box>

        <Box sx={{ px: 1.5, py: 2, overflowY: 'auto', flex: 1 }}>
          {currentSeries ? (
            // Show only current series pieces
            <Box>
              <List dense disablePadding>
                {currentSeries.pieces.map(piece => {
                  const isCurrent = current === piece.url
                  return (
                    <ListItem key={piece.url} disablePadding>
                      <ListItemButton
                        component="a"
                        href={piece.url}
                        selected={isCurrent}
                        aria-current={isCurrent ? 'page' : undefined}
                        sx={{
                          px: 1, py: 0.5, gap: 1, borderRadius: 1,
                          color: '#000',
                          '&.Mui-selected': { bgcolor: 'rgba(0,0,0,0.08)' },
                          '&:hover': { bgcolor: 'rgba(0,0,0,0.06)' },
                        }}
                      >
                        <Typography sx={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', fontWeight: 700, opacity: 0.4, minWidth: '1.75rem', flexShrink: 0 }}>
                          {piece.num}
                        </Typography>
                        <ListItemText
                          primary={piece.title}
                          primaryTypographyProps={{ fontFamily: 'var(--body)', fontSize: '0.875rem', lineHeight: 1.4, color: 'inherit' }}
                        />
                      </ListItemButton>
                    </ListItem>
                  )
                })}
              </List>
              <Divider sx={{ borderColor: 'rgba(0,0,0,0.1)', my: 1.5 }} />
              <Typography sx={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.5, px: 1, mb: 1 }}>
                All Series
              </Typography>
            </Box>
          ) : null}

          {/* Series list (always show at bottom) */}
          <List dense disablePadding>
            {SERIES.map(s => {
              const isCurrent = s.id === currentSeriesId
              return (
                <ListItem key={s.id} disablePadding>
                  <ListItemButton
                    component="a"
                    href={`/${s.id}`}
                    selected={isCurrent}
                    aria-current={isCurrent ? 'page' : undefined}
                    sx={{
                      px: 1, py: 0.6, borderRadius: 1,
                      color: '#000',
                      '&.Mui-selected': { bgcolor: 'rgba(0,0,0,0.1)', fontWeight: 600 },
                      '&:hover': { bgcolor: 'rgba(0,0,0,0.06)' },
                    }}
                  >
                    <ListItemText
                      primary={s.label}
                      primaryTypographyProps={{ fontFamily: 'var(--display)', fontSize: '0.8rem', lineHeight: 1.3, color: 'inherit' }}
                    />
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
        </Box>
      </Drawer>
    </>
  )
}
