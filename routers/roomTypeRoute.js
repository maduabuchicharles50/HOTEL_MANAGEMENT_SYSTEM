const express = require('express')
const router = express.Router()
const roomTypeController = require('../controllers/roomTypeController')
// const authenticate = require('../middlewares')

router.post('/',  roomTypeController.create)
router.get('/:id', roomTypeController.getRoomType)
router.patch('/:id', roomTypeController.update)
router.get('/', roomTypeController.getRoomTypes)
router.delete('/:id', roomTypeController.delete)

module.exports = router