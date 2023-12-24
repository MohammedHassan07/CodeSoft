const express = require('express')
const cookieParser = require('cookie-parser')
const dtoenv = require('dotenv')

const connection = require('./config/connectToDB')
const adminRoutes = require('./routes/adminRoutes')
const navRoutes = require('./routes/navRoutes')
const blogsRoutes =require('./routes/blogsRoutes')

const app = express()
dtoenv.config()
connection()


app.set('view engine', 'hbs')
app.use(express.json())
app.use(express.static('public'))
app.use(cookieParser())


app.use(adminRoutes)
app.use(navRoutes)
app.use(blogsRoutes)

const PORT = process.env.PORT
app.listen(PORT, () => {

    console.log('Server is up at', PORT)
})