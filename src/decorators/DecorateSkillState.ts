import ISkill, { ISkillWithState, IStateForSkill } from "@/interfaces/Skill";

let DecorateSkillState = (skill: ISkill): ISkillWithState => {
  let state: IStateForSkill = {
    id: Math.random(),
    underline: {
      width: 0,
      bias_x: 0,
      color: "",
    },
    subskills: [],
  };

  let skill_with_state: ISkillWithState = Object.assign(state, skill);

  skill_with_state.subskills.forEach((subskill) => {
    subskill.bias_x = 0;
    subskill.id = Math.random();
  });

  return skill_with_state;
};

export default DecorateSkillState;
