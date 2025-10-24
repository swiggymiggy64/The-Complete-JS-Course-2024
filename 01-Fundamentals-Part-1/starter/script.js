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

// * Coding Challenge #1

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
