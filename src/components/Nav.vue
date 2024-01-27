<template>
	<div style="position: sticky;">
		<div class="header">
			<router-link to="/">
			<img class="logo" sizes="(min-width: 500px) 46.98vw, 84.77vw" srcset="https://ik.imagekit.io/theperfectpixl/tr:n-logo256/LogoMainClosebig.png 256w, https://ik.imagekit.io/theperfectpixl/tr:n-logo1710/LogoMainClosebig.png 1710w, https://ik.imagekit.io/theperfectpixl/tr:n-logo2400/LogoMainClosebig.png 2400w"
			src="https://ik.imagekit.io/theperfectpixl/LogoMainClosebig.png" alt="ThePerfectPixl">
			</router-link>
			<div style="display: flex; align-items: baseline;">
				<button class="link" id="menu" @click="visible = !visible">GALLERIES</button>
				<router-link class="link" to="/Showcase" @click="visible = false">SHOWCASE</router-link>
				<router-link class="link" to="/About" @click="visible = false">ABOUT ME</router-link>
			</div>
		</div>
		<Transition>
			<div class="nav" v-if="visible">
				<router-link to="/Gallery" @click="closeNav()">MAIN GALLERY</router-link>
				<router-link to="/RID" @click="closeNav()">ROBOTS IN DISGUISE 2001</router-link>
				<router-link to="/Animated" @click="closeNav()">TRANSFORMERS ANIMATED</router-link>
				<router-link to="/WFC" @click="closeNav()">WAR FOR CYBERTRON TRILOGY</router-link>
				<div style="width: 2%;"></div>
			</div>
		</Transition>
	</div>
</template>

<script>

export default {
  name: "Nav",
  data() {
    return {
        visible: false
    }
  },
  methods: {
	closeNav(){
		setTimeout(() => this.visible = false, 500)
	}
  }
}
</script>

<style>
.header {	
	font-family: "Lato", "Sans Open", sans-serif ;
	position: -webkit-sticky;
	position: sticky;
	top: 0;
	background-color: white;
	background-size: cover;
	height: auto;
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-weight: bold;
	font-size: 2.125vw;
	box-shadow: 0 0.156vw 0.313vw #00000033, 0 0.234vw 0.781vw rgba(0, 0, 0, 0.19),
		0 -0.156vw 0.313vw rgba(0, 0, 0, 0.2), 0 -0.234vw 0.781vw rgba(0, 0, 0, 0.19);
	z-index: 2;
}
.nav {
	padding: 1% 5% 1% 1%;
	height: auto;
	width: 100%;
	display: flex;
	justify-content: right;
	align-items: center;
	top: 8.6vw;
	position: absolute;
	position: -webkit-sticky;
	background-color: #f6f6f6;
	box-shadow: 0 0.156vw 0.313vw rgba(0, 0, 0, 0.2), 0 0.234vw 0.781vw rgba(0, 0, 0, 0.19);
}
.nav a {
	font-family: "Lato", sans-serif;
	color: #515151;
	font-size: 1.246vw;
	font-weight: normal;
	margin: 0;
	list-style-type: none;
	padding-left: 1.172vw;
	padding-right: 1.172vw;
	padding-bottom: 1.172vw;
	padding-top: 0.781vw;
	display: inline;
	float: right;
}
.nav a:hover {background-color: #ddd;}
.link {
	font-family: "Lato", sans-serif;
	color: #515151;
	font-size: 1.246vw;
	font-weight: normal;
	list-style-type: none;
	padding-left: 1.172vw;
	padding-right: 1.172vw;
	padding-bottom: 1.172vw;
	padding-top: 0.781vw;
	background-color: white;
	border: none;
	outline: none;
	cursor: pointer;
	display: inline;
	float: right;
}
.link:hover {
	background-color: #f6f6f6;
}
.v-enter-active,.v-leave-active {transition: top 0.5s ease-in-out;}
.v-enter-from,.v-leave-to {top: 0;}
.v-enter-to,.v-leave-from {top: 8.6vw;}
@media screen and (min-width: 1600px) {
	.nav {top: 8vw;}
	.nav a {font-size: .9vw;}
	.link{font-size: .9vw;}
}
@media screen and (max-width: 1000px) {
  .header {font-size: 2.425vw;}
  .nav a {font-size: 1.346vw;}
  .link {font-size: 1.746vw;}
}
@media screen and (max-width: 768px) {
  .header {font-size: 2.825vw;}
  .nav a {font-size: 1.746vw;}
}
@media screen and (max-width: 486px) {
	.header {
    font-size: 3.225vw; 
		flex-wrap: wrap; 
		padding: 2%; 
		justify-content: center;
	}
  	.nav a {font-size: 2.746vw;}
	.nav {
    flex-wrap: wrap-reverse; 
		top: 23.5vw; 
		padding: 2%;
	}
	.link {font-size: 2.946vw;}
}
@media screen and (max-width: 414px) {
	.nav a {
    font-size: 3.5vw; 
		text-align: center; 
		padding-bottom: 2vw;  
		padding-top: 2vw;
		padding-left: 5vw; 
		padding-right: 5vw; 
		width: 100vw;
	}
	.nav {top: 25vw; justify-content: center;}
	.link{font-size: 3.5vw; padding-bottom: 2vw;}
}
@media screen and (max-width: 390px) {
	.header {font-size: 3.9vw;}
	.link{padding-top: 1vw; padding-bottom: 2vw;}
}
</style>
