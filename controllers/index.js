const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/', userRoutes);

module.exports = router;