import { TSkill } from "./skills.interface";
import { Skill } from "./skills.model";

const createSkillIntoDB = async (payload: TSkill) => {
    // call the about model
    const result = await Skill.create(payload)
    return result;
  };
  const updateSkillFromDB = async (
    id: string,
    payload: Partial<TSkill>,
  ) => {
    const result = await Skill.findOneAndUpdate(
      { _id: id },
      payload,
      {
        new: true,
      },
    );
  
    return result;
  };


  export const SkillServices = {
    createSkillIntoDB,updateSkillFromDB
  };