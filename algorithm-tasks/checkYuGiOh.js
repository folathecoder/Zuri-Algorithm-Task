'use strict';

//TODO: 2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", then returns the resulting array.


const checkYuGiOh = function(n) {
    //* Create an array of (1 to n) that takes in any length
    const check = Array.from({length: n}, (_, index) => index + 1);

    //* If the parameter is a number (let this happen)
    if((typeof n === `number`)) {
        for ( let tab in check){
            if ((check[tab]%2 == 0) && (check[tab]%3 == 0) && (check[tab]%5 == 0) ) {
                check[tab] = 'yu-gi-oh';     
            }
            else if ((check[tab]%2 == 0) && (check[tab]%3 == 0) ){
                check[tab] = 'yu-gi';      
            }
            else if ((check[tab]%2 == 0) && (check[tab]%5 == 0) ) {
                check[tab] = 'yu-oh';      
            }
            else if ((check[tab]%3 == 0) && (check[tab]%5 == 0) ) {
                check[tab] = 'gi-oh';     
            }
            else if (check[tab]%2 == 0 ){
                check[tab] = 'yu';
            }
            else if (check[tab]%3 == 0){
                check[tab] =  'gi';
                
            }
            else if (check[tab]%5 == 0){
                check[tab] = 'oh';
            }
        }
        console.log(check);
    }

    // //* If the parameter is not a number (let this happen)
    else {
        console.log(`invalid parameter: ${n}`)
    }
}

//* Enter a number 
checkYuGiOh(10);
