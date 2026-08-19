'use strict';

// Lesson 07 exercise: Objects
// In your exercise repository, create a branch named `lesson-07-exercise` and switch to it,
// then open `lesson-07.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Model a single menu item as an object with at least four properties of mixed types,
// including one boolean. Log two properties with dot notation, then log one property through
// bracket notation with the key held in a variable, and note in a comment why the brackets
// were required in that case.

const butterCroissant = {
  type: "Croissant",
  price: 3.50,
  availability: true,
  origin: "France"
};

console.log(butterCroissant.type);
console.log(butterCroissant.price);

const key = "origin";
console.log(butterCroissant[key]);
// Brackets were required here because we're using a variable to hold the property name.
// Dot notation only works with literal property names, while bracket notation allows
// dynamic property access using variables.
    
// TODO: Part two.
// Give the item a `describe` method that returns one sentence built from the object's own
// properties through `this`, and log the result of calling it.

butterCroissant.describe = function() {
  return `This ${this.type} from ${this.origin} costs €${this.price} and is ${this.availability ? 'available' : 'unavailable'}.`;
};

console.log(butterCroissant.describe());

// TODO: Part three.
// Build an array of at least five menu item objects, and walk it with `for...of`, logging one
// formatted line per item.

const menuItems = [
  { type: "Croissant", price: 3.50, availability: true, origin: "France", vegetarian: true },
  { type: "Pain au Chocolat", price: 4.00, availability: true, origin: "France", vegetarian: true },
  { type: "Escargot", price: 5.50, availability: false, origin: "France", vegetarian: false },
  { type: "Baguette", price: 2.75, availability: true, origin: "France", vegetarian: true },
  { type: "Macaron", price: 2.25, availability: true, origin: "France", vegetarian: true },
  { type: "Tarte aux Fraises", price: 6.00, availability: true, origin: "France", vegetarian: true }
];

for (const item of menuItems) {
  console.log(`${item.type} - €${item.price} (${item.availability ? 'Available' : 'Unavailable'})`);
}

// TODO: Part four.
// Put the callback methods to work on the data: log the names of all vegetarian items by
// combining `filter` and `map`, and fetch the first item cheaper than three euros with `find`.
// Add a comment stating what `find` returns when nothing matches.

const vegetarianItems = menuItems
  .filter(item => item.vegetarian)
  .map(item => item.type);

console.log("Vegetarian items:", vegetarianItems);

const cheapItem = menuItems.find(item => item.price < 3.00);
console.log("First item cheaper than €3.00:", cheapItem);
// find() returns undefined when no element matches the condition.


// TODO: Part five.
// Take one menu item and log its keys, its values, and finally every pair through a `for...of`
// loop over its entries with a destructured pair, formatted as the key, a colon in the output
// text, and the value.

const itemToExamine = menuItems[0];

console.log("Keys:", Object.keys(itemToExamine));
console.log("Values:", Object.values(itemToExamine));

for (const [key, value] of Object.entries(itemToExamine)) {
  console.log(`${key}: ${value}`);
}


// TODO: Part six.
// Assign one item to a second variable, change the price through the second name, and log the
// first to demonstrate the shared reference. Then build a spread copy that overrides only the
// price, and log both objects to prove they now differ in exactly that property.

let item1 = menuItems[1];
let item2 = item1;
item2.price = 9.99;

console.log("item1 after changing item2.price:", item1);
// Both variables reference the same object, so item1 was modified too.

const item1Copy = { ...item1, price: 4.00 };
console.log("item1:", item1);
console.log("item1Copy (spread with overridden price):", item1Copy);
// Now they differ only in the price property.

// TODO: Part seven.
// As a stretch, build the classic word frequency counter: split the provided sentence into
// words and walk them with a loop, using each word as a bracket-notation key on a counter
// object and adding one per sighting. Log the finished counter, and if the sort extension
// caught your interest, log its entries ordered so that the most frequent word comes first.

// * The provided sentence for the word frequency counter:
const sentence = "the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams";

const wordCounter = {};

const words = sentence.split(" ");
for (const word of words) {
  if (wordCounter[word]) {
    wordCounter[word]++;
  } else {
    wordCounter[word] = 1;
  }
}

console.log("Word frequency counter:", wordCounter);

// Sort entries by frequency (most frequent first)
const sortedEntries = Object.entries(wordCounter).sort((a, b) => b[1] - a[1]);
console.log("Sorted by frequency (most frequent first):");
for (const [word, count] of sortedEntries) {
  console.log(`${word}: ${count}`);
}


// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
