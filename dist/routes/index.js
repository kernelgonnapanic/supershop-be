"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoutes = void 0;
const express_1 = __importDefault(require("express"));
const products_1 = require("./products");
function getRoutes() {
    const router = express_1.default.Router();
    router.use("/products", products_1.getProductRoutes());
    return router;
}
exports.getRoutes = getRoutes;
//# sourceMappingURL=index.js.map