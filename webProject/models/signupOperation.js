
const signUpModel = require("./signupModel");

async function createNewUser(req, res, firstName,lastname, email, password) {
    console.log("Creating user...");

    let user = new signUpModel();


    if(user.email )

    user.firstName = firstname;
    user.lastname = lastname;
    user.email = email;
    user.password = password;

    const isEmailExists = await signUpModel.findOne({email: user.email});

    if(isEmailExists){
        console.log('Email already exists.');
        req.session.flash = { type: "fail", message: "User already registered." };
        res.redirect('/sign');
    }
    else{
        await user.save();
        console.log("User saved successfully.");
        req.session.flash = { type: "success", message: "User registered successfully, login now." };
        res.redirect("/login");
    }
}

module.exports= { createNewUser };












//const signUpModel = require("./signupModel")

//async function  newUser (firstName,secondName,email,password){
//    let user = new signUpModel()
//    user.firstName = firstName;
//    user.secondName = secondName;
//    user.email = email;
//    user.password = password;
//    let newUser = await user.save()
//    return newUser


//}