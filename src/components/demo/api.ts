import type { App } from 'vue'
import type { DemoApiType } from './common'

let instance: App | null = null

const DemoApi: DemoApiType = function () {} as DemoApiType

DemoApi.open = function (options) {
  // eslint-disable-next-line no-console
  console.log('DemoApi.open', options, instance)
}

DemoApi.install = function (app: App) {
  // eslint-disable-next-line no-console
  console.log('DemoApi.install', app)
  instance = app
  return app
}

export { DemoApi }
