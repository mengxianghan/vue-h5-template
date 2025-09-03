import { defineStore } from 'pinia'

interface Store {
  complete: boolean
}

export const useAppStore = defineStore('app', {
  state: (): Store => ({
    complete: false,
  }),

  actions: {
    init() {
      return new Promise((resolve) => {
        if (this.complete) {
          resolve(true)
        }

        ;(async () => {
          this.complete = true

          resolve(true)
        })()
      })
    },
  },
})
