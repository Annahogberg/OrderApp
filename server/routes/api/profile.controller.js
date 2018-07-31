const express = require("express");
const router = express.Router();
const User = require("../../models/User");

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
  User.findById(req.params.id)
  .then ( user => {
    const username = req.body.username != '' ? req.body.username : user.username;
    const email = req.body.email != '' ? req.body.email : user.email;
    const name = req.body.name != '' ? req.body.name : user.name;
    const gender = req.body.gender ? req.body.gender : user.gender;
    const age = req.body.age ? req.body.age : user.age;
    const imageName = req.file ? req.file.photo : user.imageName;
    const imagePath = req.file ? req.file.url : user.imagePath;
    const address = req.body.address != '' ? req.body.address : user.address;
    const tables = req.body.tables != '' ? req.body.tables : user.tables;
    const type = req.body.type != '' ? req.body.type : user.type;

    const updates = { username, email, name, gender, age, imageName, imagePath,
      address, tables, type };

      User.findByIdAndUpdate(req.params.id, updates, { new: true })
        .then(object => res.json(object))
        .catch(e => next(e));
  })

});

module.exports = router;