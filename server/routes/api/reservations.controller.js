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
router.get("/myreservations/:idUser", (req, res, next) => {
  Reservation.find({user: req.params.idUser})
    .populate("user")
    .populate("restaurant")
    .then(object => res.json(object))
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
      req.body.date != "" ? req.body.date : user.date;
    const time = req.body.time != "" ? req.body.time : user.time;
    const pax = req.body.pax != "" ? req.body.pax : user.pax;
    const comment = req.body.comment ? req.body.comment : user.comment;
   
    
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
