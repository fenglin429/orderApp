import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from '../pages/index/Goods'

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'goods',
    component: Goods
  },
  {
    path: '/evaluate',
    name: 'evaluate',
    component: () => import('../pages/index/Evaluate')
  },
  {
    path: '/merchant',
    name: 'merchant',
    component: () => import('../pages/index/Merchant')
  }
]

// router有两种模式 1： history    2：hash
const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router