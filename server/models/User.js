const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  username: {type: String, required: true, unique: true, trim: true},
  password: {type: String, required: true, trim: true},
  email: {type: String, required: true, match: /\S+@\S+\.\S+/, trim: true},
  name: {type: String, trim: true},
  phone: {type: Number, match: /^[0-9\-]+$/i, trim: true},
  isRestaurant: {type: Boolean, default: false},
  isClient: {type: Boolean, default: false},
  // reservations: [{ reservationId: { type: Schema.Types.ObjectId, ref: 'Reservation' }, quantity: Number, _id: false, default: 0}],
  //private user
  age: {type: Number, min: 15, default: 100},
  image: {type: String, default:"https://res.cloudinary.com/dg6pkjuui/image/upload/v1526138842/imgdefault.jpg"}, 
  //restaurant user
  address: {type: String},
  type: {type: String, enum: ['Italian', 'Mediterranean', 'Japanese', 'Chinese', 'Mexican', 'Asian', 'Vegetarian']},
  // menu: {type: Schema.Types.ObjectId, ref: 'Menu'}, //, required: true
  openinghours: {type: Schema.Types.ObjectId, ref:'OpeningHours'}, //, required: true
  // reviews: {type: Schema.Types.ObjectId, ref:'Review'},
  tables: {type: Number, default: 0},
  // isAvailable: {type: Boolean, default: true}
}, 
{timestamps: true});

const User = mongoose.model('User', userSchema);
module.exports = User;


