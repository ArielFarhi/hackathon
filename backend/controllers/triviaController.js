const fetch = require('node-fetch');

const fetchTriviaQuestions = async (req, res) => {
    try {
        const amount = req.query.amount || 10; 
        const category = req.query.category || ''; 
        const difficulty = req.query.difficulty || ''; 
        const type = req.query.type || ''; 

        const url = `https://opentdb.com/api.php?amount=${amount}${
            category ? `&category=${category}` : ''
        }${difficulty ? `&difficulty=${difficulty}` : ''}${
            type ? `&type=${type}` : ''
        }`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.response_code !== 0) {
            return res.status(400).json({ message: 'Failed to fetch trivia questions', error: data.response_code });
        }

        res.json(data.results);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


module.exports = { fetchTriviaQuestions };
