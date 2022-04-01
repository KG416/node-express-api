const express = require('express')
const router = express.Router()
const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController')

router.get('/', getProducts)
router.get('/:id', getProduct)
router.post('/create', createProduct)
router.put('/', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router