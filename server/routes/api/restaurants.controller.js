const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Reservation = require("../../models/Reservation");
const Restaurant = require("../../models/User")
const Review = require('../../models/Reviews')
const moment = require("moment");
moment().format();
moment.locale("en");

//LIST OF ALL RESTAURANTS
router.get("/", (req, res, next) => {
  User.find({ isRestaurant: true })
    .then(restaurants => res.json(restaurants))
    .catch(e => next(e));
});

//USER SEES RESTAURANT FILE & RESERVES
router.get("/restaurant/:id", (req, res, next) => {
  User.findById(req.params.id)
    .then(restaurant => {
      return res.json(restaurant)})
    .catch(e => next(e));
});

//CREATES RESERVATION
router.post("/restaurant/reservation", (req, res, next) => {
  let restaurant = req.body.restaurant;

  Restaurant.findById(restaurant)
  .then ( restaurant => {

 
      const reservationInfo = {
        date: moment(req.body.date).format("YYYY-MM-DD, dddd"),
        time: req.body.time,
        pax: req.body.pax,
        comment: req.body.comment,
        user: req.user._id,
        restaurant: restaurant
      };

      if ( req.body.date == "" || req.body.time == "" || req.body.pax == "" || req.body.pax <= 0 ) {
        next(new Error("Can't be empty"));
      }

      const now = new Date();
      const noDate = new Date(req.body.date);

      if (now > noDate || noDate.getFullYear() >= 2019) {
        next(new Error("Not possible for those dates")); 
       } 
  
      const time = req.body.time;

      const tooEarly = restaurant.openTime1;
      const afterLunch = restaurant.closeTime1;
      const beforeDinner = restaurant.openTime2;
      const tooLate = restaurant.closeTime2;

      if ((time > afterLunch && time < beforeDinner) || (time < tooEarly && time > tooLate)) {
        next(new Error("Restaurant is closed"));
       }
      const newReservation = new Reservation(reservationInfo);
      newReservation
      .save()
      .then( () => {

      const reservationtId = newReservation._id;

      Reservation.findById(reservationtId)
      .populate("user")
      .populate("restaurant")
      .then( reservation => {
        reservation.restaurant.Restreservations += 1;
        reservation.user.Clientreservations += 1;

        User.findByIdAndUpdate( reservation.restaurant, { Restreservations: reservation.restaurant.Restreservations })
        .then (() => 
          console.log("updated RestReservations"))
        .catch(err => res.status(500).json(err))

        User.findByIdAndUpdate( reservation.user, { Clientreservations: reservation.user.Clientreservations })
        .then(() => 
        console.log("updated ClientReservations"))
        .catch(err => res.status(500).json(err))

        return res.status(200).json(reservation)
      })
      .catch(err => { return res.status(500).json(err)});
    })
  })
});


router.use((err, req, res, next) => {
  res.status(500).json(err.message);
});

module.exports = router;