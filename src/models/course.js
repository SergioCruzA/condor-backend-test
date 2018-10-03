const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define course schema 
let courseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
  },
  imageText: {
    type: String
  },
  maximumCredits: {
    type: Number
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String
  },
  popularity: {
    type: Number
  },
  rating: {
    Type: Number
  },
}, 
  {
    timestamps: true,
  });

module.exports = mongoose.model('course', courseSchema);