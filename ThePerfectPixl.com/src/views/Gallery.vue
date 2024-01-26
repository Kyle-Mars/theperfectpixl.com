<template>
	<body>
		<div class="banner">
			<img id="gal-icon" sizes="(min-width: 420px) 42.98vw, 55.22vw" srcset="https://ik.imagekit.io/theperfectpixl/tr:n-22icon256/GalAutobig.png 256w, https://ik.imagekit.io/theperfectpixl/tr:n-22icon1710/GalAutobig.png 1710w, https://ik.imagekit.io/theperfectpixl/tr:n-22icon2400/GalAutobig.png 2400w" src="https://ik.imagekit.io/theperfectpixl/GalAutobig.png" alt="Gallery">
			<video playsinline autoplay loop muted preload="metadata" id="bannervideo">
				<source src="https://ik.imagekit.io/theperfectpixl/Cheetor.mp4" type="video/mp4">
			</video>
		</div>
		<div class="intro">
			<div class="text" v-html="content.galText"></div>
		</div> <br>
		<div class="filterdiv">
			<input id="filter" v-model="search" placeholder="Search images by character name, toyline...">
		</div>
		<div style="flex: 1">
			<div class="body" id="gen-image">
				<div v-for="(image, index) in imageList" :key="index">
					<a v-if="image.alt.toLowerCase().includes(search.toLowerCase())" :href="'https://ik.imagekit.io/theperfectpixl/' + image.src" class="image-link"> 
						<img class="gen-image" sizes="(min-width: 1260px) 350px, 15.18vw" :srcset="'https://ik.imagekit.io/theperfectpixl/tr:n-size256/' + image.src + ' 256w, https://ik.imagekit.io/theperfectpixl/tr:n-size470/' + image.src + ' 470w, https://ik.imagekit.io/theperfectpixl/tr:n-size740/' + image.src + ' 740w, https://ik.imagekit.io/theperfectpixl/tr:n-size940/' + image.src + ' 940w'" :src="'https://ik.imagekit.io/theperfectpixl/' + image.src" height="400" width="300" :alt="image.alt">
					</a>
				</div>
			</div>
		</div>
	</body>
</template>

<script>
export default {
	name: "Gallery",
	props: { 
		imageList: Array,
		content: Object 
	},
	data () { return { search: "" } }
}
</script>

<style scoped>
.gal-image {width: 13vw;}
#gal-icon {
	width: 43%;
	position: absolute;
	box-shadow: 0 0 0;
}
@media screen and (min-width: 1600px) {#gal-icon {width: 33%;}}
@media screen and (max-width: 486px) {.gal-image {width: 22vw;}}
@media screen and (max-width: 414px) {#gal-icon {width: 55%;}}
</style>