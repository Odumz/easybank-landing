<template>
  <div
    class="lg:justify-between items-center md:px-16 px-7 bg-dark-blue grid lg:flex"
  >
    <div class="lg:flex lg:space-x-20 items-center justify-center">
      <div class="grid justify-items-center lg:gap-y-10">
        <div class="flex justify-center mt-10 mb-7">
          <img src="../assets/logo_white.svg" alt="easybank_logo" />
        </div>
        <div class="flex justify-center items-center mb-9 gap-4">
          <a href="https://facebook.com" target="_blank">
            <img src="../assets/icon-facebook.svg" alt="facebook" />
          </a>
          <a href="https://youtube.com" target="_blank">
            <img src="../assets/icon-youtube.svg" alt="youtube" />
          </a>
          <a href="https://twitter.com" target="_blank">
            <img src="../assets/icon-twitter.svg" alt="twitter" />
          </a>
          <a href="https://pinterest.com" target="_blank">
            <img src="../assets/icon-pinterest.svg" alt="pintrest" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <img src="../assets/icon-instagram.svg" alt="instagram" />
          </a>
        </div>
      </div>
      <div class="grid lg:flex gap-4 lg:gap-8 text-white">
        <div class="grid lg:text-left gap-y-5">
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <a href="#blog">Blog</a>
        </div>
        <div class="grid lg:text-left gap-y-5">
          <a href="#careers">Careers</a>
          <a href="#support">Support</a>
          <a href="#privacypolicy">Privacy Policy</a>
        </div>
      </div>
    </div>
    <div class="grid items-center justify-items-center lg:justify-items-end">
      <div class="flex justify-center items-center my-7">
        <buttons class=""> Request Invite </buttons>
      </div>
      <div class="text-grayish-blue mb-16">
        &copy; Easybank. All Rights Reserved
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import buttons from "../components/button.vue";

export default defineComponent({
  name: "footer",
  components: {
    buttons,
  },
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
