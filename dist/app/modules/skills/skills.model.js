"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skill = void 0;
const mongoose_1 = require("mongoose");
const skillScheme = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    img: {
        type: String,
    },
    ability: {
        type: String,
    },
}, {
    timestamps: true
});
exports.Skill = (0, mongoose_1.model)('skill', skillScheme);
