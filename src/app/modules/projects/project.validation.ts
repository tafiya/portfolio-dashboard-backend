import { z } from "zod";
const createProjectValidationSchema = z.object({
  body: z.object({
    title: z.string().min(3, "Title must be at least 3 characters long"),
    num: z.string(),
    stack: z.array(z.object({ name: z.string().min(1, "Stack name is required") })).optional(), // Added stack field
    category: z.string().min(3, "Title must be at least 3 characters long"),
    mainImg: z.string().url("Main image must be a valid URL"),
    details: z.string().min(10, "Details must be at least 10 characters long"),
    shortDetails: z.string().min(5, "Short details must be at least 5 characters long"),
    image1: z.string().url("Image1 must be a valid URL"),
    image2: z.string().url("Image2 must be a valid URL"),
    image3: z.string().url("Image3 must be a valid URL"),
    liveLink: z.string().url("Live link must be a valid URL"),
    githubServerLink: z.string().url("GitHub server link must be a valid URL"),
    githubClientLink: z.string().url("GitHub client link must be a valid URL"),
  }),
});
export const ProjectValidation = {
  createProjectValidationSchema,
};