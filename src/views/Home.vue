<template>
  <div class="home">
    <Header />
    <WelcomeScreen />
    <Skills
      v-for="(skill_block, i) in skills_filling"
      :key="i"
      :filling="skill_block"
    />
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
import SkillsFilling from "@/const/Skills";

@Component({
  components: {
    Header,
    WelcomeScreen,
    Skills,
    Contacts,
  },
})
export default class Home extends Vue {
  skills_filling = SkillsFilling;
}
</script>
