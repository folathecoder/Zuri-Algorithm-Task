let uploadInp = document.getElementById('uploadBtn');
let uploaProfileImage = document.getElementById('profileImage');
// let removeUser = document.getElementById('removeprofileimage').style.visibility = "hidden";
let btn = document.getElementById('removeBtn')
let userProfileName = document.querySelector('.user-name');



// EVENTS LISTENER FOR UPLOAD BUTTON

uploadInp.addEventListener('change', function(){
    
    uploadUserImage();

    
    if( this.files[0].type != 'image/jpeg' && this.files[0].type != 'image/jpg'  
        && this.files[0].type != 'image/png' && this.files[0].type != 'image/gif' ){

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please upload a picture in this format jpg, jpeg, png or gif',
               
              })
        
        } else {
            
            
            profileImage.src = URL.createObjectURL(this.files[0]);

        }

            
       
});




//  Event listener to remove the profile image when user clicked on the "remove button", the concept is to upload a placeholder image on cloudinary
btn.addEventListener('click', function(){

    removeUserImage();
    profileImage.src = 'https://res.cloudinary.com/odumz/image/upload/v1625553020/Stocka/user-default-profile-image_nsya00.jpg';

});






// FUNCTION FOR PROFILE IMAGE UPLOAD BUTTONS

const uploadUserImage = async (req, res) =>{

    const query = 'https://stocka-demo.herokuapp.com/api/v1/profile/image/upload/60d3a66941cf7268fa401340';
    let formData = {};
    formData.uploadProfileImage = document.querySelector("#profileImage").value;
    
    console.log(formData)


    await axios  
    
    .put ( query, formData)
    
    .then((response)  => {       

        Swal.fire(
            'Congratulations!!!',
            'Registration succesful!',
            'success'
          )

        // console.log(response);

    })

    .catch((error) =>{


        Swal.fire('Oops...', error.message, 'error')
        // console.log(error)
    })

};


// FUNCTION FOR PROFILE IMAGE REMOVE BUTTONS

const removeUserImage = async (req, res) =>{

    const query = 'https://stocka-demo.herokuapp.com/api/v1/profile/image/delete/60d3a66941cf7268fa401340';
    
    let formData = {};
    formData.uploadProfileImage = document.querySelector("#profileImage").value;
    
    console.log(formData)


    await axios  
    
    .put ( query, formData)
    
    .then((response)  => {       

        Swal.fire(
            'Congratulations!!!',
            'Picture remove succesful!',
            'success'
          )

        // console.log(response);

    })

    .catch((error) =>{


        Swal.fire('Oops...', error.message, 'error')
        // console.log(error)
    })

};



// EDIT BUTTON FOR NAMES, PASSWORD & WITHDRAW SECTIONS

const editNameBtn = document.getElementById("nameBtn");
const editPasswordBtn = document.getElementById("passwordBtn");
const editWithdrawBtn = document.getElementById("withdrawBtn");



//  EVENTS LISTENER FOR EDIT BUTTON
editNameBtn.addEventListener('click', function(){

    // THIS IS TO DISABLED ALL INPUTS UNTIL THE EDIT BUTTON IS CLICKED
    document.getElementById("firstname").disabled = true;
    document.getElementById("lastname").disabled = true;
    document.getElementById("phone").disabled = false;
    document.getElementById("email").disabled = true;

    // AFTER EDIT BUTTON IS CLICKED, THE VALUE WILL CHANGE TO SAVE SO AS TO CLICK TO SAVE THE INPUTS VALUE
    editNameBtn.textContent = "save";

    
    // AFTER USER HAS INPUTS ALL VALUE THEN THE VALIDATION AND SUBMITTION 
    if( editNameBtn.textContent === "save"){

        this.addEventListener('click', async function(){

          if(firstname.value === "" && lastname.value === "" && phone.value === "" && email.value === ""){

            Swal.fire(
                'error',
                'Field can\'t be empty',
                'error'
            )

          } 
          
          if(firstname.value === ''){

            await setErrorFor(firstname, 'Name cannot be blank');
    
            
        } else {
    
            await setSuccessFor(firstname);
    
        }
    
        if(lastname.value === ''){
    
        await setErrorFor(lastname, 'Name cannot be blank');
        } else {
    
            await setSuccessFor(lastname);
    
        }
    
        if(phone.value === ''){    
    
         await setErrorFor(phone, 'Number cannot be blank');

        } else  {


            await setSuccessFor(phone);

            const query = 'https://stocka-demo.herokuapp.com/api/v1/profile/edit/60d3a315ede5586232cb4dcb';

            let formData = {};
            formData.firstname = document.querySelector("#firstname").value;
            formData.lastname = document.querySelector("#lastname").value;
            formData.phone = document.querySelector("#phone").value;
            formData.email = document.querySelector("#email").value;

            await axios  
                
                .put ( query, formData)
                
                .then((response)  => {       

                    Swal.fire(
                        'Congratulations!!!',
                        'Information update is succesful!',
                        'success'
                    )

                    // console.log(response);

                })

                .catch((error) =>{


                    Swal.fire('Oops...', error.message, 'error')
                    // console.log(error)
                })

    //  AFTER WE GOT SUCESSFULY MESSAGE ON FORM SUBMISSION, THE INPUT WILL BECOME DISABLED AGAIN AND BUTTON VALUE CHANGE BACK TO "EDIT"
          } 
          
        //   if (axios){

        //     document.getElementById("firstname").disabled = true;
        //     document.getElementById("lastname").disabled = true;
        //     document.getElementById("phone").disabled = true;
        //     document.getElementById("email").disabled = true;
        
        //     editNameBtn.textContent = "Edit";
        //   }
         
            
                
            });


        } 
                

    
});



// EVENT LISTENER FOR PASSWORD EDIT BTN

editPasswordBtn.addEventListener('click', function(){



})



// EVENT LISTENER FOR WITHDRAWAL BTN SECTION

editWithdrawBtn.addEventListener('click', function(){

    document.getElementById("bankname").disabled = false;
    document.getElementById("accountnumber").disabled = false;

    // AFTER EDIT BUTTON IS CLICKED, THE VALUE WILL CHANGE TO SAVE SO AS TO CLICK TO SAVE THE INPUTS VALUE
    editWithdrawBtn.textContent = "save";

    
    // AFTER USER HAS INPUTS ALL VALUE THEN THE VALIDATION AND SUBMITTION 
    if( editWithdrawBtn.textContent === "save"){

        this.addEventListener('click', async function(){

          if(bankname.value === "" && accountnumber.value === ""){

            Swal.fire(
                'error',
                'Field can\'t be empty',
                'error'
            )

          } if( bankname.value === ""){

            setErrorFor(bankname);

          } else {  setSuccessFor(bankname) 
        
          } if(accountnumber.value ===""){

            setErrorFor(accountnumber)

          } else {

            await setSuccessFor(accountnumber);

            const query = 'https://stocka-demo.herokuapp.com/api/v1/accounts/add';

            let formData = {};
            formData.bankname = document.querySelector("#bankname").value;
            formData.accountnumber = document.querySelector("#accountnumber").value;
            formData.userId = "60d3a7f008788e6a374339a5"
            

            await axios  
                
                .post ( query, formData)
                
                .then((response)  => {       

                    Swal.fire(
                        'Congratulations!!!',
                        'Acount details successfully added',
                        'success'
                    )

                    // console.log(response);

                })

                .catch((error) =>{


                    Swal.fire('Oops...', error.message, 'error')
                    // console.log(error)
                })

    //  AFTER WE GOT SUCESSFULY MESSAGE ON FORM SUBMISSION, THE INPUT WILL BECOME DISABLED AGAIN AND BUTTON VALUE CHANGE BACK TO "EDIT"
          } 
        //   if (axios){

        //     document.getElementById("bankname").disabled = true;
        //     document.getElementById("accNumber").disabled = true;
            
        
        //     editWithdrawBtn.textContent = "Edit";
        //   }
         
            
                
            });


        }           


});





// declaring checkinput function

// async function checkInput()  {

//     const firstnameValue = firstname.value
//     const lastNameValue = lastname.value
//     const phoneValue  = phone.value
//     const emailValue = email.value
//     // const passwordValue = password.value
//     // const conPasswordValue = confirmPassword.value

    
    

    

//     if(passwordValue === ''){


//      await setErrorFor(password, 'Password cannot be blank');

//     } 
//     else if(passwordValue.length <6 ){


//      await setErrorFor(password, 'Password is less than 8 characters')
//     } else {

//      await setSuccessFor(password);

//     }

//     if(conPasswordValue === ''){


//      await setErrorFor(confirmPassword, 'Password cannot be blank')


//     } else if(passwordValue < conPasswordValue || passwordValue !== conPasswordValue){


//      await setErrorFor(confirmPassword, 'Password does not match')
        
//     } else {

//      await setSuccessFor(confirmPassword);
//     } 

    
    
// };



// declaring input and sucess or error message function

function setErrorFor(input, message){

        const formContainer = input.parentElement;
        const small = formContainer.querySelector('small');
        
        // add error message
        formContainer.className = 'form-container error';
        small.innerText = message;  
            
      
    };


 function setSuccessFor(input){
        const formContainer = input.parentElement;
        formContainer.className = 'form-container success' 
                 
    };


    let toggleSubscrbed = document.getElementById('isSubscribed')
    let togglePush = document.getElementById('isPushNotificationActive')

    togglePush.addEventListener('click', async function(){

        if(togglePush = 1){

            togglePush.checked = true;

        } else{

            togglePush.checked = false;

            const query = 'https://stocka-demo.herokuapp.com/api/v1/profile/edit/60d3a315ede5586232cb4dcb';

            let formData = {};
            formData.togglePush = document.querySelector("#isPushNotificationActive");
          

            await axios  
                
                .put ( query, formData)
                
                .then((response)  => {       

                    Swal.fire(
                        'Congratulations!!!',
                        'Information update is succesful!',
                        'success'
                    )

                    // console.log(response);

                })

                .catch((error) =>{


                    Swal.fire('Oops...', error.message, 'error')
                    // console.log(error)
                })
        } 
        
    })

// get saved user from localStorage
function getUser() {
    let savedUser = localStorage.getItem("savedUser");
    let user = JSON.parse(savedUser);
    //console.log("Sign-in User", user)
    
    let firstName = user.data.user.firstname;
    let lastName = user.data.user.lastname;
    let phoneNumber = user.data.user.phone;
    let email = user.data.user.email;
    //console.log(`${firstName} ${lastName}`);
    let fullName = `${firstName} ${lastName}`
    userProfileName.innerHTML = fullName;
    document.querySelector("#firstname").value = firstName;
    document.querySelector("#lastname").value = lastName;
    document.querySelector("#phone").value = `0${phoneNumber}`;
    document.querySelector('#email').value = email;
}

document.addEventListener("DOMContentLoaded", getUser())