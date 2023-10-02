require('dotenv').config()
const express = require('express');

//express app
const app = express();
const workoutRoutes = require('./routes/workouts')

//When posting a new workout on the server, you have to do it via middleware in the express app
//It sees if the request has a body, if it does, it parses it to the req object
app.use(express.json)

//routes
app.use('/api/workout', workoutRoutes)

//listen for requests
app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT)
})