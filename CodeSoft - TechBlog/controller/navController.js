const blogSchema = require('../models/blogs.model')
const userSchema = require('../models/user.model')

// home --> contains blogs/cards
const home = async (req, res) => {
    try {

        const result = await blogSchema.find()
        const authors = await userSchema.find({ isAdmin: true })

        let authorNames = []
        for (const author of authors) {

            authorNames.push(author.name)
        }

        console.log(result)

        res.render('home', { result, name: authorNames })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

// about
const about = (req, res) => {

    res.render('about')
}

// contact
const contact = (req, res) => {

    res.render('contact')
}

// send email 
const sendEmail = (req, res) => {

    const { name, email, message } = req.body
}

module.exports = {
    home,
    about,
    contact, sendEmail
}