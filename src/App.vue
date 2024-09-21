<template>
  <pageNav @navigate="setCurrentPage"></pageNav>
  <homePage v-show="currentPage === 'homePage'" :imageList="imageList" />
  <galleryPage v-show="currentPage === 'galleryPage'" :imageList="imageList" />
  <aboutPage v-show="currentPage === 'aboutPage'" />
  <reviewsPage v-show="currentPage === 'reviewsPage'" />
</template>

<script setup>
import { ref } from 'vue'
import imageData from './assets/imageData.js'

import pageNav from './components/navBar.vue'

import homePage from './pages/homePage.vue'
import aboutPage from './pages/aboutPage.vue'
import galleryPage from './pages/galleryPage.vue'
import reviewsPage from './pages/reviewsPage.vue'

const imageList = ref(shuffle(imageData))

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }
  return array
}

const currentPage = ref('homePage')
function setCurrentPage(pageName) {
  currentPage.value = pageName
}
</script>
