const express = require("express");
const router = express.Router();
const Reservation = require("../../models/Reservation");
const User = require("../../models/User");

// Retrive ALL
router.get("/", (req, res, next) => {
  Reservation.find()
    .populate("user")
    .populate("restaurant")
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

router.get("/reservationsdetails/:id", (req, res, next) => {
  Reservation.findById(req.params.id)
    .populate("user")
    .populate("restaurant")
    .then(object => res.json(object))
    .catch(e => next(e));
});

// Retrive DETAIL
router.get("/reservation/:id", (req, res, next) => {
  Reservation.find({ user: req.params.id })
    .populate("user")
    .populate("restaurant")
    .then(object => res.json(object))
    .catch(e => next(e));
});

//EDIT PROFILE
router.put("/reservation/edit/:id", (req, res, next) => {
  Reservation.findById(req.params.id)
    .populate({ path: "restaurant", populate: { path: "openinghours" } })
    .then(reservation => {
      console.log(reservation);
      const date = req.body.date != "" ? req.body.date : reservation.date;
      const time = req.body.time != "" ? req.body.time : reservation.time;
      const pax = req.body.pax != "" ? req.body.pax : reservation.pax;
      const comment = req.body.comment ? req.body.comment : reservation.comment;

      const updates = {
        date,
        time,
        pax,
        comment
      };

      if (req.body.date == "" || req.body.time == "" || req.body.pax == "" || req.body.pax == 0) {
        return res.status(500).json({ message: "Can't be empty" });
      }

      const now = new Date();
      const noDate = new Date(req.body.date);

      if (now > noDate || noDate.getFullYear() >= 2019) {
        return res
          .status(500)
          .json({ message: "Not possible for those dates" });
      }

      const tooEarly = reservation.restaurant.openinghours.openTime1;
      const afterLunch = reservation.restaurant.openinghours.closeTime1;
      const beforeDinner = reservation.restaurant.openinghours.openTime2;
      const tooLate = reservation.restaurant.openinghours.closeTime2;

      if (
        (time > afterLunch && time < beforeDinner) ||
        (time < tooEarly && time > tooLate)
      ) {
        return res.status(500).json({ message: "Restaurant is closed" });
      }

      Reservation.findByIdAndUpdate(req.params.id, updates, { new: true })
        .then(object => {
          res.json(object);
        })
        .catch(e => next(e));
    });
});

router.post("/reservation/delete/:id", (req, res, next) => {
  Reservation.findById(req.params.id)
    .populate("restaurant")
    .then(reservation => {

      reservation.restaurant.tables += 1;

      User.findOneAndUpdate({ tables: reservation.restaurant.tables })
            .then(reservation => {
              Reservation.findByIdAndRemove(req.params.id)
              .then( reservation => res.status(200).json(reservation))
            .catch(err => res.status(500).json(err));
          })
          .catch(err => res.status(500).json(err));
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
