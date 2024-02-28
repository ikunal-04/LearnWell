const express = require('express');
const userRouter = require('./user');
const courseRouter = require('./courses');
const communityRouter = require('./communities');

const router = express.Router();

router.use('/user', userRouter);
router.use('/courses', courseRouter);
router.use('/communities', communityRouter);

module.exports = router;