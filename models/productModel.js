let products = require('../data/products.json')
const { v4: uuidv4 } = require('uuid')
const { writeDataToFile } = require('../utils/utils')

const PRODUCTS_PATH = './data/products.json'

function findAll() {
    try {
        return products
    } catch (err) {
        console.log(err.message)
    }
}

function findById(id) {
    try {
        const product = products.find(product => product.id === id)
        return product
    } catch (err) {
        console.log(err.message)
    }
}

function create(product) {
    try {
        const newProduct = { id: uuidv4(), ...product }
        products.push(newProduct)
        writeDataToFile(PRODUCTS_PATH, products)
        return product
    } catch (err) {
        console.log(err.message)
    }
}


function update(id, product) {
    try {
        const index = products.findIndex((p) => p.id === id)
        products[index] = { id, ...product }
        writeDataToFile(PRODUCTS_PATH, products)
        return products[index]
    } catch (err) {
        console.log(err.message)
    }
}

async function remove(id) {
    try {
        products = products.filter(p => p.id !== id)
        writeDataToFile(PRODUCTS_PATH, products)
    } catch (err) {
        console.log(err.message)
    }
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
} 