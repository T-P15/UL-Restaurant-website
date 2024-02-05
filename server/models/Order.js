const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  menuItems: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Menuitem'
    }
  ],
  completed: {
    type: Boolean,
    default: false
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;