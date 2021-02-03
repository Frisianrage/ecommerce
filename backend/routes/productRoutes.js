const express = require('express')
const { getProducts, getProductById, deleteProduct, createProduct, updateProduct, createProductReview, getTopProducts } = require('../controller/productController.js')
const {protect, admin} = require('../middleware/authMiddleware')

const router = express.Router()

router.route('/').get(getProducts).post(protect, admin, createProduct)

router.get('/top', getTopProducts)

router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct)

router.route('/:id/reviews').post(protect, createProductReview)


module.exports = router