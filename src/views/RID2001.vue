<template>
	<body>
		<div class="banner">
			<img id="rid-icon" src="https://ik.imagekit.io/theperfectpixl/LogoRID.png" alt="The logo of Robots in Digsuise 2001.">
			<video playsinline autoplay loop muted preload="metadata" id="bannervideo">
				<source src="https://ik.imagekit.io/theperfectpixl/RID.mp4" type="video/mp4">
			</video>
		</div>
		<div class="intro">
			<div class="text" v-html="content.ridText"></div>
		</div><br>
		<div class="filterdiv">
			<input id="filter" v-model="search" placeholder="Search images by character name, toyline...">
		</div>
		<div style="flex: 1">
			<div class="body" id="gen-image">
				<div v-for="(image, index) in imageList" :key="index">
					<Transition>
						<img v-if="image.rid && image.alt.toLowerCase().includes(search.toLowerCase())" class="gen-image" sizes="(min-width: 1260px) 350px, 15.18vw" :srcset="'https://ik.imagekit.io/theperfectpixl/tr:n-size256/' + image.src + ' 256w, https://ik.imagekit.io/theperfectpixl/tr:n-size470/' + image.src + ' 470w, https://ik.imagekit.io/theperfectpixl/tr:n-size740/' + image.src + ' 740w, https://ik.imagekit.io/theperfectpixl/tr:n-size940/' + image.src + ' 940w'" :src="'https://ik.imagekit.io/theperfectpixl/' + image.src" height="400" width="300" :alt="image.alt">
					</Transition>
				</div>
			</div>
		</div>
	</body>
</template>

<script>
export default {
	name: "Robots in Disguise",
	props: { 
		imageList: Array,
		content: Object 
	},
	data () { return { search: "" } }
}
</script>

<style scoped>
#rid-icon {
	width: 50%;
	position: absolute;
	box-shadow: 0 0 0;
}
.v-enter-active,.v-leave-active {transition: max-width 0.5s ease-in-out;}
.v-enter-from,.v-leave-to {max-width: 0%;}
.v-enter-to,.v-leave-from {max-width: 100%;}
@media screen and (min-width: 1600px) {#rid-icon {width: 40%;}}
@media screen and (max-width: 414px) {#rid-icon {width: 55%;}}
</style>