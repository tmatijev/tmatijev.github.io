import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'framer-motion'],
          'home': ['./src/sections/Home.tsx'],
          'portfolio': ['./src/sections/Portfolio.tsx'],
          'services': ['./src/sections/WhatCanIDo.tsx'],
          'projects': ['./src/sections/Projects.tsx'],
          'contact': ['./src/sections/Contact.tsx']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true
      }
    }
  }
})