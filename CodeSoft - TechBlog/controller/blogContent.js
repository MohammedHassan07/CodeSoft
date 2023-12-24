const blogsSchema = require('../models/blogs.model')
const userSchema = require('../models/user.model')

const blogContent = async (req, res) => {

    const title = req.query.title
    console.log(title)

    try {

        // implement images

        const data = await blogsSchema.findOne({ title: title })

        console.log('content-->', data)

        res.status(200).json({ message: 'success', data })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}


const blogByAuthor = async (req, res) => {

    try {

        const author = req.query.author

        const user = await userSchema.findOne({ name: author })

        const blogs = await blogsSchema.find({ author: user._id })

        if (blogs) {

            res.status(200).json({ message: 'success', blogs })
        }
        else {

            res.status(401).json({ message: 'No blogs found' })
            console.log(error.message)
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = { blogContent, blogByAuthor }