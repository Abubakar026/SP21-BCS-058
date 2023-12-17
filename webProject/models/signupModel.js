
const mongoose = require("mongoose")

const signupschema = mongoose.Schema({
    firstName : String,
    lastname:String,
    email:String,
    password:String
})

const signUpModel = mongoose.model('user',signupschema)

module.exports = signUpModel