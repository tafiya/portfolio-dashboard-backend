"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
// blog routes
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("./blog.controller");
const router = express_1.default.Router();
router.post('/', blog_controller_1.BlogControllers.createBlog);
router.get('/', blog_controller_1.BlogControllers.getAllBlogs);
router.get('/:id', blog_controller_1.BlogControllers.getBlog);
router.delete('/:id', blog_controller_1.BlogControllers.deleteBlog);
router.patch('/:id', blog_controller_1.BlogControllers.updateBlog);
exports.BlogRoutes = router;
