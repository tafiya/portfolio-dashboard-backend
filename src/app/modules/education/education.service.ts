import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/AppError";
import { TEducation } from "./education.interface";
import { Education } from "./education.model";


const createEducationIntoDB = async (payload: TEducation) => {
  // call the Education model
  const result = await Education.create(payload)
  return result;
};
const updateEducationFromDB = async (
  id: string,
  payload: Partial<TEducation>,
) => {
  const result = await Education.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );

  return result;
};
const getALLEducationFromDB = async () => {
  const result = await Education.find()
  return result;
};
const getEducationFromDB = async (id: string) => {
  const result = await Education.findById(id);
  if (result == null) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Education is not exist');
  }
  return result;
};
const deleteEducationFromDB = async (id: string) => {

  const isProjectsExists = await Education.findById(id);
  if (!isProjectsExists) {
    throw new AppError(StatusCodes.NOT_FOUND, 'This Project is not found !');
  }

  await Education.findByIdAndDelete(id);
};

export const EducationServices = {
  createEducationIntoDB, updateEducationFromDB,
  getALLEducationFromDB, deleteEducationFromDB, getEducationFromDB
};