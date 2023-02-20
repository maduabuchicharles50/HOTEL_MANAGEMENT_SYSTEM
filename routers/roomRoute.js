const express = require('express')
const router = express.Router()
const roomController = require('../controllers/roomController')
const isLoggedIn = require('../middlewares/authentication')

router.post('/', isLoggedIn, roomController.create)
router.get('/:id', roomController.findById)
router.patch('/:id', isLoggedIn, roomController.update)
router.get('/', roomController.find)
router.delete('/:id',isLoggedIn, roomController.delete)

module.exports = router