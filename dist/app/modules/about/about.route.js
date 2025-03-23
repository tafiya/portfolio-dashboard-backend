"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutRoutes = void 0;
const express_1 = __importDefault(require("express"));
const about_controller_1 = require("./about.controller");
const validateRequest_1 = require("../../middleware/validateRequest");
const about_validation_1 = require("./about.validation");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.validateRequest)(about_validation_1.AboutValidation.createAboutValidationSchema), about_controller_1.AboutControllers.createAbout);
router.get("/", about_controller_1.AboutControllers.getAbout);
router.patch('/:id', about_controller_1.AboutControllers.updateAbout);
exports.AboutRoutes = router;
