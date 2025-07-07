import { get, includes, isEqual } from 'lodash-es'

class Config {
  #configs: Record<string, any> = {}

  constructor() {
    const modules = import.meta.glob('./*.ts', { eager: true })

    Object.keys(modules).forEach((key) => {
      const name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
      const module = modules[key] as any

      if (name !== 'index') {
        this.#configs[name] = 'default' in module ? module.default : {}
      }
    })
  }

  get(key: any, defaultValue?: unknown) {
    return get(this.#configs, key, defaultValue)
  }

  isEqual(key: any, value: any) {
    return isEqual(this.get(key), value)
  }

  includes(key: any, value: any) {
    return includes(this.get(key), value)
  }
}

export const config = new Config()
