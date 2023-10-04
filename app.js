//app: main app where we use express, middleware, call define routes
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')

// app.get("/", )
app.use('/user', userRoutes)
app.use("/products", productRoutes)

module.exports = app