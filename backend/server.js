const express = require("express");
const app = express();
const logger = require("morgan");
const { authRouter } = require("./routers/authRouter");
<<<<<<< Updated upstream
const { lederbordRouter } = require("./routers/leaderboardRouter")
=======
const { triviaRouter } = require("./routers/triviaRouters");
>>>>>>> Stashed changes

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(logger("dev"));

app.use("/auth", authRouter);
<<<<<<< Updated upstream
app.use("/leaderboard", lederbordRouter);
=======
app.use("/trivia", triviaRouter);

>>>>>>> Stashed changes

app.use((req, res) => {
  res.status(404).send("Page wasn't found");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
