
  $('#formValidation').validate({
      rules: {
          firstname: 'required',
          lastname: 'required',
          email: {
              required: true,
              email: true
          },
          password: {
              required: true,
              minlength: 6
          },
          password1: {
              required: true,
              equalTo: '#password'
          }
      },
      messages: {
          firstname: 'Please enter your first name',
          lastname: 'Please enter your last name',
          email: {
              required: 'Please enter your email address',
              email: 'Please enter a valid email address'
          },
          password: {
              required: 'Please enter a password',
              minlength: 'Your password must be at least 6 characters long'
          },
          password1: {
              required: 'Please enter a password',
              equalTo: 'Passwords do not match'
          }
      },
      submitHandler: function(form) {
          form.submit();
      }
  });
