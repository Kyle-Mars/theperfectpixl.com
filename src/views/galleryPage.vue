<template>
  <body>
    <div class="banner">
      <img
        id="gal-icon"
        sizes="(min-width: 420px) 42.98vw, 55.22vw"
        srcset="
          https://ik.imagekit.io/theperfectpixl/tr:n-22icon256/page-assets/gallery-logo   256w,
          https://ik.imagekit.io/theperfectpixl/tr:n-22icon1710/page-assets/gallery-logo 1710w,
          https://ik.imagekit.io/theperfectpixl/tr:n-22icon2400/page-assets/gallery-logo 2400w
        "
        src="https://ik.imagekit.io/theperfectpixl/page-assets/gallery-logo"
        alt="Gallery"
      />
      <video playsinline autoplay loop muted preload="metadata" id="banner-video">
        <source
          src="https://ik.imagekit.io/theperfectpixl/page-assets/gallery-banner"
          type="video/mp4"
        />
      </video>
    </div>
    <div class="intro">
      <div
        class="text"
        v-html="
          content.galIntroText +
          content.animText +
          content.ridText +
          content.wfcText +
          content.galEndText
        "
      ></div>
    </div>
    <br />
    <div class="content-body">
      <div class="filterdiv">
        <input
          id="filter"
          v-model="search"
          placeholder="Search images by character name, toyline..."
        />
      </div>
      <div class="body" id="gen-image">
        <div
          v-for="(image, index) in props.imageList"
          :key="index"
          @click="selected != null ? (selected = null) : (selected = index)"
        >
          <Transition name="search">
            <img
              v-if="image.alt.toLowerCase().includes(search.toLowerCase())"
              class="gen-image"
              sizes="(min-width: 1260px) 350px, 15.18vw"
              :srcset="
                'https://ik.imagekit.io/theperfectpixl/gallery-photos/tr:n-size256/' +
                image.src +
                ' 256w, https://ik.imagekit.io/theperfectpixl/gallery-photos/tr:n-size470/' +
                image.src +
                ' 470w, https://ik.imagekit.io/theperfectpixl/gallery-photos/tr:n-size740/' +
                image.src +
                ' 740w, https://ik.imagekit.io/theperfectpixl/gallery-photos/tr:n-size940/' +
                image.src +
                ' 940w'
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

const props = defineProps({ imageList: Array, content: Object })
const search = ref('')
const selected = ref(null)
</script>

<style scoped>
.gal-image {
  width: 13vw;
}
#gal-icon {
  width: 43%;
  position: absolute;
  box-shadow: 0 0 0;
}
.v-enter-active,
.v-leave-active {
  transition: max-width 0.5s ease-in-out;
}
.v-enter-from,
.v-leave-to {
  max-width: 0%;
}
.v-enter-to,
.v-leave-from {
  max-width: 100%;
}
@media screen and (min-width: 1600px) {
  #gal-icon {
    width: 33%;
  }
}
@media screen and (max-width: 486px) {
  .gal-image {
    width: 22vw;
  }
}
@media screen and (max-width: 414px) {
  #gal-icon {
    width: 55%;
  }
}
</style>
