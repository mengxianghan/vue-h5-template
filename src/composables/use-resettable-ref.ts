import { cloneDeep } from 'lodash-es'
import { ref } from 'vue'

export function useResettableRef<T>(value: T) {
  const initialValue = cloneDeep(value)

  const state = ref(value)

  function reset() {
    state.value = cloneDeep(initialValue)
  }

  return [state, reset] as const
}
