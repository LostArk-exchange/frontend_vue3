import { APISpec } from './type'

export const makeAPI = <S extends APISpec>(
  method: S['method'],
  apiName: S['baseURL'],
  path: S['path'],
) => {
  const baseURL = process.env.API_BASE_URL
  const url = `${baseURL}${apiName}${path}`
  const options:RequestInit = { method, headers: {} }
  return (body: S['body']): Promise<S['response']> => {
    if (method === 'POST') {
      options.body = JSON.stringify(body)
      options.headers = {
        ...options.headers,
        'Content-Type': 'application/json',
      }
    }
    return fetch(url, options).then(res => res.json())
  }
}
