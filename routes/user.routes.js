
const express = require("express");

const controller = require('../controller/user.controller')

const router = express.Router()



router.post('/create', controller.create)

// Read Routes
router.get("/read", controller.read)

// Update Routes by id

router.get("/update/:id", controller.update)

// Delete
router.delete('/delete/:id', controller.deleteUser)




module.exports = router