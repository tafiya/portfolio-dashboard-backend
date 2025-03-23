"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.About = void 0;
const mongoose_1 = require("mongoose");
const aboutScheme = new mongoose_1.Schema({
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
}, {
    timestamps: true
});
exports.About = (0, mongoose_1.model)('about', aboutScheme);
