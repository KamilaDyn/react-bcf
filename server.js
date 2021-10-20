const jsonServer = require("json-server", "json-server-auth");
const server = jsonServer.create();
const router = jsonServer.router("data/db.json");
const middlewares = jsonServer.defaults({ static: "./build" });
const port = process.env.PORT || 8000;
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
