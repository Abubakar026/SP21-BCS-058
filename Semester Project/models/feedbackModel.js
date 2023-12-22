const mongoose = require("mongoose")

const feedbackschema = mongoose.Schema({
    name:String,
    phone:String,
    message:String,

})

const feedbackModel = mongoose.model('feedback',feedbackschema)

module.exports = feedbackModel;