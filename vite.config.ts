import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    }
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: Number(process.env.VITE_PORT) || 3000,
  },
  preview: {
    port: Number(process.env.VITE_PORT) || 3000,
    host: true,
    strictPort: true,
  }
})
