const stages = require('express').Router()
const db = require('../models')
const { Stage } = db

// FIND ALL BANDS
stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stage.findAll()
        res.status(200).json(foundStages)
    } catch (error) {
        res.status(500).json(error)
    }
})

stages.get('/:id', async (req, res) => {
    try {
        const foundEvent = await Stage.findOne({
            where: { event_id : req.params.id }
        })
        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})

stages.put('/:id', async (req, res) => {
    try {
        const updatedStages = await Stage.update(req.body, {
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedStages} event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

events.delete('/:id', async (req, res) => {
    try {
        const updatedStages = await Event.update(req.body, {
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedStages} event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = stages