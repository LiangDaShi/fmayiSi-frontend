import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const constantRoutes = [
  {
    path: '/',
    name: 'index',
    meta: {
      title: '首页'
    },
    component: () => import('@/components/HelloWorld')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/index/login')
  },
  {
    path: '/ura',
    name: 'ura',
    meta: {
      title: '注册协议'
    },
    component: () => import('@/views/index/ura')
  }
]
const createRouter = () => new Router({
  mode: 'history',
  routes: constantRoutes
})
const router = createRouter()
export default router
