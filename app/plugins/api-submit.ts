import type { paths } from '../types/episuite-api'

type SubmitResponse =
  paths['/api/submit']['get']['responses']['200']['content']['application/json']

export default defineNuxtPlugin(() => {
  const apiSubmit = $fetch.create<SubmitResponse>({
    baseURL: 'https://episuite.dev/EpiWebSuite/api/submit',
    responseType: 'json'
  })

  return {
    provide: {
      apiSubmit
    }
  }
})
