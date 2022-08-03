const express = require('express');

const Controller = require('../controller/e-commerce.controller')

const router = express.Router();

// Create

router.post('/signup',Controller.signupCreate)
router.post('/signin',Controller.signinCreate)
router.post('/products',Controller.productsread)
router.post('/contact',Controller.ContactCreate)

module.exports = router