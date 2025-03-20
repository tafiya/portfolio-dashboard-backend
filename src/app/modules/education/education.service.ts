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


  export const EducationServices = {
    createEducationIntoDB,updateEducationFromDB
  };