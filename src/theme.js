import { createTheme } from '@mui/material/styles'

// Wire MUI to the site's CSS custom property token system
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'var(--paper)',
      paper: 'var(--ink)',
    },
    text: {
      primary: 'var(--ink)',
      secondary: 'rgba(var(--ink-rgb),0.6)',
    },
    primary: {
      main: 'var(--red)',
    },
  },
  typography: {
    fontFamily: 'var(--body)',
    allVariants: {
      color: 'var(--ink)',
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: 'var(--paper)',
          color: 'var(--ink)',
          borderRight: '1px solid var(--rule)',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: '3px',
          '&:hover': {
            backgroundColor: 'rgba(var(--ink-rgb),0.06)',
          },
          '&.Mui-selected': {
            backgroundColor: 'rgba(var(--ink-rgb),0.1)',
            '&:hover': {
              backgroundColor: 'rgba(var(--ink-rgb),0.12)',
            },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: 'rgba(var(--ink-rgb),0.45)',
          '&:hover': {
            backgroundColor: 'rgba(var(--ink-rgb),0.06)',
            color: 'var(--ink)',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'var(--rule)',
        },
      },
    },
  },
})

export default theme
