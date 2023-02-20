const express = require('express')
const router = express.Router()
const userProfileController = require('../controllers/userProfileController')
// const authenticate = require('../middlewares')

router.post('/register',  userProfileController.register)
router.post('/login',  userProfileController.login)

module.exports = router