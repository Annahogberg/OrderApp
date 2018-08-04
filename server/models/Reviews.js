const mongoose = require('mongoose');
const Schema = mongoose.Schema;


ratingValue = [1,2,3,4,5]

const reviewSchema = new Schema({
    name: String,
    restaurant: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    content: String,
    rating: { type: Number, enum: ratingValue},
    image1: {type: String, default: ''},
    image2: {type: String, default: ''},
},{timestamps: true});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;