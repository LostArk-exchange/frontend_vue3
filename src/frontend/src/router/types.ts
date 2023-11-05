export enum ROUTE_NAMES {
  HOME = 'home',
  MAIN = 'main',
  NOT_FOUNT_404 = 'not found 404',
}

export type RouteMap = {
  [ROUTE_NAMES.MAIN]: {
    query: Partial<{}>
    params: {}
  }
  [ROUTE_NAMES.HOME]: {
    query: Partial<{}>
    params: {}
  }
  [ROUTE_NAMES.NOT_FOUNT_404]: {
    query: Partial<{}>
    params: {}
  }
}
