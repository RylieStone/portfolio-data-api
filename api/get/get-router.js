const express = require('express')
const methods = require('./get-model')
const middleware = require('./get-middleware')
const router = express.Router()
router.get('/github', async (req, res) => {
    try {
        const GithubUsername = process.env.GITHUB_USERNAME
        const projects = await methods.github(GithubUsername)
        res.status(200).json(projects)
    } catch {
        res.status(500).json({message: 'server couldnt fetch projects'})
    }
})



module.exports = router