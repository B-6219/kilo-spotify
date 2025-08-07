const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  bio: {
    type: String,
    maxlength: [500, 'Bio cannot be more than 500 characters']
  },
  avatar: {
    type: String,
    default: 'default-artist.png'
  },
  coverImage: {
    type: String
  },
  verified: {
    type: Boolean,
    default: false
  },
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  monthlyListeners: {
    type: Number,
    default: 0
  },
  socialLinks: {
    facebook: String,
    twitter: String,
    instagram: String,
    spotify: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Reverse populate albums and songs with virtuals
ArtistSchema.virtual('albums', {
  ref: 'Album',
  localField: '_id',
  foreignField: 'artist',
  justOne: false
});

ArtistSchema.virtual('songs', {
  ref: 'Song',
  localField: '_id',
  foreignField: 'artist',
  justOne: false
});

// Enable virtuals
ArtistSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Artist', ArtistSchema);