
const feedbackModel = require("./feedbackModel");

async function fetchfeedback() {
    console.log("Fetching feedbacks...");

    let feedback = await feedback.find();

    return feedback;
}

module.exports.fetchfeedback = fetchfeedback;

