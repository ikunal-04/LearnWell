const Chat = require('../database/chatModel');
const User = require('../database/userbase')

async function accessChat(req, res) {
    const { userId } = req.body;

    if (!userId) {
        return res.send("No User Exists!");
    }

    let chat = await Chat.find({
        isGroupChat: false,
        $and: [
            { users: { $elemMatch: { $eq: req.user.id } } },
            { users: { $elemMatch: { $eq: userId } } },
        ],
    }).populate("users", "-password").populate("latestMessage");

    chat = await User.populate(chat, {
        path: "latestMessage.sender",
        select: "name email _id",
    });

    if (chat.length > 0) {
        res.send(chat[0]);
    } else {
        const createChat = await Chat.create({
            chatName: "sender",
            isGroupChat: false,
            users: [req.user._id, userId],
        });

        const fullChat = await Chat.findOne({ _id: createChat._id }).populate(
            "users",
            "-password"
        );

        res.status(201).json(fullChat);
    }
}

async function fetchChats(req, res) {
    try {
        Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
            .populate("users", "-password")
            .populate("groupAdmin", "-password")
            .populate("latestMessage")
            .sort({ updatedAt: -1 })
            .then(async (results) => {
                results = await User.populate(results, {
                    path: "latestMessage.sender",
                    select: "name email _id",
                });
                res.status(200).json(results);
            });
    } catch (error) {
        console.log(error);
        res.status(400);
    }
}

async function createGroup(req, res) {
    if (!req.body.users || !req.body.name) {
        return res.status(400).send({ message: "Please Fill all the feilds" });
    }

    var users = JSON.parse(req.body.users);

    if (users.length < 2) {
        return res
            .status(400)
            .send("More than 2 users are required to form a group chat");
    }

    users.push(req.user.id);

    const groupChat = await Chat.create({
        chatName: req.body.name,
        users: users,
        isGroupChat: true,
        groupAdmin: req.user.id,
    });

    const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
        .populate("users", "-password")
        .populate("groupAdmin", "-password");

    res.status(200).json(fullGroupChat);
}

async function renameGroup(req, res) {
    const { chatId, chatName } = req.body;

    const updateChat = await Chat.findByIdAndUpdate(
        chatId,
        {
            chatName: chatName,
        },
        {
            new: true,
        }
    )
        .populate("users", "-password")
        .populate("groupAdmin", "-password");

    if (!updateChat) {
        throw new BadRequestError("Chat Not Found");
    } else {
        res.json(updateChat);
    }
}

async function addUserToGroup(req, res) {
    const { chatId, userId } = req.body;

    const addUser = await Chat.findByIdAndUpdate(
        chatId,
        {
            $push: { users: userId },
        },
        {
            new: true,
        }
    )
        .populate("users", "-password")
        .populate("groupAdmin", "-password");

    if (!addUser) {
        throw new BadRequestError("Chat Not Found");
    } else {
        res.status(201).json(addUser);
    }
}

module.exports = { accessChat, fetchChats, createGroup, renameGroup, addUserToGroup };