<template>
  <div
    class="container relative lg:flex justify-center items-center grid md:px-16 bg-light-gray"
  >
    <div class="lg:order-1 lg:w-4/7">
      <img
        class="absolute md:hidden bg-no-repeat inset-0 max-h-98 w-full object-cover"
        src="../assets/bg-intro-mobile.svg"
        alt="intro mobile"
      />
      <div class="image md:hidden flex justify-center md:py-10">
        <img
          src="../assets/image-mockups.png"
          alt="mockups"
          class="object-cover relative md:w-full object-bottom w-full h-92"
        />
      </div>
      <div>
        <img
          class="md:flex relative top-20 transform scale-125 hidden bg-no-repeat w-full mb-24"
          src="../assets/bg-intro-desktop.svg"
          alt="intro desktop"
        />
      </div>
      <!-- <div class="">
        <img
          src="../assets/image-mockups.png"
          alt="mockups"
          class="absolute top-0 object-bottom"
        />
      </div> -->
    </div>
    <div class="lg:w-3/7 mx-7 md:text-left pb-10">
      <h1
        class="font-medium md:text-5xl text-4xl lg:px-2 py-4 lg:leading-tight md:px-16 sm:px-10"
      >
        Next generation digital banking
      </h1>
      <p class="sm:text-lg text-grayish-blue">
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </p>
      <div class="flex lg:justify-start justify-center items-center my-10">
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

export default defineComponent({
  name: "landing",
  components: {
    buttons,
  },
  props: {},
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
