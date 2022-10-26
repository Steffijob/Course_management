const express = require('express')
const router = express.Router()

const courseModel = require('../model/CourseModel')
const mongoose = require('mongoose')

router.post('/add', async (req, res) => {
    console.log('body', req.body);
    try {
    
        const courseMod = new courseModel({
            name: req.body.data.name,
            duration: req.body.data.duration,
            description: req.body.data.description
        })
        await courseMod.save()
        res.json({
            success: 1,
            message: 'Course successfuly saved'

        })
    }
    catch (err) {
        res.json({
            success: 0,
            message: 'error occuured while saving' + err
        })
    }
})

router.get('/', async (req, res) => {
    try {
    
        let allcourse = await courseModel.find()
        res.json({
            success: 1,
            message: 'courses listed succesfully',
            item: allcourse
        })
    }
    catch (err) {
        res.json({
            success: 0,
            message: 'error occured while listing' + err
        })
    }
})




module.exports = router