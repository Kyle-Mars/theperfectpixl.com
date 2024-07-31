<template>
  <body>
    <div class="banner">
      <img
        class="icon"
        sizes="(min-width: 800px) 49.95vw, (min-width: 500px) 62.5vw, (min-width: 400px) 75vw, 81.25vw"
        srcset="
          https://ik.imagekit.io/theperfectpixl/tr:n-logo256/page-assets/home-logo-new   256w,
          https://ik.imagekit.io/theperfectpixl/tr:n-logo1710/page-assets/home-logo-new 1710w,
          https://ik.imagekit.io/theperfectpixl/tr:n-logo2400/page-assets/home-logo-new 2400w
        "
        src="https://ik.imagekit.io/theperfectpixl/page-assets/home-logo-new"
        alt="Welcome!"
      />
      <!-- <a href="https://www.textstudio.com/">Font generator</a> -->
      <div class="banner-background">
        <div class="grid"></div>
      </div>
    </div>
    <div class="home-intro">
      <img
        class="profile"
        sizes="22vw"
        srcset="
          https://ik.imagekit.io/theperfectpixl/tr:h-256n-size256/page-assets/profile.jpg    256w,
          https://ik.imagekit.io/theperfectpixl/tr:h-700n-size700/page-assets/profile.jpg    660w,
          https://ik.imagekit.io/theperfectpixl/tr:h-1000n-size1000/page-assets/profile.jpg 1040w,
          https://ik.imagekit.io/theperfectpixl/tr:h-1220n-size1220/page-assets/profile.jpg 1320w
        "
        src="https://ik.imagekit.io/theperfectpixl/page-assets/profile.jpg"
        width="300"
        height="300"
        alt="A nice photo of me."
      />
      <div class="home-title">
        Hi! I’m Kyle, an early 2000s Transformers collector, Super Link enthusiast, and amateur toy
        photographer.
        <div class="home-text">
          Since 2019 I've been buying, selling, playing with, displaying, and photographing
          Transformers toys. From here you can view a gallery of the photos I've taken or learn more
          about me, my collection, and Transformers.
        </div>
      </div>
    </div>
    <div class="content-body">
      <div class="images-wrapper">
        <div
          v-for="(image, index) in props.imageList"
          :key="index"
          @click="selected != null ? (selected = null) : (selected = index)"
        >
          <Transition name="search">
            <img
              v-if="image.show"
              class="home-image"
              sizes="(min-width: 500px) 22vw, 32.78vw"
              :srcset="
                'https://ik.imagekit.io/theperfectpixl/gallery-photos/tr:n-size256/' +
                image.src +
                ' 256w, https://ik.imagekit.io/theperfectpixl/gallery-photos/tr:n-size700/' +
                image.src +
                ' 700w, https://ik.imagekit.io/theperfectpixl/gallery-photos/tr:n-size1000/' +
                image.src +
                ' 1000w, https://ik.imagekit.io/theperfectpixl/gallery-photos/tr:n-size1220/' +
                image.src +
                ' 1220w, https://ik.imagekit.io/theperfectpixl/gallery-photos/tr:n-size1410/' +
                image.src +
                ' 1410w'
              "
              :src="'https://ik.imagekit.io/theperfectpixl/gallery-photos/' + image.src"
              height="400"
              width="300"
              :alt="image.alt"
            />
          </Transition>
          <Transition name="lightbox">
            <div v-if="selected == index" :class="{ background: selected == index }">
              <img
                class="selected"
                :src="
                  'https://ik.imagekit.io/theperfectpixl/gallery-photos/tr:n-size940/' + image.src
                "
                height="400"
                width="300"
                :alt="image.alt"
              />
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </body>
</template>

<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({ imageList: Array })
const selected = ref(null)
</script>

<style scoped>
.banner-bg {
  background-image: linear-gradient(70deg, rgb(255, 0, 0) 20%, rgb(174, 0, 255) 80%);
}
.home-intro {
  background-color: #f6f6f6;
  height: auto;
  padding: 4%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow:
    0 0.15vw 0.3vw rgba(0, 0, 0, 0.2),
    0 0.25vw 0.8vw rgba(0, 0, 0, 0.2),
    0 -0.15vw 0.3vw rgba(0, 0, 0, 0.2),
    0 -0.25vw 0.8vw rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.profile {
  border-color: #f6f6f6;
  width: 22vw;
  border-radius: 1000px;
  box-shadow: 0 0 0;
}
.home-title {
  font-family: 'Droid Sans', sans-serif;
  font-size: 2em;
  text-align: left;
  padding-top: 0vw;
  max-width: 36vw;
}
.home-text {
  font-family: 'Droid Sans', 'Open Sans', sans-serif;
  color: #515151;
  line-height: 175%;
  font-size: 0.6em;
  max-width: 36vw;
  text-align: left;
  padding-top: 7%;
}
.home-image {
  width: 22vw;
  border-radius: 3px;
  box-shadow:
    0 0.15vw 0.3vw rgba(0, 0, 0, 0.2),
    0 0.25vw 0.8vw rgba(0, 0, 0, 0.19);
}
.home-image:hover {
  -webkit-mask-image: linear-gradient(45deg, #000 25%, rgba(0, 0, 0, 0.6) 50%, #000 75%);
  mask-image: linear-gradient(45deg, #000 25%, rgba(0, 0, 0, 0.6) 50%, #000 75%);
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
@media screen and (min-width: 1600px) {
  .home-text {
    font-size: 0.5em;
  }
  .home-title {
    font-size: 2em;
  }
}
@media screen and (max-width: 1000px) {
  .home-text {
    font-size: 0.6em;
    max-width: 50vw;
  }
  .home-title {
    font-size: 1.3em;
    max-width: 50vw;
  }
}
@media screen and (max-width: 486px) {
  .profile {
    display: none;
  }
  .home-image {
    width: 33vw;
  }
  .home-intro {
    justify-content: center;
    flex-direction: column;
  }
  .home-text,
  .home-title {
    max-width: 90vw;
    line-height: 175%;
  }
}
@media screen and (max-width: 390px) {
  .home-title {
    font-size: 1em;
  }
  .home-text {
    font-size: 0.8em;
  }
}
</style>
