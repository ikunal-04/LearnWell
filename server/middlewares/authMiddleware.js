const jwt = require('jsonwebtoken');
require('dotenv').config();

function authMiddleware(req, res, next) {
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
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }
}

module.exports = authMiddleware;