# JavaScript Fundamentals Tasks One

### Submission Deadline:

- **Date:** July 25 2025
- **Time:** 1:00 PM

## Task 1: Variable Declaration & Scope

- Declare variables using `var`, `let`, and `const` in both the global and block-level scope (inside functions or blocks).
- Observe how reassigning works with `let` and `const`. What happens if you try to redeclare a `let` or `const` variable within the same scope?
- **Bonus**: Write a function that demonstrates variable hoisting using `var`, `let`, and `const`.

---

## Task 2: Data Types and Type Coercion

- Create variables of various types (string, number, boolean, object, undefined, null, symbol, BigInt).
- Use `typeof` to display the type of each variable.
- **Challenge**: Add a variable with a value of `NaN` and show how JavaScript handles it when combined with other data types.
- Perform type coercion on various combinations of variables (string + number, boolean + number, etc.) and observe the results.

---

## Control Flow Statements Tasks

### Task 3: If...Else with Logical Operators

- Write a program that checks if a given number is positive, negative, or zero, and also checks whether it is divisible by both 2 and 3.
- **Challenge**: Add a condition to check if the number is a multiple of any of the numbers in a given array (e.g., `checkMultiples(10, [2, 3, 5])`).

### Task 4: Switch Statement with Complex Cases

- Create a program that uses a `switch` statement to return a message based on a given day number (1 = Sunday, 2 = Monday, etc.).
- Enhance the program by considering invalid input (i.e., numbers outside the range 1-7). Return a default message for invalid input.

### Task 5: Loops with Break, Continue, and Nested Loops

- Write a program that prints the numbers 1 to 20. Skip numbers that are divisible by 3 using `continue` and stop when it encounters a number that is divisible by 5 using `break`.
- **Bonus**: Create a program that calculates the sum of even numbers between 1 and 100 using a `for` loop.
- **Challenge**: Implement a program that prints a pattern like this:

```text
1
2 1
3 2 1
4 3 2 1
5 4 3 2 1

```

### Task 6: Nested Loops for Multi-Dimensional Arrays

- Write a program to print a 3x3 multiplication table (from 1 to 3) using nested `for` loops. Output the table in a neat grid-like format.
- **Bonus**: Modify the program to print a multiplication table for numbers 1 to 12.

---

## Functions Tasks

### Task 7: Function Declaration, Parameters, and Return Values

- Write a function that accepts an array of numbers and returns the sum of all the numbers greater than 10.
- **Challenge**: Extend the function to return the average of the numbers greater than 10.

### Task 8: Function with Multiple Parameters & Default Parameters

- Write a function that accepts two parameters: a string (`greeting`) and a number (`times`). The function should print the greeting multiple times (based on the value of `times`). If no `times` parameter is provided, it defaults to 3.
- **Bonus**: Add a validation to check if `times` is a positive integer.

### Task 9: Function Expressions and Arrow Functions

- Write a traditional function expression that accepts two arguments and returns their product.
- Convert this function into an arrow function.
- **Bonus**: Modify the arrow function to also log the result before returning it.

### Task 10: Function Scope and Closure with Examples

- Write a function `outer` that returns another function `inner`. The `inner` function should add a specific number (from the `outer` function) to an argument passed to it.
- **Challenge**: Demonstrate how closures allow the inner function to remember the value of the outer function’s variable even after `outer` has finished execution.

---

## Bonus Tasks

### Task 11: Factorial Function with Recursion (Edge Case Handling)

- Write a function that calculates the factorial of a number using recursion.
- **Challenge**: Add error handling for invalid inputs (like negative numbers or non-numeric values).

### Task 12: Higher-Order Functions (without Callbacks)

- Write a higher-order function `multiplyAll` that accepts an array of numbers and a multiplier. The function should return a new array where each element is multiplied by the given multiplier.

- **Example:**

```js
multiplyAll([1, 2, 3], 2); // Should return [2, 4, 6]
```

- **Bonus**: Write a higher-order function sumAll that accepts an array of numbers. The function should return the sum of all the numbers in the array.
