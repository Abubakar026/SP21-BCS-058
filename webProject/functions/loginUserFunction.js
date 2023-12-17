const signUpModel = require("../models/signupModel");

async function findUserByEmailAndPassword(email, password) {
  const user = await signUpModel.findOne({ email: email, password: password });

  if (user) {
    return true;
  } else {
    return false;
  }
}

module.exports.findUserByEmailAndPassword = findUserByEmailAndPassword;