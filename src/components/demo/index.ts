export { DemoApi } from './api'
export type { DemoApiType, DemoProps } from './common'
export { default as Demo } from './demo.vue'
export type DemoInstanceType = InstanceType<typeof import('./demo.vue')['default']>
