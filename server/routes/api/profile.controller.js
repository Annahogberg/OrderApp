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
    .then(user => {
      return res.json(user)
    })
    .catch(e => next(e));
});

//EDIT PROFILE
router.put("/edit/:id", (req, res, next) => {

user = req.params.id

  User.findById(user)
  
  .then(user => {
    console.log(user)

    const username =req.body.username != "" ? req.body.username : user.username;
    const email = req.body.email != "" ? req.body.email : user.email;
    const name = req.body.name != "" ? req.body.name : user.name;
    const age = req.body.age ? req.body.age : user.age;
    const address = req.body.address != "" ? req.body.address : user.address;
    const lat = req.body.lat != "" ? req.body.lat : user.lat;
    const lng = req.body.lng != "" ? req.body.lng : user.lng;
    const type = req.body.type != "" ? req.body.type : user.type;
    const phone = req.body.phone != "" ? req.body.phone : user.phone;
    const reservations = req.body.reservations != "" ? req.body.reservations : user.reservations;
    const openTime1 = req.body.openTime1 != "" ? req.body.openTime1 : user.openTime1;
    const closeTime1 = req.body.closeTime1 != "" ? req.body.closeTime1 : user.closeTime1;
    const openTime2 = req.body.openTime2 != "" ? req.body.openTime2 : user.openTime2;
    const closeTime2 = req.body.closeTime2 != "" ? req.body.closeTime2 : user.closeTime2;
    
      const updates = {
        username,
        email,
        name,
        age,
        address,
        lat,
        lng,
        type,
        phone,
        reservations,
        openTime1,
        closeTime1,
        openTime2,
        closeTime2
      };
  

      User.findByIdAndUpdate(req.params.id, updates, { new: true })
        .then(object => {
        console.log(user);
          return res.json(object);
        })
        .catch(e => next(e));
    });
  })



module.exports = router;