import type { Ref } from 'vue'
import { reactive, ref } from 'vue'

interface PaginationOptions {
  searchFormData?: Record<string, unknown>
  loadingText?: string
  finishedText?: string
  errorText?: string
}

export function usePagination<T>(options?: PaginationOptions) {
  const loading = ref(false)
  const loadingText = ref(options?.loadingText || '加载中...')
  const finished = ref(false)
  const finishedText = ref(options?.finishedText || '没有更多了')
  const error = ref(false)
  const errorText = ref(options?.errorText || '加载失败，点击重新加载')
  const listData: Ref<T[]> = ref([])
  const searchFormData = ref<Record<string, any>>(options?.searchFormData || {})
  const pagination = reactive({
    current: 1,
    pageSize: 10,
    total: 0,
  })

  function setListData(value: T[]) {
    if (pagination.current === 1) {
      listData.value = value
    }
    else {
      listData.value.push(...value)
    }
  }

  function resetPagination() {
    pagination.current = 1
    pagination.pageSize = 10
    pagination.total = 1
  }

  function loadStart() {
    error.value = false
    finished.value = false
    loading.value = true
  }

  function loadEnd() {
    loading.value = false
  }

  function loadFinished() {
    loading.value = false
    error.value = false
    finished.value = true
  }

  function loadError() {
    loading.value = false
    finished.value = false
    error.value = true
  }

  return {
    listData,
    pagination,
    setListData,
    resetPagination,
    loading,
    finished,
    error,
    loadStart,
    loadEnd,
    loadFinished,
    loadError,
    searchFormData,
    loadingText,
    finishedText,
    errorText,
  }
}
