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
          As fun as it is playing with and taking photos of toys, (and it is quite fun), there's
          also something enjoyable about being able to share specific thoughts on them. Whether in a
          conversation to a friend or as a long, potentially rambling internet blog post, it's a
          great way to put into words the ways in which this hobby brings me joy. So here are some
          toy reviews! Don't worry, they're not just walls of text; I've got plenty of pics
          throughout each to break things up and act as a handy visual aid.
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
