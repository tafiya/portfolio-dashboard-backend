import { z } from "zod";

const createEducationValidationSchema = z.object({
    body: z.object({
        institution: z.string().min(1, " institution Name is required"),
        degree: z.string(), // Store as a string to ensure correct parsing
        duration: z.string(),
        subject: z.string(),

    }),
  });
  export const EducationValidation = {
    createEducationValidationSchema,
  };