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
  // router.get("/myreservations/:idUser", (req, res, next) => {
  //   Reservation.find({user: req.params.idUser})
  //     .populate("user")
  //     .populate("restaurant")
  //     .then(object => res.json(object))
  //     .catch(e => next(e));
  // });

  // router.get("/myreservations", (req, res, next) => {
  //   Reservation.find({})
  //     // .populate("user")
  //     // .populate("restaurant")
  //     .then(object => res.json(object))
  //     .catch(e => next(e));
  // });


// Retrive DETAIL
router.get("/reservation/:id", (req, res, next) => {
  Reservation.find({user: req.params.id})
    // .populate("user")
    // .populate("restaurant")
    .then(object => {console.log(object);res.json(object)})
    .catch(e => next(e));
});

//EDIT PROFILE
router.put("/reservation/edit/:id", (req, res, next) => {

  Reservation.findById(req.params.id).then(reservation => {
    const date =
      req.body.date != "" ? req.body.date : reservation.date;
    const time = req.body.time != "" ? req.body.time : reservation.time;
    const pax = req.body.pax != "" ? req.body.pax : reservation.pax;
    const comment = req.body.comment ? req.body.comment : reservation.comment;
   
    
      const updates = {
        date,
        time,
        pax,
        comment,
      };

    //       if (req.body.date == "" || req.body.time == "" || req.body.pax == "") {
    //   return res.status(500).json({ message: "Can't be empty" });
    // }

    // const now = new Date();
    // const noDate = new Date(req.body.date);

    // if (now > noDate || noDate.getFullYear() >= 2019) {
    //   return res.status(500).json({ message: "Not possible for those dates" });
    // }

    // const time = req.body.time;

    // const tooEarly = restaurant.openinghours.openTime1
    // const afterLunch = restaurant.openinghours.closeTime1
    // const beforeDinner = restaurant.openinghours.openTime2
    // const tooLate = restaurant.openinghours.closeTime2

    // if (time >  afterLunch && time < beforeDinner || time < tooEarly && time > tooLate) {
    //   return res.status(500).json({ message: "Restaurant is closed" });
    // }

  
      Reservation.findByIdAndUpdate(req.params.id, updates, { new: true })
        .then(object => {
        
          res.json(object);
        })
        .catch(e => next(e));
    });

  });

  router.delete("/reservation/delete/:id", (req, res, next) => {
    Reservation.findByIdAndRemove(req.params.id)
    .then(() => res.json({ message: `SUCESSFUL DELETE ${req.params.id}` }))
    .catch(e => next(e));
  });



module.exports = router;