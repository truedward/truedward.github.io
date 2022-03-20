<template>
  <div class="header">
    <div class="header__inner">
      <div class="header__switcher">
        <div
          class="header__switcher-item"
          :class="{
            'header__switcher-item_active': readMode,
          }"
          @click="activateReadMode"
        >
          SIMPLE
        </div>
        <div
          @click="deactivateReadMode"
          class="header__switcher-item"
          :class="{
            'header__switcher-item_active': !readMode,
          }"
        >
          GALLANT
        </div>
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
    this.$store.commit("scroll/scrollToPosition", {
      position: document.body.scrollHeight - window.innerHeight,
    });
  }

  get readMode(): boolean {
    return this.$route.name == "TextView";
  }

  activateReadMode() {
    this.$router.push({ name: "TextView" });
  }
  deactivateReadMode() {
    this.$router.push({ name: "Home" });
  }
}
</script>

<style lang="scss"></style>
