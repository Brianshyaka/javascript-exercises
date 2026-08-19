'use strict';

// Lesson 01 exercise: Running JavaScript three ways
// Clone the exercise repository for this course, https://github.com/Leon-Arno/JS-Exercises, to
// your computer.
// Make the copy your own. Inside the cloned folder, delete the `.git` folder to remove the
// connection to the original repository: run `rm -rf .git` on macOS and Linux, or `Remove-Item
// -Recurse -Force .git` in PowerShell on Windows.
// Run `git init` in the folder, create a new empty repository named `javascript-exercises` on
// your own GitHub account, connect it as the remote, and push. This is the same publishing
// flow you performed in the Git course.
// Create a branch named `lesson-01-exercise` and switch to it, then open `lesson-01.js`. The
// questions are already inside as comments; work through them in order, writing your answers
// directly beneath each one.

// TODO: Part one.
// Start the Node REPL and evaluate at least four arithmetic expressions of your own, using
// more than one operator across them. Copy the complete session transcript and paste it into
// `lesson-01.js` as a comment block where the question asks for it.

/*
> 5 + 3
8
> 10 * 2 + 4
24
> 20 / 4
5
> 7 - 2 * 3
1
> 
*/

// TODO: Part two.
// Write a `console.log` line in `lesson-01.js` that prints a greeting, save the file
// deliberately, and run it with `node lesson-01.js`.

console.log("Hello, world!");

// TODO: Part three.
// Change the greeting text, run the file again without saving, and observe that the output has
// not changed. Save and run once more, then describe in a one-sentence comment what happened
// and why.

// The output stayed the same until I saved the file because Node reads the latest saved version of the script when it starts.

// TODO: Part four.
// Run your greeting line in the Chrome DevTools Console. In a comment, record one way the
// experience matched Node and one way it differed.

// It matched Node because both environments executed the same JavaScript statement and printed the greeting, but it differed because the
//  browser console runs in a web page context while Node runs in a terminal process.

// TODO: Part five.
// From a folder that does not contain the file, deliberately run `node lesson-01.js` so that
// the terminal reports it cannot find the file. Paste that error transcript as a comment, then
// explain in one sentence how you resolved it.

/*
C:\Users\shyak\Documents\startupistan-practice\maison-sarah> node lesson-01.js
node:internal/modules/cjs/loader:1520
  throw err;
  ^

Error: Cannot find module 'C:\Users\shyak\Documents\startupistan-practice\maison-sarah\lesson-01.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1517:15)
    at wrapResolveFilename (node:internal/modules/cjs/loader:1071:27)
    at defaultResolveImplForCJSLoading (node:internal/modules/cjs/loader:1095:10)
    at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1071:27)
    at Module._load (node:internal/modules/cjs/loader:1071:27)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:1520:33)
    at node:internal/main/run_main_module:33:67 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v24.18.0
*/

// I resolved it by switching to the folder that contains lesson-01.js and running the command there.


// TODO: Save the file, commit your work with a clear message, push the branch, and open a pull
// request into your main branch.
// TODO: Submit the link to the pull request for review.
