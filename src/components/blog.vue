<template>
  <div class="about md:px-16 px-7 py-10 bg-light-gray">
    <div class="title">
      <h1 class="text-4xl md:text-5xl px-10 py-6">Latest Articles</h1>
      <!-- <p class="text-lg text-grayish-blue">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p> -->
    </div>
    <div class="body mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <articles>
        <template #icon
          ><img
            src="../assets/image-currency.jpg"
            class="rounded-t"
            alt="currency"
        /></template>
        <template #author> By Claire Robinson </template>
        <template #title> Receive money in any currency with no fees </template>
        <template #text-description>
          The world is getting smaller and we’re becoming more mobile. So why
          should you be forced to only receive money in a single ...</template
        >
      </articles>
      <articles>
        <template #icon
          ><img
            src="../assets/image-restaurant.jpg"
            alt="restaurant"
            class="rounded-t"
        /></template>
        <template #author> By Wilson Hutton </template>
        <template #title>
          Treat yourself without worrying about money
        </template>
        <template #text-description>
          Our simple budgeting feature allows you to separate out your spending
          and set realistic limits each month. That means you ...</template
        >
      </articles>
      <articles>
        <template #icon
          ><img
            src="../assets/image-plane.jpg"
            class="rounded-t"
            alt="online banking"
        /></template>
        <template #author> By Wilson Hutton </template>
        <template #title> Take your Easybank card wherever you go </template>
        <template #text-description>
          We want you to enjoy your travels. This is why we don’t charge any
          fees on purchases while you’re abroad. We’ll even show you
          ...</template
        >
      </articles>
      <articles>
        <template #icon
          ><img
            src="../assets/image-confetti.jpg"
            class="rounded-t"
            alt="online banking"
        /></template>
        <template #author> By Claire Robinson </template>
        <template #title>
          Our invite-only Beta accounts are now live!
        </template>
        <template #text-description>
          After a lot of hard work by the whole team, we’re excited to launch
          our closed beta. It’s easy to request an invite through the
          site.</template
        >
      </articles>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import articles from "./article.vue";

export default defineComponent({
  name: "blog",
  components: {
    articles,
  },
  props: {},
});
</script>
