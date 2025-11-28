import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    tanstackStart(),
    viteReact(),
  ],
  resolve: {
    alias: {
      '@crm/ui': path.resolve(__dirname, '../../packages/ui/src'),
      '@crm/ui/styles': path.resolve(__dirname, '../../packages/ui/src/styles.css'),
      '@crm/utils': path.resolve(__dirname, '../../packages/utils/src'),
      '@crm/types': path.resolve(__dirname, '../../packages/types/src'),
      '@crm/config': path.resolve(__dirname, '../../packages/config/src'),
      '@crm/db': path.resolve(__dirname, '../../packages/db/src'),
      '@crm/api': path.resolve(__dirname, '../../lib'),
    },
  },
  css: {
    devSourcemap: true,
    postcss: './postcss.config.js',
  },
  server: {
    fs: {
      allow: ['../../'],
    },
    hmr: {
      overlay: true,
    },
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
  build: {
    sourcemap: true,
  },
  define: {
    global: 'globalThis',
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@tanstack/react-router', 'tailwindcss'],
    force: true,
    exclude: ['@crm/ui'],
  },
  clearScreen: false,
})