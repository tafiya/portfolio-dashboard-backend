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
exports.EducationServices = void 0;
const http_status_codes_1 = require("http-status-codes");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const education_model_1 = require("./education.model");
const createEducationIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // call the Education model
    const result = yield education_model_1.Education.create(payload);
    return result;
});
const updateEducationFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield education_model_1.Education.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const getALLEducationFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield education_model_1.Education.find();
    return result;
});
const getEducationFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield education_model_1.Education.findById(id);
    if (result == null) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'Education is not exist');
    }
    return result;
});
const deleteEducationFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isProjectsExists = yield education_model_1.Education.findById(id);
    if (!isProjectsExists) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'This Project is not found !');
    }
    yield education_model_1.Education.findByIdAndDelete(id);
});
exports.EducationServices = {
    createEducationIntoDB, updateEducationFromDB,
    getALLEducationFromDB, deleteEducationFromDB, getEducationFromDB
};
