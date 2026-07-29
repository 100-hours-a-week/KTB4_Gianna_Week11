import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/users': {
        target : 'http://localhost:8080',
        changeOrigin: true,
        },
      '/posts': 'http://localhost:8080',
      '/login-process': 'http://localhost:8080',
      '/logout': 'http://localhost:8080',
      '/csrf': 'http://localhost:8080',
    },
  },
})