<template>
  <div id="app">
    <router-view />
    <Scroll></Scroll>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Scroll from "@/components/Scroll.vue";
export default Vue.extend({
  components: {
    Scroll,
  },
  mounted() {
    this.$store.dispatch("scroll/setUp");
  },
});
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>
