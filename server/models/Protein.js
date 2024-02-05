const mongoose = require('mongoose');

const { Schema } = mongoose;

const proteinSchema = new Schema({
  title: {
    type: String,
    required: true, 
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  }
});

const Protein = mongoose.model('Protein', proteinSchema);

module.exports = Protein;