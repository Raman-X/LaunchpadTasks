// Task 7: Function Declaration, Parameters, and Return Values

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(sum([1, 22, 33, 4, 5]));

// extended function to return average of numbers greater than 10

function avg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      sum += arr[i];
    }
  }
  let avg = sum / arr.length;
  return avg;
}

console.log(avg([1, 22, 33, 4, 5]));
