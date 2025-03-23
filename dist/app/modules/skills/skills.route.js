"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = require("../../middleware/validateRequest");
const skills_validation_1 = require("./skills.validation");
const skill_controller_1 = require("./skill.controller");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.validateRequest)(skills_validation_1.SkillValidation.createSkillValidationSchema), skill_controller_1.SkillControllers.createSkill);
router.get("/", skill_controller_1.SkillControllers.getAllSkills);
router.get('/:id', skill_controller_1.SkillControllers.getSkill);
router.delete('/:id', skill_controller_1.SkillControllers.deleteSkill);
router.patch('/:id', skill_controller_1.SkillControllers.updateSkill);
exports.skillsRoutes = router;
