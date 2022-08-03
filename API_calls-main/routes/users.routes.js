const express = require('express')

const controller = require('../controller/user.controller')

const router = express.Router()


// Req client for data
// res from database
router.post('/create', controller.create)

router.get('/read', controller.read)

router.put('/update/:id', controller.update)

router.put('/delete/:id', controller.deleteUsers)

module.exports = router