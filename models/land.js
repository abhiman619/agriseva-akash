const mongoose = require('mongoose');

const landSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    Unique:true
  },
  area: {
    type: Number,
    required: true
 },
  soilType:  {
    type: String,
    required: true
 },
  cropName:  {
    type: String,
    required: true
 },
  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
}, {
    timestamps: true
});

const Land = mongoose.model('Land', landSchema);

module.exports = Land;
