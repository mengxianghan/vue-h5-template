import vant from 'vant'
import { config } from '@/configs'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import './permission'
import 'vant/lib/index.css'

if (config.get('app.enableDevTools')) {
  import('eruda').then((eruda) => {
    eruda.init()
  })
}

export function setupCore(app: any) {
  setupStore(app)
  setupRouter(app)

  app.use(vant)

  return app
}
