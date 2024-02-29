const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please Provide a Username"],
        trim: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, "Please Provide Password"],
        minlength: 5,
        trim: true,
    },
    mobile: {
        type: String,
        required: [true, "Please provide a mobile number"],
        unique: true,
        trim: true,
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;