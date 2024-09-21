<template>
  <body>
    <div class="banner">
      <img
        class="icon"
        sizes="(min-width: 800px) 49.95vw, (min-width: 500px) 62.5vw, (min-width: 400px) 75vw, 81.25vw"
        srcset="
          https://ik.imagekit.io/theperfectpixl/tr:n-logo256/page-assets/reviews-logo-new   256w,
          https://ik.imagekit.io/theperfectpixl/tr:n-logo1710/page-assets/reviews-logo-new 1710w,
          https://ik.imagekit.io/theperfectpixl/tr:n-logo2400/page-assets/reviews-logo-new 2400w
        "
        src="https://ik.imagekit.io/theperfectpixl/page-assets/reviews-logo-new"
        alt="Reviews"
      />
      <!-- <a href="https://www.textstudio.com/">Font generator</a> -->
      <div class="banner-background">
        <div class="grid"></div>
      </div>
    </div>
    <div class="intro">
      <div class="text">
        <p>
          As fun as it is playing with and taking photos of toys, (and it is quite fun), there's
          also something enjoyable about being able to share specific thoughts on them. Whether in a
          conversation to a friend or as a long, potentially rambling internet blog post, it's a
          great way to put into words the ways in which this hobby brings me joy. So here are some
          toy reviews! Don't worry, they're not just walls of text; I've got plenty of pics
          throughout each to break things up and act as a handy visual aid.
        </p>
      </div>
    </div>
    <div class="content-body">
      <div class="review-content-wrapper">
        <superlinkChromhorn
          :showList="showList"
          :selectedReview="selected"
          @open="open"
          @close="close"
        />
      </div>
    </div>
  </body>
</template>

<script setup>
import { ref } from 'vue'
import superlinkChromhorn from '@/reviews/superlinkChromhorn.vue'

const selected = ref('')
const showList = ref(true)

function open(name) {
  showList.value = false
  setTimeout(() => (selected.value = name), 500)
}

function close() {
  selected.value = ''
  //   showList.value = true
  setTimeout(() => (showList.value = true), 500)
}
</script>

<style scoped>
.review-content-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 2vw;
  margin-top: 2vw;
  margin-bottom: 2vw;
  background-color: white;
  height: auto;
  font-size: 2em;
  text-align: left;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (max-width: 1000px) {
}
@media screen and (max-width: 786px) {
}
@media screen and (max-width: 486px) {
}
</style>
