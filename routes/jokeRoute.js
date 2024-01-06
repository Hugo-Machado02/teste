const express = require('express');
const router = express.Router();
const JokeController = require('../controllers/JokeController');

const jokeController = new JokeController();

// Rota para obter uma piada
router.get('/', async (req, res) => {
    await jokeController.getJoke(req, res);
});

module.exports = router;