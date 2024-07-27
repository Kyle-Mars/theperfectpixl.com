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
      path: '/Animated',
      name: 'Animated',
      component: () => import('../views/animatedGallery.vue')
    },
    {
      path: '/Gallery',
      // name: 'Gallery',
      component: () => import('../views/galleryGallery.vue')
    },
    {
      path: '/RID',
      // name: 'RID',
      component: () => import('../views/ridGallery.vue')
    },
    {
      path: '/Showcase',
      // name: 'Showcase',
      component: () => import('../views/showcaseGallery.vue')
    },
    {
      path: '/WFC',
      // name: 'WFC',
      component: () => import('../views/wfcGallery.vue')
    }
  ]
})

export default router
