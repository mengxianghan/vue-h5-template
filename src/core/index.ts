import VConsole from 'vconsole'
import components from '@/components'
import { config } from '@/configs'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import './permission'

if (config.get('app.debug')) {
  new VConsole()
}

export function setupCore(app: any) {
  setupStore(app)
  setupRouter(app)

  app.use(components)

  return app
}
