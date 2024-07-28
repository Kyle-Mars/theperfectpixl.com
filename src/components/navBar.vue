<template>
  <div style="position: sticky">
    <div class="header">
      <div class="home-link" @click="emits('navigate', 'homePage')">
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
        <!-- <div class="link" @click="emits('navigate', 'showcasePage')">SHOWCASE</div> -->
        <div class="link" @click="emits('navigate', 'galleryPage')">GALLERY</div>
        <div class="link" @click="emits('navigate', 'aboutPage')">ABOUT ME</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'

const emits = defineEmits(['navigate'])
</script>

<style scoped>
.header {
  font-family: 'Lato', 'Sans Open', sans-serif;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: white;
  background-size: cover;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  box-shadow:
    0 0.156vw 0.313vw #00000033,
    0 0.234vw 0.781vw rgba(0, 0, 0, 0.19),
    0 -0.156vw 0.313vw rgba(0, 0, 0, 0.2),
    0 -0.234vw 0.781vw rgba(0, 0, 0, 0.19);
  z-index: 2;
}
.home-link {
  cursor: pointer;
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
  border-radius: 10px;
  background-color: #f6f6f6;
}
.v-enter-active,
.v-leave-active {
  transition: top 0.5s ease-in-out;
}
.v-enter-from,
.v-leave-to {
  top: 0;
}
.v-enter-to,
.v-leave-from {
  top: 8.6vw;
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
    font-size: 0.9em;
  }
}
@media screen and (max-width: 486px) {
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
