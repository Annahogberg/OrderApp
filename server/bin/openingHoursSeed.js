require('dotenv').config();

const mongoose = require('mongoose');
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


  OpeningHours.collection.drop();

  OpeningHours.create(openinghours, (err, data) => {
  if (err) {throw (err)}
  console.log("hours created")
  //mongoose.disconnect();
})