<template>
  <body>
    <div class="banner">
      <img
        class="icon"
        sizes="(min-width: 420px) 48vw, 68vw"
        srcset="
          https://ik.imagekit.io/theperfectpixl/tr:n-logo256/page-assets/gallery-logo-new   256w,
          https://ik.imagekit.io/theperfectpixl/tr:n-logo1710/page-assets/gallery-logo-new 1710w,
          https://ik.imagekit.io/theperfectpixl/tr:n-logo2400/page-assets/gallery-logo-new 2400w
        "
        src="https://ik.imagekit.io/theperfectpixl/page-assets/gallery-logo-new"
        alt="Gallery"
      />
      <!-- <a href="https://www.textstudio.com/">Font generator</a> -->
      <div class="banner-background">
        <div class="grid"></div>
      </div>
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
              sizes="(min-width: 1260px) 350px, 15vw"
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
.gal-image {
  width: 15vw;
  border-radius: 3px;
  box-shadow:
    0 0.156vw 0.313vw rgba(0, 0, 0, 0.2),
    0 0.234vw 0.781vw rgba(0, 0, 0, 0.19);
}
.gal-image:hover {
  -webkit-mask-image: linear-gradient(45deg, #000 25%, rgba(0, 0, 0, 0.2) 50%, #000 75%);
  mask-image: linear-gradient(45deg, #000 25%, rgba(0, 0, 0, 0.2) 50%, #000 75%);
  -webkit-mask-size: 800%;
  mask-size: 800%;
  -webkit-mask-position: 0;
  mask-position: 0;
  transition:
    mask-position 1s ease 0.1s,
    -webkit-mask-position 1s ease 0.1s;
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
@media screen and (max-width: 1000px) {
  .gal-image {
    width: 18vw;
  }
}
@media screen and (max-width: 786px) {
  .gal-image {
    width: 18vw;
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
</style>
