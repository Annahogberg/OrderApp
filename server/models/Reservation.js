const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  date: {type: String, required:true},
  time: {type: String, required: true},
  pax: {type: Number, required: true},
  confirmation: {type: String, enum: ['Pending', 'Confirmed', 'Not accepted'], default: 'Pending'},
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  restaurant: {type: Schema.Types.ObjectId, ref: 'User'},
  comment: { type: String, default: "" },
  order: [{
    dishId: {type: Schema.Types.ObjectId, ref: 'Dish'},
    quantity: {type: Number, _id: false, required: true}
  }]
},
{timestamps: true});

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;