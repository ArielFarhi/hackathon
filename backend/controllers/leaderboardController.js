const leaderboard = require("../models/Leaderboard");

exports.leaderboardController = {
    async getLeaderboard(req, res) {

        const easy_players = await leaderboard.find( { difficulty: easy});
        const medium_players = await leaderboard.find( { difficulty: medium});
        const hard_players = await leaderboard.find( { difficulty: hard});

        board.easy = easy_players;
        board.medium = medium_players;
        board.hard = hard_players;

        res.json(board);
    },

    async addPlayer(req, res) {
        const { user, totalQuestions, correctAnswers, averageScore } = req.body;

        if (!username || !score || !difficulty) {
            return res.status(400).json({ error: 'All fields (user, totalQuestions, correctAnswers, averageScore) are required' });
        }
        
        const newPerson = new leaderboard({
            user: user,
            totalQuestions: totalQuestions,
            correctAnswers: correctAnswers,
            averageScore: averageScore
        });

        await newPerson.save();

        res.status.json({ message: 'Person added successfully', data: newPerson })
    }
};