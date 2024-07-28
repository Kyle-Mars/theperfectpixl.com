<template>
  <body>
    <div class="banner">
      <img
        id="home-icon"
        sizes="(min-width: 420px) 48.48vw, 68.22vw"
        srcset="
          https://ik.imagekit.io/theperfectpixl/tr:n-20icon256/page-assets/welcome-logo   256w,
          https://ik.imagekit.io/theperfectpixl/tr:n-20icon1710/page-assets/welcome-logo 1710w,
          https://ik.imagekit.io/theperfectpixl/tr:n-20icon2400/page-assets/welcome-logo 2400w
        "
        src="https://ik.imagekit.io/theperfectpixl/page-assets/welcome-logo"
        alt="Welcome!"
      />
      <video playsinline autoplay loop muted preload="auto" id="banner-video">
        <source
          src="https://ik.imagekit.io/theperfectpixl/page-assets/welcome-banner"
          type="video/mp4"
        />
      </video>
    </div>
    <div id="home-intro">
      <img
        class="home-image"
        id="profile"
        sizes="(min-width: 1260px) 400px, (min-width: 500px) calc(20.63vw + 7px), (min-width: 480px) 4px, (min-width: 460px) 4px, (min-width: 440px) 3px, (min-width: 420px) 3px, (min-width: 400px) 3px, (min-width: 380px) 3px, (min-width: 360px) 3px, (min-width: 340px) 3px, (min-width: 320px) 3px, 2px"
        srcset="
          https://ik.imagekit.io/theperfectpixl/tr:h-256n-size256/profile    256w,
          https://ik.imagekit.io/theperfectpixl/tr:h-700n-size700/profile    700w,
          https://ik.imagekit.io/theperfectpixl/tr:h-1000n-size1000/profile 1000w,
          https://ik.imagekit.io/theperfectpixl/tr:h-1220n-size1220/profile 1220w,
          https://ik.imagekit.io/theperfectpixl/tr:h-1410n-size1410/profile 1410w
        "
        src="https://ik.imagekit.io/theperfectpixl/profile"
        width="300"
        height="300"
        alt="A nice photo of me."
      />
      <div id="home-title">
        Welcome! I’m Kyle, an early 2000s Transformers collector, Super Link enthusiast, and amateur
        toy photographer.
        <div class="home-text">
          My hobby for the past several years has been collecting, playing with, and displaying
          Transformers toys. I started taking pictures of them soon into collecting, and I haven't
          stopped since. Here you can view a curated list of the photos I've taken, or learn more
          about me, my collection, and Transformers.
        </div>
      </div>
    </div>
    <div class="content-body">
      <div id="title">
        Samples
        <hr />
      </div>
      <div class="body" id="big-image">
        <div
          v-for="(image, index) in props.imageList"
          :key="index"
          @click="selected != null ? (selected = null) : (selected = index)"
        >
          <Transition name="search">
            <img
              v-if="image.home"
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
.home-text {
  font-family: 'Droid Sans', 'Open Sans', sans-serif;
  color: #515151;
  line-height: 175%;
  font-size: 1.3vw;
  max-width: 36vw;
  text-align: left;
  padding-top: 7%;
}
.home-image {
  width: 22vw;
}
#home-intro {
  background-color: #f6f6f6;
  height: auto;
  padding: 4%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow:
    0 0.156vw 0.313vw rgba(0, 0, 0, 0.2),
    0 0.234vw 0.781vw rgba(0, 0, 0, 0.19),
    0 -0.156vw 0.313vw rgba(0, 0, 0, 0.2),
    0 -0.234vw 0.781vw rgba(0, 0, 0, 0.19);
}
#home-icon {
  width: 50%;
  position: absolute;
  box-shadow: 0 0 0;
}
#home-title {
  font-family: 'Droid Sans', sans-serif;
  font-size: 2.083vw;
  text-align: left;
  padding-top: 0vw;
  max-width: 36.0625vw;
}
@media screen and (min-width: 1600px) {
  .home-text {
    font-size: 1vw;
  }
  #home-icon {
    width: 40%;
  }
  #home-title {
    font-size: 1.7vw;
  }
}
@media screen and (max-width: 1000px) {
  .home-text {
    font-size: 1.3vw;
  }
}
@media screen and (max-width: 768px) {
  .home-text {
    font-size: 1.7vw;
    max-width: 50.125vw;
  }
  #home-title {
    font-size: 2.5vw;
    max-width: 50.125vw;
  }
}
@media screen and (max-width: 486px) {
  .home-text {
    font-size: 2.854vw;
    max-width: 75.125vw;
  }
  .home-image {
    width: 33vw;
  }
  #home-intro {
    justify-content: center;
  }
  #home-title {
    font-size: 3.083vw;
    max-width: 75.125vw;
  }
}
@media screen and (max-width: 414px) {
  .home-text {
    font-size: 2.899vw;
  }
  #home-icon {
    width: 70%;
  }
  #home-title {
    font-size: 3.583vw;
  }
}
@media screen and (max-width: 390px) {
  .home-text {
    font-size: 3.343vw;
  }
  #home-title {
    font-size: 3.983vw;
  }
}
</style>
