// require('dotenv').config();

// const mongoose = require('mongoose');
// const Restaurant = require('../models/Restaurant');
// const bcrypt = require('bcrypt');

// const dbName = process.env.DBURL
// mongoose.connect(dbName,{useMongoClient:true});

// const salt = bcrypt.genSaltSync(10);
// const hashPass = bcrypt.hashSync('1234', salt);

// const restaurants = [
//   {
//     username: 'lateralcastellana',
//     password: hashPass,
//     email: 'am.hogberg@gmail.com',
//     name: 'Lateral',
//     phone: 111111111,
//     address: 'Paseo de la Castellana 89, 28046, Madrid',
//     tables: 20,
//     type: 'Spanish',
// },
// {
//   username: 'lacharla',
//   password: hashPass,
//   email: 'am.hogberg@gmail.com',
//   name: 'La Charla',
//   phone: 111111111,
//   address: 'Calle de Santa Engracia, 76, 28010 Madrid',
//   tables: 15,
//   type: 'Spanish',
// }
// ];

// Restaurant.collection.drop();

// Restaurant.create(restaurants, (err, data) => {
//   if (err) {throw (err)}
//   console.log("Restaurant created")
//   //mongoose.disconnect();
// })