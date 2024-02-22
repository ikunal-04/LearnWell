const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const Course = require('../database/coursebase');
const { courseSchemaCreate } = require('../types/courseSchema');

const router = express.Router();

router.post('/create', async (req, res) => {
    const payLoad = req.body;
    const { success } = courseSchemaCreate.safeParse(payLoad);
    if (!success) {
        return res.status(400).json({
            message: "Invalid data!!"
        });
    }
    await Course.create({
        title: payLoad.title,
        description: payLoad.description,
        instructor: payLoad.instructor,
        material: payLoad.material
    });
    return res.status(200).json({
        message: "course created successfully!!"
    });
});

router.get('/', async (req, res) => {
    const courses = await Course.find({});
    res.json({
        courses
    });
})

module.exports = router;