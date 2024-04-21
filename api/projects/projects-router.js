// Write your "projects" router here!
const express = require('express')
const methods = require('./projects-model')
const middleware = require('./projects-middleware')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const projects = await methods.get()
        res.status(200).json(projects)
    } catch {
        res.status(500).json({message: 'server couldnt fetch projects'})
    }
})

router.get('/:id', middleware.projectIdChecker, async (req, res) => {
    try {
        const projects = await methods.get(req.params.id)
        res.status(200).json(projects)
    } catch {
        res.status(500).json({message: 'server couldnt fetch projects'})
    }
})

router.post('/', middleware.projectRequiredFields, async (req, res) => {
    const {name, description, completed} = req.body
    const newProject = await methods.insert({name, description, completed})
    try {
        res.status(201).json(newProject)
    } catch {
        res.status(500).json({message: 'server couldnt make a new project'})
    }
})

router.put('/:id', middleware.projectIdChecker, middleware.projectRequiredFields, async (req, res) => {
    const {name, description, completed} = req.body
    const updatedProject = await methods.update(req.params.id, {name, description, completed})
    try {
        res.status(201).json(updatedProject)
    } catch {
        res.status(500).json({message: 'server couldnt update the project'})
    }
})

router.delete('/:id', middleware.projectIdChecker, async (req, res) => {
    try {
        await methods.remove(req.params.id)
        res.status(200).json({})
    } catch {
        res.status(500).json({message: 'server couldnt delete project'})
    }
})

router.get('/:id/actions', middleware.projectIdChecker, async (req, res) => {
    try {
        const actions = await methods.getProjectActions(req.params.id)
        res.status(200).json(actions)
    } catch {
        res.status(500).json({message: 'server coudlnt fetch actions'})
    }
})

module.exports = router