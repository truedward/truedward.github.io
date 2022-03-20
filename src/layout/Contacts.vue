<template>
  <div class="contacts">
    <img
      class="contacts__background"
      src="@/assets/contacts-background.svg"
      alt=""
    />
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
export default Vue.extend({
  name: "Contacts",
  data: () => ({
    contacts: Contacts,
  }),
});
</script>
