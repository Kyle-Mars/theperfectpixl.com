<template>
  <body>
    <div class="banner">
      <img
        class="icon"
        sizes="(min-width: 420px) 48.48vw, 68.22vw"
        srcset="
          https://ik.imagekit.io/theperfectpixl/tr:n-20icon256/page-assets/welcome-logo   256w,
          https://ik.imagekit.io/theperfectpixl/tr:n-20icon1710/page-assets/welcome-logo 1710w,
          https://ik.imagekit.io/theperfectpixl/tr:n-20icon2400/page-assets/welcome-logo 2400w
        "
        src="https://ik.imagekit.io/theperfectpixl/page-assets/welcome-logo"
        alt="Welcome!"
      />
      <div class="banner-bg"></div>
      <div class="banner-bg banner-bg-2"></div>
      <div class="banner-bg banner-bg-3"></div>
    </div>
    <div class="home-intro">
      <img
        class="profile"
        sizes="(min-width: 1260px) 400px, (min-width: 500px) calc(20.63vw + 7px), (min-width: 480px) 4px, (min-width: 460px) 4px, (min-width: 440px) 3px, (min-width: 420px) 3px, (min-width: 400px) 3px, (min-width: 380px) 3px, (min-width: 360px) 3px, (min-width: 340px) 3px, (min-width: 320px) 3px, 2px"
        srcset="
          https://ik.imagekit.io/theperfectpixl/tr:h-256n-size256/page-assets/profile.jpg    256w,
          https://ik.imagekit.io/theperfectpixl/tr:h-700n-size700/page-assets/profile.jpg    700w,
          https://ik.imagekit.io/theperfectpixl/tr:h-1000n-size1000/page-assets/profile.jpg 1000w,
          https://ik.imagekit.io/theperfectpixl/tr:h-1220n-size1220/page-assets/profile.jpg 1220w,
          https://ik.imagekit.io/theperfectpixl/tr:h-1410n-size1410/page-assets/profile.jpg 1410w
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
          My hobby for the past several years has been collecting, playing with, and displaying
          Transformers toys. Here you can view a gallery of the photos I've taken or learn more
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
              sizes="(min-width: 1260px) 350px, 20.91vw"
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
  .home-icon {
    width: 40%;
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
@media screen and (max-width: 414px) {
  .home-icon {
    width: 70%;
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
