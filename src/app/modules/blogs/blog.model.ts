// blog model.ts
import { Schema, model } from 'mongoose';
import { TBlog } from '../blogs/blog.interface';

const BlogSchema = new Schema<TBlog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    blogImg:{type:String,required:true},
    detail:{type:String,required:true},
    authorPicture:{type:String,required:true},
    author:{ type: String, required: true },
    isPublished: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);
// middle ware for delate
// this middleware is used to hide the deleted data from showing main data
BlogSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
// this middleware is used to hide the deleted data from searching individual
BlogSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
BlogSchema.pre('findOneAndUpdate', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const Blog = model<TBlog>('Blogs', BlogSchema);
