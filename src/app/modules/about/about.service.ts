import { TAbout } from "./about.interface";
import { About } from "./about.model";

const createAboutIntoDB = async (payload: TAbout) => {
    // call the about model
    const result = await About.create(payload)
    return result;
  };

  const getALLAboutFromDB = async () => {
    const result= await About.find()
    return result;
  };

  const updateAboutFromDB = async (
    id: string,
    payload: Partial<TAbout>,
  ) => {
    const result = await About.findOneAndUpdate(
      { _id: id },
      payload,
      {
        new: true,
      },
    );
  
    return result;
  };


  export const AboutServices = {
    createAboutIntoDB,updateAboutFromDB,getALLAboutFromDB 
  };