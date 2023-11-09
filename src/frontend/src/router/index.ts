import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import MainRoute from '../views/main/router'

const routes: RouteRecordRaw[] = [
  MainRoute,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({
    top: 0,
  }),
})

export default router
