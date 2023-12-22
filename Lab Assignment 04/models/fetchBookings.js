
const bookingModel = require("./bookingModel");

async function fetchBooking() {
    console.log("Fetching bookings...");

    let bookings = await bookingModel.find();

    return bookings;
}

module.exports.fetchBooking = fetchBooking;

