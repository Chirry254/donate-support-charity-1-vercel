import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',        // 👈 ensures Vite builds here
    emptyOutDir: true,
    sourcemap: false
  },
  publicDir: 'public',
  base: './'
})
