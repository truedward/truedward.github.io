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
  tag?: string;
  title: string;
  subskills: {
    title: string;
  }[];
}

export interface ISkillBlock {
  title: string;
  skills: ISkill[];
}
