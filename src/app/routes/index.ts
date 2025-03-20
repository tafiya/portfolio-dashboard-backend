import { Router } from 'express';
import { AboutRoutes } from '../modules/about/about.route';
import { skillsRoutes } from '../modules/skills/skills.route';
import { EducationRoutes } from '../modules/education/education.route';


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

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
