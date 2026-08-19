'use strict';

// Lesson 04 exercise: Operators and conditionals
// In your exercise repository, create a branch named `lesson-04-exercise` and switch to it,
// then open `lesson-04.js`, where the questions wait as comments. The file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// The file lists ten expressions that mix coercion, strict comparison, and logical
// combination, among them `3 === "3"`, `1 + true`, and `!(5 > 2)`. Write your predicted result
// as a comment beside each expression before running the file, then run it and correct any
// misses, leaving both the prediction and the actual result visible.

// * The provided expressions, write your prediction beside each before running:
console.log(3 === "3"); // prediction: false, actual: false
console.log(3 == "3"); // prediction: true, actual: true
console.log("5" - 1); // prediction: 4, actual: 4
console.log("5" + 1); // prediction: "51", actual: "51"
console.log(1 + true); // prediction: 2, actual: 2
console.log(10 >= 10); // prediction: true, actual: true
console.log(!(5 > 2)); // prediction: false, actual: false
console.log(4 !== "4"); // prediction: true, actual: true
console.log("b" > "a"); // prediction: true, actual: true
console.log(0 === -0); // prediction: true, actual: true


// TODO: Part two.
// Write one `if` statement with an `else` branch on a variable of your choosing. Run the file
// twice with different values so that each branch has printed at least once, and record each
// run's output in a comment.

const age = 25;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// Run 1 with age = 25: "You are an adult"
// Run 2 with age = 14: "You are a minor"

// TODO: Part three.
// Build an `else if` chain for order pricing: more than 12 items produces one message, more
// than 6 another, and everything else a third. Run it with values that reach every branch, and
// add a comment explaining why the most specific question must be asked first.

const itemCount = 8;

if (itemCount > 12) {
  console.log("Bulk order discount: 20% off");
} else if (itemCount > 6) {
  console.log("Quantity discount: 10% off");
} else {
  console.log("Regular price");
}

// Tested with: itemCount = 15 -> "Bulk order discount: 20% off"
//             itemCount = 8  -> "Quantity discount: 10% off"
//             itemCount = 3  -> "Regular price"
// The most specific question (itemCount > 12) must be asked first because if we asked
// (itemCount > 6) first, items > 12 would match that condition and never reach the bulk discount.


// TODO: Part four.
// For each of the eight provided values, which include `0`, `"0"`, an empty string, and a
// single space, predict in a comment whether it is truthy or falsy. Verify each prediction
// with `Boolean()` and correct your misses.

// * The eight provided values:
const courtValues = [false, 0, "0", "", " ", "bread", null, undefined];

console.log("Truthy/Falsy predictions and verification:");
console.log("false:", Boolean(false)); // prediction: falsy, actual: false
console.log("0:", Boolean(0)); // prediction: falsy, actual: false
console.log('"0":', Boolean("0")); // prediction: truthy, actual: true
console.log('"":', Boolean("")); // prediction: falsy, actual: false
console.log('" ":', Boolean(" ")); // prediction: truthy, actual: true
console.log('"bread":', Boolean("bread")); // prediction: truthy, actual: true
console.log("null:", Boolean(null)); // prediction: falsy, actual: false
console.log("undefined:", Boolean(undefined)); // prediction: falsy, actual: false


// TODO: Part five.
// Rewrite the provided day-based `if` chain as a `switch` statement with a `default` case and
// a `break` in every case, and confirm that it prints the same answers for three test days.

// * The provided day-based if chain, rewrite it as a switch beneath it:
const day = "Sunday";
if (day === "Saturday") {
  console.log("Open 7:00 to 14:00");
} else if (day === "Sunday") {
  console.log("Open 8:00 to 12:00");
} else if (day === "Monday") {
  console.log("Closed today");
} else {
  console.log("Open 7:00 to 18:00");
}

// Rewritten as switch:
switch (day) {
  case "Saturday":
    console.log("Open 7:00 to 14:00");
    break;
  case "Sunday":
    console.log("Open 8:00 to 12:00");
    break;
  case "Monday":
    console.log("Closed today");
    break;
  default:
    console.log("Open 7:00 to 18:00");
}

// Tested with: day = "Saturday" -> both print "Open 7:00 to 14:00"
//             day = "Sunday"   -> both print "Open 8:00 to 12:00"
//             day = "Tuesday"  -> both print "Open 7:00 to 18:00"


// TODO: Part six.
// The file ends with a short broken program that contains an assignment where a comparison was
// intended, and a `switch` with a missing `break`. Run it, observe both incorrect behaviors,
// repair both, and describe each repair in one comment line.

// * The provided broken program, run it, observe both incorrect behaviors, then repair both:
let shopStatus = "closed";
if (shopStatus === "open") {
  console.log("Welcome in");
}
// Fixed: Changed assignment (=) to comparison (===) so the condition checks if status equals "open"

const size = "M";
switch (size) {
  case "S":
    console.log("Small");
    break;
  case "M":
    console.log("Medium");
    break;
  case "L":
    console.log("Large");
    break;
  default:
    console.log("Unknown size");
}
// Fixed: Added break statement after "Small" case to prevent fall-through to "Medium"

// TODO: Part seven.
// Two classic exercises close the lesson. First, the leap year checker: a year is a leap year
// when it is divisible by 4 and not by 100, unless it is also divisible by 400. Implement the
// rule with the remainder operator and logical operators, and test it against 2024, 1900, and
// 2000. Second, FizzBuzz for a single number: for one number variable, print Fizz when it is
// divisible by 3, Buzz when it is divisible by 5, FizzBuzz when it is divisible by both, and
// the number itself otherwise. The loops lesson scales this to one hundred.

// Leap year checker
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log("Leap Year Checker:");
console.log("2024:", isLeapYear(2024)); // true (divisible by 4, not by 100)
console.log("1900:", isLeapYear(1900)); // false (divisible by 100, not by 400)
console.log("2000:", isLeapYear(2000)); // true (divisible by 400)

// FizzBuzz for a single number
function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}

console.log("FizzBuzz examples:");
console.log(fizzBuzz(3));   // Fizz
console.log(fizzBuzz(5));   // Buzz
console.log(fizzBuzz(15));  // FizzBuzz
console.log(fizzBuzz(7));   // 7


// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
