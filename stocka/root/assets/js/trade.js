'use strict';

//TODO: Declare all required variables
let userProfileName = document.querySelector('.user-name');


// get saved user from localStorage
function getUser() {
    let savedUser = localStorage.getItem("savedUser");
    let user = JSON.parse(savedUser);
    //console.log("Sign-in User", user)
    
    let firstName = user.data.user.firstname;
    let lastName = user.data.user.lastname;
    //console.log(`${firstName} ${lastName}`);
    let fullName = `${firstName} ${lastName}`
    userProfileName.innerHTML = fullName;
}

document.addEventListener("DOMContentLoaded", getUser())