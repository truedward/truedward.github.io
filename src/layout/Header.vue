<template>
  <div class="header">
    <div class="header__inner">
      <div class="header__language-switcher">
        <template v-if="false">
          <div
            class="header__language-switcher-item header__language-switcher-item_active"
          >
            UA
          </div>
          <div class="header__language-switcher-item">EN</div>
        </template>
      </div>
      <div class="header__contacts-btn" @click="scrollToContacts">
        <div class="header__contacts-btn-bg-line_1"></div>
        <div class="header__contacts-btn-bg-line_2"></div>
        <div class="header__contacts-btn-bg-line_3"></div>
        CONTACTS
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  scrollToContacts() {
    console.log(document.body.scrollHeight - window.innerHeight);
    this.$store.commit("scroll/scrollToPosition", {
      position: document.body.scrollHeight - window.innerHeight,
    });
  }
}
</script>

<style lang="scss"></style>
