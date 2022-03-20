<template>
  <div class="text-view">
    <Header></Header>
    <div class="text-view__inner">
      <div class="document">
        <h1>Skills:</h1>
        <div v-for="(skill_block, i) in skills_filling" :key="i + 'div'">
          <h2>{{ skill_block.title }}</h2>
          <div v-for="(skill, o) in skill_block.skills" :key="o + 'div'">
            <h3>
              <div></div>
              {{ skill.title }}
              <span v-if="skill.tag" v-html="skill.tag"></span>
            </h3>
            <div v-for="(subskill, k) in skill.subskills" :key="k + 'div'">
              <p v-html="subskill.title"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="document">
        <h1>Contacts:</h1>
        <template v-for="(contact_block, k) in contacts">
          <h2 :key="k + 'span'">{{ contact_block.title }}</h2>
          <br :key="k + 'br'" />
          <template>
            <a
              v-for="(contact_link, i) in contact_block.list"
              :key="i + 'a' + k"
              :href="contact_link.link"
            >
              {{ contact_link.text }}
              <small v-if="contact_link.subtext" class="document__text-small"
                >({{ contact_link.subtext }})</small
              >
              <br :key="i + 'br'" />
            </a>
            <br :key="k + 'br2'" />
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/layout/Header.vue";

import Contacts from "@/const/Contacts";
import SkillsFilling from "@/const/Skills";

export default Vue.extend({
  components: {
    Header,
  },
  data() {
    return {
      contacts: Contacts,
      skills_filling: SkillsFilling,
    };
  },
});
</script>
