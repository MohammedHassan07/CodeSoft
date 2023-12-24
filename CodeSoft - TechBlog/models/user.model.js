const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    name: String,
    email: String,
    password: String,
    isAdmin: Boolean,
    
}, {timestamps: true})

module.exports = mongoose.model('user', userSchema)