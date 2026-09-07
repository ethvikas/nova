import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// host:true + allowedHosts lets the dev/preview server run behind any proxy or tunnel.
export default defineConfig({
  plugins: [react()],
  server: { host: true, allowedHosts: true },
  preview: { host: true, allowedHosts: true }
})
