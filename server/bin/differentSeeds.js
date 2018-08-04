require('dotenv').config();

const mongoose = require('mongoose');
const Cords = require('../models/Coordinates');
const OpeningHours = require('../models/OpeningHours');

const bcrypt = require('bcrypt');

const dbName = process.env.DBURL
mongoose.connect(dbName,{useMongoClient:true});

const openinghours = [
  {
    openTime1: '11:00',
    closeTime1: "16:00",
    openTime2: "19:00", 
    closeTime2: "00:00",
  }]

  const coordinates = [
    {
      lat: 40.4169473,
      lng: -3.7035285
    }]


  OpeningHours.collection.drop();
  Cords.collection.drop();

  Cords.create(coordinates, (err, data) => {
    if (err) {throw (err)}
    //mongoose.disconnect();
  })

  OpeningHours.create(openinghours, (err, data) => {
  if (err) {throw (err)}
  //mongoose.disconnect();
})
