import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
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
