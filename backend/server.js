const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const colors = require('colors')
const productRoutes = require('./routes/productRoutes')
const {notFound, errorHandler} = require('./middleware/errorMiddleware.js')

dotenv.config()
const app = express();
connectDB()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('APP is running')
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, console.log(`Server is running on port ${PORT}`.yellow.bold))