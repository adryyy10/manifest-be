const express = require('express');
const cors = require('cors');
const journalRoutes = require('./routes/journalRoutes');
const meditationRoutes = require('./routes/meditationRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: '*' // Allow all origins (for development). For production, specify allowed origins.
}));
app.use(express.json());

// Routes
app.use('/api', journalRoutes);
app.use('/api', meditationRoutes);

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the Journal Backend API');
});

// Error Handling for Undefined Routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found.' });
});

module.exports = app;
