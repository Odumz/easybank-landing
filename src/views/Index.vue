<template>
  <div class="relative">
    <main-header />
    <landing />
    <about />
    <blog />
    <scroll-to-top
      class="fixed flex w-full top-9/10 inset-x-17/20 mm:inset-x-9/10 md:inset-x-19/20"
    />
    <footer-menu id="contact" />
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import landing from "@/components/landing.vue";
import about from "@/components/about.vue";
import scrollToTop from "@/components/scrollToTop.vue";
import blog from "@/components/blog.vue";
import footerMenu from "@/components/footer.vue";
import mainHeader from "@/components/header.vue";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
gsap.registerPlugin(CSSPlugin);

export default defineComponent({
  name: "Home",
  components: {
    // HelloWorld,
    landing,
    blog,
    about,
    footerMenu,
    mainHeader,
    scrollToTop,
  },
  mounted() {
    gsap.from(".home", {
      duration: 1,
      opacity: 0,
      y: -300,
      ease: "back.out(1.7)",
    });
  },
});
</script>
