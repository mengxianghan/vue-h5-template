import Storage from 'xy-storage'
import { config } from '@/configs'

const options = {
  namespace: config.get('storage.namespace'),
  attrs: {
    domain: config.get('storage.domain'),
  },
}

export const localStorage = new Storage({
  ...options,
  name: 'local',
})

export const sessionStorage = new Storage({
  ...options,
  name: 'session',
})

export const cookie = new Storage({
  ...options,
  name: 'cookie',
})
