import { RouteRecordRaw } from 'vue-router'
import { ROUTE_NAMES } from '../../router/types'
import Main from '.'

export default {
  path: '/main',
  name: ROUTE_NAMES.MAIN,
  component: Main,
  children: [],
  beforeEnter: [],
} as RouteRecordRaw
