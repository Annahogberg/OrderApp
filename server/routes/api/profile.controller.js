const express = require("express");
const router = express.Router();
const User = require("../../models/User");


// Retrive ALL
router.get("/", (req, res, next) => {

  User.find()
    .then(user => res.json(user))
    .catch(e => next(e));
});

// Retrive DETAIL
router.get("/:id", (req, res, next) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(e => next(e));
});

//EDIT PROFILE
router.put("/edit/:id", (req, res, next) => {

  User.findById(req.params.id)
  .then(user => {
    
      const updates = {
        username: req.body.username != "" ? req.body.username : user.username,
        email: req.body.email != "" ? req.body.email : user.email,
        name: req.body.name != "" ? req.body.name : user.name,
        age: req.body.age ? req.body.age : user.age,
        address: req.body.address != "" ? req.body.address : user.address,
        lat: req.body.lat != "" ? req.body.lat : user.lat,
        lng: req.body.lng != "" ? req.body.lng : user.lng,
        type: req.body.type != "" ? req.body.type : user.type,
        phone: req.body.phone != "" ? req.body.phone : user.phone,
        openTime1: req.body.openTime1 != "" ? req.body.openTime1 : user.openTime1,
        closeTime1: req.body.closeTime1 != "" ? req.body.closeTime1 : user.closeTime1,
        openTime2: req.body.openTime2,
        closeTime2: req.body.closeTime2,
      };
  

      User.findByIdAndUpdate(req.params.id, updates, { new: true })
        .then(object =>  res.json(object))
        .catch(e => next(e));
    });
  })



module.exports = router;