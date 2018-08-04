const express = require("express");
const router = express.Router();
const Review = require('../../models/Reviews');
const User = require('../../models/User')

router.get('/byrestaurant/:id', (req,res) => {
  Review.find({restaurant: req.params.id}).then(reviews => 
     res.json(reviews)
  )
})

router.post('/newReview', (req, res) => {
  let restaurant = req.body.restaurant;
  console.log(restaurant)

  const reviewInfo = {
   name: req.body.name,
    restaurant: restaurant,
    content: req.body.content,
    rating: req.body.rating
  }

  Review.create(reviewInfo) 
  .then( data => res.json(data))
  .catch( err => console.log(err));
})

module.exports = router;
