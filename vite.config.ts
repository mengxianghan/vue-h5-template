import path from 'node:path'
import url from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default () => {
  return defineConfig({
    plugins: [vue()],
    server: {
      host: '0.0.0.0',
      proxy: {
        '/api_base': {
          target: '/',
          changeOrigin: true,
          rewrite: path => path.replace('/api_base', ''),
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  })
}
