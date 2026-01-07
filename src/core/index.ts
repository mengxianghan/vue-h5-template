import components from '@/components'
import { config } from '@/configs'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import './permission'

if (config.get('app.enableDevTools')) {
  import('eruda').then((eruda) => {
    eruda.init()
  })
}

export function setupCore(app: any) {
  setupStore(app)
  setupRouter(app)

  app.use(components)

  return app
}
