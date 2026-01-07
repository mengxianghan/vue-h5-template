import type { App, Plugin } from 'vue'

import * as components from './components'

export * from './components'

export default {
  install: (app: App) => {
    for (const component of Object.values(components)) {
      if (component && typeof component === 'object' && 'install' in component) {
        app.use(component as Plugin)
      }
    }
  },
}
