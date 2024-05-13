"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
console.clear();
const app = (0, express_1.default)();
var ServerConfig;
(function (ServerConfig) {
    ServerConfig[ServerConfig["PORT"] = 80] = "PORT";
    ServerConfig["DIST"] = "/opt/projects/src-joaovictoroliveira-portal/dist/app";
})(ServerConfig || (ServerConfig = {}));
app.use("/", express_1.default.static(ServerConfig.DIST));
app.use("", (req, res, next) => {
    res.sendFile(ServerConfig.DIST + "/index.html");
});
app.listen(ServerConfig.PORT, () => {
    console.log("Server Listening on port: " + ServerConfig.PORT);
});
