<template>
  <div
    class="flex justify-between md:px-16 px-5 items-center py-3 overflow-hidden"
  >
    <div class="p-3">
      <img src="../assets/logo.svg" alt="easybank logo" />
    </div>
    <div class="lg:flex justify-between items-center text-grayish-blue hidden">
      <router-link to="/" class="px-4">Home</router-link>
      <router-link to="/about" class="px-4">About</router-link>
      <router-link to="/contact" class="px-4">Contact</router-link>
      <router-link to="/blog" class="px-4">Blog</router-link>
      <router-link to="/careers" class="px-4">Careers</router-link>
    </div>
    <div class="cta_btn lg:flex hidden">
      <buttons>Request Invite</buttons>
    </div>
    <!-- <div class="hamburger flex lg:hidden">
      <img src="../assets/icon-hamburger.svg" alt="hamburger-menu" />
      <img src="../assets/icon-close.svg" alt="close-menu" />
      <div
        class="mobile-menu grid px-10 py-5 rounded-md bg-white sm:w-1/4 w-2/3 border-2 absolute top-16 right-16"
      >
        <router-link to="/" class="py-2">Home</router-link>
        <router-link to="/about" class="py-2">About</router-link>
        <router-link to="/contact" class="py-2">Contact</router-link>
        <router-link to="/blog" class="py-2">Blog</router-link>
        <router-link to="/careers" class="py-2">Careers</router-link>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import buttons from "../components/button.vue";

export default defineComponent({
  name: "header",
  components: {
    buttons,
  },
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
