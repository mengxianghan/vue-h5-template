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
import Layouts from 'vite-plugin-vue-layouts-next'
import { getPascalCaseRouteName, VueRouterAutoImports } from 'vue-router/unplugin'
import VueRouter from 'vue-router/vite'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function CustomComponentResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (componentName: string) => {
      if (componentName.startsWith('X')) {
        const isApi = componentName.endsWith('Api')
        const name = componentName.slice(1)
        const apiName = componentName.slice(1, -3)

        return {
          name,
          as: componentName,
          from: `@/components/${kebabCase(isApi ? apiName : name)}`,
        }
      }
    },
  }
}

function CustomDirectiveResolver(): ComponentResolver {
  return {
    type: 'directive',
    resolve: (directiveName: string) => {
      return {
        name: `v${directiveName}`,
        as: `v${directiveName}`,
        from: `@/directives/${kebabCase(directiveName)}`,
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      VueRouter({
        dts: 'src/types/vue-router.d.ts',
        exclude: ['**/components/**'],
        getRouteName: node => getPascalCaseRouteName(node),
      }),
      Layouts({
        layoutsDirs: 'src/layouts',
        defaultLayout: 'default',
        pagesDirs: 'src/pages',
      }),
      vue(),
      AutoImport({
        dts: 'src/types/auto-imports.d.ts',
        dirs: ['src/composables'],
        resolvers: [
          VantResolver(),
          CustomComponentResolver(),
        ],
        imports: [
          'vue',
          'pinia',
          VueRouterAutoImports,
        ],
      }),
      Components({
        directives: true,
        dts: 'src/types/auto-components.d.ts',
        resolvers: [
          VantResolver({
            importStyle: false,
          }),
          CustomComponentResolver(),
          CustomDirectiveResolver(),
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
        '/api_basic': {
          target: '/',
          changeOrigin: true,
          rewrite: (path: string) => path.replace('/api_basic', ''),
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
    },
  }
})
