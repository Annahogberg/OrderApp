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
  //private user
  age: {type: Number, min: 15, default: 100},
  image: {type: String, default:""}, 
  //restaurant user
  address: {type: String},
  coordinates: {type: Schema.Types.ObjectId, ref:'Cords', default: "5b65a3c0ce68bb28a39eaec1"},
  type: {type: String, enum: ['Italian', 'Mediterranean', 'Japanese', 'Chinese', 'Mexican', 'Asian', 'Vegetarian']},
  openinghours: {type: Schema.Types.ObjectId, ref:'OpeningHours', default: "5b65a3c0ce68bb28a39eaec0"}, //, required: true
  tables: {type: Number, default: 0},
  // isAvailable: {type: Boolean, default: true}
}, 
{timestamps: true});

const User = mongoose.model('User', userSchema);
module.exports = User;


