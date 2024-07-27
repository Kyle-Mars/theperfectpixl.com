<template>
  <pageNav></pageNav>
  <RouterView :imageList="imageList" :content="content" />
  <pageFooter></pageFooter>
</template>

<script setup>
import pageNav from './components/navBar.vue'
import pageFooter from './components/footerBar.vue'
import data from './assets/data.js'
import { ref } from 'vue'

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
</script>
