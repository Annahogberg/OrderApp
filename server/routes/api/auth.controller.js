const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../../models/User");
const passport = require("passport");


const login = (req, user) => {
  return new Promise((resolve, reject) => {
    req.login(user, err => {
      if (err) {
        reject(new Error("Something went wrong"));
      } else {
        resolve(user);
      }
    });
  });
};

// SIGNUP - NORMAL USER


router.post("/signup", (req, res, next) => {
  const { username, password, email } = req.body;
  const isRestaurant = Boolean(req.body.isRestaurant);

  // Check for non empty user or password
  if (!username || !password || !email ) {
    next(new Error("You must provide all fields credentials"));
  }

  // Check if user exists in DB
  User.findOne({ username })
    .then(foundUser => {
      if (foundUser) return res.status(400).json({ message: 'The username already exists' });

      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);

      return new User({
        username,
        password: hashPass,
        email,
        isRestaurant
      }).save();
    })
    .then(savedUser => login(req, savedUser)) // Login the user using passport
    .then(user => res.json({ status: "signup & login successfully", user })) // Answer JSON
    .catch(e => next(e));
});


// router.post("/signup", (req, res, next) => {
//   const { username, password, email, firstname, lastname, age } = req.body;

//   // Check for non empty user or password
//   if (!username || !password || !email || !firstname || !lastname || !age) {
//     next(new Error("You must provide all fields credentials"));
//   }

//   // Check if user exists in DB
//   User.findOne({ username })
//     .then(foundUser => {
//       if (foundUser) return res.status(400).json({ message: 'The username already exists' });

//       const salt = bcrypt.genSaltSync(10);
//       const hashPass = bcrypt.hashSync(password, salt);

//       return new User({
//         username,
//         password: hashPass,
//         email,
//         firstname,
//         lastname,
//         age
//       }).save();
//     })
//     .then(savedUser => login(req, savedUser)) // Login the user using passport
//     .then(user => res.json({ status: "signup & login successfully", user })) // Answer JSON
//     .catch(e => next(e));
// });


// router.post("/rest-signup", (req, res, next) => {
//   const { username, password, email, name, phone, address } = req.body;

//   // Check for non empty user or password
//   if (!username || !password || !email || !name || !phone || !address) {
//     next(new Error("You must provide all fields credentials"));
//   }

//   // Check if user exists in DB
//   Restaurant.findOne({ username })
//     .then(foundRestaurant => {
//       if (foundRestaurant) return res.status(400).json({ message: 'The username already exists' });

//       const salt = bcrypt.genSaltSync(10);
//       const hashPass = bcrypt.hashSync(password, salt);

//       return new Restaurant({
//         username,
//         password: hashPass,
//         email,
//         name,
//         phone,
//         address
//       }).save();
//     })
//     .then(savedRestaurant => login(req, savedRestaurant)) // Login the user using passport
//     .then(restaurant => res.json({ status: "Restaurant signup & login successfully", restaurant })) // Answer JSON
//     .catch(e => next(e));
// });


router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    // Check for errors
    if (err) next(new Error("Something went wrong"));
    if (!theUser) next(failureDetails);

    // Return user and logged in
    login(req, theUser).then(user => res.status(200).json(req.user));
  })(req, res, next);
});

// router.post("/rest-login", (req, res, next) => {
//   passport.authenticate("local", (err, theRestaurant, failureDetails) => {
//     // Check for errors
//     if (err) next(new Error("Something went wrong"));
//     if (!theRestaurant) next(failureDetails);

//     // Return Restaurant and logged in
//     login(req, theRestaurant).then(restaurant => res.status(200).json(req.restaurant));
//   })(req, res, next);
// });

router.get("/currentuser", (req, res, next) => {
  if (req.user) {
    res.status(200).json(req.user);
  } else {
    next(new Error("Not logged in"));
  }
});

router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: "logged out" });
});

router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = router;
