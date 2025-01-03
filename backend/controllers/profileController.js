const User = require("../models/User");

const proflieController = {
  async getProfile(req, res) {
    try {
      const { username } = req.params;
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json({
        name: user.name,
        username: user.username,
        email: user.email,
        image: user.image,
        points: user.points,
        gameHistory: user.gameHistory,
        totalScores: user.totalScores,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = { proflieController };
