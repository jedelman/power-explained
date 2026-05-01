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
    tag: 'Series I',
    title: 'The Basic Architecture',
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
    tag: 'Series II',
    title: 'The Hidden Engine',
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

  return (
    <>
      {/* Toggle tab — fixed left edge */}
      <Box
        onClick={() => setOpen(true)}
        sx={{
          position: 'fixed',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1200,
          cursor: 'pointer',
          bgcolor: 'rgba(20,18,14,0.92)',
          color: 'rgba(240,235,220,0.8)',
          px: 0.75,
          py: 1.5,
          borderRadius: '0 4px 4px 0',
          border: '1px solid rgba(240,235,220,0.12)',
          borderLeft: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.75,
          '&:hover': { color: 'rgba(240,235,220,1)' },
        }}
        role="button"
        aria-label="Open series navigation"
      >
        <Typography sx={{ fontSize: '1rem', lineHeight: 1 }}>☰</Typography>
        <Typography
          sx={{
            fontSize: '0.6rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            opacity: 0.6,
          }}
        >
          Contents
        </Typography>
      </Box>

      {/* MUI Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 300,
            bgcolor: 'rgba(16,13,10,0.97)',
            color: 'rgba(240,235,220,0.85)',
            borderRight: '1px solid rgba(240,235,220,0.1)',
          }
        }}
      >
        <Box sx={{ px: 2.5, pt: 2.5, pb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.4 }}>
            All Pieces
          </Typography>
          <IconButton
            onClick={() => setOpen(false)}
            size="small"
            sx={{ color: 'rgba(240,235,220,0.5)', '&:hover': { color: 'rgba(240,235,220,1)' } }}
            aria-label="Close navigation"
          >
            ✕
          </IconButton>
        </Box>

        {SERIES.map((s, si) => (
          <Box key={s.id} sx={{ px: 2, pb: 1 }}>
            {si > 0 && <Divider sx={{ borderColor: 'rgba(240,235,220,0.08)', mb: 2 }} />}
            <Typography sx={{ fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.4, mb: 1 }}>
              {s.tag} — {s.title}
            </Typography>
            <List dense disablePadding>
              {s.pieces.map(piece => {
                const current = location.pathname === piece.url
                return (
                  <ListItem key={piece.url} disablePadding>
                    <ListItemButton
                      component="a"
                      href={piece.url}
                      selected={current}
                      sx={{
                        borderRadius: 1,
                        px: 1,
                        py: 0.5,
                        color: current ? 'rgba(240,235,220,1)' : 'rgba(240,235,220,0.65)',
                        '&.Mui-selected': { bgcolor: 'rgba(240,235,220,0.08)' },
                        '&:hover': { bgcolor: 'rgba(240,235,220,0.06)', color: 'rgba(240,235,220,1)' },
                      }}
                    >
                      <Typography
                        component="span"
                        sx={{ fontSize: '0.7rem', fontWeight: 700, opacity: 0.35, minWidth: '2rem', mr: 1 }}
                      >
                        {piece.num}
                      </Typography>
                      <ListItemText
                        primary={piece.title}
                        primaryTypographyProps={{ fontSize: '0.85rem', lineHeight: 1.4 }}
                      />
                    </ListItemButton>
                  </ListItem>
                )
              })}
            </List>
          </Box>
        ))}
      </Drawer>
    </>
  )
}
