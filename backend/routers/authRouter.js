const { authController } = require("../controllers/authController");
const { Router } = require("express");

const authRouter = new Router();

authRouter.get("/", authController.login);
authRouter.post("/", authController.register);

module.exports = { authRouter };
