import { model, Schema } from "mongoose";
import { TProject } from "./project.interface";
const projectScheme = new Schema<TProject>(
  {
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
  },
  { timestamps: true }
)
export const Project = model<TProject>('projects', projectScheme);