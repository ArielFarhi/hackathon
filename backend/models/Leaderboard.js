const { Schema, model } = require('mongoose');

const leaderboardSchema = new Schema({
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'], 
        required: true,
    },
    players: [
        {
            user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, 
            totalQuestions: { type: Number, required: true }, 
            correctAnswers: { type: Number, required: true }, 
            averageScore: { type: Number, default: 0 }, 
        },
    ],
}, { collection: "leaderboard" });

// leaderboardSchema.methods.updateLeaderboard = async function () {
//     this.players.forEach(player => {
//         player.averageScore = (player.correctAnswers / player.totalQuestions) * 100;
//     });

//     await this.save();
// };

const Leaderboard = model('Leaderboard', leaderboardSchema);

module.exports = Leaderboard;
