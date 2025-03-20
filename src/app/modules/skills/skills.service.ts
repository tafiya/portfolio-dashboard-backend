import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/AppError";
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
const getALLSkillFromDB = async () => {
  const result = await Skill.find()
  return result;
};
const getSkillFromDB = async (id: string) => {
  const result = await Skill.findById(id);
  if (result == null) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Project is not exist');
  }
  return result;
};
const deleteSkillFromDB = async (id: string) => {
  const isSkillsExists = await Skill.findById(id);
  if (!isSkillsExists) {
    throw new AppError(StatusCodes.NOT_FOUND, 'This Skill is not found !');
  }
  await Skill.findByIdAndDelete(id);
};

export const SkillServices = {
  createSkillIntoDB, updateSkillFromDB, deleteSkillFromDB, getALLSkillFromDB, getSkillFromDB
};