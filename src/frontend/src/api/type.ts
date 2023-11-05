export type APIResponse<T = any> =
  | {
      success: false
      /** success 가 false 일때 전달되는 error message */
      message: string
    }
  | {
      success: true
      data: T
    }

export type APISpec<BU=any, P=any, B=any, T=any> = {
  method: 'GET' | 'POST'
  baseURL: BU
  path: P
  body: B
  response: APIResponse<T>
}

export type APISpecs<
  T extends {
    [K in string]: APISpec
  }
> = T
