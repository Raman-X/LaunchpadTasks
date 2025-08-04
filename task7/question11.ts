// Parent class
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat(): void {
    console.log(`${this.name} is eating.`);
  }
}

// Child class
class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name); // Call parent constructor
    this.breed = breed;
  }

  bark(): void {
    console.log(`${this.name} says: Woof!`);
  }
}

// Example usage:
const dog2 = new Dog("Charlie", "Beagle");
dog2.eat(); // Charlie is eating.
dog2.bark(); // Charlie says: Woof!
