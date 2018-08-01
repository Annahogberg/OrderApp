const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hoursSchema = new Schema ({
  restaurant: {type: Schema.Types.ObjectId, ref: 'User'},
  openTime1: {type: Number, required: true},
  closeTime1: {type: Number, required: true},
  openTime2: {type: Number, required: true}, 
  closeTime2: {type: Number, required: true},
});

const OpeningHours = mongoose.model('OpeningHours', hoursSchema);
module.exports = OpeningHours;
