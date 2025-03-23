"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectValidation = void 0;
const zod_1 = require("zod");
const createProjectValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(3, "Title must be at least 3 characters long"),
        num: zod_1.z.string(),
        stack: zod_1.z.array(zod_1.z.object({ name: zod_1.z.string().min(1, "Stack name is required") })).optional(), // Added stack field
        category: zod_1.z.string().min(3, "Title must be at least 3 characters long"),
        mainImg: zod_1.z.string().url("Main image must be a valid URL"),
        details: zod_1.z.string().min(10, "Details must be at least 10 characters long"),
        shortDetails: zod_1.z.string().min(5, "Short details must be at least 5 characters long"),
        image1: zod_1.z.string().url("Image1 must be a valid URL"),
        image2: zod_1.z.string().url("Image2 must be a valid URL"),
        image3: zod_1.z.string().url("Image3 must be a valid URL"),
        liveLink: zod_1.z.string().url("Live link must be a valid URL"),
        githubServerLink: zod_1.z.string().url("GitHub server link must be a valid URL"),
        githubClientLink: zod_1.z.string().url("GitHub client link must be a valid URL"),
    }),
});
exports.ProjectValidation = {
    createProjectValidationSchema,
};
