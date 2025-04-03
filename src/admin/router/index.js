import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory('/admin.html'),
  routes: [
    {
      path: '/product',
      name: 'product',
      component: () => import('@/admin/views/product/index.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/admin/views/login/index.vue')
    },
    {
      path: '',
      redirect: '/login',
    }
  ],
})

export default router
