<template>
  <div class="header">
    <div class="header__inner">
      <div class="header__language-switcher">
        <div
          class="header__language-switcher-item header__language-switcher-item_active"
        >
          UA
        </div>
        <div class="header__language-switcher-item">EN</div>
      </div>
      <div class="header__contacts-btn">
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
  // @Prop() private msg!: string;
}
</script>

<style lang="scss"></style>
