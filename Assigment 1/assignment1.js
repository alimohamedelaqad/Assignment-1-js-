
//  Assignment 1 – JavaScript Solutions


// 1. Convert the string "123" to a number and add 7
function q1() {
  const result = Number("123") + 7;
  console.log(result); // 130
  return result;
}

// 2. Check if the given variable is falsy and return "Invalid" if it is
function q2(value) {
  if (!value) return "Invalid";
  return value;
}
// q2(0) → "Invalid"

// 3. Print numbers 1–10, skipping even numbers using continue
function q3() {
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i); // 1, 3, 5, 7, 9
  }
}

// 4. Return only even numbers from an array using filter
function q4(arr) {
  return arr.filter((n) => n % 2 === 0);
}
// q4([1, 2, 3, 4, 5]) → [2, 4]

// 5. Merge two arrays using the spread operator
function q5(arr1, arr2) {
  return [...arr1, ...arr2];
}
// q5([1, 2, 3], [4, 5, 6]) → [1, 2, 3, 4, 5, 6]

// 6. Return day of the week for a given number (1 = Sunday, 7 = Saturday)
function q6(num) {
  switch (num) {
    case 1: return "Sunday";
    case 2: return "Monday";
    case 3: return "Tuesday";
    case 4: return "Wednesday";
    case 5: return "Thursday";
    case 6: return "Friday";
    case 7: return "Saturday";
    default: return "Invalid day";
  }
}
// q6(2) → "Monday"

// 7. Return an array of string lengths using map
function q7(arr) {
  return arr.map((str) => str.length);
}
// q7(["a", "ab", "abc"]) → [1, 2, 3]

// 8. Check if a number is divisible by both 3 and 5
function q8(num) {
  if (num % 3 === 0 && num % 5 === 0) return "Divisible by both";
  if (num % 3 === 0) return "Divisible by 3";
  if (num % 5 === 0) return "Divisible by 5";
  return "Not divisible by 3 or 5";
}
// q8(15) → "Divisible by both"

// 9. Arrow function that returns the square of a number
const q9 = (n) => n * n;
// q9(5) → 25

// 10. Destructure an object and return a formatted string
function q10({ name, age }) {
  return `${name} is ${age} years old`;
}
// q10({ name: "John", age: 25 }) → "John is 25 years old"

// 11. Accept multiple parameters using rest and return their sum
function q11(...nums) {
  return nums.reduce((sum, n) => sum + n, 0);
}
// q11(1, 2, 3, 4, 5) → 15

// 12. Return a promise that resolves after 3 seconds with "Success"
function q12() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Success"), 3000);
  });
}
// q12().then(console.log) → "Success" (after 3 seconds)

// 13. Find the largest number in an array
function q13(arr) {
  return Math.max(...arr);
}
// q13([1, 3, 7, 2, 4]) → 7

// 14. Return an array of an object's keys
function q14(obj) {
  return Object.keys(obj);
}
// q14({ name: "John", age: 30 }) → ["name", "age"]

// 15. Split a string into an array of words based on spaces
function q15(str) {
  return str.split(" ");
}
// q15("The quick brown fox") → ["The", "quick", "brown", "fox"]



/*
  1. forEach vs for...of
  ─────────────────────
  forEach is an Array method that executes a callback for each element.
  It cannot be stopped early (no break/continue) and does not work directly
  on non-array iterables.

    [1, 2, 3].forEach((n) => console.log(n));

  for...of is a language loop that works on ANY iterable (arrays, strings,
  Maps, Sets, NodeLists, etc.). You can use break and continue inside it.

    for (const n of [1, 2, 3]) console.log(n);

  Use forEach when you want a clean, functional style over a plain array and
  don't need to break early. Use for...of when you need break/continue, work
  with non-array iterables, or use async/await inside the loop (forEach does
  not await promises).


  2. Hoisting & Temporal Dead Zone (TDZ)
  ───────────────────────────────────────
  Hoisting is JavaScript's behaviour of moving declarations to the top of
  their scope before code runs.

  - var declarations are hoisted AND initialised to undefined:
      console.log(x); // undefined (not an error)
      var x = 5;

  - function declarations are fully hoisted (name + body):
      greet(); // "Hello" – works before the declaration
      function greet() { console.log("Hello"); }

  - let and const are hoisted but NOT initialised. The gap between the start
    of the block and the actual declaration line is the Temporal Dead Zone.
    Accessing the variable inside the TDZ throws a ReferenceError:
      console.log(y); // ReferenceError: Cannot access 'y' before initialization
      let y = 10;

  The TDZ exists to catch bugs caused by using variables before they are
  intentionally set.


  3. == vs ===
  ─────────────
  == (loose equality) converts operands to the same type before comparing:
    0 == false   // true  (false → 0)
    "" == false  // true  (both → 0)
    null == undefined // true

  === (strict equality) compares value AND type with no conversion:
    0 === false  // false (number vs boolean)
    "" === false // false
    null === undefined // false

  Best practice: always use === to avoid unexpected type-coercion bugs.


  4. try-catch in async operations
  ──────────────────────────────────
  try-catch lets you handle runtime errors gracefully instead of crashing
  the program. Inside a try block, JavaScript executes the code normally; if
  an error is thrown, execution jumps to the catch block which receives the
  error object.

  In async/await code, rejected promises behave like thrown errors, so
  try-catch works seamlessly:

    async function fetchData() {
      try {
        const res = await fetch("https://api.example.com/data");
        const data = await res.json();
        return data;
      } catch (error) {
        console.error("Request failed:", error.message);
      }
    }

  Without try-catch, an unhandled rejection would crash Node.js or produce
  an unhandled-promise-rejection warning in browsers.


  5. Type Conversion vs Type Coercion
  ─────────────────────────────────────
  Type Conversion (explicit): the developer deliberately converts a value
  using built-in functions.
    Number("42")   // 42
    String(100)    // "100"
    Boolean(0)     // false

  Type Coercion (implicit): JavaScript automatically converts types behind
  the scenes during an operation.
    "5" + 3        // "53"  (number 3 coerced to string)
    "5" - 3        // 2     (string "5" coerced to number)
    if (1) { ... } // 1 coerced to true

  The key difference is intent: conversion is explicit and deliberate;
  coercion is automatic and can cause surprising results if not understood.
*/


// ── Part 3: Bonus – Counter II (LeetCode) ────────────────────
// See bonus.js (separate file as required by the assignment)
