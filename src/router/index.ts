import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export function setupRouter(app: any) {
  app.use(router)
  return app
}
