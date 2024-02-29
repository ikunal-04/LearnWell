const express = require('express');
const router = express.Router();
const User = require('../database/userbase');
const authMiddleware = require('../middlewares/authMiddleware');
const { accessChat, fetchChats, createGroup } = require('../controller/chats');

router.post('/', authMiddleware, accessChat);
router.get('/', authMiddleware, fetchChats)
router.post('/create', authMiddleware, createGroup);

// router.put('/rename', authMiddleware, async (req, res) => { });
// router.delete('/leave', authMiddleware, async (req, res) => { });
// router.put('/add', authMiddleware, async (req, res) => { });

module.exports = router;