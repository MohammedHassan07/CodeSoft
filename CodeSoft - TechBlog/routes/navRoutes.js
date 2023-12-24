const express = require('express')

const { home, about, contact, sendEmail } = require('../controller/navController')

const route = express.Router()

route.get('/', home)
route.get('/about', about)
route.get('/contact', contact)

// send email to contact
route.post('/send-email', sendEmail)

module.exports = route