const http = require('http')
const {
    notFound,
    isUrlWithId,
    getIdFromUrl,
} = require('./utils')
const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('./controllers/productController')

const server = http.createServer((req, res) => {

    switch (req.method) {
        case 'GET':
            req.url === '/api/products' ? getProducts(req, res)

                : isUrlWithId(req.url) ? getProduct(req, res, getIdFromUrl(req.url))

                    : notFound()
            break
        case 'POST':
            req.url === '/api/products' && createProduct(req, res)
            break
        case 'PUT':
            isUrlWithId(req.url) && updateProduct(req, res, getIdFromUrl(req.url))
            break
        case 'DELETE':
            isUrlWithId(req.url) && deleteProduct(req, res, getIdFromUrl(req.url))
            break
        default:
            console.log('not a valid request method')
    }

})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))