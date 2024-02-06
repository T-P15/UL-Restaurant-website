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
  comment: {
    type: String,
    maxLength: 255
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;