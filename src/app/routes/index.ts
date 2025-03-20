import { Router } from 'express';
import { AboutRoutes } from '../modules/about/about.route';
import { skillsRoutes } from '../modules/skills/skills.route';
import { EducationRoutes } from '../modules/education/education.route';
import { BlogRoutes } from '../modules/blogs/blog.route';
import { ProjectRoutes } from '../modules/projects/project.route';
import { ServiceRoutes } from '../modules/services/service.route';


const router = Router();

const moduleRoutes = [
  {
    path: '/about',
    route: AboutRoutes,
  },
  {
    path: '/skills',
    route: skillsRoutes,
  },
  {
    path: '/education',
    route: EducationRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/projects',
    route: ProjectRoutes,
  },
  {
    path: '/service',
    route: ServiceRoutes,
  },

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
