<template>
  <div class="service">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="content">
      <h1>Online Banking<slot name="title"></slot></h1>
      <p>
        <slot name="text-description"></slot>
        Our modern web and mobile applications allow you to keep track of your
        finances wherever you are in the world.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
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
