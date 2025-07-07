import vant from 'vant'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import './permission'
import 'vant/lib/index.css'

export function setupCore(app: any) {
  setupStore(app)
  setupRouter(app)

  app.use(vant)

  return app
}
