"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const router = express_1.default.Router();
router.post('/', service_controller_1.ServiceControllers.createService);
router.get("/", service_controller_1.ServiceControllers.getAllServices);
router.patch('/:id', service_controller_1.ServiceControllers.updateService);
router.get('/:id', service_controller_1.ServiceControllers.getService);
router.delete('/:id', service_controller_1.ServiceControllers.deleteService);
exports.ServiceRoutes = router;
