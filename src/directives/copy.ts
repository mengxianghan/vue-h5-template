import type { Directive } from 'vue'
import { useClipboard } from '@vueuse/core'

export type CopyDirective = Directive<HTMLElement, string>

const handlers = new WeakMap<HTMLElement, {
  value: string
  handler: () => Promise<void> | void
}>()

const { copy } = useClipboard({
  legacy: true,
})

export const vCopy = {
  mounted(el: HTMLElement, binding) {
    const state = {
      value: binding.value,
      handler: async () => {
        await copy(state.value)
        showSuccessToast('复制成功')
      },
    }
    handlers.set(el, state)
    el.addEventListener('click', state.handler)
  },
  updated(el: HTMLElement, binding) {
    const state = handlers.get(el)
    if (!state) {
      return
    }
    state.value = binding.value
  },
  beforeUnmount(el) {
    const state = handlers.get(el)
    if (!state) {
      return
    }
    el.removeEventListener('click', state.handler)
    handlers.delete(el)
  },
} satisfies CopyDirective
