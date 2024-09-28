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
  width: 90%;
  height: 22vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  margin-bottom: 50px;
  padding: 20px;
}
.review-card:hover {
  background-color: #f6f6f6;
  box-shadow:
    0 0.15vw 0.3vw rgba(0, 0, 0, 0.2),
    0 0.25vw 0.8vw rgba(0, 0, 0, 0.19);
  transition: box-shadow 0.2s ease;
}
.review-card::after {
  content: '';
  position: absolute;
  display: inline;
  width: 68vw;
  height: 5px;
  margin-top: calc(22vh + 80px);
  background-image: linear-gradient(90deg, rgb(140, 0, 255), rgb(255, 0, 0));
  border-radius: 10px;
}
.review-card-image {
  width: 35%;
  height: 100%;
  border-radius: 10px;
  box-shadow:
    0 0.15vw 0.3vw rgba(0, 0, 0, 0.2),
    0 0.25vw 0.8vw rgba(0, 0, 0, 0.19);
}
.review-card-title {
  font-family: 'Lato', sans-serif;
  font-size: 1em;
  color: #515151;
  width: 85%;
  height: 100%;
  line-height: 150%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
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
  color: #515151;
  width: 80%;
  height: 5vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.toyline {
  margin-right: 40px;
}
.year {
  margin-left: 40px;
}
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
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
  width: 90%;
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
@media screen and (max-width: 1000px) {
  .review-title,
  .review-card-title {
    font-size: 0.7em;
    height: 7vw;
  }
  .review-card {
    height: 10vh;
  }
  .review-card::after {
    margin-top: calc(10vh + 90px);
  }
  .review-card-image {
    width: 40%;
    height: 100%;
  }
}
@media screen and (max-width: 768px) {
  .review-text {
    font-size: 0.4em;
  }
  .review-title,
  .review-card-title {
    padding-top: 2vw;
    width: 100%;
    height: 8vw;
  }
}
@media screen and (max-width: 486px) {
  .review-card {
    flex-direction: column;
    justify-content: space-between;
    height: 15vh;
  }
  .review-card::after {
    margin-top: calc(15vh + 40px);
  }
  .review-card-image {
    width: 100%;
    height: 50%;
  }
  .review-title {
    height: 11vw;
    padding-top: 3vw;
    text-align: left;
    font-size: 0.6em;
  }
  .review-card-title {
    height: 11vw;
    padding-top: 0;
    text-align: left;
    font-size: 0.6em;
  }
}
</style>
