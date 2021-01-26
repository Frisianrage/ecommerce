const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const colors = require('colors')
const morgan = require('morgan')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const orderRoutes = require('./routes/orderRoutes')
const uploadRoutes = require('./routes/uploadRoutes')
const {notFound, errorHandler} = require('./middleware/errorMiddleware.js')

dotenv.config()
connectDB()

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {res.send('APP is running')})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))

const dirname = path.resolve()
app.use('/uploads', express.static(path.join(dirname, '/uploads')))

app.use(notFound)
app.use(errorHandler)


app.listen(PORT, console.log(`Server is running on port ${PORT}`.yellow.bold))