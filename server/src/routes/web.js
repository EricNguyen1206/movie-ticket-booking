const express = require("express");
let router = express.Router();

const authController = require("../controllers/auth.controller");

const initRoutes = (app) => {
  router.get("/", (req, res) => {
    return res.json({ message: "Home page" });
  });

  router.get("/user", (req, res) => {
    return res.json({ message: "user" });
  });

  router.post("/sign-up", authController.signUp);

  return app.use("/api", router);
};

module.exports = initRoutes;
