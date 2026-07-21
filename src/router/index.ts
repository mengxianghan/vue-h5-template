import { createRouter, createWebHistory } from 'vue-router'
import { APP_TITLE } from '@/constants'
import { useAppStore } from '@/store'
import { setNavigationBarTitle } from '@/utils'
import routes from './routes'

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to) => {
  setNavigationBarTitle(to.meta?.title ?? APP_TITLE)

  const appStore = useAppStore()
  await appStore.init()

  return true
})
