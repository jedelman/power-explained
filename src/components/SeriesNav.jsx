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

export default function SeriesNav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

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
          background: 'var(--ink)',
          color: 'var(--paper)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderLeft: 'none',
          borderRadius: '0 4px 4px 0',
          padding: '0.85rem 0.55rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0.75,
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = 1}
        onMouseLeave={e => e.currentTarget.style.opacity = 0.75}
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
        PaperProps={{ sx: { width: 300, bgcolor: 'var(--ink)', color: 'var(--paper)' } }}
      >
        <Box sx={{
          px: 2.5, pt: 2.5, pb: 1.5,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}>
          <Typography sx={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.4 }}>
            All Pieces
          </Typography>
          <IconButton onClick={() => setOpen(false)} size="small" aria-label="Close" sx={{ color: 'rgba(255,255,255,0.5)' }}>
            ✕
          </IconButton>
        </Box>

        <Box sx={{ px: 1.5, py: 2, overflowY: 'auto', flex: 1 }}>
          {SERIES.map((s, i) => (
            <Box key={s.id} sx={{ mb: 2 }}>
              {i > 0 && <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mb: 2 }} />}
              <Typography sx={{
                fontFamily: 'var(--mono)', fontSize: '0.6rem',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                opacity: 0.4, px: 1, mb: 0.75,
              }}>
                {s.label}
              </Typography>
              <List dense disablePadding>
                {s.pieces.map(piece => {
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
                          color: isCurrent ? 'var(--paper)' : 'rgba(255,255,255,0.65)',
                          '&.Mui-selected': { bgcolor: 'rgba(255,255,255,0.08)' },
                          '&:hover': { bgcolor: 'rgba(255,255,255,0.06)', color: 'var(--paper)' },
                        }}
                      >
                        <Typography sx={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', fontWeight: 700, opacity: 0.35, minWidth: '1.75rem', flexShrink: 0 }}>
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
            </Box>
          ))}
        </Box>
      </Drawer>
    </>
  )
}
