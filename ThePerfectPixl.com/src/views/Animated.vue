<template>
	<body>
		<div class="banner">
			<img id="anim-icon" src="https://ik.imagekit.io/theperfectpixl/LogoAnimated.png" alt="The logo of Transformers Animated.">
			<video playsinline autoplay loop muted preload="metadata" id="bannervideo">
				<source src="https://ik.imagekit.io/theperfectpixl/Animated.mp4" type="video/mp4">
			</video>
		</div>
		<div class="intro">
			<div class="text" v-html="content.animText"></div>
		</div><br>
		<div class="filterdiv">
			<input id="filter" v-model="search" placeholder="Search images by character name, toyline...">
		</div>
		<div style="flex: 1">
			<div class="body" id="gen-image">
				<div v-for="(image, index) in imageList" :key="index">
					<a v-if="image.anim && image.alt.toLowerCase().includes(search.toLowerCase())" :href="'https://ik.imagekit.io/theperfectpixl/' + image.src" class="image-link"> 
						<img class="gen-image" sizes="(min-width: 1260px) 350px, 15.18vw" :srcset="'https://ik.imagekit.io/theperfectpixl/tr:n-size256/' + image.src + ' 256w, https://ik.imagekit.io/theperfectpixl/tr:n-size470/' + image.src + ' 470w, https://ik.imagekit.io/theperfectpixl/tr:n-size740/' + image.src + ' 740w, https://ik.imagekit.io/theperfectpixl/tr:n-size940/' + image.src + ' 940w'" :src="'https://ik.imagekit.io/theperfectpixl/' + image.src" height="400" width="300" :alt="image.alt">
					</a>
				</div>
			</div>
		</div>
	</body>
</template>

<script>
export default {
	name: "Animated",
	props: { 
		imageList: Array,
		content: Object 
	},
	data () { return {search: "" } }
}
</script>

<style scoped>
#anim-icon {
	width: 40%;
	position: absolute;
	box-shadow: 0 0 0;
}
@media screen and (min-width: 1600px) {#anim-icon {width: 30%;}}
</style>