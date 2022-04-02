const express = require('express')
const productsRouter = require('./routes/productRoutes')
const app = express()
const PORT = 5000

app.use(express.json())
app.use('/products', productsRouter)

app.listen(PORT, () => console.log(`Server running on ${PORT}`))