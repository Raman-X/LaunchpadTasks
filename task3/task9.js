//Task 9: Function Expressions and Arrow Functions

//traditional function
function product1(a, b) {
  return a * b;
}

// arrow function
let product2 = (a, b) => a * b;

//bonus:log before returning result
let product3 = (a, b) => {
  console.log(a * b);
  return a * b;
};

console.log(product1(2, 3));
console.log(product2(2, 3));
product3(2, 3);
