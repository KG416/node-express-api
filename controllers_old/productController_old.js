const Product = require('../models_old/productModel')
const { getPostData } = require('../utils')

async function getProducts(req, res) {
    try {
        const products = await Product.findAll()

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(products))
    } catch (err) {
        console.log(err)
    }
}

async function getProduct(req, res, id) {
    try {
        const product = await Product.findById(id)
        
        if (!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'product not found' }))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(product))
        }

    } catch (err) {
        console.log(err)
    }
}

async function createProduct(req, res) {
    try {
        const body = await getPostData(req)

        const { name, description, price } = JSON.parse(body)

        const product = {
            name,
            description,
            price
        }

        const newProduct = await Product.create(product)

        res.writeHead(201, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify(newProduct))

    } catch (err) {
        console.log(err)
    }
}

async function updateProduct(req, res, id) {
    try {
        const product = await Product.findById(id)

        if(!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'product not found' }))
        } else {
            const body = await getPostData(req)

            const { name, description, price } = JSON.parse(body)

            const productData = {
                name: name || product.name,
                description: description || product.description,
                price: price || product.price
            }

            const updProduct = await Product.update(id, productData)

            res.writeHead(200, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify(updProduct))
        }  

    } catch (err) {
        console.log(err)
    }
}

async function deleteProduct(req, res, id) {
    try {
        const product = await Product.findById(id)

        if (!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'product not found' }))
        } else {
            await Product.remove(id)
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: `removed ${product?.name} (id: ${id})` }))
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