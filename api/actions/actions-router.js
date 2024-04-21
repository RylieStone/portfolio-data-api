// Write your "actions" router here!
const express = require('express')
const methods = require('./actions-model')
const middleware = require('./actions-middlware')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const actions = await methods.get()
        res.status(200).json(actions)
    } catch {
        res.status(500).json({message: 'server couldnt fetch actions'})
    }
})

router.get('/:id', middleware.actionIdChecker, async (req, res) => {
    try {
        const action = await methods.get(req.params.id)
        res.status(200).json(action)
    } catch {
        res.status(500).json({message: 'server couldnt fetch action'})
    }
})

router.post('/', middleware.actionRequiredFields, middleware.projectIdChecker, async (req, res) => {
    const {project_id, description, notes, completed} = req.body
    const newAction = await methods.insert({project_id, description, notes, completed})
    try {
        res.status(201).json(newAction)
    } catch {
        res.status(500).json({message: 'server couldnt make a new action'})
    }
})

router.put('/:id', middleware.actionIdChecker, middleware.actionRequiredFields, middleware.projectIdChecker, async (req, res) => {
    const {project_id, description, notes, completed} = req.body
    const updatedAction = await methods.update(req.params.id, {project_id, description, notes, completed})
    try {
        res.status(201).json(updatedAction)
    } catch {
        res.status(500).json({message: 'server couldnt update the Action'})
    }
})

router.delete('/:id', middleware.actionIdChecker, async (req, res) => {
    try {
        await methods.remove(req.params.id)
        res.status(200).json({})
    } catch {
        res.status(500).json({message: 'server couldnt delete project'})
    }
})

module.exports = router