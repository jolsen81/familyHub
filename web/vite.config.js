import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      '/api': {
        target: 'http://svc:8080',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
        onError(err, req, res) {
          console.error('Proxy error:', err)
          res.writeHead(500, { 'Content-Type': 'text/plain' })
          res.end('Proxy error occurred')
        },
      }
    }
  }
})
