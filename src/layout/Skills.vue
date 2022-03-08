<template>
  <div class="skills">
    <div class="skills__inner">
      <div class="skills__navigation">
        <h1 class="skills__navigation-title">WEB</h1>
        <h2
          class="skills__navigation-subtitle skills__navigation-subtitle_active"
        >
          <div
            class="skills__navigation-subtitle-point skills__navigation-subtitle-point_active"
          ></div>
          HTML
        </h2>
        <h2 class="skills__navigation-subtitle">
          <div class="skills__navigation-subtitle-point"></div>
          CSS
        </h2>
        <h2 class="skills__navigation-subtitle">
          <div class="skills__navigation-subtitle-point"></div>
          JS
        </h2>
        <h2 class="skills__navigation-subtitle">
          <div class="skills__navigation-subtitle-point"></div>
          VUE
        </h2>
        <h2 class="skills__navigation-subtitle">
          <div class="skills__navigation-subtitle-point"></div>
          REACT
        </h2>
        <h2 class="skills__navigation-subtitle">
          <div class="skills__navigation-subtitle-point"></div>
          GITHUB
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
import ISkill from "@/interfaces/Skill";
import Colors from "@/const/Colors";

interface IStateForSkill {
  underline: {
    width: number;
    bias_x: number;
    color: string;
  };
  subskills: {
    bias_x: number;
  }[];
}

type ISkillWithState = IStateForSkill & ISkill;

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

  skills: ISkillWithState[] = [
    {
      id: Math.random(),
      underline: {
        width: 0,
        bias_x: 0,
        color: Colors[0],
      },
      title: {
        value: "HTML",
      },
      subskills: [
        {
          bias_x: 0,
          id: Math.random(),
          title: {
            value: "PUG",
          },
        },
        {
          bias_x: 0,
          id: Math.random(),
          title: {
            value: "JSX&TSX",
          },
        },
      ],
    },
    {
      id: Math.random(),
      underline: {
        width: 0,
        bias_x: 0,
        color: Colors[0],
      },
      title: {
        value: "CSS",
      },
      subskills: [
        {
          bias_x: 0,
          id: Math.random(),
          title: {
            value: "SCSS&SASS",
          },
        },
        {
          bias_x: 0,
          id: Math.random(),
          title: {
            value: "CSS ANIMATIONS",
          },
        },
        {
          bias_x: 0,
          id: Math.random(),
          title: {
            value: "FLEXBOX",
          },
        },
      ],
    },
  ];
}
</script>
