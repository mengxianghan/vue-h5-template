export type { DemoApiType, DemoProps } from './common'
export { DemoApi } from './demo'
export { default as Demo } from './demo.vue'
export type DemoInstanceType = InstanceType<typeof import('./demo.vue')['default']>
