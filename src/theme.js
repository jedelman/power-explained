import { createTheme } from '@mui/material/styles'

// MUI theme — use real color values (CSS vars can't be resolved at theme creation time)
// The site's actual design tokens live in style.css / global.css
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#c0392b' },       // matches --red
    background: { default: '#f5f0e8', paper: '#1a1410' }, // --paper / --ink
    text: { primary: '#1a1410', secondary: '#6b5f52' },
  },
  typography: {
    // Let the site's CSS handle fonts — don't override here
    fontFamily: 'inherit',
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: 'var(--ink)',
          color: 'var(--paper)',
          borderRight: '1px solid rgba(255,255,255,0.1)',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: '3px',
          '&:hover': { backgroundColor: 'rgba(255,255,255,0.06)' },
          '&.Mui-selected': { backgroundColor: 'rgba(255,255,255,0.08)' },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: { color: 'rgba(255,255,255,0.5)', '&:hover': { color: '#fff' } },
      },
    },
    MuiDivider: {
      styleOverrides: { root: { borderColor: 'rgba(255,255,255,0.08)' } },
    },
    MuiCssBaseline: {
      styleOverrides: {
        // Don't let MUI reset override our CSS
        body: { backgroundColor: 'unset', color: 'unset' },
      },
    },
  },
})

export default theme
