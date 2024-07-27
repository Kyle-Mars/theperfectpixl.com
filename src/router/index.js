import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/homePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // name: 'Home',
      component: Home
    },
    {
      path: '/About',
      // name: 'About',
      component: () => import('../views/aboutPage.vue')
    },
    {
      path: '/Gallery',
      // name: 'Gallery',
      component: () => import('../views/galleryPage.vue')
    },
    {
      path: '/Showcase',
      // name: 'Showcase',
      component: () => import('../views/showcasePage.vue')
    }
  ]
})

export default router
