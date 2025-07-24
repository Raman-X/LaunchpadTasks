// Task 11: Factorial Function with Recursion

function factorial(n) {
  if (n < 0) {
    return "Invalid input";
  }
  if (typeof n !== "number") {
    return "Invalid input";
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));
