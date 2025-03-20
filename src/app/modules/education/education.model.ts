
import { model, Schema } from "mongoose";
import { TEducation } from "./education.interface";


const educationScheme= new Schema<TEducation>(
    {
       institution: {
            type: String,
            required: true,

          },
          subject: {
            type: String,
            required: [true, 'subjectis required'],
          
          },
      
          degree:  {
            type: String,
          },
         duration: {
            type: String,
          },
       
    },
    {
        timestamps:true
    }
)
export const Education = model<TEducation>('education', educationScheme);