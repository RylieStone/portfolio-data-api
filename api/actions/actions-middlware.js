// add middlewares here related to actions
const methods = require('./actions-model')
const pMethods = require('../projects/projects-model')
async function actionIdChecker(req, res, next) {
    const action = await methods.get(req.params.id)
    if (!action) {
        res.status(404).json({message: 'the action with the requested id does not exist'})
    } else {
        next()
    }
}
// | id          | number    | do not provide it when creating actions, the database will generate it                           |
// | project_id  | number    | required, must be the id of an existing project                                                  |
// | description | string    | required, up to 128 characters long                                                              |
// | notes       | string    | required, no size limit. Used to record additional notes or requirements to complete the action  |
// | completed   | boolean   | not required, defaults to false when creating actions                                            |

async function actionRequiredFields(req, res, next) {
    const {project_id, description, notes, completed} = req.body
    if (!project_id || !description || !notes || description <= 128) {
        res.status(400).json({message: 'you need to have project_id, description, and notes for a action and description can only be 128 characters long'})
    } else {
        if (req.method == 'PUT' && completed == undefined) {
            res.status(400).json({message: 'you need to have project_id, description, and notes for a action and description can only be 128 characters long'})
        } else {
            if (completed == undefined) req.body.completed = false
            next() 
        }
    }
}

async function projectIdChecker(req, res, next) {
    const project = await pMethods.get(req.params.id)
    if (!project) {
        res.status(404).json({message: 'the project with the requested id does not exist'})
    } else {
        next()
    }
}
module.exports = {
    actionIdChecker,
    actionRequiredFields,
    projectIdChecker
}