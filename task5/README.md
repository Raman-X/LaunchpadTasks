# JavaScript Assignment Solutions

This document provides explanations and solutions for the given JavaScript assignments.

---

## Question 1: What will this code log? Explain your reasoning.

```javascript
const person = {
  name: "Alice",
  sayHi: function () {
    console.log(`Hi, my name is ${this.name}.`);
  },
};
person.sayHi();
```

**Output:**
Hi, my name is Alice.

**Reasoning:**

When `person.sayHi()` is called, the `sayHi` method is invoked directly on the `person` object. In JavaScript, the value of `this` inside a method depends on how the method is called. In this case, `this` is bound to the `person` object itself. Therefore, `this.name` correctly refers to `person.name`, which is 'Alice'.

---

## Question 2: What is logged to the console, and why? How would you fix it so it logs "Alice"?

```javascript
const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};
const greetFunction = person.greet;
greetFunction();
```

**Output:**
Hello, undefined

**Reasoning:**
when person.greet is extracted to a variable, it is no longer bound to the person object. Therefore, this.name will be undefined.

To fix this, we can bind the function:

```javascript
const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};
const greetFunction = person.greet.bind(person);
greetFunction();
```

**Output:**
Hello, Alice

---

## Question 3: What will this code log?

```javascript
const user = {
  name: "Bob",
  logName: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 100);
  },
};
user.logName();
```

**Output:**
Bob

**Reasoning:**

The `logName` method is called immediately, and the `setTimeout` function is executed after 100 milliseconds. Therefore, the `console.log` statement will be executed after 100 milliseconds, and the output will be "Bob".

---

## Question 4: You have a User object with a method that logs a welcome message. There's also a "Login" button in your HTML. You want the welcome method to be called when the button is clicked, and the message should use the User object's data.

```javascript
const User = {
  name: "Alice",
  welcome: function () {
    console.log(`Welcome, ${this.name}!`);
  },
};
//Hint: DOM APIs can be used
```

**Output:**

```html
<button id="login">Login</button>

<script>
  const User = {
    name: "Alice",
    welcome: function () {
      console.log(`Welcome, ${this.name}!`);
    },
  };

  // Use querySelector to select the button
  document
    .querySelector("#login")
    .addEventListener("click", User.welcome.bind(User));
</script>
```

## Question 5: What will this code log? Explain your reasoning.

```javascript
let animal = "Cat";
function showAnimal() {
  let animal = "Dog";
  console.log(animal);
}
showAnimal();
console.log(animal);
```

**Output:**
Dog  
Cat

**Reasoning:**

When `showAnimal()` is called, the `animal` variable is set to "Dog". However, when `console.log(animal)` is called, it still refers to the original value of "Cat".

## Question 6: What will this code log?

```javascript
function test() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
test();
```

**Output:**
undefined  
2

**Reasoning:**
Only the declaration of var a is hoisted and not the assignment of value soo console.log(a) will log undefined. The function foo() is also hoisted and returns 2 normally.

## Question 7: What will this code log?

```javascript
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 10);
}
```

**Output:**  
5  
5  
5  
5  
5

**Reasoning:**
The for loop will execute 5 times and when the setTimeout function is called, the value of i will be 5 and the loop will have finished.

## Question 8: What will the following code log to the console on the last two lines? Explain why the count variable is not reset.

```javascript
function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const counter = createCounter();
counter();
counter();
```

**Output:**  
1  
2

**Reasoning:**
The count variable is not reset because the function is only executed once. The function is executed when the counter() function is called, and the count variable is incremented by 1 each time the function is called.

## Question 9: What will this code log?

```javascript
const myObject = {
  id: "my-object",
  createLogger: function () {
    return () => {
      console.log(`Logger for ${this.id}`);
    };
  },
};
const logger = myObject.createLogger();
logger();
```

**Output:**
Logger for my-object

**Reasoning:**

The `createLogger` method is called on the `myObject` object, and the returned function is assigned to the `logger` variable. When `logger` is called, it logs the message "Logger for my-object" to the console.

## Question 10: Write a function makeAdder(x) that takes a number x and returns a new function. The new function should take a number y and return the sum x + y. Use a closure to achieve this.

**Answer:**

```javascript
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

let add = makeAdder(5);
console.log(add(2));
//Answer: 7
```

## Question 11: Implement a parent Animal and a child Dog relationship in two different ways:

### - Using the Constructor/Prototype pattern.

### - Using the ES6 class syntax.

#### Your solution must satisfy two conditions for both patterns:The Animal must have an eat() method that the Dog inherits. The Dog must also have its own bark() method.

**Answer:**

- Using the Constructor/Prototype pattern:

```javascript
// Parent constructor
function Animal(name) {
  this.name = name;
}

// Add eat() method to Animal prototype
Animal.prototype.eat = function () {
  console.log(this.name + " is eating.");
};

// Child constructor
function Dog(name, breed) {
  // Call the parent constructor
  Animal.call(this, name);
  this.breed = breed;
}

// Inherit from Animal's prototype
Dog.prototype = Object.create(Animal.prototype);
// Reset the constructor pointer
Dog.prototype.constructor = Dog;

// Add bark() method to Dog prototype
Dog.prototype.bark = function () {
  console.log(this.name + " says: Woof!");
};

// Example usage:
const dog1 = new Dog("Buddy", "Golden Retriever");
dog1.eat(); // Buddy is eating.
dog1.bark(); // Buddy says: Woof!
```

- Using the ES6 class syntax:

```javascript
// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

// Child class
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} says: Woof!`);
  }
}

// Example usage:
const dog2 = new Dog("Charlie", "Beagle");
dog2.eat(); // Charlie is eating.
dog2.bark(); // Charlie says: Woof!
```
