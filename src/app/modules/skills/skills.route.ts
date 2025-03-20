import express from 'express';
import { validateRequest } from '../../middleware/validateRequest';

import { SkillValidation } from './skills.validation';
import { SkillControllers } from './skill.controller';


const router = express.Router();
router.post('/', validateRequest(SkillValidation.createSkillValidationSchema), SkillControllers.createSkill);
router.get("/", SkillControllers.getAllSkills)
router.get('/:id', SkillControllers.getSkill);
router.delete('/:id', SkillControllers.deleteSkill);
router.patch('/:id', SkillControllers.updateSkill
);


export const skillsRoutes = router;