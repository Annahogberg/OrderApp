const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    restaurant: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    content: String,
    rating: { type: Number, enum: [1, 2, 3, 4, 5], required: true },
    image1: {type: String, default: ''},
    image2: {type: String, default: ''},
},{timestamps: true});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;