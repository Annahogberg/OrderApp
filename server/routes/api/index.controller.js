const express = require('express');
const router  = express.Router();

const authRoutes = require('./auth.controller');
const profileRoutes = require('./profile.controller')
const restaurantsRoutes = require('./restaurants.controller')
const reservationRoutes = require('./reservations.controller')
const reviewRoutes = require('./review.controller')



router.use('/auth', authRoutes);
router.use('/profile', profileRoutes);
router.use('/restaurants', restaurantsRoutes);
router.use('/reservations', reservationRoutes);
router.use('/reviews', reviewRoutes);




module.exports = router;