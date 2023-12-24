const jwt = require('jsonwebtoken')
const { secretKey } = require('../config/config')
const userSchema = require('../models/user.model')


const verifytoken = async (req, res, next) => {

    try {

        const token = req.cookies.authToken

        if (token) {

            const verified = jwt.verify(token, secretKey)

            if (verified) {

                req.authorName = verified
                const data = await userSchema.findOne({ email: verified })

                if (data.isAdmin) {

                    next()
                    return req.user
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