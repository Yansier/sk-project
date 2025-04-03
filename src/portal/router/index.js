import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
// import.meta.env.BASE_URL
const router = createRouter({
  history: createWebHashHistory('/index.html'),
  routes: [
    {
      path: '/goodList/:id?',
      name: 'goodList',
      component: () => import('@/portal/views/goodList/index.vue'),
    },
    {
      path: '/goods/:id1?/:id2?',
      name: 'goods',
      component: () => import('@/portal/views/goods/index.vue'),
    },
    {
      path: '/store/:id?',
      name: 'store',
      component: () => import('@/portal/views/store/index.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/portal/views/search/index.vue'),
    }
  ],
})

export default router
