
const feedbackModel = require("./feedbackModel");

async function fetchfeedback() {
    console.log("Fetching feedbacks...");

    let feedbacks = await feedbackModel.find();

    return feedbacks;
}

module.exports.fetchfeedback = fetchfeedback;

