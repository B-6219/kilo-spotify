const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({
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
  coverImage: {
    type: String,
    default: 'default-album.png'
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
  releaseDate: {
    type: Date,
    required: [true, 'Please add a release date']
  },
  description: {
    type: String,
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  songs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Song'
    }
  ],
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
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Reverse populate with virtuals
AlbumSchema.virtual('tracks', {
  ref: 'Song',
  localField: '_id',
  foreignField: 'album',
  justOne: false
});

// Enable virtuals
AlbumSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Album', AlbumSchema);