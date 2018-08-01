const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Hours = require("../../models/OpeningHours")

// Retrive ALL
router.get("/", (req, res, next) => {
  User.find()
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

// Retrive DETAIL
router.get("/:id", (req, res, next) => {
  User.findById(req.params.id)
    .then(object => res.json(object))
    .catch(e => next(e));
});

//EDIT PROFILE
router.put("/edit/:id", (req, res, next) => {

  Hours.find()
  .populate('restaurant')
  .then (user => { console.log(user)
  //console.log(req.params.id);
  

  // User.findById(req.params.id)
  // .populate("openinghours")
  // .then(user => 
    

  User.findById(req.params.id)
  .then(user => {
    const username = req.body.username != "" ? req.body.username : user.username;
    const email = req.body.email != "" ? req.body.email : user.email;
    const name = req.body.name != "" ? req.body.name : user.name;
    const age = req.body.age ? req.body.age : user.age;
    // const image = req.file ? req.file.photo : user.image;
    const address = req.body.address != "" ? req.body.address : user.address;
    const type = req.body.type != "" ? req.body.type : user.type;
    const phone = req.body.phone != "" ? req.body.phone : user.phone;
    const tables = req.body.tables != "" ? req.body.tables : user.tables;
    const openinghours = req.body.openinghours != "" ? req.body.openinghours : user.openinghours;

   // console.log(user);

    // const {username, email, name, gender, age, image, address,type} = req.body;

    const updates = {
      username,
      email,
      name,
      age,
      address,
      type,
      phone,
      tables,
      openinghours
    };

    User.findByIdAndUpdate(req.params.id, updates, { new: true })
      .then(object => {
        //console.log(object.openinghours)
        res.json(object)
        
      })
      .catch(e => next(e));
  })});
});

module.exports = router;
