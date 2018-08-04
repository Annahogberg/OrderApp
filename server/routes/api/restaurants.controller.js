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


//USER SEES RESTAURANT FILE & RESERVES
router.get('/restaurant/:id', (req, res, next) => {
  User.findById(req.params.id)
  .populate("openinghours")
    .then(restaurant => res.json(restaurant))
    .catch(e => next(e));
});

//CREATES RESERVATION
router.post("/restaurant/reservation", (req, res, next) => {
  let restaurant = req.body.restaurant
  User.findById(restaurant)
  .populate("user")
  .populate("openinghours")
  .then(restaurant => {
    const reservationInfo = {
      date: moment(req.body.date).format("YYYY-MM-DD, dddd"),
      time: req.body.time,
      pax: req.body.pax,
      comment: req.body.comment,
      user: req.user._id,
      restaurant: restaurant
    };


    if (req.body.date == "" || req.body.time == "" || req.body.pax == "") {
      return res.status(500).json({ message: "Can't be empty" });
    }

    const now = new Date();
    const noDate = new Date(req.body.date);

    if (now > noDate || noDate.getFullYear() >= 2019) {
      return res.status(500).json({ message: "Not possible for those dates" });
    }

    const time = req.body.time;

    const tooEarly = restaurant.openinghours.openTime1
    const afterLunch = restaurant.openinghours.closeTime1
    const beforeDinner = restaurant.openinghours.openTime2
    const tooLate = restaurant.openinghours.closeTime2

    if (time >  afterLunch && time < beforeDinner || time < tooEarly && time > tooLate) {
      return res.status(500).json({ message: "Restaurant is closed" });
    }

    const newReservation = new Reservation(reservationInfo);

    newReservation
      .save()
      .then(restaurant => {
        console.log(restaurant)
        return res.status(200).json(restaurant)
      })
      .catch(err => res.status(500).json(err));
  });

});


module.exports = router;
