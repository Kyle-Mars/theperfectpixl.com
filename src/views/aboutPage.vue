<template>
  <body>
    <div class="banner">
      <img
        id="about-icon"
        sizes="(min-width: 420px) 48.48vw, 68.22vw"
        srcset="
          https://ik.imagekit.io/theperfectpixl/tr:n-23icon256/page-assets/about-logo   256w,
          https://ik.imagekit.io/theperfectpixl/tr:n-23icon1710/page-assets/about-logo 1710w,
          https://ik.imagekit.io/theperfectpixl/tr:n-23icon2400/page-assets/about-logo 2400w
        "
        src="https://ik.imagekit.io/theperfectpixl/page-assets/about-logo"
        alt="About Me"
      />
      <video playsinline autoplay loop muted preload="metadata" id="bannervideo">
        <source
          src="https://ik.imagekit.io/theperfectpixl/page-assets/about-banner"
          type="video/mp4"
        />
      </video>
    </div>

    <div class="intro">
      <div class="text" v-html="props.content.aboutText"></div>
    </div>

    <div style="flex: 1">
      <div class="body" id="title">
        <button
          class="about-button"
          @click="selected != 'into' ? (selected = 'into') : (selected = '')"
        >
          Getting into Transformers
          <span>&#8628;</span>
        </button>
        <hr />
        <Transition>
          <div class="about-text" v-if="selected == 'into'" v-html="props.content.intoText"></div>
        </Transition>

        <button
          class="about-button"
          @click="selected != 'journey' ? (selected = 'journey') : (selected = '')"
        >
          The Journey of Collecting
          <span>&#8628;</span>
        </button>
        <hr />
        <Transition>
          <div
            class="about-text"
            v-if="selected == 'journey'"
            v-html="props.content.journeyText"
          ></div>
        </Transition>

        <button
          id="photo_button"
          class="about-button"
          @click="selected != 'photo' ? (selected = 'photo') : (selected = '')"
        >
          Photographs and Websites
          <span>&#8628;</span>
        </button>
        <hr />
        <Transition>
          <div class="about-text" v-if="selected == 'photo'" v-html="props.content.photoText"></div>
        </Transition>

        <button
          class="about-button"
          @click="selected != 'favs' ? (selected = 'favs') : (selected = '')"
        >
          Favorite Toys, Media, etc.
          <span>&#8628;</span>
        </button>
        <hr />
        <Transition>
          <div class="about-text" v-if="selected == 'favs'" v-html="props.content.favsText"></div>
        </Transition>

        <button
          class="about-button"
          @click="selected != 'more' ? (selected = 'more') : (selected = '')"
        >
          Interested in Learning More?
          <span>&#8628;</span>
        </button>
        <hr />
        <Transition>
          <div class="about-text" v-if="selected == 'more'" v-html="props.content.moreText"></div>
        </Transition>
      </div>
    </div>
  </body>
</template>

<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({ content: Object })
const selected = ref('')
</script>

<style scoped>
.about-button {
  font-family: 'Droid Sans', sans-serif;
  font-size: 2.083vw;
  color: black;
  width: 70vw;
  background-color: white;
  border: none;
  outline: none;
  cursor: pointer;
  padding-top: 1vw;
  padding-bottom: 1vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.about-text {
  font-family: 'Droid Sans', 'Open Sans', sans-serif;
  color: #313131;
  background-color: white;
  line-height: 175%;
  font-size: 1.2vw;
  text-align: left;
  padding: 2vw;
  height: auto;
  text-indent: 1em;
  overflow: hidden;
}
#about-icon {
  width: 40%;
  position: absolute;
  box-shadow: 0 0 0;
}
.v-enter-active,
.v-leave-active {
  transition: max-height 1s ease-in-out;
}
.v-enter-from,
.v-leave-to {
  max-height: 0vh;
}
.v-enter-to,
.v-leave-from {
  max-height: 200vh;
}
@media screen and (min-width: 1600px) {
  .about-button {
    font-size: 1.7vw;
  }
  .about-text {
    font-size: 1vw;
  }
  #about-icon {
    width: 30%;
  }
}
@media screen and (max-width: 1000px) {
  .about-text {
    font-size: 1.3vw;
  }
}
@media screen and (max-width: 768px) {
  .about-button {
    font-size: 3.083vw;
    padding-top: 2vw;
    padding-bottom: 2vw;
  }
  .about-text {
    font-size: 1.7vw;
  }
}
@media screen and (max-width: 486px) {
  .about-button {
    font-size: 3.283vw;
  }
  .about-text {
    font-size: 2.554vw;
  }
}
@media screen and (max-width: 414px) {
  .about-button {
    font-size: 3.583vw;
  }
  .about-text {
    font-size: 2.899vw;
  }
  #about-icon {
    width: 55%;
  }
}
@media screen and (max-width: 390px) {
  .about-button {
    font-size: 3.983vw;
  }
  .about-text {
    font-size: 3.343vw;
  }
}
</style>
