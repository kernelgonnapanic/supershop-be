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
exports.getProductRoutes = void 0;
const loglevel_1 = __importDefault(require("loglevel"));
const express_1 = __importDefault(require("express"));
const products = [
    {
        id: 1,
        name: "Nananan",
        description: "Longer description it is",
    },
    {
        id: 2,
        name: "Foobar",
        description: "Longer description it is",
    },
];
function getProductRoutes() {
    const router = express_1.default.Router();
    router.get("/", listProducts);
    return router;
}
exports.getProductRoutes = getProductRoutes;
// all the controller and utility functions here:
function listProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        loglevel_1.default.info("[products] list");
        res.send(products);
    });
}
//# sourceMappingURL=products.js.map