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
exports.ProjectServices = void 0;
// Project.service.ts
const http_status_codes_1 = require("http-status-codes");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const project_model_1 = require("./project.model");
const createProjectsIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.Project.create(payload);
    return result;
});
// get all Projects data
const getALLProjectsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    // const ProjectQuery = new QueryBuilder(Project.find().populate('author'), query)
    //   .search(ProjectSearchableFields)
    //   .sort()
    //   .filter();
    // const result = await ProjectQuery.modelQuery;
    const result = yield project_model_1.Project.find();
    return result;
});
// get a single data
const getProjectFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.Project.findById(id);
    if (result == null) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'Project is not exist');
    }
    return result;
});
const updateProjectFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isProjectsExists = yield project_model_1.Project.findById(id);
    if (!isProjectsExists) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'This Project is not found !');
    }
    const result = yield project_model_1.Project.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteProjectFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isProjectsExists = yield project_model_1.Project.findById(id);
    if (!isProjectsExists) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'This Project is not found !');
    }
    yield project_model_1.Project.findByIdAndDelete(id);
});
exports.ProjectServices = {
    createProjectsIntoDB,
    getALLProjectsFromDB,
    getProjectFromDB,
    updateProjectFromDB,
    deleteProjectFromDB,
};
