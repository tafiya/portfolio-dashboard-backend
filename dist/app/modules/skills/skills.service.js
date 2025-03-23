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
exports.SkillServices = void 0;
const http_status_codes_1 = require("http-status-codes");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const skills_model_1 = require("./skills.model");
const createSkillIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // call the about model
    const result = yield skills_model_1.Skill.create(payload);
    return result;
});
const updateSkillFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skills_model_1.Skill.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const getALLSkillFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skills_model_1.Skill.find();
    return result;
});
const getSkillFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skills_model_1.Skill.findById(id);
    if (result == null) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'Project is not exist');
    }
    return result;
});
const deleteSkillFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isSkillsExists = yield skills_model_1.Skill.findById(id);
    if (!isSkillsExists) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'This Skill is not found !');
    }
    yield skills_model_1.Skill.findByIdAndDelete(id);
});
exports.SkillServices = {
    createSkillIntoDB, updateSkillFromDB, deleteSkillFromDB, getALLSkillFromDB, getSkillFromDB
};
