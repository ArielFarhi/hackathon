const { leaderboardController } = require("../controllers/leaderboardController");
const { Router } = require("express");

const leaderboardRouter = Router();

leaderboardRouter.get("/getLeaderboard", leaderboardController.getLeaderboard);
leaderboardRouter.put("/addPlayer", leaderboardController.addPlayer);

module.exports = { leaderboardRouter };