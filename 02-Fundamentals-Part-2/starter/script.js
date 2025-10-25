// * Activating Strict Mode

"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// // Reserved words
// // const interface = 'Audio';
// // const private = 534;

// * Functions

// function logger() {
//   console.log("My name is Jonas");
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");

// . A

// function describeCountry(country, population, capitalCity) {
//   return console.log(`${country} has ${population} million people and its
// capital city is ${capitalCity}`);
// }

// describeCountry("UK", "22", "London");
// describeCountry("Netherlands", "33", "Amsterdam");
// describeCountry("France", "40", "Patis");

// * Function Declarations vs. Expressions

// // Function declaration = Can be called before they are defined
// const age1 = calcAge1(1991);

// function calcAge1(birthYeah) {
//   return 2037 - birthYeah;
// }

// // Function expression = Cannot be called before they are defined
// const calcAge2 = function (birthYeah) {
//   return 2037 - birthYeah;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// . A

// function percentageOfWorld1(population) {
//   return console.log((population / 7900) * 100);
// }

// percentageOfWorld1(1441);
// percentageOfWorld1(3333);
// percentageOfWorld1(6666);

// const percentageOfWorld2 = function (population) {
//   return console.log((population / 7900) * 100);
// };

// percentageOfWorld1(1441);
// percentageOfWorld1(3333);
// percentageOfWorld1(6666);

// * Arrow Functions

// const calcAge3 = (birthYeah) => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYeah, firstName) => {
//   const age = 2037 - birthYeah;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1980, "Bob"));

// . A

// const percentageOfWorld3 = (population) => {
//   console.log((population / 7900) * 100);
// };

// percentageOfWorld3(1441);
// percentageOfWorld3(3333);
// percentageOfWorld3(6666);

// *  Functions Calling Other Functions, watch video

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

// . A
