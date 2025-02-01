const express = require('express')
const launchRouter = express.Router()
const { getInfoController, addNewData } = require('../controllers/launch.controller')

launchRouter.get("/getinfo" , getInfoController)
launchRouter.post("/create" , addNewData)

module.exports = {
    launchRouter
}