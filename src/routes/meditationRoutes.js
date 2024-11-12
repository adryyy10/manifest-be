const express = require('express');
const router = express.Router();
const meditationController = require('../controllers/meditationController');

// GET all meditations with their phases
router.get('/meditations', meditationController.getAllMeditations);

module.exports = router;
