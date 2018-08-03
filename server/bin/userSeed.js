require('dotenv').config();

const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const dbName = process.env.DBURL
mongoose.connect(dbName,{useMongoClient:true});

const salt = bcrypt.genSaltSync(10);
const hashPass = bcrypt.hashSync('1234', salt);

const users = [
  {
    username: 'nanna',
    password: hashPass,
    email: 'am.hogberg@gmail.com',
    name: 'Anna',
    phone: 111111111,
    isRestaurant: false,
    isClient: true,
    age: 27,
  },
  {
    username: 'josimo',
    password: hashPass,
    email: 'joseceballosdar@gmail.com',
    name: 'Casa José',
    phone: 111111111,
    isRestaurant: true,
    isClient: false,
    address: 'Calle Santiago Bernabeu 7',
    type: 'Italian',
  
  },
  {
    username: 'hola',
    password: hashPass,
    email: 'hola@gmail.com',
    name: 'Casa hola',
    phone: 111111111,
    isRestaurant: true,
    isClient: false,
    address: 'Calle Santiago Bernabeu 7',
    type: 'Italian',
  
  },
];

User.collection.drop();

User.create(users, (err, data) => {
  if (err) {throw (err)}
  console.log("Users created")
  //mongoose.disconnect();
})