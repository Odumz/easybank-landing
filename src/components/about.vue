<template>
  <div class="about md:px-16 px-5 py-10 bg-light-gray">
    <div class="title">
      <h1 class="text-4xl md:text-5xl px-10 py-6">Why choose Easybank?</h1>
      <p class="text-lg text-grayish-blue">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
    </div>
    <div class="body mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <service>
        <template #icon
          ><img src="../assets/icon-online.svg" alt="online banking"
        /></template>
        <template #title> Online Banking </template>
        <template #text-description>
          Our modern web and mobile applications allow you to keep track of your
          finances wherever you are in the world.</template
        >
      </service>
      <service>
        <template #icon
          ><img src="../assets/icon-budgeting.svg" alt="online banking"
        /></template>
        <template #title> Simple Budgeting </template>
        <template #text-description>
          See exactly where your money goes each month. Receive notifications
          when you’re close to hitting your limits.</template
        >
      </service>
      <service>
        <template #icon
          ><img src="../assets/icon-onboarding.svg" alt="online banking"
        /></template>
        <template #title> Fast Onboarding </template>
        <template #text-description>
          We don’t do branches. Open your account in minutes online and start
          taking control of your finances right away.</template
        >
      </service>
      <service>
        <template #icon
          ><img src="../assets/icon-api.svg" alt="online banking"
        /></template>
        <template #title> Open API </template>
        <template #text-description>
          Manage your savings, investments, pension, and much more from one
          account. Tracking your money has never been easier.</template
        >
      </service>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import service from "./service.vue";

export default defineComponent({
  name: "about",
  components: {
    service,
  },
  props: {},
});
</script>
