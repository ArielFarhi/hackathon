const { Router } = require("express");
const { gameResultController } = require("../controllers/gameResultController");

const gameResultRouter = new Router();

gameResultRouter.post("/", gameResultController.saveGameResult);

module.exports = { gameResultRouter };
