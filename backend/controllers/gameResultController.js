const User = require("../models/User");

const gameResultController = {
  async saveGameResult(req, res) {
    try {
      const { username, difficulty, score } = req.body;
      difficulty = difficulty.toLowerCase();
      if (!username || !difficulty || score) {
        return res.status(400).json({ message: "Invalid request data" });
      }
      const validDifficulties = ["easy", "medium", "hard"];
      if (!validDifficulties.includes(difficulty)) {
        return res.status(400).json({
          message: `Difficulty must be one of: ${validDifficulties.join(", ")}`,
        });
      }
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const date = new Date();
      user.gameHistory.push({ date, score, difficulty });
      user.totalScores[difficulty] += score;
      user.points += score;
      await user.save();
      res.status(201).json({
        message: "Game result saved successfully",
        updatedScores: user.totalScores,
        totalPoints: user.points,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = { gameResultController };
