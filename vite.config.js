import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      // pagefind is a runtime artifact generated post-build, not a bundled dep
      external: ['/pagefind/pagefind.js'],
    },
  },
  server: {
    fs: { allow: ['..'] }
  }
})
