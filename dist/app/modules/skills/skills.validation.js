"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillValidation = void 0;
const zod_1 = require("zod");
const createSkillValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, "Skill Name is required"),
        img: zod_1.z.string(),
        ability: zod_1.z.string()
    }),
});
exports.SkillValidation = {
    createSkillValidationSchema
};
