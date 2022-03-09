export interface IStateForSkill {
  id: number;
  underline: {
    width: number;
    bias_x: number;
    color: string;
  };
  subskills: {
    id: number;
    bias_x: number;
  }[];
}

export type ISkillWithState = IStateForSkill & ISkill;

export default interface ISkill {
  title: {
    value: string;
  };
  subskills: {
    title: {
      value: string;
    };
  }[];
}
