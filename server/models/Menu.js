const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    appetizers: [{
      title: {type: String, required: true},
      description: {type: String},
      price: {type: Number, required: true}
    }],
    mainCourses: [{
      title: {type: String, required: true},
      description: {type: String},
      price: {type: Number, required: true}
    }],
    desserts: [{
      title: {type: String, required: true},
      description: {type: String},
      price: {type: Number, required: true}
    }],
    drinks: [{
      title: {type: String, required: true},
      description: {type: String},
      price: {type: Number, required: true}
    }],
});


const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu;