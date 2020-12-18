const express = require('express')
const {addOrderItems, getOrderById} = require('../controller/orderController.js')
const protect = require('../middleware/authMiddleware')

const router = express.Router()

router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderById)

module.exports = router 