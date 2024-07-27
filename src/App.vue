<template>
  <pageNav @navigate="setCurrentPage"></pageNav>
  <!-- <RouterView :imageList="imageList" :content="content" /> -->
  <homePage v-if="currentPage === 'homePage'" :imageList="imageList" :content="content" />
  <aboutPage v-if="currentPage === 'aboutPage'" :imageList="imageList" :content="content" />
  <galleryPage v-if="currentPage === 'galleryPage'" :imageList="imageList" :content="content" />
  <showcasePage v-if="currentPage === 'showcasePage'" :imageList="imageList" :content="content" />
  <pageFooter></pageFooter>
</template>

<script setup>
import { ref } from 'vue'
import data from './assets/data.js'

import pageNav from './components/navBar.vue'
import pageFooter from './components/footerBar.vue'

import homePage from './views/homePage.vue'
import aboutPage from './views/aboutPage.vue'
import galleryPage from './views/galleryPage.vue'
import showcasePage from './views/showcasePage.vue'

const imageList = ref(shuffle(data.images))
const content = ref(data.content)

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
