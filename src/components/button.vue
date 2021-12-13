<template>
  <div class="flex">
    <button
      class="py-2 px-4 w- text-white dark:text-gray-800 bg-gradient-to-r from-lime-green to-bright-cyan hover:opacity-75 font-bold rounded-full w-full"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "button",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
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
}
</style>
