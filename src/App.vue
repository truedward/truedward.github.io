<template>
  <div id="app">
    <router-view />
    <Scroll></Scroll>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Scroll from "@/components/Scroll.vue";
import Contacts from "@/const/Contacts";
import Skills from "@/const/Skills";
import ContactsJSONTOText from "@/parsers/ContactsJSONTOText";
import SkillsJSONTOText from "@/parsers/SkillsJSONTOText";
export default Vue.extend({
  components: {
    Scroll,
  },
  mounted() {
    this.$store.dispatch("scroll/setUp");

    console.log(SkillsJSONTOText(Skills));
    console.log(ContactsJSONTOText(Contacts));
  },
});
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>
