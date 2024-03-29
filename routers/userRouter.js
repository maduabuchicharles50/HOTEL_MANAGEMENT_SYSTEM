const express = require('express')
const router = express.Router()
const userProfileController = require('../controllers/userController')
// const authenticate = require('../middlewares')

router.post('/register',  userProfileController.register)
router.post('/login',  userProfileController.login)

module.exports = router