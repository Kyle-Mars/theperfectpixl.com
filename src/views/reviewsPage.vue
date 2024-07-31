<template>
  <body>
    <div class="banner">
      <img
        class="icon"
        sizes="(min-width: 800px) 49.95vw, (min-width: 500px) 62.5vw, (min-width: 400px) 75vw, 81.25vw"
        srcset="
          https://ik.imagekit.io/theperfectpixl/tr:n-logo256/page-assets/reviews-logo-new   256w,
          https://ik.imagekit.io/theperfectpixl/tr:n-logo1710/page-assets/reviews-logo-new 1710w,
          https://ik.imagekit.io/theperfectpixl/tr:n-logo2400/page-assets/reviews-logo-new 2400w
        "
        src="https://ik.imagekit.io/theperfectpixl/page-assets/reviews-logo-new"
        alt="Reviews"
      />
      <!-- <a href="https://www.textstudio.com/">Font generator</a> -->
      <div class="banner-background">
        <div class="grid"></div>
      </div>
    </div>
    <div class="intro">
      <div class="text">
        <p>
          Since 2019 I've been buying, selling, playing with, displaying, and photographing
          Transformers toys. From here you can view a gallery of the photos I've taken or learn more
          about me, my collection, and Transformers.
        </p>
      </div>
    </div>
    <div class="content-body">
      <div class="review-content-wrapper"></div>
    </div>
  </body>
</template>

<script setup></script>

<style scoped>
.review-content-wrapper {
  padding: 2vw;
  margin-top: 2vw;
  margin-bottom: 2vw;
  background-color: white;
  height: auto;
  font-size: 2em;
  text-align: left;
  display: block;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}
.review-button {
  font-family: 'Lato', sans-serif;
  font-size: 1em;
  color: #515151;
  width: 70vw;
  height: 5vw;
  background-color: white;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 1vw;
  margin-bottom: 2vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.review-button:hover {
  box-shadow:
    3px 3px 3px rgba(0, 0, 0, 0.1),
    -2px -2px 2px white;
  transition: box-shadow 0.2s ease;
  border-radius: 10px;
  background-color: #f6f6f6;
}
.review-button::after {
  content: '';
  position: absolute;
  display: inline;
  width: 68vw;
  height: 5px;
  margin-top: 7vw;
  background-image: linear-gradient(90deg, rgb(140, 0, 255), rgb(255, 0, 0));
  border-radius: 10px;
}
@media screen and (max-width: 1000px) {
}
@media screen and (max-width: 786px) {
}
@media screen and (max-width: 486px) {
}
</style>
