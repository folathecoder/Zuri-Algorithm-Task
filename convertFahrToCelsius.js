'use strict';

//TODO: 1. Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.

const convertFahrToCelsius = function(fahr) {

    //* Convert the parameter to a number
    const fh = Number(fahr);

    //* Conversion Formular
    const celcius = (fh - 32) * (5/9);
    
    //* If the parameter is not a number (let this happen)
    if(!(typeof fahr === `number`)) {
        console.log(`${fahr} is not a valid number but a/an ${typeof fahr}.`)
    }

    //* If the parameter is a number (let this happen)
    else (
        console.log(celcius.toFixed(4))
    )

}

//* Enter a celcius value
console.log(convertFahrToCelsius(0));

