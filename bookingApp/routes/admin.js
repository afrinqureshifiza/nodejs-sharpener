const express = require('express')
const router = express.Router()

const user = require('../models/User')

const userDbController = require('../controllers/userDbController')

router.post('/add-user', userDbController.addUser)

router.get('/get-users', userDbController.getAllUsers)

router.delete('/delete-user/:id', userDbController.deleteUser)

module.exports= router