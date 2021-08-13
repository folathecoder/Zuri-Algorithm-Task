let btnLeft = document.querySelector('.btn-trade-left');
let btnRight = document.querySelector('.btn-trade-right');
let btnBuy = document.querySelector('.btn-buy');
let userProfileName = document.querySelector('.user-name');


// btn left event listener to change text content and color of btnBuy
btnLeft.addEventListener('click', (e) => {
  btnBuy.style.Color = 'white';
  btnLeft.style.backgroundColor = '#1B8381';
  btnLeft.style.Color = 'white';
  btnBuy.style.Color = 'white';
  btnBuy.style.backgroundColor = '#1B8381';
  btnBuy.textContent = 'Buy'
  btnRight.style.backgroundColor = '#E6E8EA'
})
// btn right event listener to change text content and color of btnBuy
btnRight.addEventListener('click', (e) => {
  btnBuy.style.color = 'white';
  btnRight.style.backgroundColor = 'red';
  btnBuy.style.backgroundColor = 'red';
  btnRight.style.color = 'white';
  btnBuy.style.color = 'white';
  btnBuy.textContent = 'Sell';
  btnLeft.style.backgroundColor = '#E6E8EA'
})

// calculating total 
const calculateTotal = () => {
  console.log('here')
  let price = document.getElementById('price').value;
  let amount = document.getElementById('amount').value;
  let total = document.getElementById('total');
  if (price > 0 && amount > 0 && !isNaN(price) && !isNaN(amount)) {
    price = parseFloat(price)
    amount = parseFloat(amount)
 
    total.value = price * amount;
    price.value = ''
    amount.value = ''
    successModal()
    
  } else {
    total.value = 0;
    console.log('fail')
    failureModal()
    price.value = ''
    amount.value = ''
  }

}

// success modal
const successModal = () => {
  btnBuy.addEventListener('click', (e) => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your order has been placed',
      showConfirmButton: true,
      confirmButtonColor: '#1B8381',
      confirmButtonText: 'OK',
    })
  })
}
// failure modal
const failureModal = () => {
  btnBuy.addEventListener('click', (e) => {
    Swal.fire({
      position: 'center',
      icon: 'failure',
      title: 'Please enter a valid number',
      showConfirmButton: true,
      confirmButtonColor: '#1B8381',
      confirmButtonText: 'OK',
    })
  })
}

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