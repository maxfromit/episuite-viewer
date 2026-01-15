import type { SubmitResponse } from '../types/episuite-api'

export const useEpiSuiteApi = (cas: string) => {
  const { data, pending, error } = useFetch<SubmitResponse>(
    'https://episuite.dev/EpiWebSuite/api/submit',
    {
      query: { cas },
      lazy: true,
      server: false
    }
  )

  return { data, pending, error }
}
