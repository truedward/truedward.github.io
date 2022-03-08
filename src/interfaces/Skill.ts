export default interface ISkill {
  id: number;
  title: {
    value: string;
  };
  subskills: {
    id: number;
    title: {
      value: string;
    };
  }[];
}
