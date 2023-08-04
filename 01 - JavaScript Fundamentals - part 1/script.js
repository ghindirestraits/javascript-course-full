/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

// assignment
let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "Jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;

var job = 'programmer';
job = 'teacher';

let lastName = 'Heberle';
console.log(lastName);

// ####################################
// Math/Arithmetic Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(ageJonas, ageSarah);

// 2 ** 3 means 2 to the power of 3
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Gabriel';
const lastName = 'Heberle';
const space = ' ';

console.log(firstName + space + lastName);

let x = 10 + 5;  // 15
x += 10;         // x = x + 10
x *= 4;          //x = x * 4
x++;             // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah);  // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

############################################
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

*/

/////////////////////////////////////////////////
// Coding Challenge #1

/*gheberledude@gmail.com95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

/*
// TEST DATA 1
const markWeight1 = 78;
const markHeight1 = 1.69;
const johnWeight1 = 92;
const johnHeight1 = 1.95;
let markBMI = markWeight1 / markHeight1 ** 2;
let johnBMI = johnWeight1 / johnHeight1 ** 2;
let markHigherBMI = markBMI > johnBMI;

console.log("TEST DATA 1");
console.log("Mark's mass: ", markHeight1, ", ", "Mark's height: ", markHeight1);
console.log("John's mass: ", johnHeight1, ", ", "John's height: ", johnHeight1);
console.log("Mark's BMI: ", markBMI, ", ", "John's BMI: ", johnBMI);
console.log("Is Mark's BMI higher than John's? ", markHigherBMI);

// TEST DATA 2
const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1.76;
markBMI = markWeight2 / markHeight2 ** 2;
johnBMI = johnWeight2 / johnHeight2 ** 2;
markHigherBMI = markBMI > johnBMI;

console.log("TEST DATA 2");
console.log("Mark's mass: ", markHeight2, ", ", "Mark's height: ", markHeight2);
console.log("John's mass: ", johnHeight2, ", ", "John's height: ", johnHeight2);
console.log("Mark's BMI: ", markBMI, ", ", "John's BMI: ", johnBMI);
console.log("Is Mark's BMI higher than John's? ", markHigherBMI);

/////////////////////////////////////////////////

const firstName = 'Gabriel';
const job = 'engineer';
const birthYear = 1997;
const year = 2022;

const gabriel = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(gabriel);

// TEMPLATE LITERALS
// string template
const gabrielNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}!`;
console.log(gabrielNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

/////////////////////////////////////////////////

const age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving license 🚗`);
} else {
    console.log(`Sarah must wait ${18 - age} years to get her driver's license 😬`);
}

const birthYear = 1997;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

//////////////////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who was the higher BMI. The message can be either "Mark's BMI is higher that John's!" or "John's BMI is higher than Mark's!
2. Use a template string to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use and if/else statement 😉
*/

// TEST DATA 1
// const markWeight1 = 78;
// const markHeight1 = 1.69;
// const johnWeight1 = 92;
// const johnHeight1 = 1.95;
// let markBMI = markWeight1 / markHeight1 ** 2;
// let johnBMI = johnWeight1 / johnHeight1 ** 2;

// console.log(`TEST DATA 1`);
// console.log(`Mark's mass: ${markHeight1}, Mark's height: ${markHeight1}`);
// console.log(`John's mass: ${johnHeight1}, John's height: ${johnHeight1}`);

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
// } else {
//     console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`);
// }

// // TEST DATA 2
// const markWeight2 = 95;
// const markHeight2 = 1.88;
// const johnWeight2 = 85;
// const johnHeight2 = 1.76;
// markBMI = markWeight2 / markHeight2 ** 2;
// johnBMI = johnWeight2 / johnHeight2 ** 2;
// markHigherBMI = markBMI > johnBMI;

// console.log(`TEST DATA 2`);
// console.log(`Mark's mass: ${markHeight2}, Mark's height: ${markHeight2}`);
// console.log(`John's mass: ${johnHeight2}, John's height: ${johnHeight2}`);
// console.log(`Mark's BMI: ${markBMI}, John's BMI: ${johnBMI}`);
// console.log(`Is Mark's BMI higher than John's? ${markHigherBMI}`);

//////////////////////////////////////////////////
// Type Conversion & Type Coercion

// Conversion is when we manually convert from one type to another
// Coercion is when JS "automagically" converts types behind the scenes for us

// Conversion
/*
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Gabe'));
console.log(typeof NaN);

console.log(String(23), 23);

// JS only converts to a number, to a string or to a boolean

// Coercion
console.log('I am ' + 26 + ' years old');
console.log('23' - '10' - 3);  // 10
console.log('23' + '10' + 3);  // '23103'
console.log('23' * '2');  // 46
console.log('23' / '2');  // 11.5

let n = '1' + 1;
n = n - 1;
console.log(n);
*/

//////////////////////////////////////////////////
// Truthy & Falsy Values

// Falsy values
// there are 5 of them: 0, '', undefined, null, NaN
// everything else will be converting to true

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Gabe'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}
*/

//////////////////////////////////////////////////
// Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = true; // C

console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive...');
}

//////////////////////////////////////////////////
/*
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or
"Koalas win the trophy" if Koalas win, or
"Both win the trophy" if their average scores are equal.


TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
*/

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins > 100) {
    console.log("Dolphins win the trophy 🏆");
} else if (scoreDolphins < scoreKoalas && scoreKoalas > 100) {
    console.log("Koalas win the trophy 🏆");
} else if (scoreDolphins >= 100 && scoreKoalas >=100) {
    console.log("Both win the trophy!");
} else {
    console.log("No one wins the trophy 😭")
}