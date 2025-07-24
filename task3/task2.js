// Task 2: Data Types and Type Coercion

let name = "Raman";
let age = 10;
let isStudent = true;
let info = {
  name: "Raman",
  age: 10,
  isStudent: true,
};

let num = null;
let num2 = undefined;
let num3; // also undefined
const sym = Symbol("symbol"); // use Symbol() to create a symbol
const big = 123456789012345678901234567890n; // use n suffix for big number

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof info);
console.log(typeof num); // type of null is object
console.log(typeof num2);
console.log(typeof num3);
console.log(typeof sym);
console.log(typeof big);
