const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Reservation = require("../../models/Reservation");


// Retrive ALL
router.get("/", (req, res, next) => {
  Reservation.find()
  .populate("user")
  .populate("restaurant")
  .then(objects => res.json(objects))
  .catch(e => next(e));
});

// Retrive DETAIL
router.get("/reservation/:id", (req, res, next) => {
  Reservation.findById(req.params.id)
    .populate("user")
    .populate("restaurant")
    .then(object => res.json(object))
    .catch(e => next(e));
});

//EDIT PROFILE
router.put("/edit/reservation/:id", (req, res, next) => {

  Reservation.findById(req.params.id).then(reservation => {
    const date =
      req.body.username != "" ? req.body.username : user.username;
    const time = req.body.email != "" ? req.body.email : user.email;
    const pax = req.body.name != "" ? req.body.name : user.name;
    const comment = req.body.age ? req.body.age : user.age;
   
    
      const updates = {
        date,
        time,
        pax,
        comment,
      };
  
      Reservation.findByIdAndUpdate(req.params.id, updates, { new: true })
        .then(object => {
        
          res.json(object);
        })
        .catch(e => next(e));
    });

  });


module.exports = router;
