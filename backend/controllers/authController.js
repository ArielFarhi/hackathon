const User = require("../models/User");
const authController = {
  async register(req, res) {
    try {
      const { username, email, password } = req.body;
      const image = `https://avatar.iran.liara.run/public/boy?username=${username}`;
      const user = await User.create({ username, email, password, image });
      res.status(201).json({ user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      if (user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      return res.status(200).json({ user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = { authController };
