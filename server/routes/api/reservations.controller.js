const express = require("express");
const router = express.Router();
const Reservation = require("../../models/Reservation");
const User = require("../../models/User");
const moment = require("moment");
moment().format();
moment.locale("en");

// Retrive ALL
router.get("/", (req, res, next) => {
  Reservation.find()
    .populate("user")
    .populate("restaurant")
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

// RETRIEVE ALL USER-RESERVATIONS
router.get("/userReservations/:id", (req, res, next) => {

  const now = new Date();

  const momentDate = moment(now).format("YYYY-MM-DD, dddd");

  //Reservation.find({$and: [{ user: req.params.id }, {date: { $gte: momentDate }}]}) 
  Reservation.find({ user: req.params.id }) 
    .populate("user")
    .populate("restaurant")
    .sort("date")
    .then(userReservations => res.json(userReservations))
    .catch(e => next(e));
});

// RETRIEVE ALL REST-RESERVATIONS
router.get("/restReservations/:id", (req, res, next) => {
  Reservation.find({ restaurant: req.params.id }) 
    .populate("user")
    .populate("restaurant")
    .sort("date")
    .then(restaurantReservations => res.json(restaurantReservations))
    .catch(e => next(e));
});

//RETRIEVE THE RESERVATION & ITS DETAILS
router.get("/reservationsdetails/:id", (req, res, next) => {
  Reservation.findById(req.params.id)
    .populate("user")
    .populate("restaurant")
    .then(reservations => res.json(reservations))
    .catch(e => next(e));
});

//EDIT RESERVATION
router.put("/reservation/edit/:id", (req, res, next) => {
  Reservation.findById(req.params.id)
    .populate("restaurant")
    .then(reservation => {
      const date = req.body.date != "" ? req.body.date : reservation.date;
      const time = req.body.time != "" ? req.body.time : reservation.time;
      const pax = req.body.pax != "" ? req.body.pax : reservation.pax;
      const comment = req.body.comment ? req.body.comment : reservation.comment;
      const confirmation = "Pending"

      const updates = { date, time, pax, comment, confirmation };

      const tooEarly = reservation.restaurant.openTime1;
      const afterLunch = reservation.restaurant.closeTime1;
      const beforeDinner = reservation.restaurant.openTime2;
      const tooLate = reservation.restaurant.closeTime2;


      const now = new Date();
      const noDate = new Date(req.body.date);

      if ( req.body.date == "" || req.body.time == "" || req.body.pax == "" || req.body.pax <= 0 ) {
        next(new Error("Can't be empty"));
      }
      
  
      if (now > noDate || noDate.getFullYear() >= 2019) {
        next(new Error("Not possible for those dates")); 
       } 
  

      if ((time > afterLunch && time < beforeDinner) || (time < tooEarly && time > tooLate)) {
       next(new Error("Restaurant is closed"));
      }
    
      Reservation.findByIdAndUpdate(req.params.id, updates, { new: true })
        .then(object => res.status(200).json(object))
        .catch(e => console.log(e));
    });
});

//CANCEL RESERVATION
router.post("/reservation/cancel/:id", (req, res, next) => {
  Reservation.findById(req.params.id)
    .populate("user")
    .populate("restaurant")
    .then(reservation => {
      reservation.restaurant.Restreservations -= 1;
      reservation.user.Clientreservations -= 1;

      User.findByIdAndUpdate(reservation.restaurant, {Restreservations: reservation.restaurant.Restreservations})
        .then(() => console.log("deleted Restreservation"))
        .catch(err => res.status(500).json(err));

      User.findByIdAndUpdate(reservation.user, {Clientreservations: reservation.user.Clientreservations})
        .then(() => console.log("deleted Clientreservation"))
        .catch(err => res.status(500).json(err));

      Reservation.findByIdAndUpdate(req.params.id, {confirmation: "Cancelled"})
        .then(() => console.log("deleted Main Reservation"))
        .catch(err => res.status(500).json(err));

      return res.status(200).json(reservation);
    })
    .catch(err => res.status(500).json(err));
});

//CONFIRM RESERVATION
router.post("/reservation/confirm/:id", (req, res, next) => {
  let reservationId = req.params.id;

  const updates = {confirmation: "Confirmed"};

  Reservation.findByIdAndUpdate(reservationId, updates, { new: true })
    .then(reservation => res.json(reservation))
    .catch(e => next(e));
});

//DECLINE RESERVATION
router.post("/reservation/decline/:id", (req, res, next) => {
  Reservation.findById(req.params.id)
    .populate("user")
    .populate("restaurant")
    .then(reservation => {
      reservation.restaurant.Restreservations -= 1;
      reservation.user.Clientreservations -= 1;

      User.findByIdAndUpdate(reservation.restaurant, {Restreservations: reservation.restaurant.Restreservations})
        .then(() => console.log("deleted Restreservation"))
        .catch(err => res.status(500).json(err));

      User.findByIdAndUpdate(reservation.user, {Clientreservations: reservation.user.Clientreservations})
        .then(() => console.log("deleted Clientreservation"))
        .catch(err => res.status(500).json(err));

      Reservation.findByIdAndUpdate(req.params.id, { confirmation: "Declined" })
        .then(() => console.log("deleted Main Reservation"))
        .catch(err => res.status(500).json(err));

      return res.status(200).json(reservation);
    })
    .catch(err => res.status(500).json(err));
});

router.delete("/reservation/delete/:id", (req, res, next) => {
  Reservation.findByIdAndRemove(req.params.id)
  .then(() => res.json({ message: `SUCESSFUL DELETE ${req.params.id}` }))
   .catch(e => next(e));
 });

 router.use((err, req, res, next) => {
  res.status(500).json(err.message);
});


module.exports = router;
