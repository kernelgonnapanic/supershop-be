"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const loglevel_1 = __importDefault(require("loglevel"));
const routes_1 = require("./routes");
function startServer({ port = process.env.PORT || 3001 } = {}) {
    const app = express_1.default();
    app.use("/api", routes_1.getRoutes());
    app.use(errorMiddleware);
    const server = app.listen(port, () => {
        loglevel_1.default.info(`Listening on port ${port}`);
    });
}
exports.startServer = startServer;
function errorMiddleware(error, req, res, next) {
    if (res.headersSent) {
        next(error);
    }
    else {
        loglevel_1.default.error(error);
        res.status(500);
        res.json(Object.assign({ message: error.message }, (process.env.NODE_ENV === "production"
            ? null
            : { stack: error.stack })));
    }
}
//# sourceMappingURL=server.js.map