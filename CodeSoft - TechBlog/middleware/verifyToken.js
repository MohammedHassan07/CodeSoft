const jwt = require('jsonwebtoken')
const userSchema = require('../models/user.model')
const dotenv = require('dotenv')


const verifytoken = async (req, res, next) => {

    try {

        const token = req.cookies.authToken

        if (token) {

            const verified = jwt.verify(token, process.env.secretKey)

            if (verified) {

                const data = await userSchema.findOne({ email: verified })

                if (data.isAdmin) {

                    req.name = data.name
                    next()
                    return req.name
                } else {

                    return
                }
            }

        } else {

            return
        }

    } catch (error) {

        console.log(error.message)
    }
}

module.exports = { verifytoken }