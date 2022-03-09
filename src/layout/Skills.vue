<template>
  <div class="skills">
    <div class="skills__inner">
      <div class="skills__navigation">
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
        <div class="skills__item" v-for="skill in skills" :key="skill.id">
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
