const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Reservation = require("../../models/Reservation");
const OpeningHours = require("../../models/OpeningHours");
const moment = require("moment");
moment().format();
moment.locale("es");

//LIST OF ALL RESTAURANTS
router.get("/", (req, res, next) => {
  User.find({ isRestaurant: true })
    .then(restaurants => res.json(restaurants))
    .catch(e => next(e));
});

router.get('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(restaurant => res.json(restaurant))
    .catch(e => next(e));
});

//USER SEES RESTAURANT FILE
router.post("/:id", (req, res, next) => {
  User.findById(req.params.id).then(restaurant => {
    const reservationInfo = {
      date: moment(req.body.date).format("YYYY-MM-DD, dddd"),
      time: req.body.time,
      pax: req.body.pax,
      user: req.user._id,
      restaurant: req.params.restaurantId
    };

    if (req.body.date == "" || req.body.time == "" || req.body.pax == "") {
      return res.status(500).json({ message: "Can't be empty" });
    }

    const now = new Date();
    const noDate = new Date(req.body.date);

    if (now > noDate || noDate.getFullYear() >= 2019) {
      return res.status(500).json({ message: "Not possible for those dates" });
    }

    const newReservation = new Reservation(reservationInfo);
    console.log(newReservation);

    newReservation
      .save()
      .then(restaurant => res.status(200).json(restaurant))
      .catch(err => res.status(500).json(err));
  });
});

// router.post('/reserve', (req, res, next) => {
//   User.find({ isRestaurant: true })
//     .then(restaurants => res.json(restaurants))
//     .catch(e => next(e));
// });

module.exports = router;
