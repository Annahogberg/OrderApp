const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    restaurant: {type: Schema.Types.ObjectId, ref: 'User'},
    title: {type: String, required: true},
    description: String,
    price: {type: Number, required: true},
    type: {type: String, enum: ["Appetizer", "Main Course", "Dessert", "Soft Drink", "Alcohol", "Other"], required: true}
},{timestamps: true});

const Dish = mongoose.model('Dish', dishSchema);
module.exports = Dish;