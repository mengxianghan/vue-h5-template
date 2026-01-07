import { createConfig } from 'xy-config'

export const config = createConfig({
  app: {
    title: import.meta.env.VITE_APP_TITLE,
    enableDevTools: import.meta.env.VITE_APP_ENABLE_DEV_TOOLS === 'true',
  },
  code: {
    ignore: [200],
  },
  url: {
    apiBasic: import.meta.env.VITE_URL_API_BASIC,
  },
})
