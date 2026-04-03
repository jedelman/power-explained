import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    // Copy static HTML files alongside the React app for unconverted pages
    assetsDir: 'assets',
  },
  // During migration, serve static HTML files in dev too
  server: {
    fs: { allow: ['..'] }
  }
})
