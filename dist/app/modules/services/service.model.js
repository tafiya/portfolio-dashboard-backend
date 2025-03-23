"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const mongoose_1 = require("mongoose");
const ServiceScheme = new mongoose_1.Schema({
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
}, {
    timestamps: true
});
exports.Service = (0, mongoose_1.model)('service', ServiceScheme);
