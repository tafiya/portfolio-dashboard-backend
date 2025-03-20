// blog.controller.ts
import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogServices } from './blog.service';


const createBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.createBlogsIntoDB(req.body);
  sendResponse(res, {
    message: 'Blog created successfully',
    statusCode: StatusCodes.CREATED,
    data: result,
  });
});
const getAllBlogs = catchAsync(async (req, res) => {
  const result = await BlogServices.getALLBlogsFromDB();
  sendResponse(res, {
    message: 'Blogs fetched successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});
// get a single Blog
const getBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogServices.getBlogFromDB(id);
  sendResponse(res, {
    message: 'Blog fetched successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});
const updateBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogServices.updateBlogFromDB(id, req.body);
  sendResponse(res, {
    message: 'Blog updated successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  await BlogServices.deleteBlogFromDB(id);
  // sendResponse(res, {
  //   message: 'Blog deleted successfully',
  //   statusCode: StatusCodes.OK,

  // });
});
export const BlogControllers = {
  createBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
};
