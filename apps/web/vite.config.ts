import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import path from 'path'

const __dirname = path.dirname(new URL(import.meta.url).pathname)
import { fileURLToPath } from 'url'

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: 'react',
    }), 
    TanStackRouterVite()
  ],
  resolve: {
    alias: {
      '@crm/ui': path.resolve(__dirname, '../../packages/ui/src'),
      '@crm/utils': path.resolve(__dirname, '../../packages/utils/src'),
      '@crm/types': path.resolve(__dirname, '../../packages/types/src'),
      '@crm/config': path.resolve(__dirname, '../../packages/config/src'),
      '@crm/db': path.resolve(__dirname, '../../packages/db/src'),
    },
  },
  css: {
    devSourcemap: true,
  },
  server: {
    fs: {
      allow: ['../../'],
    },
    hmr: {
      overlay: true,
      port: 24678,
    },
    watch: {
      usePolling: true,
      interval: 50,
    },
  },
  build: {
    sourcemap: true,
  },
  define: {
    global: 'globalThis',
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@tanstack/react-router', '@crm/ui'],
    force: true,
  },
  clearScreen: false,
})