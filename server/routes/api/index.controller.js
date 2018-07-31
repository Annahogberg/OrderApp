const express = require('express');
const router  = express.Router();

const authRoutes = require('./auth.controller');

const profileRoutes = require('./profile.controller')
// const thrRoutes  = require('./threads.controller');

router.use('/auth', authRoutes);
// router.use('/threads', thrRoutes);

router.use('/profile', profileRoutes);

module.exports = router;