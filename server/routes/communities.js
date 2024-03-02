const express = require('express');
const router = express.Router();
const User = require('../database/userbase');
const authMiddleware = require('../middlewares/authMiddleware');
const { accessChat, fetchChats, createGroup, renameGroup, addUserToGroup, removeFromGroup } = require('../controller/chats');

router.post('/', authMiddleware, accessChat);
router.get('/', authMiddleware, fetchChats)
router.post('/group', authMiddleware, createGroup);
router.put('/rename', authMiddleware, renameGroup);
router.put('/add', authMiddleware, addUserToGroup);
router.delete('/leave', authMiddleware, removeFromGroup);

module.exports = router;