import { z } from "zod";

const createAboutValidationSchema = z.object({
    body: z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email format"),
        dateOfBirth: z.string().optional(), // Store as a string to ensure correct parsing
        contactNo: z.string().optional(),
        address: z.string().optional(),
        details: z.string().min(1, "Details are required"),
    }),
  });
  export const AboutValidation = {
    createAboutValidationSchema,
  };