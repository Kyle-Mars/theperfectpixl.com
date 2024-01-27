import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_PATH),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/About',
      name: 'About',
      component: () => import('../views/About.vue')
    },
    {
      path: '/Animated',
      name: 'Animated',
      component: () => import('../views/Animated.vue')
    },
    {
      path: '/Gallery',
      name: 'Gallery',
      component: () => import('../views/Gallery.vue')
    },
    {
      path: '/RID',
      name: 'RID',
      component: () => import('../views/RID2001.vue')
    },
    {
      path: '/Showcase',
      name: 'Showcase',
      component: () => import('../views/Showcase.vue')
    },
    {
      path: '/WFC',
      name: 'WFC',
      component: () => import('../views/WFC.vue')
    }
  ]
})

export default router
