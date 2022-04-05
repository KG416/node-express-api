const Product = require('../models/productModel')
const PRODUCT_NOT_FOUND = { message: 'product not found' }

async function getProducts(req, res) {
    try {
        const products = await Product.findAll()
        res.json(products)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

async function getProduct(req, res) {
    try {
        const product = await Product.findById(req.params.id)

        if (!product) {
            return res.status(404).send(PRODUCT_NOT_FOUND)
        }
        res.json(product)

    } catch (err) {
        res.send({ message: err.message })
    }
}

async function createProduct(req, res) {
    try {
        const reqBody = req.body

        const product = {
            name: reqBody.name,
            description: reqBody.description,
            price: reqBody.price
        }

        const newProduct = await Product.create(product)
        res.status(201).json(newProduct)

    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

async function updateProduct(req, res, id) {
    try {
        const product = await Product.findById(id)

        if (!product) {
            res.send(PRODUCT_NOT_FOUND)
        } else {
            const body = await getPostData(req)

            const { name, description, price } = JSON.parse(body)

            const productData = {
                name: name || product.name,
                description: description || product.description,
                price: price || product.price
            }

            const updProduct = await Product.update(id, productData)

            //res.send(updProduct)
            res.send('UPDATE PRODUCT')
        }

    } catch (err) {
        console.log(err)
    }
}

async function deleteProduct(req, res, id) {
    try {
        const product = await Product.findById(id)

        if (!product) {
            res.send(PRODUCT_NOT_FOUND)
        } else {
            await Product.remove(id)
            res.send({ message: `removed ${product?.name} (id: ${id})` })
        }

    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}