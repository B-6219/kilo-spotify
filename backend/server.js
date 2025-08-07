const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Route files
const auth = require('./routes/auth');
const artists = require('./routes/artists');
const albums = require('./routes/albums');
const songs = require('./routes/songs');
const playlists = require('./routes/playlists');
const search = require('./routes/search');
const likes = require('./routes/likes');

// Initialize Express app
const app = express();

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Cross-origin resource sharing
app.use(morgan('combined')); // Logging
app.use(express.json({ limit: '50mb' })); // Parse JSON bodies
app.use(express.urlencoded({ extended: true, limit: '50mb' })); // Parse URL-encoded bodies

// Mount routers
app.use('/api/v1/auth', auth);
app.use('/api/v1/artists', artists);
app.use('/api/v1/albums', albums);
app.use('/api/v1/songs', songs);
app.use('/api/v1/playlists', playlists);
app.use('/api/v1/search', search);
app.use('/api/v1/likes', likes);

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Spotify Clone API' });
});

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;