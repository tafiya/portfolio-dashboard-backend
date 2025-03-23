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
exports.SkillControllers = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = require("../../utils/catchAsync");
const skills_service_1 = require("./skills.service");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const createSkill = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skills_service_1.SkillServices.createSkillIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Skill created successfully',
        data: result,
    });
}));
const getAllSkills = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skills_service_1.SkillServices.getALLSkillFromDB();
    (0, sendResponse_1.default)(res, {
        message: 'Skills fetched successfully',
        statusCode: http_status_codes_1.StatusCodes.OK,
        data: result,
    });
}));
// get a single Skill
const getSkill = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield skills_service_1.SkillServices.getSkillFromDB(id);
    (0, sendResponse_1.default)(res, {
        message: 'Skill fetched successfully',
        statusCode: http_status_codes_1.StatusCodes.OK,
        data: result,
    });
}));
const updateSkill = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield skills_service_1.SkillServices.updateSkillFromDB(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Skill is updated successfully',
        data: result,
    });
}));
const deleteSkill = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield skills_service_1.SkillServices.deleteSkillFromDB(id);
    (0, sendResponse_1.default)(res, {
        message: 'Skill deleted successfully',
        statusCode: http_status_codes_1.StatusCodes.OK,
        data: "delete"
    });
}));
exports.SkillControllers = {
    createSkill, updateSkill, deleteSkill, getAllSkills, getSkill
};
