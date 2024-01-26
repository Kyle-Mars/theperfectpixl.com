<template>
  <pageNav></pageNav>
  <RouterView />
  <pageFooter></pageFooter>
</template>

<script>
import pageNav from "./components/Nav.vue"
import pageFooter from "./components/Footer.vue"

export default {
  name: "App.vue",
  components:
  {
    pageNav,
    pageFooter
  }
}
</script>