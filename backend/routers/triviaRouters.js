const { Router } = require('express');
const { fetchTriviaQuestions } = require('../controllers/triviaController');

const triviaRouter = new Router();

triviaRouter.get('/', fetchTriviaQuestions);

module.exports = { triviaRouter };