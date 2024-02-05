const mongoose = require('mongoose');

const { Schema } = mongoose;

const menuitemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  protein: {
    type: Schema.Types.ObjectId,
    ref: 'Protein',
    required: true
  },
  addOns: {
    type: Schema.Types.ObjectId,
    ref: 'Addons',
    required: true
  }
});

const Menuitem = mongoose.model('Menuitem', menuitemSchema);

module.exports = Menuitem;