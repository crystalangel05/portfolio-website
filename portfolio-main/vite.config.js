import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Relative base so the site works locally and on GitHub Pages
// (for example: https://crystalangel05.github.io/crystalangel-portfolio/)
export default defineConfig({
  plugins: [react()],
  base: './',
})
