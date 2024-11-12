const pool = require('../db');

// Get all journal entries
exports.getAllMeditations = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM meditations');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching entries:', error);
    res.status(500).json({ message: 'Failed to fetch journal entries.' });
  }
};

// Fetch phases for a specific meditation
exports.getMeditationPhases = async (meditationId) => {
  const [phases] = await pool.query('SELECT * FROM meditation_phases WHERE meditation_id = ?', [meditationId]);
  return phases;
};
