// blog routes
import express from 'express';
import { BlogControllers } from './blog.controller';
const router = express.Router();

router.post(
  '/', BlogControllers.createBlog,
);
router.get('/', BlogControllers.getAllBlogs);
router.get('/:id', BlogControllers.getBlog);
router.delete('/:id', BlogControllers.deleteBlog);
router.patch('/:id', BlogControllers.updateBlog);

export const BlogRoutes = router;
