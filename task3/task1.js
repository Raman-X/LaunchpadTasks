// Task 1: Variable Declaration & Scope

var x = 10;
let y = 20;
const name = "Raman";

console.log(x, y, name);

var x = 30;
// let y = 40;  cannot redeclare a variable declared with let
console.log(x);
console.log(y);

function printVariables() {
  var x = 1;
  let y = 2;
  const name = "Ram";

  console.log(x, y, name);
}
printVariables();

console.log(age); // this is undefined because only declaration is hoisted and not the value
var age = 10;

// console.log(height); this is error let isn't hoisted like var
// let height = 20;

sayHi(); // works fine

function sayHi() {
  console.log("Hello!");
}

// sayBye();  function hoisting doesn't work with arrow functions

// const sayBye = () => {
//   console.log("Bye!");
// };
// const sayBye = () => {
//   console.log("Bye!");
// };
