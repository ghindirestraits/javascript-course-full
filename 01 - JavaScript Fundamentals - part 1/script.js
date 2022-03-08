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

/*
Mark anad John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John

TEST DATA 1: Mark weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Mark weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
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

/////////////////////////////////////////////////
// Conding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who was the higher BMI. The message can be either "Mark's BMI is higher that John's!" or "John's BMI is higher than Mark's!
2. Use a template string to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use and if/else statement 😉
*/

// TEST DATA 1
const markWeight1 = 78;
const markHeight1 = 1.69;
const johnWeight1 = 92;
const johnHeight1 = 1.95;
let markBMI = markWeight1 / markHeight1 ** 2;
let johnBMI = johnWeight1 / johnHeight1 ** 2;

console.log(`TEST DATA 1`);
console.log(`Mark's mass: ${markHeight1}, Mark's height: ${markHeight1}`);
console.log(`John's mass: ${johnHeight1}, John's height: ${johnHeight1}`);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
} else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`);
}

// TEST DATA 2
const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1.76;
markBMI = markWeight2 / markHeight2 ** 2;
johnBMI = johnWeight2 / johnHeight2 ** 2;
markHigherBMI = markBMI > johnBMI;

console.log(`TEST DATA 2`);
console.log(`Mark's mass: ${markHeight2}, Mark's height: ${markHeight2}`);
console.log(`John's mass: ${johnHeight2}, John's height: ${johnHeight2}`);
console.log(`Mark's BMI: ${markBMI}, John's BMI: ${johnBMI}`);
console.log(`Is Mark's BMI higher than John's? ${markHigherBMI}`);