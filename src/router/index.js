import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/homePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:pathMatch(.*)*', redirect: '/' },
    {
      path: '/',
      component: Home
    },
    {
      path: '/About',
      component: () => import('../views/aboutPage.vue')
    },
    {
      path: '/Gallery',
      component: () => import('../views/galleryPage.vue')
    },
    {
      path: '/Showcase',
      component: () => import('../views/showcasePage.vue')
    }
  ]
})

export default router
