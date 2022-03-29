<template>
  <div class="contacts">
    <img class="contacts__background" :src="background_path" alt="" />
    <div class="contacts__list">
      <template v-for="(contact_block, k) in contacts">
        <span class="contacts__list-title" :key="k + 'span'">{{
          contact_block.title
        }}</span>
        <template>
          <a
            v-for="(contact_link, i) in contact_block.list"
            :key="'al' + k + i"
            class="contacts__list-item"
            :href="contact_link.link"
          >
            {{ contact_link.text }}
            <span v-if="contact_link.subtext" class="contacts__list-item-tip">{{
              contact_link.subtext
            }}</span>
          </a>
        </template>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Contacts from "@/const/Contacts";
import Breakpoints from "@/const/Breakpoints";
const breakpoints_background_image_map = {
  [Breakpoints.mobile_tablet]: require("@/assets/contacts/contacts-background-tablet.svg"),
  [Breakpoints.tablet_desktop]: require("@/assets/contacts/contacts-background-desktop.svg"),
};
export default Vue.extend({
  name: "Contacts",
  data: () => ({
    contacts: Contacts,
    background_path: require("@/assets/contacts/contacts-background-tablet.svg"),
  }),
  mounted() {
    this.updateComponentBackground();

    window.addEventListener("resize", () => {
      this.updateComponentBackground();
    });
  },
  methods: {
    updateComponentBackground() {
      if (
        window.innerWidth > Breakpoints.mobile_tablet &&
        window.innerWidth <= Breakpoints.tablet_desktop
      ) {
        this.background_path =
          breakpoints_background_image_map[Breakpoints.mobile_tablet];
      }

      if (window.innerWidth > Breakpoints.tablet_desktop) {
        this.background_path =
          breakpoints_background_image_map[Breakpoints.tablet_desktop];
      }
    },
  },
});
</script>
