import path from 'node:path'
import url from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { devToolsPlugin } from './config/dev-tools-plugin.ts'
import { server } from './config/server.ts'
import { visualizerPlugin } from './config/visualizer-plugin'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      devToolsPlugin(),
      visualizerPlugin(),
    ],
    server,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    build: {
      chunkSizeWarningLimit: 1000,
      sourcemap: mode === 'development',
      rollupOptions: {
        output: {
          manualChunks: {
            eruda: ['eruda'],
          },
        },
      },
    },
  }
})
