const { authController } = require("../controllers/authController");
const { Router } = require("express");

const authRouter = new Router();

authRouter.get("/login", authController.login);
authRouter.post("/register", authController.register);

module.exports = { authRouter };
