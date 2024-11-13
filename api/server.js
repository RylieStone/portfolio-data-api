const express = require('express');
require('dotenv').config()
const getRouter = require('./get/get-router')
const server = express();
server.use(express.json())
server.use('/data/', getRouter)
// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server;
