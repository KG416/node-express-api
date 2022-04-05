const Product = require('../models/productModel')
const PRODUCT_NOT_FOUND = { message: 'product not found' }

async function getProducts(req, res) {
    try {
        const products = await Product.findAll()

        if (!products) {
            return res.status(500).json({ message: 'failed to get products' })
        }
        res.json(products)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

async function getProduct(req, res) {
    try {
        const product = await Product.findById(req.params.id)

        if (!product) {
            return res.status(404).json(PRODUCT_NOT_FOUND)
        }
        res.json(product)

    } catch (err) {
        res.json({ message: err.message })
    }
}

async function createProduct(req, res) {
    const body = req.body

    try {
        const product = {
            name: body.name,
            description: body.description,
            price: body.price
        }

        const newProduct = await Product.create(product)
        if (!newProduct) {
            return res.status(500).json({ message: 'failed to create product' })
        }
        res.status(201).json(newProduct)

    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

async function updateProduct(req, res) {
    const id = req.params.id
    const { name, description, price } = req.body

    try {
        const product = await Product.findById(id)

        if (!product) {
            return res.status(404).json(PRODUCT_NOT_FOUND)
        } else {
            const productData = {
                name: name || product.name,
                description: description || product.description,
                price: price || product.price
            }

            const updProduct = await Product.update(id, productData)
            res.json(updProduct)
        }

    } catch (err) {
        console.log(err)
    }
}

async function deleteProduct(req, res) {
    const id = req.params.id

    try {
        const product = await Product.findById(id)

        if (!product) {
            return res.status(500).json(PRODUCT_NOT_FOUND)
        }
        await Product.remove(id)
        res.json({ message: `removed ${product?.name} with id ${id}` })

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}