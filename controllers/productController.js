const Product = require('../models/productModel')
const PRODUCT_NOT_FOUND = { message: 'product not found' }

async function getProducts(req, res) {
    try {
        const products = await Product.findAll()
        res.send(products)
    } catch (err) {
        console.log(err)
    }
}

async function getProduct(req, res) {
    const id = req.params.id
    try {
        const product = await Product.findById(id)

        if (!product) {
            res.send(PRODUCT_NOT_FOUND)
        } else {
            res.send(product)
        }

    } catch (err) {
        console.log(err)
    }
}

async function createProduct(req, res) {
    try {
        const body = await getPostData(req)
        const { name, description, price } = body

        const product = {
            name,
            description,
            price
        }

        const newProduct = await Product.create(product)

        //res.send(newProduct)
        res.send('NEW PRODUCT')

    } catch (err) {
        console.log(err)
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