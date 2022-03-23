import { ISkillBlock } from "@/interfaces/Skill";

export default (skills: ISkillBlock[]): string => {
  let result = ``;

  skills.forEach((skill_block) => {
    result += skill_block.title + "\n";

    skill_block.skills.forEach((skill) => {
      result += `\t` + skill.title + " " + skill.tag + ": ";

      skill.subskills.forEach((subskill) => {
        result += subskill.title + ", ";
      });

      result += "\n";
    });
  });

  return result;
};
