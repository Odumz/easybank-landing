<template>
  <div class="container relative bg-no-repeat grid md:px-16">
    <img
      class="absolute md:hidden bg-no-repeat inset-0 max-h-98 w-full object-cover"
      src="../assets/bg-intro-mobile.svg"
      alt="intro mobile"
    />
    <img
      class="absolute md:flex hidden bg-no-repeat inset-0 h-full w-full object-cover"
      src="../assets/bg-intro-desktop.svg"
      alt="intro mobile"
    />
    <div class="image flex justify-center md:py-10">
      <img
        src="../assets/image-mockups.png"
        alt=""
        class="object-cover relative md:w-full object-bottom w-full h-92"
      />
    </div>
    <div class="text-content px-5">
      <h1 class="font-medium md:text-5xl text-4xl py-3 px-10">
        Next generation digital banking
      </h1>
      <p class="text-lg">
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </p>
      <buttons>Request Invite</buttons>
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
.h-100 {
  height: 27rem;
}
</style>
