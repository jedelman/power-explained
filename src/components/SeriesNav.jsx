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
import { SERIES } from '../lib/articles'

const DRAWER_WIDTH = 300
const DESKTOP_BP = 900 // px — matches MUI 'md' roughly

function getSeriesForUrl(url) {
  for (const series of SERIES) {
    if (series.pieces.some(p => p.url === url)) return series.id
  }
  return null
}

function isDesktop() {
  return typeof window !== 'undefined' && window.innerWidth >= DESKTOP_BP
}

export default function SeriesNav() {
  const [open, setOpen] = useState(false) // initialised after mount
  const [desktop, setDesktop] = useState(false)
  const location = useLocation()
  const currentSeriesId = getSeriesForUrl(location.pathname)
  const currentSeries = SERIES.find(s => s.id === currentSeriesId)

  // Set initial open state after mount (avoids SSR mismatch)
  useEffect(() => {
    const d = isDesktop()
    setDesktop(d)
    setOpen(d)
  }, [])

  // Track resize
  useEffect(() => {
    const onResize = () => {
      const d = isDesktop()
      setDesktop(d)
      if (d) setOpen(true)   // auto-open when viewport grows to desktop
      else setOpen(false)    // auto-close when shrinks to mobile
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // On mobile, close on navigation; on desktop, keep open
  useEffect(() => {
    if (!desktop) setOpen(false)
  }, [location.pathname, desktop])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && !desktop) setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [desktop])

  const current = location.pathname

  // On desktop the drawer is persistent (variant="permanent"), not modal
  const drawerVariant = desktop ? 'persistent' : 'temporary'

  return (
    <>
      {/* Toggle button — fixed on mobile, shown only when drawer closed on desktop */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close series navigation' : 'Open series navigation'}
        aria-expanded={open}
        style={{
          position: 'fixed',
          left: open && desktop ? DRAWER_WIDTH : 0,
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
          transition: 'left 0.25s ease, opacity 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = 1}
        onMouseLeave={e => e.currentTarget.style.opacity = 0.85}
      >
        <span style={{ fontSize: '1rem', lineHeight: 1 }}>{open ? '←' : '☰'}</span>
        <span style={{
          fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase',
          fontFamily: 'var(--mono)', writingMode: 'vertical-rl',
          transform: 'rotate(180deg)', opacity: 0.7,
        }}>
          {open ? 'Close' : 'Contents'}
        </span>
      </button>

      {/* Spacer so mobile body text doesn't sit under the fixed button */}
      {!desktop && (
        <div style={{ width: '2.5rem', flexShrink: 0 }} aria-hidden="true" />
      )}

      <Drawer
        variant={drawerVariant}
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: {
          width: DRAWER_WIDTH,
          bgcolor: 'var(--yellow)',
          color: '#000',
          borderRight: '1px solid rgba(0,0,0,0.1)',
          // On desktop it sits in flow; no box shadow needed
          boxShadow: desktop ? 'none' : undefined,
        }}}
        ModalProps={{ keepMounted: true }}
      >
        <Box sx={{
          px: 2.5, pt: 2.5, pb: 1.5,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
        }}>
          <Typography sx={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.6 }}>
            {currentSeries ? currentSeries.label : 'All Series'}
          </Typography>
          {!desktop && (
            <IconButton onClick={() => setOpen(false)} size="small" aria-label="Close" sx={{ color: '#000' }}>
              ✕
            </IconButton>
          )}
        </Box>

        <Box sx={{ px: 1.5, py: 2, overflowY: 'auto', flex: 1 }}>
          {currentSeries && (
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
                          px: 1, py: 0.5, gap: 1, borderRadius: 1, color: '#000',
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
          )}

          <List dense disablePadding>
            {SERIES.map(s => {
              const isCurrent = s.id === currentSeriesId
              return (
                <ListItem key={s.id} disablePadding>
                  <ListItemButton
                    component="a"
                    href={`/${s.id}`}
                    selected={isCurrent}
                    sx={{
                      px: 1, py: 0.6, borderRadius: 1, color: '#000',
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
