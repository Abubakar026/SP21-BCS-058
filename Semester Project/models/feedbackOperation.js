const feedbackModel = require("./feedbackModel");

async function createNewFeedback(res, name, phone, message) {
    console.log("Feedback...");

    let feedback = new feedbackModel();

    feedback.name = name;
    feedback.phone = phone;
    feedback.message = message;
   

    await feedback.save();
    console.log("feedback saved successfully.");
    res.redirect("/login");
}

module.exports= { createNewFeedback };

