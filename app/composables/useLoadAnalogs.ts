import type { SubmitResponse } from '../types/episuite-api'

export const useLoadAnalogs = (
  casArray: string[],
  analogs: Ref<SubmitResponse[]>,
  loading: Ref<boolean>
) => {
  loading.value = true

  const errors = ref<Array<{ cas: string; error: any }>>([])

  casArray.forEach((cas) => {
    const { data, pending, error } = useEpiSuiteApi(cas)

    const processResult = () => {
      if (error.value) {
        errors.value.push({ cas, error: error.value })
      }
      if (data.value) {
        analogs.value.push(data.value)
      }

      if (analogs.value.length + errors.value.length === casArray.length) {
        loading.value = false
      }
    }

    if (!pending.value) {
      processResult()
      return
    }

    watch(
      pending,
      () => {
        processResult()
      },
      {
        once: true
      }
    )
  })
}
