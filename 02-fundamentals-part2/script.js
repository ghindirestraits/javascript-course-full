"use strict";
/*
the 'use strict' string activates strict mode in JS
it must be the first statement in your script
strict mode enables devs to write more secure code
in this case, secure means avoinding accidental errors
or preventing devs from introducing bugs
it does that by

1. forbidding devs from doing certain things;
2. and creating visual errors in the dev console.

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// reserved words
// const interface = "Audio";
// const private = 355;
*/

////////////////////////////////////////////////////
// Functions

/*
function logger(text) {
  if (!!text) console.log(text);
  console.log('My name is Gabe');
}

// calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

logger(fruitProcessor(3, 5));
*/

////////////////////////////////////////////////////
// Function Declarations & Expressions

/*
// function declaration
function calcAge1(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

// function expression (anonymous function)
const calcAge2 = function (birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

console.log(calcAge1(1997), calcAge2(1997));
*/

////////////////////////////////////////////////////
// Arrow functions

const currentYear = new Date().getFullYear();
const calcAge3 = (birthYear) => currentYear - birthYear;

console.log(calcAge3(1997));

/*
this is just showing how to use arrow functions
whenever it's not a one-liner function

const yearsUntilRetirement = birthYear => {
    const age = currentYear - birthYear;
    const retirement = 65 - age;
    return retirement;
}
*/

// we can actually do the same with a one-liner
const yearsUntilRetirement = (birthYear, firstName) =>
  `${firstName} retires in ${65 - (currentYear - birthYear)} years`;

console.log(yearsUntilRetirement(1997, "Gabe"));
console.log(yearsUntilRetirement(1973, "Jen"));
console.log(yearsUntilRetirement(1963, "Jimmy"));
