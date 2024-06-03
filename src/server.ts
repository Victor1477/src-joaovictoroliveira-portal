import express from "express";
import { Logger } from "./app/logger";
import { appendFile } from "fs";

console.clear();
const app = express();
const logger = new Logger();

enum ServerConfig {
  PORT = 8080,
  DIST = "/opt/projects/src-joaovictoroliveira-portal/dist/app",
}

app.use("/application/logs", (req, res, next) => {
  logger.plus(req.originalUrl);
  res.send(logger.results);
});

app.use("/", (req, res, next) => {
  logger.plus(req.originalUrl);
  const date = new Date();
  date.setHours(date.getHours() - 3);
  const log = {
    url: req.originalUrl,
    date: date.toISOString(),
    ip: req.ip,
    method: req.method,
    body: req.body,
    query: req.query,
    headers: req.headers,
    params: req.params,
  };
  appendFile("./logs.txt", JSON.stringify(log) + "\n", () => {});
  next();
});

app.use("/", express.static(ServerConfig.DIST));

app.use("", (req, res, next) => {
  res.sendFile(ServerConfig.DIST + "/index.html");
});

app.listen(ServerConfig.PORT, () => {
  console.log("Server Listening on port: " + ServerConfig.PORT);
});
