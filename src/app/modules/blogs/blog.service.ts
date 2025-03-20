// blog.service.ts
import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogsIntoDB = async (payload: TBlog) => {

  const result = await Blog.create(payload);
  return result;
};
// get all Blogs data
const getALLBlogsFromDB = async () => {
  // const blogQuery = new QueryBuilder(Blog.find().populate('author'), query)
  //   .search(blogSearchableFields)
  //   .sort()
  //   .filter();

  // const result = await blogQuery.modelQuery;
  const result = await Blog.find()
  return result;
};
// get a single data
const getBlogFromDB = async (id: string) => {
  const result = await Blog.findById(id);
  if (result == null) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Blog is not exist');
  }
  return result;
};
const updateBlogFromDB = async (
  id: string,
  payload: Partial<TBlog>,

) => {

  const isBlogsExists = await Blog.findById(id);
  if (!isBlogsExists) {
    throw new AppError(StatusCodes.NOT_FOUND, 'This blog is not found !');
  }
  const result = await Blog.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};
const deleteBlogFromDB = async (id: string) => {

  const isBlogsExists = await Blog.findById(id);
  if (!isBlogsExists) {
    throw new AppError(StatusCodes.NOT_FOUND, 'This blog is not found !');
  }

  await Blog.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
};
export const BlogServices = {
  createBlogsIntoDB,
  getALLBlogsFromDB,
  getBlogFromDB,
  updateBlogFromDB,
  deleteBlogFromDB,
};
