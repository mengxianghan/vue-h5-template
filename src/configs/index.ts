import { createConfig } from 'xy-config'

export const config = createConfig({
  app: {
    title: import.meta.env.VITE_APP_TITLE,
    debug: import.meta.env.VITE_APP_DEBUG === 'true',
  },
  code: {
    ignore: [200],
  },
  url: {
    apiBasic: import.meta.env.VITE_URL_API_BASIC,
  },
})
