const express = require("express");
const router = express.Router();
const Dish = require("../../models/Dish");

module.exports = router;

//GET DISHES

router.get('/byrestaurantmenu/:id', (req,res, next) => {
  Dish.find({restaurant: req.params.id})
  .then(dish => {console.log(dish); return res.json(dish)})
  .catch(err => next(err))
})

//GET DISHES - from restaurant

// router.get('/:id', (req,res, next) => {
//   Dish.findById({restaurant: req.params.id})
//   .then(dish => {console.log ("hola"); return res.json(dish)})
//   .catch(err => next(err))
// })


// router.get('/:id', (req,res) => {
//   console.log('kfdjskfjñs')
//   console.log(req.params.id)
//   Dish.find({restaurant: req.params.id})
//   .then(dish => res.json(dish))
//   .catch(err => console.log(err))
// })

router.get('/details/:id', (req,res,next) => {
  Dish.findById(req.params.id)
  .then(dish => res.json(dish))
  .catch(err => next(err))
})


//CREATE DISH
router.post('/newDish', (req, res,next) => {
  let restaurant = req.body.restaurant;

  const dish = {
   title: req.body.title,
    restaurant: restaurant,
    description: req.body.description,
    price: req.body.price,
    type: req.body.type
  }

  if (req.body.title == "" || req.body.price == "" || req.body.type == "") {
    return res.status(500).json({ message: "Can't be empty" });
  }
  
  const newDish = new Dish(dish);
  newDish.save()
  .then( dish => res.status(200).json(dish))
  .catch(err => next(err))
})

//EDIT DISH
router.post('/edit/:id', (req, res, next) =>{

    const updates = {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      type: req.body.type
    }
    
    if (req.body.title == "" || req.body.type == "" || req.body.price == "") { 
      return res.status(500).json({ message: "Can't be empty" });
    }
    
      Dish.findByIdAndUpdate(req.params.id, updates, { new: true })
      .then(dish => {
        return res.json(dish);
      })
      .catch(e => next(e));
    })



//DELETE DISH
router.delete("/delete/:id", (req, res, next) => {
  Dish.findByIdAndRemove(req.params.id)
  .then(() => res.json({ message: `SUCESSFUL DELETE ${req.params.id}` }))
  .catch(e => next (e))
})
