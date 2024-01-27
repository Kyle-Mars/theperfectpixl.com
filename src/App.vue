<template>
  <pageNav></pageNav>
  <RouterView :imageList="imageList" :content="content"/>
  <pageFooter></pageFooter>
</template>

<script>
import pageNav from "./components/Nav.vue"
import pageFooter from "./components/Footer.vue"
import data from "./assets/data.js"

export default {
  name: "App.vue",
  components:
  {
    pageNav,
    pageFooter
  },
  data()
  {
    return {
      imageList: this.shuffle(data.images),
      content: data.content
    }
  },
  methods: {
    shuffle(array) {
      let currentIndex = array.length,  randomIndex;
      while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      return array;
    }
  }
}
</script>