const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    restaurant: {type: Schema.Types.ObjectId, ref: 'User'},
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    order: {
      dish: {type: String, required: true},
      quantity: {type: Number, required: true}
    }
},{timestamps: true});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;