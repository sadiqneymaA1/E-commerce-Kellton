const express = require("express");

const controller = require('../controller/contact.controller')

const router = express.Router()



router.post('/signin', controller.Contactcreate)

module.exports = router