const mongoose = require("mongoose")

const calculatingschema = mongoose.Schema({
    operand1:String,
    operation:String,
    operand2:String,

})

const calculatingModel = mongoose.model('calculating',calculatingschema)

module.exports = calculatingModel;