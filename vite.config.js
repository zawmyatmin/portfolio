import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/partfolio/' : '/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': '/src' // Adjust this path if necessary
    }
  }
})
