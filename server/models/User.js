const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  username: {type: String, required: true, unique: true, trim: true},
  password: {type: String, required: true, trim: true},
  email: {type: String, required: true, match: /\S+@\S+\.\S+/, trim: true},
  name: {type: String, trim: true},
  phone: {type: Number, match: /^[0-9\-]+$/i, trim: true},
  isRestaurant: {type: Boolean, default: false},
  reservations: [{ reservationId: { type: Schema.Types.ObjectId, ref: 'Reservation' }, quantity: Number, _id: false}],
  //private user
  gender: {type: String, enum: ["Female", "Male"]},
  age: {type: Number, min: 15},
  imageName: String,
  imagePath: String,
  //restaurant user
  address: {type: String},
  tables: {type: Number},
  type: {type: String, enum: ['Mediterranean', 'Italian', 'Spanish', 'Japanese', 'Chinese', 'Mexican', 'Asian', 'Fast Food', 'American', 'Lebanese', 'Vegetarian']},
  menu: {type: Schema.Types.ObjectId, ref: 'Menu'}, //, required: true
  openinghours: {type: Schema.Types.ObjectId, ref:'OpeningHours'}, //, required: true
  reviews: {type: Schema.Types.ObjectId, ref:'Review'},
}, 
{timestamps: true});

const User = mongoose.model('User', userSchema);
module.exports = User;


