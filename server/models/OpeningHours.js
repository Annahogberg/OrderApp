const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hoursSchema = new Schema ({

  openTime1: {type: String, required: true, default: "11:00"},
  closeTime1: {type: String, required: true, default: "16:00"},
  openTime2: {type: String, required: true, default: "19:00"}, 
  closeTime2: {type: String, required: true, default: "00:00"},
});

const OpeningHours = mongoose.model('OpeningHours', hoursSchema);
module.exports = OpeningHours;
