import type { FieldRule, FormInstance } from 'vant'
import { ref } from 'vue'
import { useResettableRef } from './use-resettable-ref'

interface UseFormOptions<D, R> {
  formData: D
  formRecord?: R
  formRules?: Record<string, FieldRule[]>
}

export function useForm<
  D extends Record<string, any>,
  R extends Record<string, any> = Record<string, any>,
>(options: UseFormOptions<D, R>) {
  const [formData, resetFormData] = useResettableRef<D>(options.formData)
  const [formRecord, resetFormRecord] = useResettableRef<R | null>(options?.formRecord || null)
  const formRules = ref<Record<string, FieldRule[]> | null>(options?.formRules || null)
  const formLoading = ref(false)
  const formRef = ref<FormInstance>()

  function showFormLoading() {
    formLoading.value = true
  }

  function hideFormLoading() {
    formLoading.value = false
  }

  function resetForm() {
    resetFormData()
    resetFormRecord()
    formRef.value?.resetValidation()
  }

  return {
    formRecord,
    formData,
    formRules,
    formLoading,
    formRef,
    showFormLoading,
    hideFormLoading,
    resetForm,
  }
}
