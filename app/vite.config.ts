import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// O app é publicado em https://memorias-solutudo.github.io/ads/
// por isso o base precisa ser '/ads/'.
export default defineConfig({
  base: '/ads/',
  plugins: [react()],
})
