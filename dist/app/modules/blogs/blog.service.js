"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogServices = void 0;
// blog.service.ts
const http_status_codes_1 = require("http-status-codes");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const blog_model_1 = require("./blog.model");
const createBlogsIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.create(payload);
    return result;
});
// get all Blogs data
const getALLBlogsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    // const blogQuery = new QueryBuilder(Blog.find().populate('author'), query)
    //   .search(blogSearchableFields)
    //   .sort()
    //   .filter();
    // const result = await blogQuery.modelQuery;
    const result = yield blog_model_1.Blog.find();
    return result;
});
// get a single data
const getBlogFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.findById(id);
    if (result == null) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'Blog is not exist');
    }
    return result;
});
const updateBlogFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isBlogsExists = yield blog_model_1.Blog.findById(id);
    if (!isBlogsExists) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'This blog is not found !');
    }
    const result = yield blog_model_1.Blog.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteBlogFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isBlogsExists = yield blog_model_1.Blog.findById(id);
    if (!isBlogsExists) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'This blog is not found !');
    }
    yield blog_model_1.Blog.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
});
exports.BlogServices = {
    createBlogsIntoDB,
    getALLBlogsFromDB,
    getBlogFromDB,
    updateBlogFromDB,
    deleteBlogFromDB,
};
