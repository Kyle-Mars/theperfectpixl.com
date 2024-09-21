<template>
  <div v-if="!visible" class="review-card" @click="open">
    <div class="review-card-title"></div>
    <img
      class="review-card-image"
      sizes="(min-width: 1260px) 350px, 20vw"
      :srcset="
        'https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size256/' +
        ' 256w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size700/' +
        ' 700w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1000/' +
        ' 1000w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1220/' +
        ' 1220w, https://ik.imagekit.io/theperfectpixl/review-photos/tr:n-size1410/' +
        ' 1410w'
      "
      :src="'https://ik.imagekit.io/theperfectpixl/review-photos/'"
      height="400"
      width="300"
      :alt="''"
    />
  </div>
  <div v-if="visible" class="review">
    <div class="review-title">
      <div class="review-back-button" @click="visible = false">⇤</div>
    </div>
    <div class="review-text"></div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const emits = defineEmits(['open'])
const visible = ref(false)
// const selected = ref(null)

function open() {
  emits('open')
  visible.value = true
}
</script>

<style scoped>
.review-card {
  width: 47%;
  height: 22vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding-bottom: 10px;
  background-color: #f6f6f6;
  cursor: pointer;
  box-shadow:
    0 0.15vw 0.3vw rgba(0, 0, 0, 0.2),
    0 0.25vw 0.8vw rgba(0, 0, 0, 0.19);
  margin-bottom: 45px;
  padding: 20px 0 20px 10px;
}
.review-card-image {
  width: 45%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 0 0;
  margin: 10px;
}
.review-card-title {
  font-family: 'Lato', sans-serif;
  font-size: 1em;
  color: black;
  width: 85%;
  height: fit-content;
  line-height: 150%;
  padding: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.small-review-image {
  width: 48%;
  border-radius: 7px;
  box-shadow: 0 0 0 0;
}
.large-review-image {
  width: 96%;
  border-radius: 7px;
  box-shadow: 0 0 0 0;
}
.review-title {
  font-family: 'Lato', sans-serif;
  font-size: 1em;
  color: black;
  width: 80%;
  height: 5vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.review-back-button {
  margin-right: 20px;
  cursor: pointer;
}
.review-text {
  font-family: 'Droid Sans', 'Open Sans', sans-serif;
  color: #515151;
  background-color: white;
  line-height: 175%;
  padding: 1vw;
  width: 80%;
  font-size: 0.5em;
  text-align: left;
  height: auto;
  text-indent: 1em;
  overflow: hidden;
}
.review {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  position: relative;
}
</style>
