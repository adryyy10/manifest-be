const express = require('express');
const router = express.Router();
const journalController = require('../controllers/journalController');

// GET /entries - Fetch all journal entries
router.get('/entries', journalController.getAllEntries);

// POST /entries - Add a new journal entry
router.post('/entries', journalController.addEntry);

// DELETE /entries/:id - Delete a journal entry by ID
router.delete('/entries/:id', journalController.deleteEntry);

module.exports = router;
