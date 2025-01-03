const { Schema, model } = require('mongoose');

const gameHistorySchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, 
    datePlayed: { type: Date, default: Date.now }, 
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'], 
        required: true,
    },
    totalQuestions: { type: Number, required: true }, 
    correctAnswers: { type: Number, required: true }, 
    score: { type: Number, required: true }, 
    duration: { type: Number, required: true }, 
}, { collection: "gamehistory" } );

const GameHistory = model('GameHistory', gameHistorySchema);

module.exports = GameHistory;
