"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongoose_1 = require("mongoose");
const config_1 = __importDefault(require("../../config"));
const userSchema = new mongoose_1.Schema({
    name: { type: String, trim: true, required: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, select: 0 },
    role: { type: String, enum: ['Admin'], default: 'Admin' },
    isBlocked: { type: Boolean, default: false },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
// pre middleware function
// using to hide the original password
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const user = this;
        user.password = yield bcrypt_1.default.hash(user.password, Number(config_1.default.bcrypt_salts_round));
        next();
    });
});
//  hide to save the password
userSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
});
userSchema.statics.isUserExistsByCustomId = function (email) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield exports.User.findOne({ email }).select('+password');
    });
};
// for check password
userSchema.statics.isPasswordMatched = function (plainTextPassword, hashedPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcrypt_1.default.compare(plainTextPassword, hashedPassword);
    });
};
// this middleware is used to hide the deleted data from searching individual
userSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
// this middleware is used to hide the deleted data from searching individual
userSchema.pre('findOne', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
userSchema.pre('findOneAndUpdate', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
exports.User = (0, mongoose_1.model)('User', userSchema);
