import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Configure the base path for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-website/',
})