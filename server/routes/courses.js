const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const Course = require('../database/coursebase');
const { courseSchemaCreate } = require('../types/courseSchema');

const router = express.Router();

router.post('/create', authMiddleware, async (req, res) => {
    const payLoad = req.body;
    const { success } = courseSchemaCreate.safeParse(payLoad);
    if (!success) {
        return res.status(400).json({
            message: "Invalid data!!"
        });
    }
    await Course.create({
        userId: req.userId,
        title: payLoad.title,
        description: payLoad.description,
        instructor: payLoad.instructor,
        material: payLoad.material
    });
    return res.status(200).json({
        message: "course created successfully!!"
    });
});

router.get('/', authMiddleware, async (req, res) => {
    const courses = await Course.find({});
    res.json({
        courses
    });
})

router.get('/:id', authMiddleware, async (req, res) => {
    const course = await Course.findById(req.params.id);
    res.json({
        course
    });
})

module.exports = router;