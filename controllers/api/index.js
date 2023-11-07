const router = require('express').Router();
const userRoutes = require('./userRoutes');
const homeRoutes = require('../homeRoutes');
const blogRoutes = require('./blogRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/login', homeRoutes);
router.use('/blogs', blogRoutes);
router.use('/comment', commentRoutes);

module.exports = router;