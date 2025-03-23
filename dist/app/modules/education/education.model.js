"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Education = void 0;
const mongoose_1 = require("mongoose");
const educationScheme = new mongoose_1.Schema({
    institution: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: [true, 'subjectis required'],
    },
    degree: {
        type: String,
    },
    duration: {
        type: String,
    },
}, {
    timestamps: true
});
exports.Education = (0, mongoose_1.model)('education', educationScheme);
