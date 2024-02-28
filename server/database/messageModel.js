const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);

const messageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    content: {
        type: String,
        trim: true,
    },
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat",
    },
    readBy: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ]
},
    {
        timestamps: true,
    }
)

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;