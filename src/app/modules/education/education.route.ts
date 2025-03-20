import express from 'express';

import { validateRequest } from '../../middleware/validateRequest';
import { EducationValidation } from './education.validation';
import { EducationControllers } from './education.controller';


const router = express.Router();
router.post('/', validateRequest(EducationValidation.createEducationValidationSchema), EducationControllers.createEducation
);
router.get("/", EducationControllers.getAllEducations)
router.patch('/:id', EducationControllers.updateEducation
);
router.get('/:id', EducationControllers.getEducation)

router.delete('/:id', EducationControllers.deleteEducation)

export const EducationRoutes = router;