<template>
  <body>
    <div class="banner">
      <img
        class="gal-icon"
        sizes="(min-width: 420px) 42.98vw, 55.22vw"
        srcset="
          https://ik.imagekit.io/theperfectpixl/tr:n-22icon256/page-assets/gallery-logo   256w,
          https://ik.imagekit.io/theperfectpixl/tr:n-22icon1710/page-assets/gallery-logo 1710w,
          https://ik.imagekit.io/theperfectpixl/tr:n-22icon2400/page-assets/gallery-logo 2400w
        "
        src="https://ik.imagekit.io/theperfectpixl/page-assets/gallery-logo"
        alt="Gallery"
      />
      <div class="banner-bg"></div>
      <div class="banner-bg banner-bg-2"></div>
      <div class="banner-bg banner-bg-3"></div>
    </div>
    <div class="intro">
      <div class="text">
        <p>
          While my collection covers about 6 main toylines, at the moment my photo library is
          focused mainly on 3 main lines.
        </p>
        <p>
          <a href="https://tfwiki.net/wiki/Transformers_Animated_(toyline)"
            >Transformers Animated</a
          >
          from 2007 is characterized by its unique, hyper-stylized character designs by the mind
          behind the art direction of Teen Titans and Ben 10: Omniverse. Animated is my favorite
          Transformers cartoon, and the accompanying toyline was incredible in how well it adapted
          such stylized design to plastic.
        </p>
        <p>
          <a href="https://tfwiki.net/wiki/Transformers:_Robots_in_Disguise_(2001_toyline)"
            >Robots in Disguise</a
          >
          was originally conceived in Japan in 2000 as Car Robots, returning to realistic vehicle
          alternate modes alongside realistic animals. The Car Robots line was made up of both new
          toys and recolors of toys from every previous Transformers toyline, all thrown together in
          a fascinating mishmash of styles.
        </p>
        <p>
          The
          <a href="https://tfwiki.net/wiki/War_for_Cybertron_Trilogy_(toyline)"
            >War for Cybertron Trilogy</a
          >
          of toylines ran from 2019-2021, and were on retail shelves when I started collecting.
          Leaning hard into the modern trend of updated versions of classic characters, each chapter
          featured its own unique aesthetic; Siege had Cybertronian alternate modes and battle
          damage paint, Earthrise delivered clean Earth mode updates, and Kingdom pulled in
          characters from Beast Wars for the series’ 25th anniversary.
        </p>
        <p>
          <a href="https://tfwiki.net/wiki/Transformers:_Legacy_(toyline)">Legacy</a> and
          <a href="https://tfwiki.net/wiki/Transformers:_Legacy_(toyline)#Legacy:_Evolution"
            >Legacy Evolution</a
          >
          were the successors to the War for Cybertron Trilogy, using the same design principles and
          aesthetic while bringing in a more diverse cast of characters from across the franchise.
        </p>
        <p>
          I don't own toys from all of these lines anymore, but I do still have their photos. You
          can search for a specific character or toys from one of the toylines mentioned using the
          search bar below.
        </p>
      </div>
    </div>
    <br />
    <div class="content-body">
      <div class="filter-div">
        <input
          class="filter"
          v-model="search"
          placeholder="Search images by character name, toyline..."
        />
      </div>
      <div class="images-wrapper">
        <div v-for="(image, index) in props.imageList" :key="index" @click="select(index)">
          <Transition name="search">
            <img
              v-if="image.alt.toLowerCase().includes(search.toLowerCase())"
              class="gal-image"
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

const props = defineProps({ imageList: Array })
const search = ref('')
const selected = ref(null)

function select(index) {
  selected.value === null ? (selected.value = index) : (selected.value = null)
}
</script>

<style scoped>
.banner-bg {
  background-image: linear-gradient(-70deg, rgb(174, 0, 255) 20%, rgb(255, 0, 0) 80%);
}
.gal-icon {
  width: 43%;
  position: absolute;
  box-shadow: 0 0 0;
}
.gal-image {
  width: 15vw;
  border-radius: 3px;
  box-shadow:
    0 0.156vw 0.313vw rgba(0, 0, 0, 0.2),
    0 0.234vw 0.781vw rgba(0, 0, 0, 0.19);
}
.gal-image:hover {
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
.filter-div {
  display: flex;
  justify-content: center;
  margin-top: 4%;
}
.filter {
  width: 90%;
  padding: 1%;
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
.selected {
  z-index: 3;
  height: 90vh;
  border-radius: 2px;
  width: auto;
}
@media screen and (min-width: 1600px) {
  .gal-icon {
    width: 33%;
  }
}
@media screen and (min-width: 1000px) {
  .gal-image {
    width: 18vw;
  }
  .selected {
    height: 80vh;
  }
}
@media screen and (min-width: 786px) {
  .gal-image {
    width: 18vw;
  }
  .selected {
    width: 85vw;
    height: auto;
  }
}
@media screen and (max-width: 486px) {
  .gal-image {
    width: 25vw;
  }
  .filter {
    padding: 2%;
    width: 75vw;
  }
}
@media screen and (max-width: 414px) {
  .gal-icon {
    width: 55%;
  }
}
</style>