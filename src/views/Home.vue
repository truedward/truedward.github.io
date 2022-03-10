<template>
  <div class="home">
    <Header />
    <WelcomeScreen />
    <Skills />
    <Contacts />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/layout/Header.vue";
import WelcomeScreen from "@/layout/WelcomeScreen.vue";
import Skills from "@/layout/Skills.vue";
import Contacts from "@/layout/Contacts.vue";

@Component({
  components: {
    Header,
    WelcomeScreen,
    Skills,
    Contacts,
  },
})
export default class Home extends Vue {
  mounted() {
    this.$store.dispatch("scroll/setUp");
  }
}
</script>
