import { RouteRecordRaw } from 'vue-router'
import Main from '.'
import { ROUTE_NAMES } from '../../router/types'

export default {
  path: '/main',
  name: ROUTE_NAMES.MAIN,
  component: Main,
  children: [],
  beforeEnter: [],
} as RouteRecordRaw
