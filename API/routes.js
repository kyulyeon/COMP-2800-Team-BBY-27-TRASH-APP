const express = require('express')
const router = express.Router()
const Question = require('../DB/Question')


// get all quiz questions
router.get('/questionss', async (req, res) => {
    try {
        const questions = await Question.find()
        return res.status(200).json(questions)
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})

// get one quiz question
router.get('/questions/:id', async (req, res) => {
    try {
        const _id = req.params.id 

        const question = await Question.findOne({_id})        
        if(!question){
            return res.status(404).json({})
        }else{
            return res.status(200).json(question)
        }
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})


// create one quiz question
router.post('/questions', async (req, res) => {
    try {
        const { description } = req.body
        const { alternatives } = req.body

        const question = await Question.create({
            description,
            alternatives
        })

        return res.status(201).json(question)
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})

module.exports = router