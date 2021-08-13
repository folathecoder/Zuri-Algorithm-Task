// DECLARATIONS
let submitBtn = document.querySelector('#submitBtn');
let email_input = document.querySelector('#email');
let invalidMsg1 = document.querySelector('.wrong-mail');

let check1 = false;

submitBtn.disabled = true;

// EVENT LISTENERS  
  email_input.addEventListener('input', () => {
    validateMail(email_input.value);
    disableBtn();
  });

  // FORM VALIDATION
let validateMail = emailValue => {
    if (emailValue.length == 0 || "") {
      invalidMsg1.classList.remove('visible');
      check1 = false;
    } else {
      if (
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          emailValue
        )
      ) {
        invalidMsg1.classList.add('visible');
        invalidMsg1.classList.remove('bi-x-circle');
        invalidMsg1.classList.add('bi-check-circle');
        invalidMsg1.classList.add('green');
  
        check1 = true;
        return true;
      }
      invalidMsg1.classList.add('visible');
      invalidMsg1.classList.remove('bi-check-circle');
      invalidMsg1.classList.add('bi-x-circle');
      invalidMsg1.classList.remove('green');
      check1 = false;
  
      return false;
    }
  };

  
  let disableBtn = () => {
    submitBtn.disabled = true;
  
    if (check1) {
      submitBtn.disabled = false;
    }
  };
  

  // FORM SUBMISSION
const submit = async () => {
    const url = 'https://stocka-demo.herokuapp.com/api/v1/auth/login/forgot-password';
  
    const userData = {};
    userData.email = document.querySelector('#email').value.trim();
  
    // console.log(userLoginData);
  
    // disable button 
    submitBtn.disabled = true;
    submitBtn.innerHTML = "Submiting..."
  
   
  
    await axios
      .post(url, userData)
      .then(response => {
        // console.log('list webhook', response.data);
        if(response.status === 200){
          Swal.fire('Congratulations', 'Check your email for instructions to reset your password', 'success')
          
        // redirect user to reset password
        // setTimeout((window.location.replace("dashboard.html")), 7000)
        } else {
          console.log("Something went wrong")
        }
       
      })
      .catch(error => {
        console.log(error.message);
        Swal.fire('Uh oh!', error.message, 'error')
        submitBtn.innerHTML = "Submit"
      });
      submitBtn.disabled = false;
  };
  
  submitBtn.addEventListener('click', e => {
    e.preventDefault();
    submit();
  });