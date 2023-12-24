const jwt = require('jsonwebtoken')
const userSchema = require('../models/user.model')
const { secretKey } = require('../config/config')

const verifytoken = async (req, res, next) => {

    try {

        const token = req.body.token
       console.log('token-->', token)
        if (token) {

         
            const verified = jwt.verify(token, secretKey)

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

        console.log(error)
    }
}

module.exports = { verifytoken }