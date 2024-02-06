const mongoose = require('mongoose');

const { Schema } = mongoose;
const proteinOptions = ['Standard',  'Chicken', 'Beef',  'BBQPork',  'Prawns', 'Seafood'];
const addonOptions = ['None', 'Spicy', 'Vegan', 'Vegetarian', 'Gluten Free'];

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
    type: String,
    enum: proteinOptions,
    default: 'Standard'
  },
  addOns: {
    type: String,
    enum: addonOptions,
    default: 'None'
  },
  totalprice: {
    type: Number,
  },
});

menuitemSchema.pre('save', function (next) {
  const priceMap = {
    Standard: 0,
    Chicken: 0,
    Beef: 3,
    BBQPork: 3,
    Prawns: 4,
    Seafood: 4
  };

  this.totalprice = this.price + priceMap[this.protein];

  next();
})

const Menuitem = mongoose.model('Menuitem', menuitemSchema);

module.exports = Menuitem;