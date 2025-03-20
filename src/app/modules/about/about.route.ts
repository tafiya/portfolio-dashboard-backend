import express from 'express';
import { AboutControllers } from './about.controller';
import { validateRequest } from '../../middleware/validateRequest';
import { AboutValidation } from './about.validation';

const router = express.Router();
router.post('/',validateRequest(AboutValidation.createAboutValidationSchema),AboutControllers.createAbout
  );
  router.patch('/:id',AboutControllers.updateAbout
  );
  

export const AboutRoutes = router;