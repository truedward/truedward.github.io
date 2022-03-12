<template>
  <div class="skills" ref="skill">
    <div class="skills__inner" ref="skillInner">
      <div class="skills__navigation" ref="skillNavigation">
        <h1 class="skills__navigation-title">WEB</h1>
        <h2
          class="skills__navigation-subtitle"
          :class="{
            'skills__navigation-subtitle_active': active_skill_view == index,
          }"
          v-for="(skill, index) in skills"
          :key="skill.id"
          @click="active_skill_view = index"
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
          v-for="skill in skills"
          :key="skill.id"
          ref="skillItems"
        >
          <div class="skills__item-title skills__item-title_active">
            <div
              class="skills__item-title-underline"
              :style="{
                transform: `translateX(${skill.underline.bias_x}px)`,
                width: `${skill.underline.width}px`,
                backgroundColor: skill.underline.color,
              }"
            ></div>
            {{ skill.title.value }}
          </div>
          <div
            class="skills__item-content"
            v-for="subskill in skill.subskills"
            :key="subskill.id"
          >
            <div
              class="skills__item-subtitle"
              :style="{
                transform: `translateX(${subskill.bias_x}px)`,
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
        this.drawSkillNavigationPosition();
        this.updateSkillNavigationActiveItem();
        window.requestAnimationFrame(draw);
      };

      draw();
    }
  }

  skill_navigation = {
    current_pos: 0,
    anim_to_pos: 0,
  };

  drawSkillNavigationPosition() {
    this.countSkillNavigationPosition();
    this.skill_navigation.current_pos +=
      (this.skill_navigation.anim_to_pos - this.skill_navigation.current_pos) /
      2;

    let skillNavigation = this.$refs.skillNavigation as HTMLElement;

    skillNavigation.style.top = this.skill_navigation.current_pos + "px";
  }

  updateSkillNavigationActiveItem() {
    let skill_items = this.$refs.skillItems as HTMLElement[];
    let skill = this.$refs.skill as HTMLElement;

    let active_item = 0;

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

  countSkillNavigationPosition() {
    let bias =
      (window.innerHeight -
        (this.$refs.skillNavigation as HTMLElement).offsetHeight) /
      2;

    if (
      window.scrollY > (this.$refs.skill as HTMLElement).offsetTop - bias &&
      window.scrollY <
        (this.$refs.skill as HTMLElement).offsetTop +
          (this.$refs.skill as HTMLElement).offsetHeight -
          window.innerHeight
    ) {
      this.skill_navigation.anim_to_pos =
        window.scrollY - (this.$refs.skill as HTMLElement).offsetTop + bias;
    } else if (
      window.scrollY >=
      (this.$refs.skill as HTMLElement).offsetTop +
        (this.$refs.skill as HTMLElement).offsetHeight -
        window.innerHeight
    ) {
      return;
    } else {
      this.skill_navigation.anim_to_pos = 0;
    }
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

  active_skill_view: number = 0;

  skills: ISkillWithState[] = Skills.map((skill) => DecorateSkillState(skill));
}
</script>
