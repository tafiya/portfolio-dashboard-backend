
import { model, Schema } from "mongoose";
import { TService } from "./service.interface";



const ServiceScheme = new Schema<TService>(
    {
        num: {
            type: String,
            required: true,
        },
        title: {
            type: String,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
)
export const Service = model<TService>('service', ServiceScheme);