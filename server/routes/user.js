const express = require('express');
const { userSchemaSignup, userSchemaSignin } = require('../types/userSchema');
const User = require('../database/userbase');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middlewares/authMiddleware');
require('dotenv').config();

const router = express.Router();

router.post('/signup', async (req, res) => {
    const payLoad = req.body;
    const { success } = userSchemaSignup.safeParse(payLoad);
    if (!success) {
        return res.status(400).json({
            message: "wrong inputs, invalid data"
        });
    }

    const userexists = await User.findOne({
        username: payLoad.username
    });

    if (userexists) {
        return res.status(400).json({
            message: "UserName already exists!!"
        })
    }

    const user = await User.create({
        username: payLoad.username,
        email: payLoad.email,
        password: payLoad.password,
        mobile: payLoad.mobile
    });

    const userId = user._id;
    const token = jwt.sign({ userId }, process.env.JWT_SECRET);
    res.status(201).json({
        message: "User created successfully!!",
        token: token
    });
})

router.post('/signin', async (req, res) => {
    const payLoad = req.body;
    const { success } = userSchemaSignin.safeParse(payLoad);
    if (!success) {
        return res.status(400).json({
            message: "Invalid user"
        })
    }
    const user = await User.findOne({
        username: payLoad.username
    });

    if (user) {
        if (user.password !== payLoad.password) {
            return res.status(400).json({
                message: "Incorrect password!"
            })
        }
    }

    if (!user) {
        return res.status(400).json({
            message: "Invalid user! First signup!!"
        })
    }

    const userId = user._id;
    const token = jwt.sign({ userId }, process.env.JWT_SECRET);
    res.status(200).json({
        message: "User signed in successfully",
        token: token
    })
})

router.get('/dashboard', authMiddleware, (req, res) => {
    res.status(200).json({
        message: "Welcome to the user page!!"
    })
})

module.exports = router;