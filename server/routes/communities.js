const express = require('express');
const router = express.Router();
const User = require('../database/userbase');
const authMiddleware = require('../middlewares/authMiddleware');
const accessChat = require('../controller/accessChat');

router.post('/', authMiddleware, accessChat);

// router.get('/', authMiddleware, async (req, res) => { })
// router.post('/join', authMiddleware, async (req, res) => { });
// router.put('/rename', authMiddleware, async (req, res) => { });
// router.delete('/leave', authMiddleware, async (req, res) => { });
// router.put('/add', authMiddleware, async (req, res) => { });

module.exports = router;