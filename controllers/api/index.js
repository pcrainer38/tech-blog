const router = require('express').Router();
const userRoutes = require('./userRoutes');
const homeRoutes = require('../homeRoutes');
const blogRoutes = require('./blogRoutes');

router.use('/users', userRoutes);
router.use('/login', homeRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;