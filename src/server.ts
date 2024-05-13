import express from "express";

console.clear();
const app = express();

enum ServerConfig {
  PORT = 80,
  DIST = "/opt/projects/src-joaovictoroliveira-portal/dist/app",
}

app.use("/", express.static(ServerConfig.DIST));

app.use("", (req, res, next) => {
  res.sendFile(ServerConfig.DIST + "/index.html");
});

app.listen(ServerConfig.PORT, () => {
  console.log("Server Listening on port: " + ServerConfig.PORT);
});
