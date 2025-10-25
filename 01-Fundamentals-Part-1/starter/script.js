// * Linking a JS File

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// * Values & Variables

// let firstname = "Jonas";
// console.log(firstname);

// . Assignment
// const country = "UK";
// const continent = "Europe";
// let population = 10000000;
// console.log(country);
// console.log(continent);
// console.log(population);

// * Data Types

// Object
// const person = {
//   name: "Jonas",
// };

// Primitive
// let firstname = "Jonas";
// let age = 30;

// const boolExample = false;
// const intExample = 10; // in JS these are both a "number" value
// const floatExample = 1.0; // in JS these are both a "number" value
// const stringExample = "Hello World!";
// const undefinedExample = undefined;
// let undefinedExample2;
// const nullExample = null;

// console.log(typeof boolExample);

// . A
// const isIsland = true;
// let language;
// console.log(isIsland);

// * let, const & var

// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990 // Wont work, cant reassign a const
// const job; // Wont work, need to define a value for a const

// var is old, dont use it
// var job = "programmer";
// job = "teacher";

// lastName = "Jones"; // This works but dont do it, as JS will make this a global variable
// console.log(lastName);

// . A
// language = "English";
// population = "20000000";
// console.log(population);

// * Basic Operators

// Math Operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);
// console.log(`${firstName} ${lastName}`);

// Assignment Operators
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);

// Comparison Operators
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(now - 1991 > now - 2018);

// . A
// console.log("Population split:", population / 2);
// population++;
// console.log("Population +1:", population);
// console.log("isPop > Finland:", population > 6000000);
// console.log("isPop < avgPop:", population > 33000000);
// const description = `${country} is in ${continent}, and its ${population} people speak badly.`;
// console.log(description);

// * Operator Precedence

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(now - 1991 > now - 2018);

// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// . A
// No Assignment Here

// ! Coding Challenge #1

// // 1
// const markMass1 = 78;
// const markHeight1 = 1.69;
// const johnMass1 = 92;
// const johnHeight1 = 1.95;

// const markMass2 = 95;
// const markHeight2 = 1.88;
// const johnMass2 = 85;
// const johnHeight2 = 1.76;

// // 2
// function bmiCalc(mass, height) {
//   return mass / height ** 2;
// }

// const mark1BMI = bmiCalc(markMass1, markHeight1);
// const john1BMI = bmiCalc(johnMass1, johnHeight1);
// console.log("1st BMI", mark1BMI, john1BMI);
// const mark2BMI = bmiCalc(markMass2, markHeight2);
// const john2BMI = bmiCalc(johnMass2, johnHeight2);
// console.log("2nd BMI", mark2BMI, john2BMI);

// // 3
// const markHigherBMI1 = mark1BMI > john1BMI;
// console.log("markHigherBMI1", markHigherBMI1);
// const markHigherBMI2 = mark2BMI > john2BMI;
// console.log("markHigherBMI2", markHigherBMI2);

// * Strings & Template Literals

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;

// const jonas = `I'm ${firstName}, I am a ${job}. I am ${
//   2025 - birthYear
// } years old`;

// console.log(jonas);

// . A
// const description = `${country} is in ${continent}, and its ${population} people speak badly.`;

//

// * Taking Decisions if / else Statements

// const age = 18;

// if (age >= 18) {
//   console.log("You can drive!");
// } else {
//   console.log("You can't drive! Sucks!");
// }

// . A

// const population = 36000000;
// console.log(population > 33000000 ? "pop above avg" : "pop below avg");

// ! CODING CHALLENGE 2

// const markMass1 = 78;
// const markHeight1 = 1.69;
// const johnMass1 = 92;
// const johnHeight1 = 1.95;

// const markMass2 = 95;
// const markHeight2 = 1.88;
// const johnMass2 = 85;
// const johnHeight2 = 1.76;

// function bmiCalc(mass, height) {
//   return mass / height ** 2;
// }

// const mark1BMI = bmiCalc(markMass1, markHeight1);
// const john1BMI = bmiCalc(johnMass1, johnHeight1);
// const mark2BMI = bmiCalc(markMass2, markHeight2);
// const john2BMI = bmiCalc(johnMass2, johnHeight2);

// const markHigherBMI1 = mark1BMI > john1BMI;
// if (markHigherBMI1) {
//   console.log(`Mark's BMI (${mark1BMI}) is higher than John's (${john1BMI})!`);
// } else {
//   console.log(`John's BMI (${john1BMI}) is higher than Mark's (${mark1BMI})!`);
// }

// * Type Conversion and Coercion

// // Type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
// console.log(Number("Jonas"));
// console.log(String(23), 23);

// // Type Coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" - "10" + 3);
// console.log("23" / "2");

// let n = "1" + 1; // '11'
// n = n - 1;
// console.log(n);

// . A
// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123" < 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);

// * Truthy and Falsy Values

// // 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// * Equality Operators: == vs. ===

// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");

// if (age == 18) console.log("You just became an adult :D (loose)");

// // const favourite = Number(prompt("What's your favourite number?"));
// const favourite = "23";
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite == 23) {
//   // 22 === 23 -> FALSE
//   console.log("Cool! 23 is an amzaing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// if (favourite !== 23) console.log("Why not 23?");

// . A

// const numNeighbours = 3;

// switch (numNeighbours) {
//   case 0:
//     console.log("No Borders");
//     break;
//   case 1:
//     console.log("Only 1!");
//     break;
//   default:
//   // console.log("Default");
// }
// if (numNeighbours > 1) {
//   console.log("More than 1");
// }

// * Boolean Logic

// * Logical Operators
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log('Sarah is able to drive!');
// // } else {
// //   console.log('Someone else should drive...');
// // }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// . A
// const country = "UK";
// const language = "english";
// const population = 33000000;
// const isIsland = false;

// if (language === "english" && population < 50000000 && isIsland === false) {
//   console.log("You should live here");
// } else {
//   console.log("You should live in Portugal");
// }

// ! CHALLENGE 3

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// // console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both win");
// }

// BONUS 1
// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy 🏆");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log("Koalas win the trophy 🏆");
// } else if (
//   scoreDolphins === scoreKoalas &&
//   scoreDolphins >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log("Both win the trophy!");
// } else {
//   console.log("No one wins the trophy 😭");
// }

//

// * Switch statement

// const day = "friday";

// switch (day) {
//   case "monday": // day === 'monday'
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend :D");
// } else {
//   console.log("Not a valid day!");
// }

// . A

// const language = "english";
// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log("1st");
//     break;
//   case "spanish":
//     console.log("2nd");
//     break;
//   case "english":
//     console.log("3rd");
//     break;
//   case "hindi":
//     console.log("4th");
//     break;
//   case "arabic":
//     console.log("5th");
//     break;
//   default:
//     console.log("Some other language");
//     break;
// }

// * Statements and Expressions

// Expressions = Produces a value
// 3 + 4
// 1991
// true && false && !false

// Statements = A sentence to describe how we want code to work
// if (23 > 10) {
//   const str = '23 is bigger';
// }

// const me = 'Jonas';
// console.log(`I'm ${2037 - 1991} years old ${me}`);

// ////////////////////////////////////
// // The Conditional (Ternary) Operator
// const age = 23;
// // age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = 'wine 🍷';
// } else {
//   drink2 = 'water 💧';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

// * Conditionaly (Ternary) Operator

// const age = 23;
// // age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

// const drink = age >= 18 ? "wine 🍷" : "water 💧";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine 🍷";
// } else {
//   drink2 = "water 💧";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

// ! Challenge 4

// const bill = 275;
// const bill = 40;
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill + tip}`);
