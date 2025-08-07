const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist',
    required: true
  },
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Album'
  },
  duration: {
    type: Number, // Duration in seconds
    required: [true, 'Please add a duration']
  },
  genre: {
    type: String,
    required: [true, 'Please add a genre'],
    enum: [
      'Pop',
      'Rock',
      'Hip Hop',
      'R&B',
      'Jazz',
      'Blues',
      'Country',
      'Electronic',
      'Classical',
      'Reggae',
      'Folk',
      'Metal',
      'Punk',
      'Alternative',
      'Indie',
      'Other'
    ]
  },
  filePath: {
    type: String,
    required: [true, 'Please add a file path']
  },
  coverImage: {
    type: String
  },
  lyrics: {
    type: String
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  playCount: {
    type: Number,
    default: 0
  },
  releaseDate: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Song', SongSchema);