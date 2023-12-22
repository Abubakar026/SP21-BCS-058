
const bookingModel = require("./bookingModel");

async function createNewBooking(res, email, fromto, whereto, arrival, leaving) {
    console.log("Booking now...");

    let booking = new bookingModel();

    booking.email = email;
    booking.fromto = fromto;
    booking.whereto = whereto;
    booking.arrival = arrival;
    booking.leaving = leaving;

    await booking.save();
    console.log("Booking saved successfully.");
    res.redirect("/login");
}

module.exports= { createNewBooking };

