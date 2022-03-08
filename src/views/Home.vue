<template>
  <div class="home">
    <Header />
    <WelcomeScreen />
    <Skills />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/layout/Header.vue";
import WelcomeScreen from "@/layout/WelcomeScreen.vue";
import Skills from "@/layout/Skills.vue";

@Component({
  components: {
    Header,
    WelcomeScreen,
    Skills,
  },
})
export default class Home extends Vue {}
</script>
