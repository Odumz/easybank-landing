<template>
  <div class="flex">
    <button
      class="py-3 px-10 text-white dark:text-gray-800 bg-gradient-to-r from-lime-green to-bright-cyan hover:opacity-75 font-bold rounded-full w-full"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "button",
});
</script>
