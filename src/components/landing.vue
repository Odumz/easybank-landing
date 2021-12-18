<template>
  <div
    class="relative lg:flex justify-center items-center grid md:px-16 bg-light-gray"
  >
    <div class="lg:order-1 lg:w-4/7">
      <img
        class="bgc absolute md:hidden bg-no-repeat inset-0 max-h-98 w-full object-cover"
        src="../assets/bg-intro-mobile.svg"
        alt="intro mobile"
      />
      <div class="mockup image md:hidden flex justify-center md:py-10">
        <img
          src="../assets/image-mockups.png"
          alt="mockups"
          class="object-cover relative sm:mx-24 mm:px-10 mm:h-98 object-bottom w-full h-92"
        />
      </div>
      <div class="bgc">
        <img
          class="md:flex relative top-20 dl:top-24 dlg:top-28 left-7 transform scale-137 hidden bg-no-repeat mb-28"
          src="../assets/bg-intro-desktop.svg"
          alt="intro desktop"
        />
      </div>
      <div class="mockup">
        <img
          src="../assets/image-mockups.png"
          alt="mockups"
          class="absolute top-0 -mt-28 dl:left-10 dlg:left-24 lg:hidden left-1 hidden md:flex transform scale-75"
        />
      </div>
      <div class="">
        <img
          src="../assets/image-mockups.png"
          alt="mockups"
          class="absolute mockup xl:max-h-lg 2xl:max-h-xl max-h-md -right-36 top-0 w-3/5 object-cover object-bottom hidden lg:flex"
        />
      </div>
    </div>
    <div class="lg:w-3/7 mx-7 lg:text-left mt-5 grid mm:pt-10 sm:pt-20 pb-10">
      <h1
        class="title font-medium md:text-5xl text-4xl lg:px-2 py-4 lg:leading-tight md:px-24 sm:px-10"
      >
        Next generation digital banking
      </h1>
      <p class="description sm:text-lg text-grayish-blue">
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </p>
      <div class="btn flex lg:justify-start justify-center items-center my-10">
        <buttons class=""> Request Invite </buttons>
      </div>
    </div>
    <!-- <div class="image">
      <img src="../assets/image-mockups.png" alt="" />
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import buttons from "../components/button.vue";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
gsap.registerPlugin(CSSPlugin);

export default defineComponent({
  name: "landing",
  components: {
    buttons,
  },
  mounted() {
    gsap.from(".title", {
      duration: 2.5,
      opacity: 0,
      x: -100,
      ease: "power3.out",
    });
    gsap.from(".description", {
      duration: 2.5,
      opacity: 0,
      x: -100,
      ease: "power3.out",
    });
    gsap.from(".btn", {
      duration: 2.5,
      opacity: 0,
      x: -100,
      ease: "power3.out",
    });
    gsap.from(".bgc", {
      duration: 3,
      opacity: 0,
      x: 100,
      ease: "power3.out",
    });
    gsap.from(".mockup", {
      duration: 4.5,
      opacity: 0,
      x: 100,
      ease: "power3.out",
    });
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
