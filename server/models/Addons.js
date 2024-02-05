const mongoose = require('mongoose');

const { Schema } = mongoose;

const addOnsSchema = new Schema({
  none: {
    type: Boolean,
    default: true,
  },
  spicy: {
    type: Boolean,
    default: false,
  },
  vegan: {
    type: Boolean,
    default: false,
  },
  vegetarian: {
    type: Boolean,
    default: false,
  },
  glutenFree: {
    type: Boolean,
    default: false,
  },
  comment: {
    type: String,
    maxLength: 255,
  }
});

const Addons = mongoose.model('addOns', addOnsSchema);

module.exports = Addons;