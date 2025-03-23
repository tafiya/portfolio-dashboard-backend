"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
// blog model.ts
const mongoose_1 = require("mongoose");
const BlogSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    blogImg: { type: String, required: true },
    detail: { type: String, required: true },
    authorPicture: { type: String, required: true },
    author: { type: String, required: true },
    isPublished: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
}, {
    timestamps: true,
});
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
exports.Blog = (0, mongoose_1.model)('Blogs', BlogSchema);
