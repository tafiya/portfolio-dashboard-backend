import { z } from "zod";

const createSkillValidationSchema = z.object({
    body: z.object({
        name: z.string().min(1, "Skill Name is required"),
       img: z.string(), 
        ability: z.string()
        
    }),
  });
  export const SkillValidation = {
    createSkillValidationSchema
  };