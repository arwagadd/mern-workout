//to have access to the app in the server, use the express router
const express = require('express')
const router = express.Router()

//Get all workouts
router.get('/', (req,res) => {
    res.json({mssg : 'Get all workouts'})
})

//Get a single workout
router.get('/:id', (req, res) =>{
    res.json({mssg : 'Get a single workout'})
} )

//Post a new workout
router.post('/' , (req, res) => {
    res.json({mssg : 'Post a new workout'})
})

//Delete a new workout
router.post('/:id' , (req, res) => {
    // req.body
    res.json({mssg : 'Delete a workout'})
})

//Update a new workout
router.patch('/:id' , (req, res) => {
    res.json({mssg : 'Update a workout'})
})

//once you create all your routes
module.exports = router