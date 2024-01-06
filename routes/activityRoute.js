const express = require('express');
const router = express.Router();
const ActivityController = require('../controllers/ActivityController');

const activityController = new ActivityController();

// Rota para obter uma atividade
router.get('/', async (req, res) => {
  await activityController.getActivity(req, res);
});

module.exports = router;