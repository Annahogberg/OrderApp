const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  username: {type: String, required: true, unique: true, trim: true},
  password: {type: String, required: true, trim: true},
  email: {type: String, required: true, match: /\S+@\S+\.\S+/, trim: true},
  name: {type: String, trim: true},
  phone: {type: Number, match: /^[0-9\-]+$/i, trim: true},
  //private user
  isClient: {type: Boolean, default: false},
  age: {type: Number, min: 15, default: 100},
  image: {type: String, default:""}, 
  Clientreservations: {type: Number, default: 0},
  //restaurant user
  isRestaurant: {type: Boolean, default: false},
  address: {type: String, default: "Paseo de la Chopera 14"}, 
  lat: {type: Number, default: 40.3923033}, 
  lng: {type: Number, default: -3.6996187},
  type: {type: String, enum: ['Italian', 'Mediterranean', 'Japanese', 'Chinese', 'Mexican', 'Asian', 'Vegetarian']},
  openTime1: {type: String, default: "11:00"}, 
  closeTime1: {type: String, default: "16:00"},
  openTime2: {type: String, default: "19:00"}, 
  closeTime2: {type: String, default: "00:00"},
  Restreservations: {type: Number, default: 0},

  // isAvailable: {type: Boolean, default: true}
}, 
{timestamps: true});

const User = mongoose.model('User', userSchema);
module.exports = User;

