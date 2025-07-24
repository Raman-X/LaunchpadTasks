// Task 8: Function with Multiple Parameters & Default Parameters

function printGreeting(greeting = "Hello", times = 3) {
  //bonus validation for positive times
  if (times < 0) {
    times = 0;
  }
  for (let i = 0; i < times; i++) {
    console.log(greeting);
  }
}
printGreeting("Hi", 2);
printGreeting();
