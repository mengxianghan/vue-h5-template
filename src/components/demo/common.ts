import type { App } from 'vue'

export interface DemoApiType {
  (): void
  open: (options: { name: string }) => void
  install: (app: App) => void
}

export interface DemoProps {}

export const defaultDemoProps = {}
