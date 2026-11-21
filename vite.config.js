import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'

// Genera /privacidad/ y /terminos/ como archivos reales para hostings estáticos sin fallback SPA
const legalPages = () => ({
  name: 'legal-pages',
  closeBundle() {
    const dist = path.resolve(__dirname, 'dist')
    const html = fs.readFileSync(path.join(dist, 'index.html'))
    for (const dir of ['privacidad', 'terminos']) {
      fs.mkdirSync(path.join(dist, dir), { recursive: true })
      fs.writeFileSync(path.join(dist, dir, 'index.html'), html)
      fs.writeFileSync(path.join(dist, dir + '.html'), html)
    }
    fs.writeFileSync(path.join(dist, '404.html'), html)
  },
})

export default defineConfig({
  plugins: [react(), tailwindcss(), legalPages()],
  preview: { host: true, allowedHosts: true, port: Number(process.env.PORT) || 3000 },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
