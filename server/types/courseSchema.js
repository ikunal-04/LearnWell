const zod = require('zod');

const courseSchemaCreate = zod.object({
    title: zod.string().min(5).max(20),
    description: zod.string().min(2).max(100),
    instructor: zod.string().min(5).max(20),
    material: zod.string().min(100).max(2000)
})

module.exports = {
    courseSchemaCreate
}