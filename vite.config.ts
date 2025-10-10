import type { ComponentResolver } from 'unplugin-vue-components'
import path from 'node:path'
import process from 'node:process'
import url from 'node:url'
import { VantResolver } from '@vant/auto-import-resolver'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import AutoImport from 'unplugin-auto-import/vite'
import { kebabCase } from 'unplugin-vue-components'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function CustomComponentResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (componentName: string) => {
      if (componentName.startsWith('X')) {
        const filename = componentName.slice(1)
        return {
          as: componentName,
          name: filename,
          from: `@/components/${kebabCase(filename)}/index`,
        }
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      AutoImport({
        dts: 'src/types/auto-imports.d.ts',
        resolvers: [VantResolver()],
      }),
      Components({
        dirs: [],
        dts: 'src/types/components.d.ts',
        resolvers: [
          VantResolver(),
          CustomComponentResolver(),
        ],
      }),
      process.env.npm_lifecycle_event === 'report' && visualizer({
        filename: './node_modules/.cache/visualizer/stats.html',
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
    ],
    server: {
      host: '0.0.0.0',
      proxy: {
        '/api_base': {
          target: '/',
          changeOrigin: true,
          rewrite: (path: string) => path.replace('/api_base', ''),
        },
      },
    },
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
