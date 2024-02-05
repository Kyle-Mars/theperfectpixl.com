<template>
   <body>
      <div class="banner">
         <img id="show-icon" sizes="(min-width: 420px) 48.48vw, 68.22vw" srcset="https://ik.imagekit.io/theperfectpixl/tr:n-20icon256/ShowDecbig.png 256w, https://ik.imagekit.io/theperfectpixl/tr:n-20icon1710/ShowDecbig.png 1710w, https://ik.imagekit.io/theperfectpixl/tr:n-20icon2400/ShowDecbig.png 2400w" src="https://ik.imagekit.io/theperfectpixl/ShowDecbig.png" alt="Showcase">
         <video playsinline autoplay loop muted preload="metadata" id="bannervideo">
            <source src="https://ik.imagekit.io/theperfectpixl/OptimusFilm.mp4" type="video/mp4">
         </video>
      </div>
      <div class="intro">
         <div class="text" v-html="content.showText"></div>
      </div><br>
      <div style="flex: 1">
         <div class="body" id="big-image">
            <div v-for="(image, index) in imageList" :key="index" @click="selected != null ? selected = null : selected = index">
					<Transition name="search">
						<img v-if="image.show" class="show-image" sizes="(min-width: 1260px) 350px, 20.91vw" :srcset="'https://ik.imagekit.io/theperfectpixl/tr:n-size256/' + image.src + ' 256w, https://ik.imagekit.io/theperfectpixl/tr:n-size700/' + image.src + ' 700w, https://ik.imagekit.io/theperfectpixl/tr:n-size1000/' + image.src + ' 1000w, https://ik.imagekit.io/theperfectpixl/tr:n-size1220/' + image.src + ' 1220w, https://ik.imagekit.io/theperfectpixl/tr:n-size1410/' + image.src + ' 1410w'" 
						:src="'https://ik.imagekit.io/theperfectpixl/' + image.src" height="400" width="300" :alt="image.alt">
					</Transition>
					<Transition name="lightbox">
						<div v-if="selected == index" :class="{background: selected == index}">
							<img class="selected"  :src="'https://ik.imagekit.io/theperfectpixl/tr:n-size940/' + image.src" height="400" width="300" :alt="image.alt">
						</div>
					</Transition>
				</div>
         </div>
      </div>
   </body>
</template>

<script>
export default {
	name: "Showcase",
	props: { 
      imageList: Array,
      content: Object 
	},
	data () { 
      return { 
         selected: null 
      } 
   }
}
</script>

<style scoped>
.show-image {width: 22vw;}
#show-icon {
	width: 50%; 
	position: absolute;
	box-shadow: 0 0 0;
}
@media screen and (min-width: 1600px) {#show-icon {width: 60%;}}
@media screen and (max-width: 486px) {.show-image {width: 33vw;}}
@media screen and (max-width: 414px) {#show-icon {width: 70%;}}
</style>