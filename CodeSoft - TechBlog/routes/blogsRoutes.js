const express = require('express')

const { blogContent, blogByAuthor } = require('../controller/blogContent')

const route = express.Router()

route.get('/blog-content', blogContent)

route.get('/author/blog-content', blogByAuthor)

module.exports = route