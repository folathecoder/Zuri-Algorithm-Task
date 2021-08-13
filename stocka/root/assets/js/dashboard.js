'use strict';

//TODO: Declare all required variables
const portfolioValue = document.querySelector('.portfolio-value');
const hidePortfolio = document.querySelector('.hide-portfolio-value');
const showPortfolio = document.querySelector('.reveal-portfolio-value');
const balance = document.querySelector('.wallet-balance');
let userProfileName = document.querySelector('.user-name');
const logOutBtn = document.querySelector(".log-out-btn");



//TODO: Hide Portfolio Value

showPortfolio.style.display = 'none';

let currentPortfolioValue = portfolioValue.innerHTML;
let currentBalance = portfolioValue.innerHTML;

hidePortfolio.addEventListener('click', function(e) {
    showPortfolio.style.display = 'block';
    portfolioValue.innerHTML = '****';
    balance.innerHTML = '****';
    hidePortfolio.style.display = 'none';
})

showPortfolio.addEventListener('click', function(e) {
    portfolioValue.innerHTML = `${currentPortfolioValue}`;
    balance.innerHTML = `${currentPortfolioValue}`;
    showPortfolio.style.display = 'none';
    hidePortfolio.style.display = 'block';

    // hidePortfolio.style.display = 'none';
})


// handle logout
function logOut() {
    localStorage.clear();
    // window.location.replace("index.html")
}

logOutBtn.addEventListener("click", () => {
    logOut()
})

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


