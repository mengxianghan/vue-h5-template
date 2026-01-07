import { createCookie, createLocalStorage, createSessionStorage } from 'xy-storage'
import { STORAGE_DOMAIN, STORAGE_NAMESPACE } from '@/constants'

const options = {
  namespace: STORAGE_NAMESPACE,
}

export const localStorage = createLocalStorage({
  ...options,
})

export const sessionStorage = createSessionStorage({
  ...options,
})

export const cookie = createCookie({
  ...options,
  attrs: {
    domain: STORAGE_DOMAIN,
  },
})
