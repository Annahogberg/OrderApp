const express = require('express');
const router  = express.Router();

const authRoutes = require('./auth.controller');
const profileRoutes = require('./profile.controller')
const restaurantsRoutes = require('./restaurants.controller')


router.use('/auth', authRoutes);
router.use('/profile', profileRoutes);
router.use('/restaurants', restaurantsRoutes);

module.exports = router;