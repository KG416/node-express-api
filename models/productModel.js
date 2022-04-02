let products = require('../data/products.json')
const { v4: uuidv4 } = require('uuid')
const { writeDataToFile } = require('../utils')

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
        writeDataToFile('./data/products.json', products)
    } catch (err) {
        console.log(err.message)
    }
}

/* 
function update(id, product) {
    return new Promise((resolve, reject) => {
        const index = products.findIndex((p) => p.id === id)
        products[index] = { id, ...product }
        writeDataToFile('./data/products.json', products)
        resolve(products[index])
    })
}

async function remove(id) {
    return new Promise((resolve, reject) => {
        products = products.filter(p => p.id !== id)
        writeDataToFile('./data/products.json', products)
        resolve()
    })
} */

module.exports = {
    findAll,
    findById,
    create,
    /* update,
     remove */
} 