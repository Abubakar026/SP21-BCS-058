
const bookingModel = require("./calculatingModel");

async function createNewcalculating(res, operand1, operation, operand2) {
    console.log("Calculating now...");

    let calculating = new calculatingModel();

    calculating.operand1 = operand1;
    calculating.operation = operation;
    calculating.operand2 = operand2;
    

    await calculating.save();
    console.log("Calculation Done.");
    res.redirect("/calculator");
}

module.exports= { createNewcalculating };

