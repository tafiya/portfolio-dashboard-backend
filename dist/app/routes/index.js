"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const about_route_1 = require("../modules/about/about.route");
const skills_route_1 = require("../modules/skills/skills.route");
const education_route_1 = require("../modules/education/education.route");
const blog_route_1 = require("../modules/blogs/blog.route");
const project_route_1 = require("../modules/projects/project.route");
const service_route_1 = require("../modules/services/service.route");
const auth_route_1 = require("../modules/Auth/auth.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/about',
        route: about_route_1.AboutRoutes,
    },
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/skills',
        route: skills_route_1.skillsRoutes,
    },
    {
        path: '/education',
        route: education_route_1.EducationRoutes,
    },
    {
        path: '/blogs',
        route: blog_route_1.BlogRoutes,
    },
    {
        path: '/projects',
        route: project_route_1.ProjectRoutes,
    },
    {
        path: '/service',
        route: service_route_1.ServiceRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
