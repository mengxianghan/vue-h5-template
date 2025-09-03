import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    complete: false,
  }),

  actions: {
    init() {
      return new Promise((resolve) => {
        ;(async () => {
          this.complete = true

          resolve(true)
        })()
      })
    },
  },
})
