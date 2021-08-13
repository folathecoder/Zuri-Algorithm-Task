let pendBtn = document.querySelector('.pending-btn');
let histBtn = document.querySelector('.history-btn');
let pendingBlock = document.querySelector('.pending-container');
let historyBlock = document.querySelector('.history-container');
let userProfileName = document.querySelector('.user-name');

pendBtn.addEventListener('click', () => {
  if (pendingBlock.classList.contains('remove')) {
    pendingBlock.classList.remove('remove');
    historyBlock.classList.add('remove');
    pendBtn.classList.add('selected-tab');
    histBtn.classList.remove('selected-tab');
  } else {
  }
});

histBtn.addEventListener('click', () => {
  if (historyBlock.classList.contains('remove')) {
    historyBlock.classList.remove('remove');
    pendingBlock.classList.add('remove');
    histBtn.classList.add('selected-tab');
    pendBtn.classList.remove('selected-tab');
  } else {
  }
});

// // DECLARATIONS
// let col1 = document.querySelector('.col_1');
// let col2 = document.querySelector('.col_2');
// let col3 = document.querySelector('.col_3');
// let col4 = document.querySelector('.col_4');
// let col5 = document.querySelector('.col_5');
// let col6 = document.querySelector('.col_6');
// let col7 = document.querySelector('.col_7');
// let col8 = document.querySelector('.col_8');

// let row1 = document.querySelector('.row_1');

// // let stockData = [
// let stockData = {
//   //   {
//   'stock-01': {
//     date: '1st',
//     name: 'stock 01',
//     type: 'type 01',
//     price: 'price 01',
//     amount: 'amount 01',
//     filled: 'filled 01',
//     total: 'total 01',
//   },
//   //   },
//   //   {
//   'stock-02': {
//     date: '2nd',
//     name: 'stock 02',
//     type: 'type 02',
//     price: 'price 02',
//     amount: 'amount 02',
//     filled: 'filled 02',
//     total: 'total 02',
//   },
//   //   },
// };
// // ];

// // for (let i = 0; i < 8; i++) {
// // row1.children[i].innerHTML = stockData[i][];
// for (let prop in stockData) {
//   // row1.children[i].innerHTML = stockData[i][];
//   console.log(prop['date']);
// }

// // }


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