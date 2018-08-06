const express = require('express');
const router  = express.Router();

const authRoutes = require('./auth.controller');
const profileRoutes = require('./profile.controller')
const restaurantsRoutes = require('./restaurants.controller')
const reservationRoutes = require('./reservations.controller')
const reviewRoutes = require('./review.controller')
const carteRoutes = require('./dish.controller')



router.use('/auth', authRoutes);
router.use('/profile', profileRoutes);
router.use('/restaurants', restaurantsRoutes);
router.use('/reservations', reservationRoutes);
router.use('/reviews', reviewRoutes);


router.use('/carte', carteRoutes);


module.exports = router;