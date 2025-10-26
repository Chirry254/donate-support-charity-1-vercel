import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',        // ✅ ensures output folder is "dist"
    emptyOutDir: true
  },
  publicDir: 'public',
  base: './'
})
