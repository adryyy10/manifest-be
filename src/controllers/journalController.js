const pool = require('../db');

// Get all journal entries
exports.getAllEntries = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM journal_entries ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching entries:', error);
    res.status(500).json({ message: 'Failed to fetch journal entries.' });
  }
};

// Add a new journal entry
exports.addEntry = async (req, res) => {
  const { entry_text } = req.body;

  if (!entry_text || entry_text.trim() === '') {
    return res.status(400).json({ message: 'Entry text is required.' });
  }

  try {
    const [result] = await pool.query('INSERT INTO journal_entries (entry_text) VALUES (?)', [entry_text]);
    const newEntry = {
      id: result.insertId,
      entry_text,
      created_at: new Date(),
    };
    res.status(201).json(newEntry);
  } catch (error) {
    console.error('Error adding entry:', error);
    res.status(500).json({ message: 'Failed to add journal entry.' });
  }
};

// Delete a journal entry by ID
exports.deleteEntry = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.query('DELETE FROM journal_entries WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Journal entry not found.' });
    }

    res.json({ message: 'Journal entry deleted successfully.' });
  } catch (error) {
    console.error('Error deleting entry:', error);
    res.status(500).json({ message: 'Failed to delete journal entry.' });
  }
};
