const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coordinatesSchema = new Schema ({
  lat: {type: Number, default: 40.4169473},
  lng: {type: Number, default: -3.7035285},
});

const Cords = mongoose.model('Cords', coordinatesSchema);
module.exports = Cords;
