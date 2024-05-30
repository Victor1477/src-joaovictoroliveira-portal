"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = require("./app/logger");
console.clear();
const app = (0, express_1.default)();
const logger = new logger_1.Logger();
var ServerConfig;
(function (ServerConfig) {
    ServerConfig[ServerConfig["PORT"] = 8080] = "PORT";
    ServerConfig["DIST"] = "/opt/projects/src-joaovictoroliveira-portal/dist/app";
})(ServerConfig || (ServerConfig = {}));
app.use("/application/logs", (req, res, next) => {
    logger.plus(req.originalUrl);
    res.send(logger.results);
});
app.use("/", (req, res, next) => {
    logger.plus(req.originalUrl);
    next();
});
app.use("/", express_1.default.static(ServerConfig.DIST));
app.use("", (req, res, next) => {
    res.sendFile(ServerConfig.DIST + "/index.html");
});
app.listen(ServerConfig.PORT, () => {
    console.log("Server Listening on port: " + ServerConfig.PORT);
});
