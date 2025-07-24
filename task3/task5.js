// Task 5: Loops with Break, Continue, and Nested Loops

// for loop
for (let i = 0; i < 20; i++) {
  if (i % 3 === 0) {
    continue;
  }
  if (i % 5 === 0) {
    break;
  }
  console.log(i);
}

//bonus
let sum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log(sum);

//challenge
for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let j = i; j >= 1; j--) {
    line += `${j} `;
  }
  console.log(line);
}
