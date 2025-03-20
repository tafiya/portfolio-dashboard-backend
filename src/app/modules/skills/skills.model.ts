
import { model, Schema } from "mongoose";
import { TSkill } from "./skills.interface";
const skillScheme= new Schema<TSkill>(
    {
        name: {
            type: String,
            required: true,
            unique: true,
          },
          img: {
            type: String,
          },
         ability: {
            type: String,
          },
       
    },
    {
        timestamps:true
    }
)
export const Skill = model<TSkill>('skill', skillScheme);