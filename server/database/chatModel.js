const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);

const chatSchema = new mongoose.Schema({
    chatName: {
        type: String,
        trim: true,
    },
    isCommunity: {
        type: Boolean,
        default: false
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
    },
    communityAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
},
    {
        timestamps: true,
    }
)

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;