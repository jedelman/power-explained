import { defineConfig } from 'astro/config'

export default defineConfig({
  output: 'static',
  site: 'https://power-explained.jason-edelman.org',
  build: {
    format: 'directory',   // /slug/index.html → clean URLs on CF Pages
  },
  vite: {
    ssr: {
      // Shoelace is CDN-loaded, not bundled
      noExternal: [],
    }
  }
})
