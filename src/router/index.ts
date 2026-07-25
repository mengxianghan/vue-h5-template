import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'
import { APP_TITLE } from '@/constants'
import { useAppStore } from '@/store'
import { setNavigationBarTitle } from '@/utils'

routes.push({
  path: '/',
  redirect: '/home',
})

export const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(routes),
})

if (import.meta.hot) {
  handleHotUpdate(router)
}

router.beforeEach(async (to) => {
  setNavigationBarTitle(to.meta?.title ?? APP_TITLE)

  const appStore = useAppStore()
  await appStore.init()

  return true
})
