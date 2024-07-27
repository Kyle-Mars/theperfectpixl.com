<template>
  <div style="position: sticky">
    <div class="header">
      <router-link to="/">
        <img
          class="logo"
          sizes="(min-width: 500px) 46.98vw, 84.77vw"
          srcset="
            https://ik.imagekit.io/theperfectpixl/tr:n-logo256/LogoMainClosebig.png   256w,
            https://ik.imagekit.io/theperfectpixl/tr:n-logo1710/LogoMainClosebig.png 1710w,
            https://ik.imagekit.io/theperfectpixl/tr:n-logo2400/LogoMainClosebig.png 2400w
          "
          src="https://ik.imagekit.io/theperfectpixl/LogoMainClosebig.png"
          alt="ThePerfectPixl"
        />
      </router-link>
      <div style="display: flex; align-items: baseline">
        <router-link class="link" to="/Showcase">SHOWCASE</router-link>
        <router-link class="link" to="/Gallery">GALLERY</router-link>
        <router-link class="link" to="/About">ABOUT ME</router-link>
      </div>
    </div>
  </div>
</template>

<style>
.header {
  font-family: 'Lato', 'Sans Open', sans-serif;
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
  box-shadow:
    0 0.156vw 0.313vw #00000033,
    0 0.234vw 0.781vw rgba(0, 0, 0, 0.19),
    0 -0.156vw 0.313vw rgba(0, 0, 0, 0.2),
    0 -0.234vw 0.781vw rgba(0, 0, 0, 0.19);
  z-index: 2;
}
.link {
  font-family: 'Lato', sans-serif;
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
.v-enter-active,
.v-leave-active {
  transition: top 0.5s ease-in-out;
}
.v-enter-from,
.v-leave-to {
  top: 0;
}
.v-enter-to,
.v-leave-from {
  top: 8.6vw;
}
@media screen and (min-width: 1600px) {
  .link {
    font-size: 0.9vw;
  }
}
@media screen and (max-width: 1000px) {
  .header {
    font-size: 2.425vw;
  }
  .link {
    font-size: 1.746vw;
  }
}
@media screen and (max-width: 768px) {
  .header {
    font-size: 2.825vw;
  }
}
@media screen and (max-width: 486px) {
  .header {
    font-size: 3.225vw;
    flex-wrap: wrap;
    padding: 2%;
    justify-content: center;
  }
  .link {
    font-size: 2.946vw;
  }
}
@media screen and (max-width: 414px) {
  .link {
    font-size: 3.5vw;
    padding-bottom: 2vw;
  }
}
@media screen and (max-width: 390px) {
  .header {
    font-size: 3.9vw;
  }
  .link {
    padding-top: 1vw;
    padding-bottom: 2vw;
  }
}
</style>
