const leaderboard = require("../models/Leaderboard");

exports.leaderboardController = {
    async getLeaderboard(req, res) {
        const { difficulty } = req.params;
        const board = await leaderboard.find( {difficulty} );
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