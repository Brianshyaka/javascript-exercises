'use strict';

// Lesson 03 exercise: Strings and numbers
// In your exercise repository, create a branch named `lesson-03-exercise` and switch to it,
// then open `lesson-03.js`, where the questions wait as comments. Work beneath each question
// in order.

// TODO: Part one.
// Declare variables for a shop name, an opening hour, and a closing hour, then log one
// welcoming sentence built as a single template literal that uses all three.

const shopName = "Maison Sarah";
let openingHour = "6:00 am";
let closingHour = "21:00 pm";

console.log(`Welcome to ${shopName} bakery and we are open from ${openingHour} to ${closingHour}`);


// TODO: Part two.
// The file provides a messy string with surplus spaces at both ends, the wrong case, and one
// word that needs replacing. Apply the methods from this lesson, chained or in sequence, to
// log the cleaned version, and add a comment naming each method you used and the job it
// performed.

// * The provided messy string:
const messy = "   Maison   Sarah, fresh bread daily   ";

console.log(messy
    .toLowerCase()
    .replace("maison", "Maison")
    .trim()
   );

// .toLowerCase() makes all characters to lowercase or small letters
// .replace() it replaces one word for another if it finds it in the string of text.
// :trim() removes spaces at both ends of the strings

// TODO: Part three.
// Using the provided product string, log its length, the position at which a given word
// begins, and a slice containing exactly that word. Then split the provided comma-separated
// list and log the resulting pieces.

// * The provided product string and comma-separated list:
const product = "Sourdough Loaf, whole grain";
const flavorList = "rye,spelt,wheat,olive";

console.log(product.length);
console.log(product.indexOf("whole"));
console.log(product.slice(product.indexOf("whole"), product.indexOf("whole") + "whole".length));
console.log(flavorList.split(","));


// TODO: Part four.
// From the net price and tax rate in the file, calculate the final price and log it inside a
// template literal, formatted to two decimal places. Add a comment explaining why the
// formatting step must come last.

// * The provided net price and tax rate:
const netPrice = 4.0;
const taxRate = 0.07;

const finalPrice = (netPrice * (1 + taxRate)).toFixed(2);
console.log(`Final price: ${finalPrice}`);
// toFixed() must come last so the calculation is completed first and only the final value is rounded.


// TODO: Part five.
// Using the random recipe from this lesson, log a random whole number from 1 to 6. Then adapt
// the recipe to produce a number from 10 to 20, and explain your adaptation in a comment.

console.log(Math.floor(Math.random() * 6) + 1);
console.log(Math.floor(Math.random() * 11) + 10);
// The second number uses 11 possible values and adds 10 so the range becomes 10 through 20.


// TODO: Part six.
// Open the MDN String reference, choose one method this lesson did not cover, and use it
// correctly on a string of your choice. In a comment, cite the method's name and describe what
// it does in one sentence of your own words.

const sentence = "Maison Sarah serves fresh bread";
console.log(sentence.includes("fresh"));
// includes() checks whether a specific substring(fresh) appears inside the string.


// TODO: Part seven.
// Two classic exercises close the lesson. First, build a username generator: from a first name
// and a last name held in variables, produce a lowercase username in the pattern of first
// initial followed by full last name, such as mmustermann. Second, write a mad-libs story:
// declare four variables, an adjective, a noun, a verb, and a place, and log one short,
// ridiculous story built from a single template literal that uses all four.

const firstName = "Sarah";
const lastName = "maison";
const username = `${firstName[0]}${lastName}`.toLowerCase();
console.log(username);

const adjective = "sparkly";
const noun = "toaster";
const verb = "juggled";
const place = "moon";
console.log(`A ${adjective} ${noun} ${verb} across the ${place}.`);


// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
