const express = require("express");
let router = express.Router();

const authController = require("../controllers/auth.controller");

const authMiddleware = require("../middlewares/auth");

const initRoutes = (app) => {
    router.get("/", (req, res) => {
        return res.json({ message: "Home page" });
    });

    router.get("/user", (req, res) => {
        return res.json({ message: "user" });
    });

    router.post("/sign-up", authController.signUp);
    router.post("/verify-account", authController.verifyAccount);
    router.post("/sign-in", authController.signIn);

    router.post("/check", authMiddleware.isAuthenticated, authController.check);

    return app.use("/api", router);
};

module.exports = initRoutes;
