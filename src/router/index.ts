/* eslint-disable */
import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'
export const Login = () => import('@/components/login.vue')
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: Login
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes as RouteRecordRaw[]
})

export default router
