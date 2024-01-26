<template>
  <div class="header">
    <router-link to="/">
      <img class="logo" sizes="(min-width: 500px) 46.98vw, 84.77vw" srcset="https://ik.imagekit.io/theperfectpixl/tr:n-logo256/LogoMainClosebig.png 256w, https://ik.imagekit.io/theperfectpixl/tr:n-logo1710/LogoMainClosebig.png 1710w, https://ik.imagekit.io/theperfectpixl/tr:n-logo2400/LogoMainClosebig.png 2400w"
      src="https://ik.imagekit.io/theperfectpixl/LogoMainClosebig.png" alt="ThePerfectPixl">
    </router-link>
      <div style="display: flex; align-items: baseline;">
        <button class="link" id="menu" @click="visible = !visible">GALLERIES</button>
        <router-link class="link" to="/Showcase">SHOWCASE</router-link>
        <router-link class="link" to="/About">ABOUT ME</router-link>
      </div>
  </div>
  <div :class="{hidden: !visible, nav: visible}">
    <router-link to="/Gallery">MAIN GALLERY</router-link>
    <router-link to="/RID">ROBOTS IN DISGUISE 2001</router-link>
    <router-link to="/Animated">TRANSFORMERS ANIMATED</router-link>
    <router-link to="/WFC">WAR FOR CYBERTRON TRILOGY</router-link>
  </div>
</template>

<script>

export default {
  name: "Nav",
  data() {
    return {
        visible: false
    }
  }
}
</script>

<style>
.hidden {
  display: none;
}
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
	padding: 1%;
	display: none;
	height: auto;
	display: flex;
	justify-content: right;
	align-items: center;
	position: sticky;
	position: -webkit-sticky;
	top: 8.6vw;
	background-color: #f6f6f6;
	box-shadow: 0 0.156vw 0.313vw rgba(0, 0, 0, 0.2), 0 0.234vw 0.781vw rgba(0, 0, 0, 0.19);
	z-index: 1;
}
.nav a {
	font-family: "Lato", sans-serif;
	color: #515151;
	font-size: 1.246vw;
	font-weight: normal;
	margin: 0;
	padding: 0;
	list-style-type: none;
	padding-left: 1.172vw;
	padding-right: 1.172vw;
	padding-bottom: 1.172vw;
	padding-top: 0.781vw;
	display: inline;
	float: right;
}
.nav a:hover {
	background-color: #ddd;
}
@media screen and (min-width: 1600px) {
	.nav {top: 8vw;}
	.nav a {font-size: .9vw;}
}
@media screen and (max-width: 1000px) {
  .header {font-size: 2.425vw;}
  .nav a {font-size: 1.346vw;}
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
}
@media screen and (max-width: 390px) {.header {font-size: 3.9vw;}}
</style>
