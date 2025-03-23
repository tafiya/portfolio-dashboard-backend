"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = require("../../middleware/validateRequest");
const education_validation_1 = require("./education.validation");
const education_controller_1 = require("./education.controller");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.validateRequest)(education_validation_1.EducationValidation.createEducationValidationSchema), education_controller_1.EducationControllers.createEducation);
router.get("/", education_controller_1.EducationControllers.getAllEducations);
router.patch('/:id', education_controller_1.EducationControllers.updateEducation);
router.get('/:id', education_controller_1.EducationControllers.getEducation);
router.delete('/:id', education_controller_1.EducationControllers.deleteEducation);
exports.EducationRoutes = router;
