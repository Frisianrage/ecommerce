const express = require('express')
const { getProducts, getProductById, deleteProduct } = require('../controller/productController.js')
const {protect, admin} = require('../middleware/authMiddleware')

const router = express.Router()

router.route('/').get(getProducts)

router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct)

module.exports = router