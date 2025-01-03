const express = require("express");
const app = express();
const logger = require("morgan");
const { authRouter } = require("./routers/authRouter");
const { leaderboardRouter } = require("./routers/leaderboardRouter")
const { triviaRouter } = require("./routers/triviaRouters");

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(logger("dev"));

app.use("/auth", authRouter);
app.use("/leaderboard", leaderboardRouter);
app.use("/trivia", triviaRouter);

app.use((req, res) => {
  res.status(404).send("Page wasn't found");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
