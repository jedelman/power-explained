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

const SERIES = [
  {
    id: 'series-i',
    label: 'Series I — The Basic Architecture',
    pieces: [
      { num: '01', title: "Why Your City Doesn't Work", url: '/why-your-city-doesnt-work' },
      { num: '02', title: 'Your City Knows Less', url: '/your-city-knows-less' },
      { num: '03', title: 'Who Gets Paid', url: '/who-gets-paid' },
      { num: '04', title: 'Two Ways to Fix a Pothole', url: '/two-ways-to-fix-a-pothole' },
      { num: '05', title: "Open Data Isn't Enough", url: '/open-data-isnt-enough' },
      { num: '06', title: 'How Linux Became the Internet', url: '/how-linux-became-the-internet' },
      { num: '07', title: "Mutual Aid Isn't Charity", url: '/mutual-aid-isnt-charity' },
    ]
  },
  {
    id: 'series-ii',
    label: 'Series II — The Hidden Engine',
    pieces: [
      { num: '08', title: 'The Outside Capital Needs', url: '/the-outside-capital-needs' },
      { num: '09', title: 'Who Pays for the Next Shift', url: '/who-pays-for-the-next-shift' },
      { num: '10', title: 'The Other and the Outside', url: '/the-other-and-the-outside' },
      { num: '11', title: 'Which Women', url: '/which-women' },
      { num: '12', title: 'Falling Through the Gap', url: '/falling-through-the-gap' },
      { num: '13', title: 'What They Burned', url: '/what-they-burned' },
      { num: '14', title: 'What We Do on Monday', url: '/what-we-do-on-monday' },
    ]
  }
]

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
      {/* Tab trigger — fixed left edge */}
      <Box
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => e.key === 'Enter' && setOpen(true)}
        aria-label="Open series navigation"
        aria-expanded={open}
        sx={{
          position: 'fixed',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1200,
          cursor: 'pointer',
          bgcolor: 'var(--ink)',
          color: 'var(--paper)',
          px: 0.75,
          py: 1.5,
          borderRadius: '0 4px 4px 0',
          border: '1px solid var(--rule-strong)',
          borderLeft: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.75,
          opacity: 0.7,
          transition: 'opacity 0.2s',
          '&:hover, &:focus-visible': {
            opacity: 1,
            outline: '2px solid var(--red)',
            outlineOffset: '2px',
          },
        }}
      >
        <Typography sx={{ fontSize: '1rem', lineHeight: 1, fontFamily: 'var(--mono)' }}>☰</Typography>
        <Typography sx={{
          fontSize: '0.55rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          fontFamily: 'var(--mono)',
          opacity: 0.7,
        }}>
          Contents
        </Typography>
      </Box>

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { width: 300 } }}
      >
        {/* Header */}
        <Box sx={{
          px: 2.5, pt: 2.5, pb: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid var(--rule)',
        }}>
          <Typography sx={{
            fontFamily: 'var(--mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(var(--ink-rgb),0.45)',
          }}>
            All Pieces
          </Typography>
          <IconButton
            onClick={() => setOpen(false)}
            size="small"
            aria-label="Close navigation"
          >
            ✕
          </IconButton>
        </Box>

        {/* Series list */}
        <Box sx={{ px: 1.5, py: 2, overflowY: 'auto' }}>
          {SERIES.map((s, i) => (
            <Box key={s.id} sx={{ mb: 2 }}>
              {i > 0 && <Divider sx={{ mb: 2 }} />}
              <Typography sx={{
                fontFamily: 'var(--mono)',
                fontSize: '0.6rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(var(--ink-rgb),0.4)',
                px: 1,
                mb: 0.75,
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
                        sx={{ px: 1, py: 0.5, gap: 1 }}
                      >
                        <Typography sx={{
                          fontFamily: 'var(--mono)',
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          color: 'rgba(var(--ink-rgb),0.3)',
                          minWidth: '1.75rem',
                          flexShrink: 0,
                        }}>
                          {piece.num}
                        </Typography>
                        <ListItemText
                          primary={piece.title}
                          primaryTypographyProps={{
                            fontFamily: 'var(--body)',
                            fontSize: '0.875rem',
                            lineHeight: 1.4,
                          }}
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
