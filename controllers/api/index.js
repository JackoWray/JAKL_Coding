// const router = require('express').Router();
const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
// const pageRoutes = require('./pageRoutes');
// const componentRoutes = require('./componentRoutes');
const pageComponentRoutes = require('./pageComponentRoutes');

router.use('/users', userRoutes);
// router.use('/pages', pageRoutes);
// router.use('/components', componentRoutes);
router.use('/page-components', pageComponentRoutes);

module.exports = router;
