const express = require('express');
const userRouter = require('./user');
const courseRouter = require('./courses');

const router = express.Router();

router.use('/user', userRouter);
router.use('/courses', courseRouter);

module.exports = router;