const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderitemSchema = new Schema({
  menuItem: {
    type: Schema.Types.ObjectId,
    ref: 'Menuitem',
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

const Orderitem = mongoose.model('Orderitem', orderitemSchema);

module.exports = Orderitem;