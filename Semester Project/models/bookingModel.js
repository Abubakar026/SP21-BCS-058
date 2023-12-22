const mongoose = require("mongoose")

const bookingschema = mongoose.Schema({
    email:String,
    fromto:String,
    whereto:String,
    howmany:String,
    arrival:String,
    leaving:String,

})

const bookingModel = mongoose.model('booking',bookingschema)

module.exports = bookingModel;