const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const blogSchema = require('../models/blogs.model')
const userSchema = require('../models/user.model')
const {hashKey, secretKey} = require('../config/config')

// logIn page
const logInPage = (req, res) => {

    res.render('logInAdmin')
}

// admin panel
const adminPanel = (req, res) => {

    res.render('admin')
}

// author logIn
const logIn = async (req, res) => {

    try {
        const { Email, Password } = req.body

        const user = await userSchema.findOne({ email: Email })
    
        if (user) {

            const isMatch = await bcrypt.compare(Password, user.password)
            if (isMatch) {

                const token = jwt.sign(user.email, secretKey)
              
                res.json({ message: 'success', token})
            } else {

                res.status(400).json({ message: 'Invalid Credentials' })
            }

        } else {

            res.status(404).json({ message: 'Email not found' })
        }

    } catch (error) {

        console.log(error)

        res.status(500).json({ message: 'Internal Server Error' })
    }
}

// Insert data
const insertData = async (req, res) => {

    try {

        const { blogTitle, blogContent, ImgURL, smallPara, } = req.body

        const author = req.name

        const blog = new blogSchema({ title: blogTitle, content: blogContent, imgURL: ImgURL, para: smallPara, author: author })

        const data = await blog.save()

        res.status(200).json({ message: "success", data })

    } catch (error) {

        console.log(error.message)
        res.status(500).json({ message: "error" })
    }
}

// create author
const createAuthor = async (req, res) => {

    try {
        const { Name, Email, password } = req.body

        const user = userSchema.findOne({ email: Email })

        if (!user) {

            const hash = await bcrypt.hash(password, hashKey)

            const data = new userSchema({ name: Name, password: hash, email: Email, isAdmin: true })
            await data.save()
            res.json({ message: 'success', data })
        } else {

            res.status(400).json({ message: 'User already present' })
        }

    } catch (error) {

        console.log(error.message)

        res.status(500).json({ message: 'Internal Server Error' })
    }
}


module.exports = {

    createAuthor,
    insertData,
    logInPage,
    logIn,
    adminPanel

}