// Task 3: If...Else with Logical Operators

// if statement
let num = 10;
if (num > 0) {
  console.log("num is positive");
} else if (num < 0) {
  console.log("num is negative");
} else {
  console.log("num is zero");
}

if (num % 2 === 0 && num % 3 === 0) {
  console.log("num is divisible by both 2 and 3");
}

//check multiples

function checkMultiples(num, multiples) {
  for (let i = 0; i < multiples.length; i++) {
    if (num % multiples[i] === 0) {
      return true;
    }
  }
  return false;
}
checkMultiples(10, [2, 3, 5]);
