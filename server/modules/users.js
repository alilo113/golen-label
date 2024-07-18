const mongoose = require(mongoose)
const bcrypt = require("bcrypt")

const userSchema = new mongoose.schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String, 
        required: true,
        unique: true
    }
})

