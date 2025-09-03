import { config } from '@/configs'
import { router } from '@/router'
import { useAppStore } from '@/store'
import { setNavigationBarTitle } from '@/utils'

router.beforeEach(async (to, _, next) => {
  setNavigationBarTitle(to.meta?.title ?? config.get('app.title'))

  const appStore = useAppStore()

  await appStore.init()

  next()
})
