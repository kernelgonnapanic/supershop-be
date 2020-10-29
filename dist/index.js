"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loglevel_1 = __importDefault(require("loglevel"));
const server_1 = require("./server");
loglevel_1.default.setLevel("info");
server_1.startServer();
//# sourceMappingURL=index.js.map