"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const mongoose_1 = require("mongoose");
const projectScheme = new mongoose_1.Schema({
    title: { type: String, required: true },
    stack: [{ name: { type: String, required: true } }],
    num: { type: String, required: true },
    category: { type: String, required: true },
    mainImg: { type: String, required: true },
    details: { type: String, required: true },
    shortDetails: { type: String, required: true },
    image1: { type: String },
    image2: { type: String },
    image3: { type: String },
    liveLink: { type: String, required: true },
    githubServerLink: { type: String, required: true },
    githubClientLink: { type: String, required: true },
}, { timestamps: true });
exports.Project = (0, mongoose_1.model)('projects', projectScheme);
