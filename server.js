const jsonServer = require("json-server", "json-server-auth");
const path = require("path");
const multer = require("multer");
const express = require("express");
const app = express.Router();

const server = jsonServer.create();
const router = jsonServer.router("data/db.json");
const middlewares = jsonServer.defaults({ static: "./build" });
const port = process.env.PORT || 8000;

const storage = multer.diskStorage({
  destination: "./src/uploads/",
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, file + "-" + Date.now() + path.extname(file));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
});

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "$1",
  })
);
server.use(router);
server.listen(port, () => {
  console.log("server is running " + port);
});
