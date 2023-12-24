const {databaseURL} = require('../config/config')
const mongoose = require('mongoose')

const connection = async () => {

    try {

        await mongoose.connect(databaseURL)
        console.log('connected')

    } catch (error) {
        console.log(error)
    }
}

module.exports = connection