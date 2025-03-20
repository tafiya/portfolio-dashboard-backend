import express from 'express';
import { ProjectControllers } from './project.controller';

const router = express.Router();

router.post('/', ProjectControllers.createProject);
router.get('/', ProjectControllers.getAllProjects);
router.get('/:id', ProjectControllers.getProject);
router.delete('/:id', ProjectControllers.deleteProject);
router.patch('/:id', ProjectControllers.updateProject);

export const ProjectRoutes = router;