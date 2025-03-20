import express from 'express';

import { validateRequest } from '../../middleware/validateRequest';
import { EducationValidation } from './education.validation';
import { EducationControllers } from './education.controller';


const router = express.Router();
router.post('/',validateRequest(EducationValidation.createEducationValidationSchema),EducationControllers.createEducation
  );
  router.patch('/:id',EducationControllers.updateEducation
  );
  

export const EducationRoutes = router;