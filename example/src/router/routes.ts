import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    component: () => import('../pages/index.vue'),
    path: '/'
  }
]

export default routes
