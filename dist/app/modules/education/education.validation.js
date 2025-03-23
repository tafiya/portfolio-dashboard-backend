"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationValidation = void 0;
const zod_1 = require("zod");
const createEducationValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        institution: zod_1.z.string().min(1, " institution Name is required"),
        degree: zod_1.z.string(), // Store as a string to ensure correct parsing
        duration: zod_1.z.string(),
        subject: zod_1.z.string(),
    }),
});
exports.EducationValidation = {
    createEducationValidationSchema,
};
