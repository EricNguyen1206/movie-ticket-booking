const express = require("express");
let router = express.Router();

const initRoutes = (app) => {
  router.get("/", (req, res) => {
    return res.json({ message: "Home page" });
  });

  router.get("/user", (req, res) => {
    return res.json({ message: "user" });
  });

  return app.use("/api", router);
};

module.exports = initRoutes;
