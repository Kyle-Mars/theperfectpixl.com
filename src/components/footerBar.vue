<template>
  <div class="footer">
    <span class="text foot_text"
      >Contact me at <a href="mailto:kylelmars@gmail.com">kylelmars@gmail.com</a>.</span
    >
    <!-- <button @click="topFunction" class="link" class="top">To Top</button> -->
  </div>
</template>

<!-- <script setup>
function topFunction() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
</script> -->

<style scoped>
.footer {
  position: relative;
  z-index: 1;
  background-color: #f6f6f6;
  height: auto;
  padding: 1.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow:
    0 -0.156vw 0.313vw rgba(0, 0, 0, 0.2),
    0 -0.234vw 0.781vw rgba(0, 0, 0, 0.19);
}
.foot_text {
  font-size: 1em;
}
@media screen and (max-width: 768px) {
  .foot_text {
    font-size: 0.8em;
  }
}
@media screen and (max-width: 486px) {
  .foot_text {
    font-size: 0.6em;
  }
}
</style>
