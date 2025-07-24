// Task 12: Higher-Order Functions (without Callbacks)

// function that returns another function
function multiplyAll(arr, multiplier) {
  return arr.map((num) => num * multiplier);
}

console.log(multiplyAll([1, 2, 3], 2));

// sum all
function sumAll(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

console.log(sumAll([1, 2, 3]));
