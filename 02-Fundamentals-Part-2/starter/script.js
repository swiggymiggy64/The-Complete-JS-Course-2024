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

// *  Functions Calling Other Functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// . A
// function percentageOfWorld(population) {
//   return (population / 7900) * 100;
// }

// function describePopulation(country, population) {
//   return console.log(
//     `${country} has ${population} million people, which is about ${percentageOfWorld(
//       population
//     )}% of the world.`
//   );
// }

// describePopulation("China", 1441);
// describePopulation("Here", 3333);
// describePopulation("Somehwere", 6666);

// * Reviewing Functions

// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };

// const yearsUntilRetirement = function (birthYeah, firstName) {
//   const age = calcAge(birthYeah);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1950, "Mike"));

// ! Challenge 1

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const dolphinAvgScore1 = calcAverage(44, 23, 71);
// const koalaAvgScore1 = calcAverage(65, 54, 49);
// const dolphinAvgScore2 = calcAverage(85, 54, 41);
// const koalaAvgScore2 = calcAverage(23, 34, 27);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins === avgKoalas) return console.log("It's a draw!");
//   return console.log(
//     avgDolphins > avgKoalas
//       ? `Dolphins win (${avgDolphins} vs. ${avgKoalas})`
//       : `Koalas win (${avgKoalas} vs. ${avgDolphins})`
//   );
// }

// checkWinner(dolphinAvgScore1, koalaAvgScore1);
// checkWinner(dolphinAvgScore2, koalaAvgScore2);

// * Introduction to Arrays

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);
// // friends = ['Bob', 'Alice']

// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);
// console.log(jonas.length);

// . A

// const populations = [1441, 3333, 6666, 500];

// console.log(populations.length === 4 ? true : false);

// function percentageOfWorld(population) {
//   return (population / 7900) * 100;
// }

// const percentages = [
//   percentageOfWorld(populations[0]),
//   percentageOfWorld(populations[1]),
//   percentageOfWorld(populations[2]),
//   percentageOfWorld(populations[3]),
// ];

// console.log(percentages);

// * Basic Array Operations (Methods)

// const friends = ["Michael", "Steven", "Peter"];

// // Add to the end
// const newLength = friends.push("Jay");
// console.log(".push:", friends);
// // console.log(newLength); // result: 4

// // Add to the start
// friends.unshift("John");
// console.log(".unshift:", friends);

// // Remove from end
// friends.pop();
// const popped = friends.pop(); // capture removed
// console.log(".pop:", friends);
// // console.log(".popped:", popped); // result: "Peter"

// // Remove from start
// friends.shift();
// console.log(".unshift:", friends);

// // Find index location in array
// const findLocationInArray = friends.indexOf("Steven");
// console.log(".indexOf:", findLocationInArray);

// // Find if something is in array (true/false)
// const includes = friends.includes("Steven");
// console.log(".includes:", includes);

// . A

// const neighbours = ["France", "Poland", "Belgium"];
// neighbours.push("Utopia");
// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes("Germany"))
//   console.log("Probably not a central Euro country. Or IS Germany!");

// const findPolandIndex = neighbours.indexOf("Poland");
// console.log(findPolandIndex);
// neighbours[findPolandIndex] = "Republic of Poland";
// console.log(neighbours);

// ! Challenge 2

// const tips = [];
// const total = [];
// const bills = [calcTip(125), calcTip(555), calcTip(44)];

// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     tips.push(bill * 0.15);
//     total.push(bill * 0.15 + bill);
//   } else {
//     tips.push(bill * 0.2);
//     total.push(bill * 0.2 + bill);
//   }
// }

// console.log(tips);
// console.log(total);

// * Introduction to Objects

// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// . A

// const myCountry = {
//   country: "UK",
//   capital: "London",
//   language: "Inglish. Innit",
//   population: 22000000,
//   neighbours: null,
// };

// * Dot vs. Bracket Notation
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// // console.log(jonas.'last' + nameKey)

// // const interestedIn = prompt(
// //   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// // );

// const interestedIn = "job";

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends"
//   );
// }

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// console.log(jonas);

// // Challenge
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );

// . A

// const myCountry = {
//   country: "UK",
//   capital: "London",
//   language: "Inglish innit",
//   population: 22000000,
//   neighbours: 0,
// };

// console.log(
//   `${myCountry.country} has ${myCountry.population} ${myCountry.language} people, ${myCountry.neighbours} neighbours & a capital called ${myCountry.capital} fam.`
// );

// myCountry.population += 2000000;
// myCountry.population -= 2000000;
// console.log(myCountry);

// * Object Methods

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYeah: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   // calcAge: function (birthYeah) {
//   //   return 2037 - birthYeah;
//   // }

//   // calcAge: function () {
//   //   // console.log(this);
//   //   return 2037 - this.birthYeah;
//   // }

//   calcAge: function () {
//     this.age = 2037 - this.birthYeah;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       jonas.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(jonas.calcAge());

// console.log(jonas.age);

// // Lesson Challenge

// console.log(jonas.getSummary());

// . A

// const myCountry = {
//   country: "UK",
//   capital: "London",
//   language: "Inglish innit",
//   population: 22000000,
//   neighbours: 0,

//   describe: function () {
//     console.log(
//       `${this.country} has ${this.population} ${this.language} people, ${this.neighbours} neighbours & a capital called ${this.capital} fam.`
//     );
//   },

//   checkIsland: function () {
//     this.neighbours === 0 ? (this.isIsland = true) : (this.isIsland = false);
//   },
// };

// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry);

// ! Challenge 3

// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   weight: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2;
//   },
// };

// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   weight: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);
// console.log(mark, john);

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s BMI (${john.bmi})`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s BMI (${mark.bmi})`
//   );
// }

// * Iteration: The for Loop

// // console.log('Lifting weights repetition 1 🏋️‍♀️');
// // console.log('Lifting weights repetition 2 🏋️‍♀️');
// // console.log('Lifting weights repetition 3 🏋️‍♀️');
// // console.log('Lifting weights repetition 4 🏋️‍♀️');
// // console.log('Lifting weights repetition 5 🏋️‍♀️');
// // console.log('Lifting weights repetition 6 🏋️‍♀️');
// // console.log('Lifting weights repetition 7 🏋️‍♀️');
// // console.log('Lifting weights repetition 8 🏋️‍♀️');
// // console.log('Lifting weights repetition 9 🏋️‍♀️');
// // console.log('Lifting weights repetition 10 🏋️‍♀️');

// // for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// . A

// for (let voter = 1; voter <= 50; voter++) {
//   console.log(`Voter number ${voter} is currently voting`);
// }

// * Looping Arrays, Breaking and Continuing
// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];
// const types = [];

// // console.log(jonas[0])
// // console.log(jonas[1])
// // ...
// // console.log(jonas[4])
// // jonas[5] does NOT exist

// for (let i = 0; i < jonas.length; i++) {
//   // Reading from jonas array
//   console.log(jonas[i], typeof jonas[i]);

//   // Filling types array
//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// // continue and break
// console.log("--- ONLY STRINGS ---");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;

//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log("--- BREAK WITH NUMBER ---");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break;

//   console.log(jonas[i], typeof jonas[i]);
// }

// . A

// const populations = [1441, 3333, 6666, 500];

// function percentageOfWorld(population) {
//   return (population / 7900) * 100;
// }

// let percentages = [];
// for (let i = 0; i < populations.length; i++) {
//   percentages.push(percentageOfWorld(populations[i]));
// }

// console.log(percentages);

// * Looping Backwards and Loops in Loops

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// // 0, 1, ..., 4
// // 4, 3, ..., 0

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------- Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//   }
// }

// . A

// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// for (let neighbour = 0; neighbour < listOfNeighbours.length; neighbour++) {
//   for (
//     let country = 0;
//     country < listOfNeighbours[neighbour].length;
//     country++
//   ) {
//     console.log(`Neighbour: ${listOfNeighbours[neighbour][country]}`);
//   }
// }

// * The while Loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("Loop is about to end...");
// }

// . A

// const populations = [1441, 3333, 6666, 500];

// function percentageOfWorld(population) {
//   return (population / 7900) * 100;
// }

// let percentages = [];
// let counter = 0;
// while (counter < populations.length) {
//   percentages.push(percentageOfWorld(populations[counter]));
//   counter++;
// }

// console.log(percentages);

// ! Challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    tips.push(bill * 0.15);
    totals.push(bill * 0.15 + bill);
  } else {
    tips.push(bill * 0.2);
    totals.push(bill * 0.2 + bill);
  }
}

for (let i = 0; i < bills.length; i++) {
  calcTip(bills[i]);
}

console.log(tips);
console.log(totals);
