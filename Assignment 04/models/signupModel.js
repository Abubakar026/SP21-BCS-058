
const mongoose = require("mongoose")

const signupschema = mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String
})

const signUpModel = mongoose.model('user',signupschema)

module.exports = signUpModel