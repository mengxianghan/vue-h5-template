import Http from 'xy-http'
import { config } from '@/configs'

const options = {}

export const base = new Http({
  ...options,
  baseURL: config.get('http.api.base'),
})
