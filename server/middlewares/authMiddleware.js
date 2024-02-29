const jwt = require('jsonwebtoken');
const User = require('../database/userbase');
require('dotenv').config();

async function authMiddleware(req, res, next) {
    const token = req.headers.authorization;
    if (!token || !token.startsWith('Bearer')) {
        return res.status(401).json({
            message: "error-token not found!"
        })
    }

    const actualToken = token.split(' ')[1];

    try {
        const decode = jwt.verify(actualToken, process.env.JWT_SECRET);
        req.userId = decode.userId;
        console.log("Authenticated User ID:", req.userId);
        req.user = await User.findById(decode.userId).select('-password');
        console.log("Authenticated User:", req.user);
        next();
    } catch (error) {
        console.log(error);
        console.log('error in authMiddleware');
        return res.status(401).json({
            message: "Invalid token"
        })
    }
}

module.exports = authMiddleware;