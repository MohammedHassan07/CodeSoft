const dotenv = require('dotenv')
const mongoose = require('mongoose')

const connection = async () => {

    try {


        const databaseURL = process.env.databaseURL
        await mongoose.connect(databaseURL)
        console.log('connected')

    } catch (error) {
        console.log(error)
    }
}

module.exports = connection