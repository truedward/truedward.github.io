<template>
  <div class="home">
    <Header />
    <WelcomeScreen />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/layout/Header.vue";
import WelcomeScreen from "@/layout/WelcomeScreen.vue";

@Component({
  components: {
    Header,
    WelcomeScreen,
  },
})
export default class Home extends Vue {}
</script>
