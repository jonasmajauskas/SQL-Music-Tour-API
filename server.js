// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize') //define the class to use

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// CONTROLLERS 
const bandsController = require('./controllers/bands_controller')
app.use('/bands', bandsController)

const eventsController = require('./controllers/events_controller')
app.use('/bands', eventsController)

const stagesController = require('./controllers/stages_controller')
app.use('/bands', stagesController)


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})