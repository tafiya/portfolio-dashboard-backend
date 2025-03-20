import express from 'express';
import { validateRequest } from '../../middleware/validateRequest';

import { SkillValidation } from './skills.validation';
import { SkillControllers } from './skill.controller';


const router = express.Router();
router.post('/',validateRequest(SkillValidation.createSkillValidationSchema),SkillControllers.createSkill);
  router.patch('/:id',SkillControllers.updateSkill
  );
  

export const skillsRoutes = router;