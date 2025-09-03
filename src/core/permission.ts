import { config } from '@/configs'
import { router } from '@/router'

router.beforeEach((to, _, next) => {
  document.title = to.meta?.title ?? config.get('app.title')
  next()
})
