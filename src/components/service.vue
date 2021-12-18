<template>
  <div class="mb-5">
    <div class="icon flex lg:justify-start justify-center items-center my-3">
      <slot name="icon"></slot>
    </div>
    <div class="lg:text-left">
      <h1 class="text-xl py-3"><slot name="title"></slot></h1>
      <p class="text-lg text-grayish-blue">
        <slot name="text-description"></slot>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "service",
});
</script>
