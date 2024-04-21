// add middlewares here related to projects
const methods = require('./projects-model')
async function projectIdChecker(req, res, next) {
    const project = await methods.get(req.params.id)
    if (!project) {
        res.status(404).json({message: 'the project with the requested id does not exist'})
    } else {
        next()
    }
}

async function projectRequiredFields(req, res, next) {
    const {name, description, completed} = req.body
    if (!name || !description) {
        res.status(400).json({message: 'you need to have name and description for a project'})
    } else {
        if (req.method == 'PUT' && completed == undefined) {
            res.status(400).json({message: 'you need to have name, description, and completed for the project'})
        } else {
            if (completed == undefined) req.body.completed = false
            next() 
        }
    }
}
module.exports = {
    projectIdChecker,
    projectRequiredFields
}