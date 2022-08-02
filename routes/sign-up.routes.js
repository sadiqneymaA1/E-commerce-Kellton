const express = require("express");

const controller = require('../controller/contact.controller')

const router = express.Router()



router.post('/signup', controller.Contactcreate)

module.exports = router