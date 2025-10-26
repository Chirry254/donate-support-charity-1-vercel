import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Explicitly tell Vite to build into /dist
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',      // output folder
    emptyOutDir: true,   // clear old files first
    sourcemap: false
  },
  publicDir: 'public',   // static files
  base: './'
})
