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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutServices = void 0;
const about_model_1 = require("./about.model");
const createAboutIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // call the about model
    const result = yield about_model_1.About.create(payload);
    return result;
});
const getALLAboutFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield about_model_1.About.find();
    return result;
});
const updateAboutFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield about_model_1.About.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
exports.AboutServices = {
    createAboutIntoDB, updateAboutFromDB, getALLAboutFromDB
};
