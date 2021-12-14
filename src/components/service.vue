<template>
  <div class="mb-5">
    <div class="icon flex justify-center items-center my-3">
      <slot name="icon"></slot>
    </div>
    <div class="content">
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
