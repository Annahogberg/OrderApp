const express = require('express');
const router  = express.Router();

const authRoutes = require('./auth.controller');
const profileRoutes = require('./profile.controller')
const restaurantsRoutes = require('./restaurants.controller')
const reservationRoutes = require('./reservations.controller')


router.use('/auth', authRoutes);
router.use('/profile', profileRoutes, reservationRoutes);
router.use('/restaurants', restaurantsRoutes);


module.exports = router;