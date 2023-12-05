$("#formValidation").validate({
    
    rules:{
        name:{
            minlength: 3
        },
        email:{
          email:true
        },
        password:{
          number:true,
          minlength:4,
          
        }
    },
    messages: {
      name:{  required: "please enter your name",
        minlength: "Name at least 2 characters "
      },
      email: "please enter your email",
      phone: "please enter your phone",
      subject: "please enter your email"


    },
    
    submitHandler: function(form) {
      form.submit();
    }
   });