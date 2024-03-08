const zod = require('zod');

const userSchemaSignup = zod.object({
    username: zod.string().max(20),
    email: zod.string().email(),
    password: zod.string().min(5),
    mobile: zod.string().min(10).max(10),
})

const userSchemaSignin = zod.object({
    username: zod.string().max(20),
    password: zod.string().min(6)
})

module.exports = {
    userSchemaSignup,
    userSchemaSignin
};