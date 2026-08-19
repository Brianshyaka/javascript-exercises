'use strict';

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.

const shopName = "Maison Sarah";
const location = "Augsburg";
let specialOffers = "Free croissant with coffee";
let openingHours = "08:00-18:00";
let customerRating = 4.8;

console.log(shopName);
console.log(location);
console.log(specialOffers);
console.log(openingHours);
console.log(customerRating);

// `const` is used for shopName because the business name will not change.
// `const` is used for location because the shop's city stays fixed.
// `let` is used for specialOffers because promotions can change over time.
// `let` is used for openingHours because the schedule may change.
// `let` is used for customerRating because reviews can be updated.

// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.

console.log(typeof shopName);
console.log(typeof location);
console.log(typeof specialOffers);
console.log(typeof openingHours);
console.log(typeof customerRating);
console.log(typeof null);
console.log(typeof undefined);

// `typeof null` returns "object", which is a famous historical bug in JavaScript.

// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.

let firstValue;
const secondValue = null;

console.log(firstValue);
console.log(typeof firstValue);
console.log(secondValue);
console.log(typeof secondValue);

// `undefined` means a variable exists but has no value yet, while `null` means it was intentionally set to no value.

// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
const priceText = "4.50";
const countText = "12";
const flagText = "true";

const priceNumber = Number(priceText);
const countNumber = Number(countText);
const isOpen = Boolean(flagText);
const ratingText = String(customerRating);

console.log(priceNumber, typeof priceNumber);
console.log(countNumber, typeof countNumber);
console.log(isOpen, typeof isOpen);
console.log(ratingText, typeof ratingText);

// `Number(countText)` would become NaN if the string were not a valid number.

// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

// ! This broken program crashes on purpose, one error at a time.
// ! Keep it commented until you reach this part, then uncomment and repair:
// Repaired by changing bakeryName from const to let so it can be reassigned.
// The original starting bakery name is kept as "Maison Sarah".
let bakeryName = "Maison Sarah";
bakeryName = "The Corner Bakery";

// Repaired by declaring openingHour before assigning to it.
let openingHour = 7;

// Repaired by declaring loafCount before reading it.
let loafCount = 12;
console.log(loafCount);

// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.
let a = 10;
let b = 20;
let tempValue = a;

a = b;
b = tempValue;

console.log(a);
console.log(b);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
