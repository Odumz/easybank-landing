<template>
  <div class="mb-5 rounded bg-white">
    <div class="icon flex justify-center items-center mb-3">
      <slot name="icon"></slot>
    </div>
    <div class="text-left px-6">
      <h1 class="text-sm pt-4 text-grayish-blue">
        <slot name="author"></slot>
      </h1>
      <h1 class="text-xl pt-1 pb-3 opacity-90"><slot name="title"></slot></h1>
      <p class="text-grayish-blue mb-10">
        <slot name="text-description"></slot>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "article",
  props: {},
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
