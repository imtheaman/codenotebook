"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serve = void 0;
const express_1 = __importDefault(require("express"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
const path_1 = __importDefault(require("path"));
const cells_routes_1 = require("./routes/cells.routes");
const serve = (port, filename, dir, useProxy) => {
    const app = (0, express_1.default)();
    if (useProxy) {
        app.use((0, http_proxy_middleware_1.createProxyMiddleware)({
            target: "http://localhost:3000",
            ws: true,
            logLevel: "silent",
        }));
    }
    else {
        const pkgPath = require.resolve("local-client/build/index.html");
        app.use(express_1.default.static(path_1.default.dirname(pkgPath)));
    }
    app.use((0, cells_routes_1.createCellsRouter)(filename, dir));
    return new Promise((resolve, reject) => {
        app.listen(port, resolve).on("error", reject);
    });
};
exports.serve = serve;
