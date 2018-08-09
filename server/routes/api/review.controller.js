const express = require("express");
const router = express.Router();
const Review = require('../../models/Reviews');
const User = require('../../models/User')
const multer = require("multer");
const uploadCloud = require('./../../config/cloudinary');
const _ = require("lodash");

//get comments
router.get('/byrestaurant/:id', (req,res,next) => {
  Review.find({restaurant: req.params.id})
  .then(reviews => res.json(reviews))
  .catch(err => next(err))
})


//create review
router.post('/newReview', uploadCloud.single('file'), (req, res, next) => {
  let restaurant = req.body.restaurant;

  const reviewInfo = {
   name: req.body.name,
    restaurant: restaurant,
    content: req.body.content,
    rating: req.body.rating
  }

  const newReview = _.pickBy(reviewInfo, _.identity);

  if(req.file) {
    newReview.image1 = req.file.url;
  }

  Review.create(newReview) 
  .then( data => res.json(data))
  .catch( err => next(err));
})


module.exports = router;
