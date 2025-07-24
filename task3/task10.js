// Task 10: Function Scope and Closure with Examples

function outer() {
  let x = 1;
  function inner() {
    console.log(x + 2);
  }
  return inner;
}

let inner = outer();

inner(); // still remembers x from outer function
