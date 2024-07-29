<template>
  <div class="header">
    <div class="home-link" @click="emits('navigate', 'homePage'), (selected = 'homePage')">
      <img
        class="logo"
        sizes="(min-width: 500px) 46.98vw, 84.77vw"
        srcset="
          https://ik.imagekit.io/theperfectpixl/page-assets/tr:n-logo256/main-logo   256w,
          https://ik.imagekit.io/theperfectpixl/page-assets/tr:n-logo1710/main-logo 1710w,
          https://ik.imagekit.io/theperfectpixl/page-assets/tr:n-logo2400/main-logo 2400w
        "
        src="https://ik.imagekit.io/theperfectpixl/page-assets/main-logo"
        alt="ThePerfectPixl"
      />
    </div>
    <div class="link-toolbar">
      <!-- <div class="link">REVIEWS</div> -->
      <div
        class="link"
        :class="{ 'current-link': selected === 'galleryPage' }"
        @click="emits('navigate', 'galleryPage'), (selected = 'galleryPage')"
      >
        GALLERY
      </div>
      <div
        class="link"
        :class="{ 'current-link': selected === 'aboutPage' }"
        @click="emits('navigate', 'aboutPage'), (selected = 'aboutPage')"
      >
        ABOUT ME
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const emits = defineEmits(['navigate'])
const selected = ref(null)
</script>

<style scoped>
.header {
  font-family: 'Lato', 'Sans Open', sans-serif;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 10vw;
  background-color: white;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  box-shadow:
    0 0.15vw 0.3vw #00000033,
    0 0.25vw 0.8vw rgba(0, 0, 0, 0.19),
    0 -0.15vw 0.3vw rgba(0, 0, 0, 0.2),
    0 -0.25vw 0.8vw rgba(0, 0, 0, 0.19);
  z-index: 2;
}
.home-link {
  cursor: pointer;
}
.home-link:hover {
  -webkit-mask-image: linear-gradient(-45deg, #000 25%, rgba(0, 0, 0, 0.2) 50%, #000 75%);
  mask-image: linear-gradient(-45deg, #000 25%, rgba(0, 0, 0, 0.2) 50%, #000 75%);
  -webkit-mask-size: 800%;
  mask-size: 800%;
  -webkit-mask-position: 0;
  mask-position: 0;
  transition:
    mask-position 1.5s ease 0.1s,
    -webkit-mask-position 1.5s ease 0.1s;
  -webkit-mask-position: 120%;
  mask-position: 120%;
  opacity: 1;
}
.link-toolbar {
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: space-evenly;
}
.link {
  font-family: 'Lato', sans-serif;
  color: #515151;
  font-size: 1.1em;
  font-weight: normal;
  list-style-type: none;
  padding: 1vw;
  margin: 1vw;
  cursor: pointer;
  min-width: 7vw;
  height: 1.5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.link:hover {
  box-shadow:
    3px 3px 3px rgba(0, 0, 0, 0.1),
    -2px -2px 2px white;
  transition: box-shadow 0.2s ease;
  border-radius: 10px;
  background-color: #f6f6f6;
}
.current-link::after {
  animation: underline 0.2s ease-out forwards;
  content: '';
  position: absolute;
  display: inline;
  width: 7vw;
  height: 3px;
  margin-top: 2vw;
  background-image: linear-gradient(90deg, rgb(174, 0, 255), rgb(255, 0, 0));
  border-radius: 10px;
}
@keyframes underline {
  0% {
    width: 0;
  }
  100% {
    width: 7vw;
  }
}
@media screen and (max-width: 1000px) {
  .link {
    font-size: 1em;
    min-width: 10vw;
    height: 2vw;
  }
}
@media screen and (max-width: 768px) {
  .link {
    font-size: 1em;
  }
}
@media screen and (max-width: 486px) {
  .header {
    height: 25vw;
  }
  .header {
    flex-wrap: wrap;
    padding: 2%;
    justify-content: center;
  }
  .link-toolbar {
    width: 80%;
    justify-content: space-around;
  }
  .link {
    padding: 2vw;
    min-width: 20vw;
    height: 3vw;
  }
}
@media screen and (max-width: 414px) {
  .link {
    min-width: 23vw;
    height: 4vw;
  }
}
</style>
