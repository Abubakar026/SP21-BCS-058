
const calculatingModel = require("./calculatingModel");

async function fetchCalculating() {
    console.log("Fetching calculations...");

    let calculatings = await calculatingModel.find();

    return calculatings;
}

module.exports.fetchCalculating = fetchCalculating;

