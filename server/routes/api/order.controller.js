const express = require("express");
const router = express.Router();
const Reservation = require("../../models/Reservation");
const Dish = require("../../models/Dish");
const _ = require("lodash");

//CREATE NEW ORDER
router.post("/reservation/:reservationId/order/:id/newOrder", (req, res) => {
  const { reservationId, id } = req.params;
  let { quantity } = req.body;
  quantity = Number(quantity);

  Reservation.findById(reservationId)
  .populate('order.dishId')
    .then(reservation => {
      console.log(reservation)
      let possibleOrder = reservation.order.filter(ord => {
        return ord.dishId._id.toString() === id;
      })[0];

      if (possibleOrder) {
        possibleOrder.quantity += quantity;
      } else {
        possibleOrder = { dishId: id, quantity: quantity };
        reservation.order.push(possibleOrder);
      }

      const newOrder = new Reservation(reservation)
      newOrder.save()
      .then(reservation => {
        console.log(reservation.order);       

        

          return res.status(200).json(reservation);
        
      });
    })
    .catch(e => console.log(e));
});


module.exports = router;