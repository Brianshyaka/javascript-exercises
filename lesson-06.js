'use strict';

// Lesson 06 exercise: Arrays and loops
// In your exercise repository, create a branch named `lesson-06-exercise` and switch to it,
// then open `lesson-06.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Build an array of at least five menu item names. Log the whole array, the first item, the
// last item read through `length` minus 1, and the array's length.

let itemArray = ["Butter croissant", "Pain au Chocolat", "Rolls & Buns", "Cookies", "Muffins"  ];

console.log(itemArray);
console.log(itemArray[0]);
console.log(itemArray[itemArray.length - 1]);
console.log(itemArray.length);




 
// TODO: Part two.
// Grow and shrink the menu with one `push`, one `unshift`, one `pop`, and one `shift`, logging
// the array after each step, and note in a comment which end of the array each method touched.

itemArray.push("Pastries");
console.log(itemArray) // push adds to the end

itemArray.pop();
console.log(itemArray) // pop removes from the end

itemArray.unshift("cheese straws");
console.log(itemArray) // unshift adds to the beginning

itemArray.shift();
console.log(itemArray) // shift removes from the beginning

// TODO: Part three.
// Print every menu item twice, first with a counting `for` loop that uses the index, then with
// a `for...of` loop, and add a one-line comment on when you would choose each form.

// Counting for loop with index:
for (let i = 0; i < itemArray.length; i++){
    console.log(itemArray[i]);
}
// Use a counting for loop when you need the index for calculations or multiple array access.

// for...of loop:
for (const item of itemArray){
    console.log(item);
}
// Use for...of when you  need the values and want cleaner, more readable code.

// TODO: Part four.
// Using the provided prices array, build display strings with `map`, keep the items under five
// euros with `filter`, and fetch the first item over ten euros with `find`, logging each
// result. Add a comment stating what `forEach` would have returned in their place, and why
// that is the well-known trap.

// * The provided prices:
const prices = [4.5, 12, 3.2, 8];

// map: build display strings
const displayStrings = prices.map(price => `€${price}`);
console.log(displayStrings);

// filter: keep items under five euros
const underFive = prices.filter(price => price < 5);
console.log(underFive);

// find: first item over ten euros
const overTen = prices.find(price => price > 10);
console.log(overTen);

// forEach would have returned undefined. This is the well-known trap: forEach always returns
// undefined, so you can't capture results like you can with map, filter, and find.


// TODO: Part five.
// Loop over the provided artists array and log a two-line card for each artist using template
// literals. Then add one artist of your own invention to the data and run the file again,
// noting in a comment what you did not have to change.

// * The provided artists:
const artists = ["Pinkfong", "Adriano Celentano", "Asake", "Miyagi and Andy Panda", "Johnny Cash"];

for (const artist of artists) {
    console.log(`Artist: ${artist}`);
    console.log(`---`);
}

// Added new artist
artists.push("David Bowie");

for (const artist of artists) {
    console.log(`Artist: ${artist}`);
    console.log(`---`);
}

// What didn't have to change: The loop itself didn't need any modifications. It automatically
// includes the new artist because it iterates over the entire array.


// TODO: Part six.
// Assign the menu to a second variable, push a new item through the second name, and log both
// variables to demonstrate the shared reference. Then create a spread copy, change the copy,
// and log both lengths to prove the original survived.

const menuCopy = itemArray;
menuCopy.push("Croissant aux amandes");
console.log(itemArray);
console.log(menuCopy);
// Both reference the same array, so both show the new item

// Create a spread copy
const menuSpreadCopy = [...itemArray];
menuSpreadCopy.push("Donut");
console.log(itemArray.length);
console.log(menuSpreadCopy.length);
// Original survived with its length intact; the spread copy is independent


// TODO: Part seven.
// The counting classics. Implement FizzBuzz in full: loop from 1 to 100, printing Fizz for
// multiples of 3, Buzz for multiples of 5, FizzBuzz for both, and the number itself otherwise,
// reusing your single-number logic from the conditionals exercise. Then, with loops over the
// provided numbers array, compute the sum and find the largest value without library helpers.

// * The provided numbers for the sum and the largest:
const numbers = [12, 5, 41, 8, 33, 2, 27];

// FizzBuzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Compute the sum
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum:", sum);

// Find the largest value
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log("Largest:", largest);


// TODO: Part eight.
// The string classics that waited for loops. Reverse a string with a loop that walks it
// backwards by index. Count its vowels with a loop and `includes` against a vowels array. As a
// stretch, use your reverser to build a palindrome check, and test it on three words, ignoring
// case with `toLowerCase`.

// Reverse a string with a loop
const testString = "hello";
let reversed = "";
for (let i = testString.length - 1; i >= 0; i--) {
    reversed += testString[i];
}
console.log("Reversed:", reversed);

// Count vowels
const vowels = ["a", "e", "i", "o", "u"];
let vowelCount = 0;
for (let i = 0; i < testString.length; i++) {
    if (vowels.includes(testString[i].toLowerCase())) {
        vowelCount++;
    }
}
console.log("Vowel count in '", testString, "':", vowelCount);

// Palindrome check function
function isPalindrome(str) {
    const lowerStr = str.toLowerCase();
    let reversed = "";
    for (let i = lowerStr.length - 1; i >= 0; i--) {
        reversed += lowerStr[i];
    }
    return lowerStr === reversed;
}

// Test on three words
console.log("racecar is palindrome:", isPalindrome("racecar"));
console.log("hello is palindrome:", isPalindrome("hello"));
console.log("Level is palindrome:", isPalindrome("Level"));


// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
