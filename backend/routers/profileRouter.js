const { proflieController } = require("../controllers/profileController");
const { Router } = require("express");

const profileRouter = new Router();

profileRouter.get("/:username", proflieController.getProfile);

module.exports = { profileRouter };
