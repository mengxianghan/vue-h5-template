import type { App } from 'vue'
import { createPinia } from 'pinia'

export * from './app'

export const store = createPinia()

export function setupStore(app: App) {
  app.use(store)

  return app
}
