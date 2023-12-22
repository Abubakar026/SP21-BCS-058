$("#formValidation").validate({
    
    rules:{
        email:{
          email:true
        },
        password:{
          number:true,
          minlength:4,
          
        }
    },
    messages: {
      email: "please enter your email",
      password: "please enter your password",

    },
    

  }
);