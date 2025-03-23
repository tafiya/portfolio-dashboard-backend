"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutValidation = void 0;
const zod_1 = require("zod");
const createAboutValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, "Name is required"),
        email: zod_1.z.string().email("Invalid email format"),
        dateOfBirth: zod_1.z.string().optional(), // Store as a string to ensure correct parsing
        contactNo: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
        details: zod_1.z.string().min(1, "Details are required"),
    }),
});
exports.AboutValidation = {
    createAboutValidationSchema,
};
