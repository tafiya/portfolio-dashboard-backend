
import { model, Schema } from "mongoose";
import { TService } from "./service.interface";



const ServiceScheme = new Schema<TService>(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: [true, 'email is required'],
            unique: true,
            trim: true,
        },
        dateOfBirth: { type: Date, trim: true },
        contactNo: {
            type: String,
        },
        address: {
            type: String,
        },
        details: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
)
export const Service = model<TService>('service', ServiceScheme);