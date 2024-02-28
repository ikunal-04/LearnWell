const Chat = require('../database/chatModel');
const User = require('../database/userbase')

async function accessChat(req, res) {
    const { userId } = req.body;

    if (!userId) {
        return res.status(400).send('userId param not sent with request');
    }

    try {
        console.log(req.user._id);
        console.log(userId);
        let isChat = await Chat.findOne({
            isGroupChat: false,
            users: { $all: [req.user._id, userId] }
        })
            .populate('users', '-password')
            .populate('latestMessage');

        // isChat = await User.populate(isChat, {
        //     path: "latestMessage.sender",
        //     select: 'username'
        // });

        if (isChat) {
            return res.send(isChat);
        } else {
            const chatData = {
                chatName: "sender",
                isGroupChat: false,
                users: [req.user._id, userId],
            };

            const createdChat = await Chat.create(chatData);
            const fullChat = await Chat.findOne({ _id: createdChat._id }).populate('users', '-password');
            res.status(200).json(fullChat);


        }
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}

module.exports = accessChat;