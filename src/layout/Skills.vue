<template>
  <div class="skills" ref="skill">
    <div class="skills__inner" ref="skillInner">
      <div
        class="skills__navigation"
        ref="skillNavigation"
        :class="{
          skills__navigation_active: skill_navigation_active,
        }"
      >
        <h1 class="skills__navigation-title">WEB</h1>
        <h2
          class="skills__navigation-subtitle"
          :class="{
            'skills__navigation-subtitle_active': active_skill_view == index,
          }"
          v-for="(skill, index) in skills"
          :key="skill.id"
          @click="scrollToSkill(index)"
        >
          <div
            :class="{
              'skills__navigation-subtitle-point_active':
                active_skill_view == index,
            }"
            class="skills__navigation-subtitle-point"
          ></div>
          {{ skill.title.value }}
        </h2>
      </div>
      <div class="skills__content">
        <div
          class="skills__item"
          v-for="(skill, index) in skills"
          :key="skill.id"
          ref="skillItems"
          :class="{
            skills__item_active: active_skill_view == index,
          }"
        >
          <div class="skills__item-title skills__item-title_active">
            <div
              class="skills__item-title-underline"
              :style="{
                transform: `translateX(${
                  active_skill_view == index ? skill.underline.bias_x : 0
                }px)`,
                width: `${skill.underline.width}px`,
                backgroundColor: skill.underline.color,
              }"
            ></div>
            {{ skill.title.value }}
          </div>
          <div
            class="skills__item-content"
            v-for="(subskill, _index) in skill.subskills"
            :key="subskill.id"
          >
            <div
              class="skills__item-subtitle"
              :style="{
                transform: `translateX(${subskill.bias_x}px)`,
                transitionDelay: 0.2 + _index * 0.1 + 's',
              }"
            >
              {{ subskill.title.value }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ISkill, { ISkillWithState } from "@/interfaces/Skill";
import Colors from "@/const/Colors";
import Skills from "@/const/Skills";

import DecorateSkillState from "@/decorators/DecorateSkillState";

@Component({})
export default class Home extends Vue {
  mounted() {
    this.generateSkillState();

    {
      let draw = () => {
        // draw&update methods
        this.updateSkillNavigationActiveItem();
        window.requestAnimationFrame(draw);
      };

      draw();
    }
  }

  updateSkillNavigationActiveItem() {
    let skill_items = this.$refs.skillItems as HTMLElement[];
    let skill = this.$refs.skill as HTMLElement;

    let active_item: number | null = null;

    if (
      window.scrollY > skill.offsetTop - window.innerHeight / 4 &&
      window.scrollY <
        skill.offsetTop + skill.offsetHeight - window.innerHeight / 2
    ) {
      this.skill_navigation_active = true;
    } else {
      this.skill_navigation_active = false;
    }

    skill_items.forEach((item, index) => {
      if (
        window.scrollY >
        item.offsetTop + skill.offsetTop - window.innerHeight / 2
      ) {
        active_item = index;
      }
    });

    this.active_skill_view = active_item;
  }

  scrollToSkill(index: number) {
    let skill_items = this.$refs.skillItems as HTMLElement[];
    let skill = this.$refs.skill as HTMLElement;

    let position =
      skill_items[index].offsetTop + skill.offsetTop - window.innerHeight / 6;
    this.$store.commit("scroll/scrollToPosition", {
      position,
    });
  }

  generateSkillState() {
    this.skills.forEach((skill, index) => {
      skill.underline.bias_x =
        (Math.random() * (index % 2 ? 1 : -1) + 0.5) * 80;
      skill.underline.width = (Math.random() + 0.5) * 200;
      skill.underline.color = this.randomColor();

      skill.subskills.forEach((subskill, index) => {
        subskill.bias_x = Math.random() * (index % 2 ? 1 : -1) * 90;
      });
    });
  }

  get randomColor() {
    return () => Colors[Math.floor(Math.random() * Colors.length)];
  }

  skill_navigation_active: boolean = false;

  active_skill_view: number | null = null;

  skills: ISkillWithState[] = Skills.map((skill) => DecorateSkillState(skill));
}
</script>
