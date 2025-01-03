const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String },
    points: { type: Number, default: 0 },
    gameHistory: [
      {
        date: { type: Date },
        score: { type: Number },
        difficulty: {
          type: String,
          required: true,
          enum: ["easy", "medium", "hard"],
        },
      },
    ],
    totalScores: {
      easy: { type: Number, default: 0 },
      medium: { type: Number, default: 0 },
      hard: { type: Number, default: 0 },
    },
  },
  { collection: "users" }
);

const User = model("User", userSchema);

module.exports = User;
