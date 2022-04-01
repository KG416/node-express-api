const express = require('express')
const app = express()
const PORT = 5000

app.use(express.json())
const productsRouter = require('./routes/productRoutes')
app.use('/products', productsRouter)

app.listen(PORT, () => console.log(`Server running on ${PORT}`))