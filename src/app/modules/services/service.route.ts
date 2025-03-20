import express from 'express';
import { ServiceControllers } from './service.controller';



const router = express.Router();
router.post('/', ServiceControllers.createService
);
router.get("/", ServiceControllers.getAllServices)
router.patch('/:id', ServiceControllers.updateService
);
router.get('/:id', ServiceControllers.getService)

router.delete('/:id', ServiceControllers.deleteService)

export const ServiceRoutes = router;