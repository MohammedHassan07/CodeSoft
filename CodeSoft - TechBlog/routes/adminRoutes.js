const express = require('express')
const {createAuthor, logInPage, logIn, insertData, adminPanel} = require('../controller/adminController')
const { verifytoken } = require('../middleware/verifyToken')

const route = express.Router()

route.post('/owner/create-author', createAuthor)

route.post('/author-log-in', logIn)

route.get('/admin', logInPage) 

route.get('/admin-panel', adminPanel)

route.post('/admin/insert-data', verifytoken, insertData)


module.exports = route
