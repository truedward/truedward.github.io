<template>
  <div class="home">
    <Header />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/layout/Header.vue";

@Component({
  components: {
    Header,
  },
})
export default class Home extends Vue {}
</script>
