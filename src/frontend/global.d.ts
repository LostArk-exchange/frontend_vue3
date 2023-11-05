// typescript intellisense
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production'
    API_BASE_URL: string
    HERE_TEST: string
  }
}
