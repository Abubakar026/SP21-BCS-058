
const signUpModel = require("./signupModel");

async function createNewUser(req, res, firstname, lastname, email, password) {
    console.log("Creating user...");

    let user = new signUpModel();


    if(user.email )

    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.password = password;

    const isEmailExists = await signUpModel.findOne({email: user.email});

    if(isEmailExists){
        console.log('Email already exists.');
        res.redirect('/sign');
    }
    else{
        await user.save();
        console.log("User saved successfully.");
        res.redirect("/login");
    }
}

module.exports= { createNewUser };

